import { PrismaClient } from '@prisma/client'
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

async function deleteUser(username:string){
  try {
    const res = await prisma.user.delete({
      where:{
        email: username
      } 
    })
    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }
}

async function getUser (username:string){
  try {
    const res = await prisma.user.findFirst({
      where:{
        email: username
      }
    })
    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }
}
getUser("shubhammingi@gmail.com");
// deleteUser("random@gmail.com");
// updateUser("shubhammingi@gmail.com", {firstName: "random1" , lastName: "randomlastname"});
// insertUser("randoawdm@gmail.com", "adadqw", "ranqwddim2", "mingwqwdal");
