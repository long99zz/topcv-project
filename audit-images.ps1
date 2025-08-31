# Comprehensive image check and download script for TopCV project

Write-Host "=== TopCV Project Image Audit ===" -ForegroundColor Cyan
Write-Host "Checking all image references in the project..." -ForegroundColor Yellow

# List all image paths used in the project
$requiredImages = @(
    "public\images\topcv-logo.png",
    "public\images\topcv-logo-new.png", 
    "public\images\flag-vn.svg",
    "public\images\mobile_hero.png",
    "public\images\appstore.jpg",
    "public\images\googleplay.jpg",
    "public\images\bg-big-update.png",
    "public\images\new-feed.png",
    "public\images\landing_background_header.png",
    "public\images\fixed_landing_header_campaign.png",
    "public\images\service\consultant-person.png",
    "public\images\service\17732.png",
    "public\images\service\92836.png",
    "public\images\about\about-mobile.png",
    "public\images\partner\edupia.png",
    "public\images\partner\teky.png",
    "public\images\partner\shinhan-bank.png",
    "public\images\partner\viettel.png",
    "public\images\partner\techcombank.png",
    "public\images\partner\fpt-software.png",
    "public\images\partner\genk.png",
    "public\images\partner\vtc10.png",
    "public\images\partner\vtv1.png",
    "public\images\partner\cafebiz.png",
    "public\images\partner\vtv2.png",
    "public\images\partner\vtv6.png"
)

$missingImages = @()
$existingImages = @()

# Check each image
foreach ($imagePath in $requiredImages) {
    if (Test-Path $imagePath) {
        $fileSize = (Get-Item $imagePath).Length
        $existingImages += "$imagePath (${fileSize} bytes)"
    } else {
        $missingImages += $imagePath
    }
}

# Report results
Write-Host "`n=== EXISTING IMAGES ===" -ForegroundColor Green
if ($existingImages.Count -gt 0) {
    foreach ($image in $existingImages) {
        Write-Host "✓ $image" -ForegroundColor Green
    }
} else {
    Write-Host "No existing images found!" -ForegroundColor Red
}

Write-Host "`n=== MISSING IMAGES ===" -ForegroundColor Red
if ($missingImages.Count -gt 0) {
    foreach ($image in $missingImages) {
        Write-Host "✗ $image" -ForegroundColor Red
    }
    
    Write-Host "`nCreating placeholder files for missing images..." -ForegroundColor Yellow
    
    foreach ($missingImage in $missingImages) {
        # Create directory if it doesn't exist
        $directory = Split-Path $missingImage -Parent
        if (!(Test-Path $directory)) {
            New-Item -ItemType Directory -Force -Path $directory | Out-Null
            Write-Host "Created directory: $directory" -ForegroundColor Cyan
        }
        
        # Create placeholder file
        try {
            $fileName = Split-Path $missingImage -Leaf
            "Placeholder for $fileName - Please replace with actual image" | Out-File -FilePath $missingImage -Encoding UTF8
            Write-Host "✓ Created placeholder: $missingImage" -ForegroundColor Yellow
        }
        catch {
            Write-Host "✗ Failed to create: $missingImage" -ForegroundColor Red
        }
    }
} else {
    Write-Host "All images are present!" -ForegroundColor Green
}

# Summary
Write-Host "`n=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total images required: $($requiredImages.Count)"
Write-Host "Existing images: $($existingImages.Count)" -ForegroundColor Green
Write-Host "Missing images: $($missingImages.Count)" -ForegroundColor Red

if ($missingImages.Count -gt 0) {
    Write-Host "`nNote: Placeholder files have been created for missing images." -ForegroundColor Yellow
    Write-Host "Please replace them with actual images for production use." -ForegroundColor Yellow
}

Write-Host "`nImage audit completed!" -ForegroundColor Cyan
