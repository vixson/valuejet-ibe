import { PrismaClient } from "@prisma/client";
import {readFile, writeFile } from 'fs/promises';

const prisma = new PrismaClient();

const products = JSON.parse(
  await readFile(
    new URL('./config.json', import.meta.url)
  )
);

async function seed() {
  const productCount = await prisma.product.count();
  if (productCount === 0) {
    for (let product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          thumbnail: product.thumbnail,
        },
      });
    }
  }

  console.log(`Database has been seeded. 🌱`);
}

/**
 * SEeds the database with Initialization data
 */
seed()
  .catch((e) => {
    console.error(e);
    // eslint-disable-next-line no-undef
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// eslint-disable-next-line no-unused-vars

/**
 * Fetches data from a dummy Json api and and writes the data to a file.
 */


async function initJsonFile(){
  fetch('https://dummyjson.com/products/category/mobile-accessories')
.then(async res => {
  const products = await res.json();
  console.log(products)
  const path = './config.json';

  try{
    writeFile(path, JSON.stringify(products, null, 2), (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        return;
      }
      console.log('Data written successfully to disk');
    });
  } catch(e){
    console.error(e)
  }
})
}


