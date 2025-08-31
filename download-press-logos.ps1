# Script to download missing press logos

# Create press directory if it doesn't exist
if (!(Test-Path "public/images/press")) {
    New-Item -ItemType Directory -Path "public/images/press" -Force
    Write-Host "Created directory: public/images/press"
}

# Define press logos to download
$pressLogos = @{
    "public/images/press/vtv.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/vtv.svg"
    "public/images/press/cafef.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/cafef.svg"
    "public/images/press/baodautu.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/baodautu.svg"
    "public/images/press/cafebiz.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/cafebiz.svg"
    "public/images/press/genk.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/genk.svg"
    "public/images/press/vnexpress.svg" = "https://tuyendung.topcv.vn/app/assets/images/press/vnexpress.svg"
}

# Function to create SVG placeholder
function Create-SVGPlaceholder {
    param(
        [string]$OutputPath,
        [string]$LogoName
    )
    
    $svgContent = @"
<svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
  <text x="60" y="30" font-family="Arial, sans-serif" font-size="12" fill="#6b7280" text-anchor="middle" dy=".3em">$LogoName</text>
</svg>
"@
    
    $svgContent | Out-File -FilePath $OutputPath -Encoding UTF8
    Write-Host "Created SVG placeholder: $OutputPath" -ForegroundColor Green
}

# Function to download image with fallback
function Download-PressLogo {
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
        
        # Use Invoke-WebRequest to download the logo
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -ErrorAction Stop
        
        Write-Host "Successfully downloaded: $OutputPath" -ForegroundColor Green
        
    } catch {
        Write-Host "Failed to download $Url : $($_.Exception.Message)" -ForegroundColor Red
        
        # Create placeholder SVG
        $fileName = Split-Path $OutputPath -Leaf
        $logoName = $fileName -replace '\.svg$', ''
        Create-SVGPlaceholder -OutputPath $OutputPath -LogoName $logoName
    }
}

# Download all press logos
Write-Host "Starting press logos download..." -ForegroundColor Cyan

foreach ($logo in $pressLogos.GetEnumerator()) {
    Download-PressLogo -Url $logo.Value -OutputPath $logo.Key
    Start-Sleep -Milliseconds 100
}

Write-Host "Press logos download completed!" -ForegroundColor Cyan
