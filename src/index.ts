import { PrismaClient } from '@prisma/client'
import { log } from 'console'
import { string } from 'zod'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
      email: username,
      password,
      firstName,
      lastName
    }
  })
  console.log(res)
}

interface Update {
  firstName: string,
  lastName: string
}
async function updateUser (username: string, {firstName, lastName}:Update){
  try {
    const res = await prisma.user.update({
      where: {
        email: username
      },
      data:{
        firstName,
        lastName
      }
    })
    console.log(res)
  } catch (error) {
    console.log(error);
    
  }
}

// insertUser("random@gmail.com", "adad", "randim2", "mingwal");
