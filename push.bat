@echo off
cd /d "C:\Users\Sam\.gemini\antigravity\scratch\landing-page-bedah-bisnis"
echo Menambahkan semua file...
git add -A
echo Membuat commit...
git commit -m "Add: cover ebook di hero section + update headline"
echo Pushing ke GitHub...
git push
echo.
echo ===================================
echo Selesai! Cek Vercel dalam 30 detik
echo https://ebook-bedah-bisnis-landing-page.vercel.app
echo ===================================
pause
