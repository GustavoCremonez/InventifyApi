import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './dtos/productDto';
import { ProductServiceAbstract } from './product-service-abstract';

@Injectable()
export class ProductService implements ProductServiceAbstract {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: Prisma.ProductCreateInput): Promise<ProductDto> {
    let product;

    await this.prismaService.product
      .create({
        data,
      })
      .then((result) => {
        product = result;
      });

    return product;
  }

  async get(): Promise<Array<ProductDto>> {
    let products;

    await this.prismaService.product.findMany().then((prods) => {
      products = prods.map((prod) => {
        return {
          id: prod.id,
          name: prod.name,
          description: prod.description,
          category: prod.category,
          price: prod.price,
          quantity: prod.quantity,
          createdAt: prod.createdAt,
          updatedAt: prod.updatedAt,
        };
      });
    });

    return products;
  }

  async getById(where: Prisma.ProductWhereUniqueInput): Promise<ProductDto> {
    let product;

    await this.prismaService.product
      .findUnique({
        where,
      })
      .then((prod) => {
        if (!prod) product = prod;
        else {
          product = {
            id: prod.id,
            name: prod.name,
            description: prod.description,
            category: prod.category,
            price: prod.price,
            quantity: prod.quantity,
            createdAt: prod.createdAt,
            updatedAt: prod.updatedAt,
          };
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return product;
  }

  async update(data: Prisma.ProductUpdateInput): Promise<void> {
    await this.prismaService.product.update({
      data,
      where: {
        id: data.id as string,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.product.delete({
      where: {
        id: id,
      },
    });
  }
}
