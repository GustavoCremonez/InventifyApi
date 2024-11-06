import { Prisma } from '@prisma/client';
import { ProductDto } from './dtos/productDto';

export abstract class ProductServiceAbstract {
  abstract createProduct(data: Prisma.ProductCreateInput): Promise<ProductDto>;

  abstract get(): Promise<Array<ProductDto>>;

  abstract getById(where: Prisma.ProductWhereUniqueInput): Promise<ProductDto>;

  abstract update(data: Prisma.ProductUpdateInput): Promise<void>;

  abstract delete(id: string): Promise<void>;
}
