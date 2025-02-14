import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDTO } from 'src/DTO/product.dto';
import { Product } from 'src/entities/product';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('getAll')
  async getAll() {
    return await this.productService.getAll();
  }
  @Get('getOne/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productService.getOne(id);
  }

  @Post('create')
  async addProduct(@Body() productData: ProductDTO) {
    await this.productService.addProduct(productData);
    return 'Product added successfully';
  }

  @Put('update/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: ProductDTO,
  ) {
    await this.productService.updateProduct(id, updateData);
    return 'Product updated successfully';
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    await this.productService.deleteProduct(id);
    return 'Product deleted successfully';
  }
}
