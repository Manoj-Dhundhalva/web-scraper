#!/bin/bash

set -e

echo "Installing dependencies..."
yarn install

echo "Installing Playwright Chromium..."
yarn playwright install chromium

echo "Done."
