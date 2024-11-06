import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './feature/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './feature/product/product.controller';
import { ProductService } from './feature/product/product.service';
import { PrismaService } from './feature/prisma/prisma.service';
import { ProductServiceAbstract } from './feature/product/product-service-abstract';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule],
  controllers: [AppController, ProductController],
  providers: [
    AppService,
    {
      provide: ProductServiceAbstract,
      useClass: ProductService,
    },
    PrismaService,
  ],
})
export class AppModule {}
