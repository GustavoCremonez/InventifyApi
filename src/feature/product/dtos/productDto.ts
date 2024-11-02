import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;
}