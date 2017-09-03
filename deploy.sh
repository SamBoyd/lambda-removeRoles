#! /bin/bash


#PATH_TO_ZIP=/Users/Sam/Workspace/projects/lambda-getRoles/build/lambda-getRoles.zip

rm lambda.zip | zip -r lambda.zip *


#//zip -R ${PATH_TO_ZIP} ./*
#
#aws lambda update-function-code         \
#    --function-name getRoles            \
#    --zip-file fileb://${PATH_TO_ZIP}   \
#    --region eu-west-1                  \
##    --s3-bucket app.samuelrboyd.com     \
##    --s3-key lambda-getRoles.zip        \
#

