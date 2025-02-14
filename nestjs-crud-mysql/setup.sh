#!/bin/bash
PROJECT_NAME=nestjs-crud-mysql

# create the project
npx @nestjs/cli@latest new ${PROJECT_NAME} --package-manager npm --skip-git

cd ${PROJECT_NAME}

# npm install --save @nestjs/typeorm typeorm pg
npm install --save @nestjs/typeorm typeorm mysql2

npm install --save @nestjs/config
