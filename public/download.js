#!/usr/bin/env node

/**
 * Standalone Notebook Downloader
 * Can be downloaded and run with: curl -sL <url> | node
 * Or save locally: curl -o download.js <url> && node download.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const GITHUB_RAW_BASE = process.env.NOTEBOOKS_URL || 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/notebooks';
const LOCAL_MODE = process.argv.includes('--local');

// Notebook list with titles (update this when adding new notebooks)
const NOTEBOOKS = [
  { id: 'lab-02', title: '02 - Simple, multivariate and polynomial linear regression models' },
  { id: 'lab-03', title: '03 - Logistic Regression' },
  { id: 'lab-04', title: '04 - Naive Bayes' },
  { id: 'lab-05', title: '05 - SVM' },
  { id: 'lab-06', title: '06 - Decision Trees' },
  { id: 'lab-07', title: '07 - KNN' },
  { id: 'lab-08', title: '08 - K-Means' },
  { id: 'lab-09', title: '09 - PCA' },
  { id: 'lab-10', title: '10 - Ensemble Methods' }
];

// Display menu
function displayMenu() {
  console.log('\n📓 Available Notebooks:\n');
  NOTEBOOKS.forEach((notebook, index) => {
    console.log(`  ${index + 1}. ${notebook.title}`);
  });
  console.log(`  ${NOTEBOOKS.length + 1}. Download All`);
  console.log('  0. Exit\n');
}

// Download from URL
function downloadFromUrl(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Download from local (for development)
function downloadFromLocal(notebookId, outputPath) {
  const sourcePath = path.join(__dirname, '..', 'public', 'notebooks', `${notebookId}.ipynb`);
  fs.copyFileSync(sourcePath, outputPath);
}

// Download notebook
async function downloadNotebook(notebook, outputDir) {
  const filename = `${notebook.id}.ipynb`;
  const outputPath = path.join(outputDir, filename);

  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (LOCAL_MODE) {
      downloadFromLocal(notebook.id, outputPath);
    } else {
      const url = `${GITHUB_RAW_BASE}/${filename}`;
      await downloadFromUrl(url, outputPath);
    }

    console.log(`✓ Downloaded: ${notebook.title}`);
    console.log(`   -> ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error downloading ${notebook.title}:`, error.message);
    return false;
  }
}

// Download all notebooks
async function downloadAll(outputDir) {
  console.log('\nDownloading all notebooks...\n');
  let successCount = 0;

  for (const notebook of NOTEBOOKS) {
    if (await downloadNotebook(notebook, outputDir)) {
      successCount++;
    }
  }

  console.log(`\n✓ Downloaded ${successCount}/${NOTEBOOKS.length} notebooks to: ${outputDir}`);
}

// Get user input
function getUserInput(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(question, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
}

// Main function
async function main() {
  const outputDir = path.join(process.cwd(), 'downloaded-notebooks');

  displayMenu();

  const answer = await getUserInput('Enter your choice: ');
  const choice = parseInt(answer);

  if (choice === 0) {
    console.log('Goodbye! 👋');
    process.exit(0);
  } else if (choice === NOTEBOOKS.length + 1) {
    await downloadAll(outputDir);
  } else if (choice > 0 && choice <= NOTEBOOKS.length) {
    const selectedNotebook = NOTEBOOKS[choice - 1];
    await downloadNotebook(selectedNotebook, outputDir);
  } else {
    console.log('Invalid choice. Please try again.');
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}
