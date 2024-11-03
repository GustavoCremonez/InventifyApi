import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
        return this.prisma.product.create({
          data,
        });
    }

    async get(): Promise<Array<Product>> {
        return this.prisma.product.findMany();
    }

    async getById(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
        return this.prisma.product.findUnique({
            where
        })
    }

    async update(data: Prisma.ProductUpdateInput): Promise<Product> {
        return this.prisma.product.update({
            data,
            where: {
                id: data.id as string
            }
        });
    }

    async delete(id: string): Promise<Product> {
        return this.prisma.product.delete({
            where: {
                id: id
            }
        })
    }
}
