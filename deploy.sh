#! /bin/bash

rm lambda.zip | zip -r lambda.zip *

aws lambda update-function-code --function-name arn:aws:lambda:eu-west-1:903390370059:function:removeRole --zip-file fileb://$(pwd)/lambda.zip

