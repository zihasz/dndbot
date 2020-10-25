@echo off
title dndbot
cls
goto loop

:loop
echo [dndbot] Starting dndbot...
node .\index.js
echo [dndbot] Ending dndbot...
goto loop
