#!/bin/bash

set -e

export APP_STAGE=staging

echo "Starting the server..."
tsx src/index.ts
