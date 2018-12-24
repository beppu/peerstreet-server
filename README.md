# peerstreet-server

The Server-Side of the PeerStreet Challenge

# About

This implements a REST API server that returns population data based on ZIP code.

## Stack

* Node.js
    * Koa
    * Knex
* PostgreSQL

# Setup

## PostgreSQL

Start up psql as a privileged user

```sh
sudo su - postgres
psql
```

Create a user

```sql
CREATE USER ps WITH PASSWORD 'ps' SUPERUSER;

-- PostgreSQL requires that a user have SUPERUSER privileges
-- in order to use COPY to do a CSV import.

```
Create a database.

```sql
CREATE DATABASE peerstreet;
```

## Web Server

Clone the git repo.

```sh
git clone https://github.com/beppu/peerstreet-server.git
```

Create a `.env` file with the following contents.

```
DB_HOST=localhost
DB_NAME=peerstreet
DB_USER=ps
DB_PASSWORD=ps
```

Install node module dependencies.

```sh
npm i
```

Run migrations.

```sh
node_modules/.bin/knex migrate:latest
```

Start the server.

```
npm start
```


# The Ruby Client

I would have normally put it in another repo, but the instructions seemed to imply that one repo
should be delivered, so I put it in this repo in [peerstreet-client/](./peerstreet-client/) .
