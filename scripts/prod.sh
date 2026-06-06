#!/bin/bash

set -e

export APP_STAGE=prod

echo "Installing Playwright Chromium..."
yarn playwright install chromium

echo "Starting the server..."
tsx src/index.ts
