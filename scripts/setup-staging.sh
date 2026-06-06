#!/bin/bash

set -e

echo "Installing NVM"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source "$HOME/.nvm/nvm.sh"

echo "Installing Node version..."
nvm install
nvm use

echo "Cleaning project..."
rm -rf node_modules
yarn cache clean
npm cache clean --force

echo "Installing dependencies..."
yarn install

echo "Installing Playwright WebKit..."
npx playwright install --with-deps webkit

echo "Done."
