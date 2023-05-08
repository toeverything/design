#!/bin/bash

packages=(
  "theme"
)

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
