#!/bin/bash

echo "Installing Playwright Chromium..."
yarn playwright install chromium

echo "Starting the server..."
tsx src/index.ts
