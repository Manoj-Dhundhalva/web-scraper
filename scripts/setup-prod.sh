#!/bin/bash

set -e

echo "Installing dependencies..."
yarn install

echo "Installing Playwright Firefox..."
yarn playwright install firefox

echo "Done."