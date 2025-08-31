# Script tự động tải ảnh từ TopCV
# Chạy script này bằng PowerShell: .\download-images.ps1

# --- Script to download all necessary images for the topcv-web project ---

# Base directory for the project's public images
$baseDir = "e:\Project\topcv-web\public\images"

# Create necessary subdirectories if they don't exist
$subDirs = @("about", "partner", "service", "feature")
foreach ($subDir in $subDirs) {
    $dirPath = Join-Path -Path $baseDir -ChildPath $subDir
    if (-not (Test-Path -Path $dirPath)) {
        New-Item -ItemType Directory -Path $dirPath
        Write-Host "Created directory: $dirPath"
    }
}

# Danh sách ảnh cần tải
$images = @(
    @{ url = "https://tuyendung.topcv.vn/images/bg-consult.png"; path = "public\images\bg-consult.png" },
    @{ url = "https://tuyendung.topcv.vn/images/introduction/bg-big-update.png"; path = "public\images\bg-big-update.png" },
    @{ url = "https://tuyendung.topcv.vn/images/introduction/new-feed.png"; path = "public\images\new-feed.png" },
    @{ url = "https://tuyendung.topcv.vn/images/introduction/mobile_hero.png"; path = "public\images\mobile_hero.png" },
    
    # Feature images
    @{ url = "https://tuyendung.topcv.vn/images/feature/suggestion.png"; path = "public\images\feature\suggestion.png" },
    @{ url = "https://tuyendung.topcv.vn/images/feature/header_campaign.png"; path = "public\images\feature\header_campaign.png" },
    @{ url = "https://tuyendung.topcv.vn/images/feature/cvs-management.png"; path = "public\images\feature\cvs-management.png" },
    @{ url = "https://tuyendung.topcv.vn/images/feature/report-system.png"; path = "public\images\feature\report-system.png" },
    @{ url = "https://tuyendung.topcv.vn/images/feature/testcenter-on-phone.png"; path = "public\images\feature\testcenter-on-phone.png" },
    @{ url = "https://tuyendung.topcv.vn/images/feature/service.png"; path = "public\images\feature\service.png" },
    
    # Service images
    @{ url = "https://tuyendung.topcv.vn/images/service/1.png"; path = "public\images\service\1.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/001.png"; path = "public\images\service\001.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/ThanhMinh.png"; path = "public\images\service\ThanhMinh.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/iMac Pro Front View Mockup.png"; path = "public\images\service\iMac Pro Front View Mockup.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/Macbook Pro Flying Mockup.png"; path = "public\images\service\Macbook Pro Flying Mockup.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/17732.png"; path = "public\images\service\17732.png" },
    @{ url = "https://tuyendung.topcv.vn/images/service/92836.png"; path = "public\images\service\92836.png" },
    
    # About images
    @{ url = "https://tuyendung.topcv.vn/images/about/about-mobile.png"; path = "public\images\about\about-mobile.png" },
    @{ url = "https://tuyendung.topcv.vn/images/about/top-100.png"; path = "public\images\about\top-100.png" },
    @{ url = "https://tuyendung.topcv.vn/images/about/startup.png"; path = "public\images\about\startup.png" },
    @{ url = "https://tuyendung.topcv.vn/images/about/technology-product.png"; path = "public\images\about\technology-product.png" },
    @{ url = "https://tuyendung.topcv.vn/images/about/top-10.png"; path = "public\images\about\top-10.png" },
    
    # Partner logos
    @{ url = "https://tuyendung.topcv.vn/images/partner/fpt-software.png"; path = "public\images\partner\fpt-software.png" },
    @{ url = "https://tuyendung.topcv.vn/images/partner/edupia.png"; path = "public\images\partner\edupia.png" },
    @{ url = "https://tuyendung.topcv.vn/images/partner/teky.png"; path = "public\images\partner\teky.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/viettel.png"; path = "public\images\partner\viettel.png" },
    @{ url = "https://tuyendung.topcv.vn/images/partner/shinhan-bank.png"; path = "public\images\partner\shinhan-bank.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/Techcombank_logo.png"; path = "public\images\partner\techcombank.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/genk.png"; path = "public\images\partner\genk.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/cafebiz.png"; path = "public\images\partner\cafebiz.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/vtc10.png"; path = "public\images\partner\vtc10.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv2.png"; path = "public\images\partner\vtv2.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv1.png"; path = "public\images\partner\vtv1.png" },
    @{ url = "https://static.topcv.vn/srp/website/images/home_page/partners/vtv6.png"; path = "public\images\partner\vtv6.png" }
)

Write-Host "Starting image download..." -ForegroundColor Green

foreach ($image in $images) {
    $fullPath = Join-Path -Path $PSScriptRoot -ChildPath $image.path
    if (-not (Test-Path -Path $fullPath)) {
        try {
            Write-Host "Downloading: $($image.url)" -ForegroundColor Yellow
            Invoke-WebRequest -Uri $image.url -OutFile $fullPath -ErrorAction Stop
            Write-Host "Success: $($fullPath)" -ForegroundColor Green
        }
        catch {
            Write-Host "Error downloading: $($image.url)" -ForegroundColor Red
            Write-Host "  Reason: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "Skipping, already exists: $($fullPath)" -ForegroundColor Cyan
    }
}

Write-Host "---"
Write-Host "Download complete! Check the public/images/ directory." -ForegroundColor Green
