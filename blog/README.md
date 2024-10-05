# Prerequisites
- Install and run [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Install [Node.js](https://nodejs.org/en/download/package-manager/current)
- Install [pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-macos/)

# Backend startup
```
cd uoc-api
docker-compose up
```

# Frontend startup
```
cd uoc-blog
npm i
npm run start
```

# pgAdmin 4
Register new server:
- General
  - Name: (whatever i.e. Docker)
- Connection
  - Hosname name/address: localhost
  - Port: 5432
  - Username: postgres
  - Password: root

# Nest.js, TypeORM and PostgreSQL
```
npm install -g @nestjs/cli
nest new blog-api --strict
cd blog-api
npm install --save @nestjs/typeorm typeorm pg
```
