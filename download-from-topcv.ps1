# Script to download missing images from TopCV website

# Base URL for TopCV images
$baseUrl = "https://tuyendung.topcv.vn"

# Create directories if they don't exist
$directories = @(
    "public/images/about",
    "public/images/feature", 
    "public/images/icon",
    "public/images/partner",
    "public/images/service"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
        Write-Host "Created directory: $dir"
    }
}

# Define images to download with their actual URLs from TopCV
$images = @{
    # About images
    "public/images/about/about-mobile.png" = "https://tuyendung.topcv.vn/app/assets/images/about/about-mobile.png"
    "public/images/about/startup.png" = "https://tuyendung.topcv.vn/app/assets/images/about/startup.png"
    "public/images/about/technology-product.png" = "https://tuyendung.topcv.vn/app/assets/images/about/technology-product.png"
    "public/images/about/top-10.png" = "https://tuyendung.topcv.vn/app/assets/images/about/top-10.png"
    "public/images/about/top-100.png" = "https://tuyendung.topcv.vn/app/assets/images/about/top-100.png"
    
    # Feature images
    "public/images/feature/cvs-management.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/cvs-management.png"
    "public/images/feature/header_campaign.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/header_campaign.png"
    "public/images/feature/report-system.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/report-system.png"
    "public/images/feature/service.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/service.png"
    "public/images/feature/suggestion.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/suggestion.png"
    "public/images/feature/testcenter-on-phone.png" = "https://tuyendung.topcv.vn/app/assets/images/feature/testcenter-on-phone.png"
    
    # Service images  
    "public/images/service/consultant-person.png" = "https://tuyendung.topcv.vn/app/assets/images/service/consultant-person.png"
    "public/images/service/001.png" = "https://tuyendung.topcv.vn/app/assets/images/service/001.png"
    "public/images/service/1.png" = "https://tuyendung.topcv.vn/app/assets/images/service/1.png"
    "public/images/service/17732.png" = "https://tuyendung.topcv.vn/app/assets/images/service/17732.png"
    "public/images/service/92836.png" = "https://tuyendung.topcv.vn/app/assets/images/service/92836.png"
    "public/images/service/ThanhMinh.png" = "https://tuyendung.topcv.vn/app/assets/images/service/ThanhMinh.png"
    "public/images/service/iMac Pro Front View Mockup.png" = "https://tuyendung.topcv.vn/app/assets/images/service/iMac-Pro-Front-View-Mockup.png"
    "public/images/service/Macbook Pro Flying Mockup.png" = "https://tuyendung.topcv.vn/app/assets/images/service/Macbook-Pro-Flying-Mockup.png"
    
    # Partner logos
    "public/images/partner/cafebiz.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/cafebiz.png"
    "public/images/partner/edupia.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/edupia.png"
    "public/images/partner/fpt-software.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/fpt-software.png"
    "public/images/partner/genk.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/genk.png"
    "public/images/partner/shinhan-bank.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/shinhan-bank.png"
    "public/images/partner/techcombank.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/techcombank.png"
    "public/images/partner/teky.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/teky.png"
    "public/images/partner/viettel.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/viettel.png"
    "public/images/partner/vtc10.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/vtc10.png"
    "public/images/partner/vtv1.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/vtv1.png"
    "public/images/partner/vtv2.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/vtv2.png"
    "public/images/partner/vtv6.png" = "https://tuyendung.topcv.vn/app/assets/images/partner/vtv6.png"
    
    # Background images
    "public/images/bg-big-update.png" = "https://tuyendung.topcv.vn/app/assets/images/bg-big-update.png"
    "public/images/bg-consult.png" = "https://tuyendung.topcv.vn/app/assets/images/bg-consult.png"
    "public/images/fixed_landing_header_campaign.png" = "https://tuyendung.topcv.vn/app/assets/images/fixed_landing_header_campaign.png"
    "public/images/landing_background_header.png" = "https://tuyendung.topcv.vn/app/assets/images/landing_background_header.png"
    "public/images/mobile_hero.png" = "https://tuyendung.topcv.vn/app/assets/images/mobile_hero.png"
    "public/images/new-feed.png" = "https://tuyendung.topcv.vn/app/assets/images/new-feed.png"
    
    # App store images
    "public/images/appstore.jpg" = "https://tuyendung.topcv.vn/app/assets/images/appstore.jpg"
    "public/images/googleplay.jpg" = "https://tuyendung.topcv.vn/app/assets/images/googleplay.jpg"
    
    # Logo images
    "public/images/topcv-logo.png" = "https://tuyendung.topcv.vn/app/assets/images/topcv-logo.png"
    "public/images/topcv-logo-new.png" = "https://tuyendung.topcv.vn/app/assets/images/topcv-logo-new.png"
    "public/images/flag-vn.svg" = "https://tuyendung.topcv.vn/app/assets/images/flag-vn.svg"
}

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        # Check if file already exists
        if (Test-Path $OutputPath) {
            Write-Host "File already exists: $OutputPath" -ForegroundColor Yellow
            return
        }
        
        Write-Host "Downloading: $Url -> $OutputPath" -ForegroundColor Green
        
        # Use Invoke-WebRequest to download the image
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -ErrorAction Stop
        
        Write-Host "Successfully downloaded: $OutputPath" -ForegroundColor Green
        
    } catch {
        Write-Host "Failed to download $Url : $($_.Exception.Message)" -ForegroundColor Red
        
        # Try alternative URLs or create placeholder
        $fileName = Split-Path $OutputPath -Leaf
        $extension = [System.IO.Path]::GetExtension($fileName)
        
        # For important images, try alternative paths
        if ($fileName -eq "consultant-person.png") {
            $alternativeUrls = @(
                "https://tuyendung.topcv.vn/images/consultant-person.png",
                "https://tuyendung.topcv.vn/assets/images/consultant-person.png",
                "https://static.topcv.vn/v4/image/service/consultant-person.png"
            )
            
            foreach ($altUrl in $alternativeUrls) {
                try {
                    Write-Host "Trying alternative URL: $altUrl" -ForegroundColor Cyan
                    Invoke-WebRequest -Uri $altUrl -OutFile $OutputPath -ErrorAction Stop
                    Write-Host "Successfully downloaded from alternative URL: $OutputPath" -ForegroundColor Green
                    return
                } catch {
                    Write-Host "Alternative URL failed: $altUrl" -ForegroundColor Red
                }
            }
        }
        
        # Create a simple placeholder file for missing images
        Write-Host "Creating placeholder for: $OutputPath" -ForegroundColor Magenta
        if ($extension -eq ".svg") {
            $placeholderContent = @"
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" fill="#e5e7eb"/>
  <text x="100" y="50" font-family="Arial" font-size="12" fill="#6b7280" text-anchor="middle" dy=".3em">$fileName</text>
</svg>
"@
            $placeholderContent | Out-File -FilePath $OutputPath -Encoding UTF8
        }
    }
}

# Download all images
Write-Host "Starting image download from TopCV website..." -ForegroundColor Cyan
Write-Host "Total images to download: $($images.Count)" -ForegroundColor Cyan

$successCount = 0
$failCount = 0

foreach ($image in $images.GetEnumerator()) {
    Download-Image -Url $image.Value -OutputPath $image.Key
    
    if (Test-Path $image.Key) {
        $successCount++
    } else {
        $failCount++
    }
    
    Start-Sleep -Milliseconds 100  # Small delay to avoid overwhelming the server
}

Write-Host "`nDownload Summary:" -ForegroundColor Cyan
Write-Host "Successfully downloaded: $successCount images" -ForegroundColor Green
Write-Host "Failed downloads: $failCount images" -ForegroundColor Red
Write-Host "Download completed!" -ForegroundColor Cyan
