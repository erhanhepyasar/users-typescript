import { Request, Response } from "express";
import prisma from "../services/prisma"

export const userController = {
    async getAllUsers(req: Request, res: Response) {
        const users: User[] = await prisma.user.findMany();
        return res.json(users);
    },

    async getUserById(req: Request, res: Response) {
        const paramId: string = req.params.id;
        const user: User | null = await prisma.user.findUnique({
            where: {
                id: paramId
            }
        });

        return res.json(user);
    },

    async createUser(req: Request, res: Response) {
        const userData: User = req.body;
        const user: User = await prisma.user.create({
            data: {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            },
            include: {
                products: true
            }
        });

        return res.json({user: user});
    },

    async updateUser(req: Request, res: Response) {
        const paramId: string = req.params.id;
        const userData: User = req.body;

        const updatedUser: User | null = await prisma.user.update({
            data: {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email
            },
            where: {
                id: paramId
            }
        });

        return res.json(updatedUser);
    },

    async deleteUser(req: Request, res: Response) {
        const paramId: string = req.params.id;

        const deletedUser: User | null = await prisma.user.delete({
            where: {
                id: paramId
            }
        });

        return res.json(deletedUser);
    },

}