# Portfolio Deployment Script
# This script helps you quickly deploy your portfolio to various platforms

# ============================================
# Quick Deployment Options
# ============================================

Write-Host "🚀 Portfolio Deployment Helper" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Choose your deployment method:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Open in Browser (Local Preview)" -ForegroundColor Green
Write-Host "2. Deploy to Vercel (Recommended)" -ForegroundColor Green
Write-Host "3. Deploy to Netlify" -ForegroundColor Green
Write-Host "4. Deploy to GitHub Pages" -ForegroundColor Green
Write-Host "5. Start Local Server (Node.js)" -ForegroundColor Green
Write-Host ""

$choice = Read-Host "Enter your choice (1-5)"

switch ($choice) {
    "1" {
        Write-Host "📂 Opening portfolio in browser..." -ForegroundColor Cyan
        Start-Process "index.html"
    }
    
    "2" {
        Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Prerequisites:" -ForegroundColor Yellow
        Write-Host "- Install Vercel CLI: npm install -g vercel" -ForegroundColor White
        Write-Host "- Run: vercel" -ForegroundColor White
        Write-Host ""
        
        $installVercel = Read-Host "Do you want to install Vercel CLI now? (y/n)"
        if ($installVercel -eq "y") {
            npm install -g vercel
            vercel
        } else {
            Write-Host "Manual steps:" -ForegroundColor Yellow
            Write-Host "1. Go to https://vercel.com" -ForegroundColor White
            Write-Host "2. Sign up or log in" -ForegroundColor White
            Write-Host "3. Click 'Add New Project'" -ForegroundColor White
            Write-Host "4. Import your Git repository or drag-and-drop this folder" -ForegroundColor White
            Write-Host "5. Click 'Deploy'" -ForegroundColor White
            Start-Process "https://vercel.com/new"
        }
    }
    
    "3" {
        Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Option A: Drag and Drop" -ForegroundColor Yellow
        Write-Host "1. Go to https://app.netlify.com/drop" -ForegroundColor White
        Write-Host "2. Drag this entire folder to the page" -ForegroundColor White
        Write-Host "3. Your site is live!" -ForegroundColor White
        Write-Host ""
        Write-Host "Option B: CLI" -ForegroundColor Yellow
        Write-Host "- Install: npm install -g netlify-cli" -ForegroundColor White
        Write-Host "- Deploy: netlify deploy --prod" -ForegroundColor White
        Write-Host ""
        
        $openNetlify = Read-Host "Open Netlify Drop page? (y/n)"
        if ($openNetlify -eq "y") {
            Start-Process "https://app.netlify.com/drop"
        }
    }
    
    "4" {
        Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Steps:" -ForegroundColor Yellow
        Write-Host "1. Create a new repository on GitHub" -ForegroundColor White
        Write-Host "2. Push this code to the repository:" -ForegroundColor White
        Write-Host "   git init" -ForegroundColor Gray
        Write-Host "   git add ." -ForegroundColor Gray
        Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Gray
        Write-Host "   git branch -M main" -ForegroundColor Gray
        Write-Host "   git remote add origin YOUR_REPO_URL" -ForegroundColor Gray
        Write-Host "   git push -u origin main" -ForegroundColor Gray
        Write-Host ""
        Write-Host "3. Go to repository Settings > Pages" -ForegroundColor White
        Write-Host "4. Select branch 'main' and folder 'root'" -ForegroundColor White
        Write-Host "5. Click Save and wait for deployment" -ForegroundColor White
        Write-Host ""
        
        $openGitHub = Read-Host "Open GitHub to create new repository? (y/n)"
        if ($openGitHub -eq "y") {
            Start-Process "https://github.com/new"
        }
    }
    
    "5" {
        Write-Host "🌐 Starting local server..." -ForegroundColor Cyan
        Write-Host ""
        
        # Check if npm is installed
        $npmInstalled = Get-Command npm -ErrorAction SilentlyContinue
        
        if ($npmInstalled) {
            Write-Host "Installing http-server..." -ForegroundColor Yellow
            npm install -g http-server
            Write-Host ""
            Write-Host "Starting server at http://localhost:8080" -ForegroundColor Green
            Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
            Write-Host ""
            http-server
        } else {
            Write-Host "Node.js is not installed!" -ForegroundColor Red
            Write-Host "Please install Node.js from https://nodejs.org" -ForegroundColor Yellow
            $openNodeJS = Read-Host "Open Node.js download page? (y/n)"
            if ($openNodeJS -eq "y") {
                Start-Process "https://nodejs.org"
            }
        }
    }
    
    default {
        Write-Host "Invalid choice!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Done!" -ForegroundColor Green
Write-Host ""
