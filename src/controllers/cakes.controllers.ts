import { NextFunction, Request, Response } from "express";
import { prisma } from '../../dist/prisma/db.config.js';

//@query()
const getAllCakes = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
    try {
        const cakes = await prisma.cake.findMany();
        return response.status(200).json({ cakes });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};

const Flavors = [
    "Chocolate",
    "Vennela",
    "Butter"
]

//@mutation()
const addNewCake = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
    try {
        const { name, price, flavor } = request.body;
        if (!name || !price || !flavor) {
            return response.status(400).json({ error: 'Missing required fields' });
        }
        if (!Flavors.includes(flavor)) {
            return response.status(400).json({ error: 'Invalid flavor' });
        }
        const newCake = await prisma.cake.create({
            data: {
                name,
                price,
                flavor
            }
        });
        return response.status(201).json(newCake);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}

//query()
const getCakeById = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
    try {
        const { id } = request.params;
        const cake = await prisma.cake.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!cake) {
            return response.status(404).json({ error: 'Cake not found' });
        }
        return response.status(200).json(cake);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}

//@mutation()
const updateCake = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
    try {
        const { id } = request.params;
        const { name, price, flavor } = request.body;
        const isCakeExists = await prisma.cake.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!isCakeExists) {
            return response.status(404).json({ error: 'Cake not found' });
        }
        const updatedCake = await prisma.cake.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                price,
                flavor
            }
        });
        if (!updatedCake) {
            return response.status(404).json({ error: 'Cake not found' });
        }
        return response.status(200).json(updatedCake);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
//@mutation()
const deleterCake = async (request: Request, response: Response, next: NextFunction): Promise<Response> => {
    try {
        const { id } = request.params;
        const isCakeExists = await prisma.cake.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!isCakeExists) {
            return response.status(404).json({ error: 'Cake not found' });
        }
        const deletedCake = await prisma.cake.delete({
            where: {
                id: parseInt(id)
            }
        });
        if (!deletedCake) {
            return response.status(404).json({ error: 'Cake not found' });

        }
        return response.status(200).json(deletedCake);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }

}

export { getAllCakes, addNewCake, getCakeById, updateCake, deleterCake };