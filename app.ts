import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const index = (async () => {
  // Create
  // await prisma.user.create({
  //   data: { username: 'Derlys' }
  // })

  // Update
  // await prisma.user.update({
  //   where: { username: 'Pablo' },
  //   data: { username: 'Beeman' },
  // });

  // Delete
  // await prisma.user.delete({
  //   where: { username: 'Pablo' },
  // });

  // Count
  const count = await prisma.user.count();
  console.log('count', count);

  const users = await prisma.user.findMany();
  console.log(users);

  // Create with relationships
  await prisma.post.create({
    data: {
      text: 'Hola mundo con comments!',
      author: { connect: { username: 'abelfubu' } },
      comments: {
        create: { author: { connect: { username: 'Beeman' } }, text: 'Hola Comment' },
      },
    },
  });
  const post = await prisma.post.findMany({
    include: { author: true, comments: { include: { author: true } } },
  });
  console.log(post);
})();
