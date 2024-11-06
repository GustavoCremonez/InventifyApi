import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductServiceAbstract } from './product-service-abstract';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: ProductServiceAbstract,
      useClass: ProductService,
    },
  ],
  controllers: [ProductController],
})
export class ProductModule {}
