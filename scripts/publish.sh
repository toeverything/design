#!/bin/bash

npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

cd "packages/$PACKAGE_NAME"
pnpm run build

if [ "$NIGHTLY" = "true" ]; then
  pnpm publish --no-git-checks --tag nightly
else
  pnpm publish
fi

cd ../../
