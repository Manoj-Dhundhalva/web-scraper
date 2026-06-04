#!/usr/bin/env bash

export APP_STAGE=prod
npx playwright install chromium
tsx src/index.ts
