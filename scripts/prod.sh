#!/bin/bash

set -e

export APP_STAGE=prod

echo "Installing Playwright Firefox..."
yarn playwright install firefox

echo "Starting the server..."
tsx src/index.ts
