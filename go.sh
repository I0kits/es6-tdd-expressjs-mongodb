#!/bin/bash

set -eu

OS_ARCH=linux-x64
NODE_ARTIFACTORY_BASE="https://odyssey.apps.csintra.net/artifactory/list/nodejs.org"
NODE_VERSION="v8.5.0"
YARN_VERSION="1.2.0"

NPM_REGISTRY="http://odyssey.zoo.app.hedani.net/artifactory/api/npm/libs-release"
NPM_HTTP_PROXY="http://hk-proxy.ap.hedani.net:8090"
NPM_HTTPS_PROXY="http://hk-proxy.ap.hedani.net:8090"

ARTIFACTORY_API_TOKEN=%artifactoryApiToken%

mkdir -p build/pkg build/nodejs

download_nodejs() {
    node_file=node-${NODE_VERSION}-${OS_ARCH}.tar.gz
    tar_file_url=${NODE_ARTIFACTORY_BASE}/${NODE_VERSION}/${node_file}

    echo "download node package from ${tar_file_url}"
    curl -H "X-JFrog-Art-Api:${ARTIFACTORY_API_TOKEN}" -o build/pkg/${node_file} ${tar_file_url}
    echo "extra node files"
    tar zxf build/pkg/${node_file} -C build/nodejs --strip 1
}

setup_nodejs() {
    if [ ! -f build/nodejs/bin/node ] || [ ! -f build/nodejs/bin/npm ];then
        download_nodejs
    fi

    node_bin=$(pwd)/build/nodejs/bin
    echo ${PATH} | grep -q ${node_bin} || export PATH=${PATH}:$(pwd)/build/nodejs/bin

    if [ ! $(yarn -v &> /dev/null) ]; then
        npm install -g yarn@${YARN_VERSION} --registry ${NPM_REGISTRY} --proxy ${NPM_HTTP_PROXY} --https-proxy ${NPM_HTTPS_PROXY}
    fi
}

print_usage() {
    echo "Usage: $0 {prepare_nodejs}"
}

# check params
if [ $# -eq 0 ]; then
    print_usage
    exit 1
fi

case $1 in
    prepare_nodejs)
        setup_nodejs
        ;;
    *)
        print_usage
        exit 1
        ;;
esac