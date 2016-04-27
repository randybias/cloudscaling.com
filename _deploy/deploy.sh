#!/bin/bash
red='\033[0;31m'
green='\033[0;32m'
nc='\033[0m' # No Color

# Check if the environment is provided
if [[ $# -eq 0 ]]
  then
    echo ${red}"No arguments supplied"
    exit 1
fi

# Confirm function to avoid mistakes
confirm() {
    read -p "Are you sure? ([y]es or [N]o): "
    case $(echo $REPLY | tr '[A-Z]' '[a-z]') in
        y|yes) echo 1 ;;
        *)     echo 0 ;;
    esac
}

# Deploy to production
deploy_prod() {
	echo ${green}"Building blog for production"${nc}
	jekyll build --config _config.yml,_config_prod.yml

	echo ${red}"Dry run"${nc}
	s3_website push --dry-run --config-dir _s3_prod_config

	if [ $(confirm) -eq 1 ]
	then
	  echo ${green}"Deploying blog to S3 cloudscaling.com"${nc}
          . _s3_prod_config/s3_private_config.sh
	  s3_website push --config-dir _s3_prod_config
	  echo ${green}"Deploying blog to S3 www.cloudscaling.com"${nc}
          . _s3_prod_config_www/s3_private_config.sh
	  s3_website push --config-dir _s3_prod_config_www
	else
	  echo ${green}"Stopped Deployment"${nc}
	fi
}

# Deploy to stage
deploy_stage() {
	echo ${green}"Building blog for staging"${nc}
	jekyll build --config _config.yml,_config_stage.yml

	echo ${red}"Dry run"${nc}
	s3_website push --dry-run --config-dir _s3_stage_config

	if [ $(confirm) -eq 1 ]
	then
	  echo ${green}"Deploying blog to S3 stage.cloudscaling.com"${nc}
	  s3_website push --config-dir _s3_stage_config
	else
	  echo ${green}"Stopped Deployment"${nc} 
	fi
}

# Take user input to call build for production or staging
if [[ "$1" == "production" || "$1" == "prod" ]]; then
   . _s3_prod_config/s3_private_config.sh
   deploy_prod
elif [[ "$1" == "stage" ]]; then
   . _s3_stage_config/s3_private_config.sh
   deploy_stage
else
  echo ${red}"Invalid environment, use 'prod' or 'stage'"${nc}
  exit 1
fi
