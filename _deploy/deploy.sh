#!/bin/bash

confirm () {
    # call with a prompt string or use a default
    read -p "$1 ([y]es or [N]o): "
    case $(echo $REPLY | tr '[A-Z]' '[a-z]') in
        y|yes) echo 1 ;;
        *)     echo 0 ;;
    esac
}

echo "Building blog"
jekyll build
echo "Dry run"
s3_website push --dry-run

## Get Confirmation


if [ $(confirm) -eq 1 ]
then
  echo "Deploying blog to s3"
  s3_website push
else
  echo "Stopped Deployment" 
fi


