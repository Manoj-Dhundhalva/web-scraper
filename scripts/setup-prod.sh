#!/bin/bash

set -e

echo "Installing dependencies..."
yarn install

echo "Installing Playwright Firefox..."
PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install firefox

echo "Done."