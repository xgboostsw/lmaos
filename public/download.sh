#!/bin/bash

# Notebook Downloader - Zero Dependencies
# Usage: curl -sL https://lmaos.vercel.app/download.sh | bash
# Or: bash download.sh

# Configuration
BASE_URL="${NOTEBOOKS_URL:-https://lmaos.vercel.app/notebooks}"
OUTPUT_DIR="downloaded-notebooks"

# Notebook list with titles
declare -a NOTEBOOKS=(
  "lab-02.ipynb|02 - Simple, multivariate and polynomial linear regression models"
  "lab-03.ipynb|03 - Iris Logistic Regression using sklearn python library"
  "lab-04.ipynb|04 - Build a naïve Bayes classifier using supervised dataset"
  "lab-05.ipynb|05 - To understand the Support Vector Machine (SVM) algorithm"
  "lab-06.ipynb|06 - Construct Decision Tree and Random Forest models for Iris Flower Classification"
  "lab-07.ipynb|07 - KNN on Digits"
  "lab-08.ipynb|08 - Perform K-Means clustering for customer segmentation"
  "lab-09.ipynb|09 - PCA on Iris"
  "lab-10.ipynb|10 - AdaBoost & XGBoost (Breast Cancer)"
)

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Display menu
display_menu() {
  echo ""
  echo "📓 Available Notebooks:"
  echo ""
  
  local index=1
  for notebook in "${NOTEBOOKS[@]}"; do
    IFS='|' read -r filename title <<< "$notebook"
    echo "  $index. $title"
    ((index++))
  done
  
  echo "  $index. Download All"
  echo "  0. Exit"
  echo ""
}

# Download notebook
download_notebook() {
  local filename=$1
  local title=$2
  local output_path="$OUTPUT_DIR/$filename"
  
  # Create output directory if it doesn't exist
  mkdir -p "$OUTPUT_DIR"
  
  # Download file
  if curl -sL -o "$output_path" "$BASE_URL/$filename" 2>/dev/null; then
    if [ -f "$output_path" ] && [ -s "$output_path" ]; then
      echo -e "${GREEN}✓${NC} Downloaded: $title"
      echo "   -> $output_path"
      return 0
    fi
  fi
  
  echo -e "${RED}✗${NC} Error downloading: $title"
  return 1
}

# Download all notebooks
download_all() {
  echo ""
  echo "Downloading all notebooks..."
  echo ""
  
  local success_count=0
  local total=${#NOTEBOOKS[@]}
  
  for notebook in "${NOTEBOOKS[@]}"; do
    IFS='|' read -r filename title <<< "$notebook"
    if download_notebook "$filename" "$title"; then
      ((success_count++))
    fi
  done
  
  echo ""
  echo -e "${GREEN}✓${NC} Downloaded $success_count/$total notebooks to: $OUTPUT_DIR"
}

# Main function
main() {
  display_menu
  
  read -p "Enter your choice: " choice
  
  local total=${#NOTEBOOKS[@]}
  
  if [ "$choice" -eq 0 ]; then
    echo "Goodbye! 👋"
    exit 0
  elif [ "$choice" -eq $((total + 1)) ]; then
    download_all
  elif [ "$choice" -ge 1 ] && [ "$choice" -le "$total" ]; then
    local index=$((choice - 1))
    IFS='|' read -r filename title <<< "${NOTEBOOKS[$index]}"
    echo ""
    download_notebook "$filename" "$title"
  else
    echo "Invalid choice. Please try again."
    exit 1
  fi
}

# Run if executed directly
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
  main
fi
