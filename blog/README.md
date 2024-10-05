# Prerequisites
- Install and run [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Install [pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-macos/) (optional)

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

# pgAdmin 4 (optional)
Register new server:
- General
  - Name: (whatever i.e. Docker)
- Connection
  - Hostname name/address: localhost
  - Port: 5432
  - Username: postgres
  - Password: root

# Nest.js, TypeORM and PostgreSQL (info)
```
npm install -g @nestjs/cli
nest new blog-api --strict
cd blog-api
npm install --save @nestjs/typeorm typeorm pg
```
