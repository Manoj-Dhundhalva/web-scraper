#!/bin/bash

set -e

echo "Cleaning project..."

rm -rf node_modules
yarn cache clean
npm cache clean --force

source "$HOME/.nvm/nvm.sh"

echo "Installing Node version..."
nvm install
nvm use

echo "Installing dependencies..."
yarn install

echo "Installing Playwright WebKit..."
npx playwright install webkit

echo "Done."
