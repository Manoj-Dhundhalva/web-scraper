#!/usr/bin/env bash

export APP_STAGE=prod
npx playwright install
tsx src/index.ts
