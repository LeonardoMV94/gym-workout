// import { PrismaClient } para ejecutar el framework de prisma
import { PrismaClient } from "@prisma/client";
//declara una variable db de tipo PrismaClient
let db: PrismaClient;
//declara una variable global de tipo PrismaClient
declare global {
  
  var __db: PrismaClient | undefined;
}

//si no existe la variable global __db, crea una nueva instancia de PrismaClient
if (!global.__db) {
  // instancia de prisma client
  global.__db = new PrismaClient({ log: ['query', 'info'] });
}
//asigna la variable global __db a la variable db
db = global.__db;

export { db };