# Notebook Downloader

## Zero Dependencies - Just curl/bash/PowerShell

### Linux/Mac (Bash)

**Option 1: Run directly**
```bash
curl -sL https://lmaos.netlify.com/download.sh | bash
```

**Option 2: Download first, then run**
```bash
curl -o download.sh https://lmaos.netlify.com/download.sh
chmod +x download.sh
./download.sh
```

### Windows (PowerShell)

**Option 1: Run directly**
```powershell
iwr -useb https://lmaos.netlify.com/download.ps1 | iex
```

**Option 2: Download first, then run**
```powershell
Invoke-WebRequest -Uri https://lmaos.netlify.com/download.ps1 -OutFile download.ps1
powershell -File download.ps1
```

### Direct notebook download (all platforms)

```bash
# Linux/Mac
curl -o lab-02.ipynb https://lmaos.netlify.com/notebooks/lab-02.ipynb

# Windows PowerShell
Invoke-WebRequest -Uri https://lmaos.netlify.com/notebooks/lab-02.ipynb -OutFile lab-02.ipynb
```

## Local Usage (with npm - for development)

```bash
npm run download
```

## Available Notebooks

1. 02 - Simple, multivariate and polynomial linear regression models
2. 03 - Iris Logistic Regression using sklearn python library
3. 04 - Build a naïve Bayes classifier using supervised dataset
4. 05 - To understand the Support Vector Machine (SVM) algorithm
5. 06 - Construct Decision Tree and Random Forest models for Iris Flower Classification
6. 07 - KNN on Digits
7. 08 - Perform K-Means clustering for customer segmentation
8. 09 - PCA on Iris
9. 10 - AdaBoost & XGBoost (Breast Cancer)

## Notes

- The standalone script (`download.js`) is located in the `public` folder and will be accessible once deployed
- Update the `GITHUB_RAW_BASE` URL in `public/download.js` after deploying to production
- For local development, use `npm run download`
