#!/bin/bash

set -e

echo "Installing dependencies..."
yarn install

echo "Installing Playwright browser..."
npx playwright install

echo "Done."