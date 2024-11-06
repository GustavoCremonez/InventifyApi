import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Result } from 'src/shared/result';
import { ProductDto } from './dtos/productDto';
import { ProductServiceAbstract } from './product-service-abstract';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductServiceAbstract) {}

  @Post()
  async add(@Body() product: ProductDto) {
    this.productService.createProduct({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
    });
  }

  @Get()
  async get() {
    const products = await this.productService.get();

    if (products) return Result.success(products);
    else return Result.failure('There is no products.');
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const product = await this.productService.getById({ id: id });

    if (product) return Result.success(product);
    else return Result.failure('Product not found.');
  }

  @Put()
  async update(@Body() product: ProductDto) {
    await this.productService.update({
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.productService.delete(id);
  }
}
