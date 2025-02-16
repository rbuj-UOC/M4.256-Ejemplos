#!/bin/bash
PROJECT_NAME=nestjs-passport-jwt

# create the project
npx @nestjs/cli@latest new ${PROJECT_NAME} --package-manager npm --skip-git

cd ${PROJECT_NAME}

npm install --save @nestjs/typeorm typeorm pg

npm install --save @nestjs/config

npm install --save @nestjs/class-validator class-validator class-transformer

npm install --save @nestjs/mapped-types

npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local

npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

npm install --save bcrypt

# nest g module auth
# nest g service auth --no-spec
# nest g module users
# nest g service users --no-spec
