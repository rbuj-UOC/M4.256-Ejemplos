#!/bin/bash
PROJECT_NAME=nestjs-crud-relation-pg

# create the project
npx @nestjs/cli@latest new ${PROJECT_NAME} --package-manager npm

cd ${PROJECT_NAME}

npm install --save @nestjs/typeorm typeorm pg
npm install --save @nestjs/config
npm install --save @nestjs/class-validator class-validator  class-transformer
npm install --save @nestjs/mapped-types

nest g resource products --no-spec
nest g resource categories --no-spec
