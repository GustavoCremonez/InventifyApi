import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/productDto';
import { Product } from '@prisma/client';
import { Result } from 'src/shared/result';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    async add(@Body() product: ProductDto) {
        await this.productService.createProduct({
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            quantity: product.quantity
        });
    }

    @Get()
    async get(): Promise<Array<Product>> {
        return this.productService.get();
    }
}
