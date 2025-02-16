import { IsString } from '@nestjs/class-validator';
import { IsNotEmpty, Min } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty({ message: 'Please define a product name' })
  productname: string;

  @Min(0.01, { message: 'Price must be greater than 0' })
  price: number;
}
