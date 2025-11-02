# Notebook Downloader - PowerShell Version (Zero Dependencies)
# Usage: iwr -useb https://lmaos.netlify.app/download.ps1 | iex
# Or: powershell -File download.ps1

# Configuration
$BaseUrl = if ($env:NOTEBOOKS_URL) { $env:NOTEBOOKS_URL } else { "https://lmaos.netlify.app/notebooks" }

# Prefer the user's Downloads folder so running the script via the one-liner
# (e.g. `iwr -useb ... | iex`) doesn't save files into a transient working
# directory. Falls back to a local `downloaded-notebooks` folder if $env:USERPROFILE
# isn't available.
if ($env:USERPROFILE) {
    # Save directly into the user's Downloads folder (no subfolder fallback)
    $OutputDir = Join-Path $env:USERPROFILE 'Downloads'
} else {
    Write-Host "ERROR: Cannot determine user Downloads folder because USERPROFILE is not set." -ForegroundColor Red
    exit 1
}

# Notebook list with titles
$Notebooks = @(
    @{ File = "lab-02.ipynb"; Title = "02 - Simple, multivariate and polynomial linear regression models" }
    @{ File = "lab-03.ipynb"; Title = "03 - Iris Logistic Regression using sklearn python library" }
    @{ File = "lab-04.ipynb"; Title = "04 - Build a naïve Bayes classifier using supervised dataset" }
    @{ File = "lab-05.ipynb"; Title = "05 - To understand the Support Vector Machine (SVM) algorithm" }
    @{ File = "lab-06.ipynb"; Title = "06 - Construct Decision Tree and Random Forest models for Iris Flower Classification" }
    @{ File = "lab-07.ipynb"; Title = "07 - KNN on Digits" }
    @{ File = "lab-08.ipynb"; Title = "08 - Perform K-Means clustering for customer segmentation" }
    @{ File = "lab-09.ipynb"; Title = "09 - PCA on Iris" }
    @{ File = "lab-10.ipynb"; Title = "10 - AdaBoost & XGBoost (Breast Cancer)" }
)

# Display menu
function Show-Menu {
    Write-Host ""
    Write-Host "📓 Available Notebooks:" -ForegroundColor Cyan
    Write-Host ""
    
    for ($i = 0; $i -lt $Notebooks.Count; $i++) {
        Write-Host "  $($i + 1). $($Notebooks[$i].Title)"
    }
    
    Write-Host "  $($Notebooks.Count + 1). Download All"
    Write-Host "  0. Exit"
    Write-Host ""
}

# Download notebook
function Download-Notebook {
    param(
        [string]$FileName,
        [string]$Title
    )
    
    $OutputPath = Join-Path $OutputDir $FileName
    
    try {
        # Create output directory if it doesn't exist
        if (-not (Test-Path $OutputDir)) {
            New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
        }
        
        # Download file
        $Url = "$BaseUrl/$FileName"
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -UseBasicParsing
        
        Write-Host "✓ Downloaded: $Title" -ForegroundColor Green
        Write-Host "   -> $OutputPath" -ForegroundColor Gray
        return $true
    }
    catch {
        Write-Host "✗ Error downloading: $Title" -ForegroundColor Red
        Write-Host "   $($_.Exception.Message)" -ForegroundColor Gray
        return $false
    }
}

# Download all notebooks
function Download-All {
    Write-Host ""
    Write-Host "Downloading all notebooks..." -ForegroundColor Cyan
    Write-Host ""
    
    $SuccessCount = 0
    
    foreach ($notebook in $Notebooks) {
        if (Download-Notebook -FileName $notebook.File -Title $notebook.Title) {
            $SuccessCount++
        }
    }
    
    Write-Host ""
    Write-Host "✓ Downloaded $SuccessCount/$($Notebooks.Count) notebooks to: $OutputDir" -ForegroundColor Green
}

# Main function
function Main {
    Show-Menu
    
    $Choice = Read-Host "Enter your choice"
    
    if ($Choice -eq "0") {
        Write-Host "Goodbye! 👋" -ForegroundColor Yellow
        exit 0
    }
    elseif ($Choice -eq ($Notebooks.Count + 1)) {
        Download-All
    }
    elseif ($Choice -ge 1 -and $Choice -le $Notebooks.Count) {
        $SelectedNotebook = $Notebooks[$Choice - 1]
        Write-Host ""
        Download-Notebook -FileName $SelectedNotebook.File -Title $SelectedNotebook.Title
    }
    else {
        Write-Host "Invalid choice. Please try again." -ForegroundColor Red
        exit 1
    }
}

# Run main function
Main
