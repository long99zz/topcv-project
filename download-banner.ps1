# Script to download the consultation banner image

$bannerUrl = "https://tuyendung.topcv.vn/images/introduction/bg-consult.png"
$outputPath = "public/images/bg-consult.png"

Write-Host "Downloading consultation banner..." -ForegroundColor Cyan

try {
    # Download the banner image
    Invoke-WebRequest -Uri $bannerUrl -OutFile $outputPath -ErrorAction Stop
    Write-Host "Successfully downloaded: $outputPath" -ForegroundColor Green
} catch {
    Write-Host "Failed to download from primary URL: $($_.Exception.Message)" -ForegroundColor Red
    
    # Try alternative URLs
    $alternativeUrls = @(
        "https://static.topcv.vn/images/introduction/bg-consult.png",
        "https://tuyendung.topcv.vn/app/assets/images/introduction/bg-consult.png"
    )
    
    foreach ($altUrl in $alternativeUrls) {
        try {
            Write-Host "Trying alternative URL: $altUrl" -ForegroundColor Yellow
            Invoke-WebRequest -Uri $altUrl -OutFile $outputPath -ErrorAction Stop
            Write-Host "Successfully downloaded from alternative URL: $outputPath" -ForegroundColor Green
            break
        } catch {
            Write-Host "Failed: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

if (Test-Path $outputPath) {
    $fileInfo = Get-Item $outputPath
    Write-Host "Banner downloaded successfully!" -ForegroundColor Green
    Write-Host "File size: $([math]::Round($fileInfo.Length / 1KB, 2)) KB" -ForegroundColor Yellow
} else {
    Write-Host "Banner download failed from all sources" -ForegroundColor Red
}
