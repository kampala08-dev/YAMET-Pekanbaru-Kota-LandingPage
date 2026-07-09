@echo off
title YAMET Pekanbaru Kota - Landing Page Dev Server
cd /d "%~dp0frontend"

echo ================================================
echo    YAMET Pekanbaru Kota - Landing Page (Dev Server)
echo ================================================
echo.

where node >nul 2>nul
if errorlevel 1 goto NONODE

for /f "tokens=*" %%v in ('node -v') do echo Node %%v terdeteksi.

set "PM=npm"
where yarn >nul 2>nul
if not errorlevel 1 set "PM=yarn"
echo Package manager: %PM%
echo.

if not exist node_modules (
  echo Menginstall dependency dulu ^(sekali saja, agak lama^)...
  call %PM% install
)

set BROWSER=none
echo.
echo Menjalankan dev server di http://localhost:3000
echo Biarkan jendela ini TETAP TERBUKA selama mengedit.
echo Untuk berhenti: tutup jendela ini atau tekan Ctrl+C.
echo.
call %PM% start

echo.
echo Dev server berhenti.
pause
exit /b 0

:NONODE
echo [ERROR] Node.js belum terpasang atau tidak ada di PATH.
echo Install Node.js LTS dari https://nodejs.org lalu jalankan file ini lagi.
echo.
pause
exit /b 1
