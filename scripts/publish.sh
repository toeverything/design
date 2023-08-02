#!/bin/bash

npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

cd "packages/$PACKAGE_NAME"
pnpm run build

pnpm version $VERSION_TYPE
git config --global user.email "474021214@qq.com"
git config --global user.name "QiShaoXuan"
git add .;
git commit -m "bump the $VERSION_TYPE version" --no-verify
git push
pnpm publish

cd ../../
