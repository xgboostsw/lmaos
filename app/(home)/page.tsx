'use client';

import Link from 'next/link';
import { FileText, ExternalLink, Info } from 'lucide-react';

// Function to open notebook in Colab
function openInColab(notebookName: string) {
  // GitHub repository configuration
  const GITHUB_USERNAME = 'xgboostsw';
  const GITHUB_REPO = 'lmaos';
  const GITHUB_BRANCH = 'main'; // or 'master' - check your default branch
  
  // Construct the Colab URL with GitHub path
  const colabUrl = `https://colab.research.google.com/github/${GITHUB_USERNAME}/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/public/notebooks/${notebookName}.ipynb`;
  
  // Open in new tab
  window.open(colabUrl, '_blank');
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Colab</h1>
          <p className="text-sm text-muted-foreground">Recent Notebooks</p>
        </div>

        {/* FE Category */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 px-4">Feature Engineering</h2>
          <div className="space-y-1">
            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 01 - Data Exploration with Iris Dataset</h3>
                <p className="text-xs text-muted-foreground truncate">Basic data exploration techniques using pandas</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-01"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 02 - Data Visualization and Cleaning</h3>
                <p className="text-xs text-muted-foreground truncate">Correlation heatmaps, handling missing values</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-02"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 03 - Categorical Encoding Comparison</h3>
                <p className="text-xs text-muted-foreground truncate">Label Encoding vs One-Hot Encoding on Titanic</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-03"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 04 - Min-Max Scaling Impact</h3>
                <p className="text-xs text-muted-foreground truncate">Impact of Min-Max scaling on Logistic Regression & KNN</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-04"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 05 - Standardization Impact on Convergence</h3>
                <p className="text-xs text-muted-foreground truncate">Comparing Logistic Regression with/without standardization</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-05"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 06 - Binning and Discretization</h3>
                <p className="text-xs text-muted-foreground truncate">Quantization and binning techniques for continuous features</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-06"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 07 - Bag of Words (BoW)</h3>
                <p className="text-xs text-muted-foreground truncate">Implementing BoW text vectorization from scratch</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-07"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 08 - Bag of Words Implementation</h3>
                <p className="text-xs text-muted-foreground truncate">Alternative BoW text vectorization approach</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-08"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 09 - TF-IDF Vectorization</h3>
                <p className="text-xs text-muted-foreground truncate">Term Frequency-Inverse Document Frequency</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-09"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium">Lab 10 - Feature Selection Techniques</h3>
                <p className="text-xs text-muted-foreground truncate">Variance Threshold, Information Gain, Chi-Square</p>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="/docs/fe-lab-10"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
                >
                  <Info className="w-3 h-3" />
                  Show details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
