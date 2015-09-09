#!/bin/bash

# Check if the environment is provided
if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit 1
fi

# Confirm function to avoid mistakes
confirm() {
    read -p "$1 ([y]es or [N]o): "
    case $(echo $REPLY | tr '[A-Z]' '[a-z]') in
        y|yes) echo 1 ;;
        *)     echo 0 ;;
    esac
}

# Deploy to production
deploy_prod() {
	echo "Building blog"
	jekyll build --config _config_prod.yml
	echo "Dry run"
	s3_website push --dry-run --config-dir _s3_prod_config

	if [ $(confirm) -eq 1 ]
	then
	  echo "Deploying blog to s3 cloudscaling.com"
	  s3_website push --config-dir _s3_prod_config
	else
	  echo "Stopped Deployment" 
	fi
}

# Deploy to stage
deploy_stage() {
	echo "Building blog"
	jekyll build --config _config_stage.yml
	echo "Dry run"
	s3_website push --dry-run --config-dir _s3_stage_config

	if [ $(confirm) -eq 1 ]
	then
	  echo "Deploying blog to s3 stage.www.cloudscaling.com"
	  s3_website push --config-dir _s3_stage_config
	else
	  echo "Stopped Deployment" 
	fi
}


if [ $1 = "production" ]; then
   deploy_prod
elif [ $1 = "stage" ]; then
	deploy_stage
else
  echo "Invalid enviromennt, use 'production' or 'stage'"
  exit 1
fi