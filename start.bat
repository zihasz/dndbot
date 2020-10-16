@echo off
title dndbot
set timesRan = 1
cls
goto loop

:loop
set /a timesRan = %timesRan% + 1
echo Starting bot, Run ID %timesRan%
node .\dndbot.js
echo Ended bot
goto loop
