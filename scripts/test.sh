#!/usr/bin/env bash

export APP_STAGE=test
npx playwright install
tsx src/index.ts
