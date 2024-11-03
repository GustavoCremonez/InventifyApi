import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/productDto';
import { Product } from '@prisma/client';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    async add(@Body() product: ProductDto) {
        this.productService.createProduct({
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

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Product> {
        return this.productService.getById({ id: id });
    }

    @Put()
    async update(@Body() product: ProductDto): Promise<Product> {
        return this.productService.update({
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                quantity: product.quantity
            }
        )
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Product> {
        return this.productService.delete(id);
    }
}
