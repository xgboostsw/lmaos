'use client';

import Link from 'next/link';
import { FileText, ExternalLink, Info } from 'lucide-react';

// Function to open notebook in Colab
function openInColab(notebookName: string) {
  // GitHub repository configuration
  const GITHUB_USERNAME = 'powershel12';
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
          <h1 className="text-3xl font-bold mb-2">Welcome to Google Colab</h1>
          <p className="text-sm text-muted-foreground">Recent Notebooks</p>
        </div>

        {/* Notebook list */}
        <div className="space-y-1">
          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 02 - Linear Regression</h3>
              <p className="text-xs text-muted-foreground truncate">Humidity vs Temperature Prediction</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-02"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-02')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 03 - Logistic Regression</h3>
              <p className="text-xs text-muted-foreground truncate">Iris Classification (Setosa vs Others)</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-03"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-03')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 04 - Naive Bayes</h3>
              <p className="text-xs text-muted-foreground truncate">Play Prediction from Weather Data</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-04"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-04')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 05 - SVM</h3>
              <p className="text-xs text-muted-foreground truncate">Breast Cancer Classification (Linear vs RBF)</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-05"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-05')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 06 - Decision Trees</h3>
              <p className="text-xs text-muted-foreground truncate">Decision Tree & Random Forest on Iris</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-06"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-06')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 07 - KNN</h3>
              <p className="text-xs text-muted-foreground truncate">K-Nearest Neighbors on Digits Dataset</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-07"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-07')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 08 - K-Means</h3>
              <p className="text-xs text-muted-foreground truncate">K-Means Clustering on Iris Dataset</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-08"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-08')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 09 - PCA</h3>
              <p className="text-xs text-muted-foreground truncate">PCA Visualization on Iris Dataset</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-09"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-09')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 px-4 py-3 hover:bg-accent rounded-lg transition-colors group">
            <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">Lab 10 - Ensemble Methods</h3>
              <p className="text-xs text-muted-foreground truncate">AdaBoost & XGBoost on Breast Cancer</p>
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/lab-10"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <Info className="w-3 h-3" />
                Show details
              </Link>
              <button 
                onClick={() => openInColab('lab-10')}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
