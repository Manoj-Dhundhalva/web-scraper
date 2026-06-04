#!/usr/bin/env bash

export APP_STAGE=test
npx playwright install chromium
tsx src/index.ts
