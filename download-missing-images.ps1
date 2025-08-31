# Script to download missing images from static.topcv.vn

# Define missing images with their real URLs from static.topcv.vn
$missingImages = @{
    "public/images/partner/viettel.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/viettel.png"
    "public/images/partner/techcombank.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/Techcombank_logo.png"
    "public/images/partner/genk.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/genk.png"
    "public/images/partner/cafebiz.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/cafebiz.png"
    "public/images/partner/vtc10.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/vtc10.png"
    "public/images/partner/vtv1.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv1.png"
    "public/images/partner/vtv2.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv2.png"
    "public/images/partner/vtv6.png" = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv6.png"
}

# Also try press logos from static domain
$pressImages = @{
    "public/images/press/vtv.svg" = "https://static.topcv.vn/srp/website/images/press/vtv.svg"
    "public/images/press/vnexpress.svg" = "https://static.topcv.vn/srp/website/images/press/vnexpress.svg"
    "public/images/press/cafef.svg" = "https://static.topcv.vn/srp/website/images/press/cafef.svg"
    "public/images/press/genk.svg" = "https://static.topcv.vn/srp/website/images/press/genk.svg"
    "public/images/press/cafebiz.svg" = "https://static.topcv.vn/srp/website/images/press/cafebiz.svg"
    "public/images/press/baodautu.svg" = "https://static.topcv.vn/srp/website/images/press/baodautu.svg"
}

# Function to download image with error handling
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        Write-Host "Downloading: $Url -> $OutputPath" -ForegroundColor Green
        
        # Use Invoke-WebRequest to download the image
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -ErrorAction Stop
        
        Write-Host "Successfully downloaded: $OutputPath" -ForegroundColor Green
        return $true
        
    } catch {
        Write-Host "Failed to download $Url : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Download missing partner images
Write-Host "Downloading missing partner images..." -ForegroundColor Cyan
$partnerSuccess = 0
$partnerTotal = $missingImages.Count

foreach ($image in $missingImages.GetEnumerator()) {
    if (Download-Image -Url $image.Value -OutputPath $image.Key) {
        $partnerSuccess++
    }
    Start-Sleep -Milliseconds 200
}

Write-Host "Partner images: $partnerSuccess/$partnerTotal downloaded successfully" -ForegroundColor Yellow

# Download press images
Write-Host "`nDownloading press images..." -ForegroundColor Cyan
$pressSuccess = 0
$pressTotal = $pressImages.Count

foreach ($image in $pressImages.GetEnumerator()) {
    if (Download-Image -Url $image.Value -OutputPath $image.Key) {
        $pressSuccess++
    }
    Start-Sleep -Milliseconds 200
}

Write-Host "Press images: $pressSuccess/$pressTotal downloaded successfully" -ForegroundColor Yellow

Write-Host "`nDownload completed!" -ForegroundColor Cyan
Write-Host "Total success: $($partnerSuccess + $pressSuccess)/$($partnerTotal + $pressTotal)" -ForegroundColor Green
