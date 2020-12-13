# Introduction to prisma io

[Prisma.io documentation](https://www.prisma.io/)

Adding prisma to the project

- `yarn add @prisma/cli -D`
- `yarn add @prisma/client`

Once we have our model

- `npx prisma generate`
- `npx prisma db push`

Validates the models are correct

- `npx prisma format`

Everytime we change the models run

- `npx prisma db push`

---

### Run the docker-compose

- `docker-compose up`
- `docker-compose down`
