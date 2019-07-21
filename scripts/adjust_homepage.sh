#!/usr/bin/env bash

HOMEPAGE=$1
echo "setting homepage ${HOMEPAGE}"

sed -i "s#\"homepage\".*\$#\"homepage\": \"${HOMEPAGE}\",#g" package.json
