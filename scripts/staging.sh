#!/usr/bin/env bash

export APP_STAGE=staging
npx playwright install
tsx src/index.ts
