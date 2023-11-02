// api/categorias.js

import { defineEventHandler } from 'h3';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try{

        const categorias = await prisma.categoria.findMany();
        
        console.log('cat here: ', categorias)
        return {
            categorias
        };
        
    } catch(error){
        console.error(error)
    }
});