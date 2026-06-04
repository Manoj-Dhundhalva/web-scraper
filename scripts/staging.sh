#!/usr/bin/env bash

export APP_STAGE=staging
npx playwright install chromium
tsx src/index.ts
