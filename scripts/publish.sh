#!/bin/bash

packages=(
  "theme"
)

npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

for package in "${packages[@]}"; do
  cd "packages/$package"
  pnpm run build

  if [ "$NIGHTLY" = "true" ]; then
    pnpm publish --no-git-checks --tag nightly
  else
    pnpm publish
  fi

  cd ../../
done
