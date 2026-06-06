#!/bin/bash

echo "Installing dependencies..."
yarn install

echo "Installing Playwright WebKit..."
npx playwright install --with-deps webkit

echo "Done."
