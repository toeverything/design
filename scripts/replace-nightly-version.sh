#!/bin/bash

packages=(
  "theme"
)

replace() {
  mv package-modified.json package.json

  pnpm version "0.0.0-$BUILD_VERSION" --no-git-tag-version --no-commit-hooks
}

for package in "${packages[@]}"; do
  cd "packages/$package"
  jq ".name = \"@toeverything/${package}\"" package.json > package-modified.json
  replace
  cd ../../
done
