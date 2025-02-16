#!/bin/bash
PROJECT_NAME=nestjs-crud-mysql

# create the project
npx @nestjs/cli@latest new ${PROJECT_NAME} --package-manager npm --skip-git

cd ${PROJECT_NAME}

npm install --save @nestjs/typeorm typeorm mysql2
npm install --save @nestjs/config
npm install --save @nestjs/class-validator class-validator class-transformer
npm install --save @nestjs/mapped-types

# nest g module products/product --no-spec --flat
# nest g controller products/product --no-spec --flat --skip-import
# nest g service products/product --no-spec --flat --skip-import
