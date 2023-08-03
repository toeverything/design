#!/bin/bash

npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

cd "packages/$PACKAGE_NAME"
pnpm run build

pnpm publish

cd ../../
