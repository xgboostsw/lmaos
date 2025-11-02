#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const notebooksDir = path.join(__dirname, '..', 'public', 'notebooks');
const docsDir = path.join(__dirname, '..', 'content', 'docs');
const outputDir = path.join(process.cwd(), 'downloaded-notebooks');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Extract title from MDX file
function getTitleFromMdx(labNumber) {
  try {
    const mdxPath = path.join(docsDir, `lab-${labNumber}.mdx`);
    const content = fs.readFileSync(mdxPath, 'utf-8');
    // Match title in frontmatter, handling optional quotes
    const match = content.match(/title:\s*(.+)/);
    if (match) {
      return match[1].trim().replace(/^["']|["']$/g, '');
    }
    return `Lab ${labNumber}`;
  } catch (error) {
    return `Lab ${labNumber}`;
  }
}

// Get all notebook files with titles
function getNotebooks() {
  try {
    const files = fs.readdirSync(notebooksDir);
    const notebooks = files.filter(file => file.endsWith('.ipynb'));
    
    return notebooks.map(filename => {
      const labNumber = filename.match(/lab-(\d+)/)?.[1];
      const title = labNumber ? getTitleFromMdx(labNumber) : filename;
      return { filename, title };
    });
  } catch (error) {
    console.error('Error reading notebooks directory:', error.message);
    process.exit(1);
  }
}

// Display menu
function displayMenu(notebooks) {
  console.log('\n📓 Available Notebooks:\n');
  notebooks.forEach((notebook, index) => {
    console.log(`  ${index + 1}. ${notebook.title}`);
  });
  console.log(`  ${notebooks.length + 1}. Download All`);
  console.log('  0. Exit\n');
}

// Download notebook
function downloadNotebook(notebook, destination) {
  const sourcePath = path.join(notebooksDir, notebook.filename);
  const destPath = path.join(destination, notebook.filename);

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    // Copy file
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Downloaded: ${notebook.title}`);
    console.log(`   -> ${destPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error downloading ${notebook.filename}:`, error.message);
    return false;
  }
}

// Download all notebooks
function downloadAll(notebooks, destination) {
  console.log('\nDownloading all notebooks...\n');
  let successCount = 0;
  
  notebooks.forEach(notebook => {
    if (downloadNotebook(notebook, destination)) {
      successCount++;
    }
  });

  console.log(`\n✓ Downloaded ${successCount}/${notebooks.length} notebooks to: ${destination}`);
}

// Main function
function main() {
  const notebooks = getNotebooks();

  if (notebooks.length === 0) {
    console.log('No notebooks found in public/notebooks directory.');
    process.exit(0);
  }

  displayMenu(notebooks);

  rl.question('Enter your choice: ', (answer) => {
    const choice = parseInt(answer);

    if (choice === 0) {
      console.log('Goodbye! 👋');
      rl.close();
      process.exit(0);
    } else if (choice === notebooks.length + 1) {
      // Download all
      downloadAll(notebooks, outputDir);
      rl.close();
    } else if (choice > 0 && choice <= notebooks.length) {
      // Download single notebook
      const selectedNotebook = notebooks[choice - 1];
      downloadNotebook(selectedNotebook, outputDir);
      rl.close();
    } else {
      console.log('Invalid choice. Please try again.');
      rl.close();
      process.exit(1);
    }
  });
}

// Run the script
main();
