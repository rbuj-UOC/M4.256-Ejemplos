import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './dto/product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('getAll')
  async getAll() {
    return await this.productsService.getAll();
  }
  @Get('getOne/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productsService.getOne(id);
  }

  @Post('create')
  async addProduct(@Body() productData: ProductDTO) {
    await this.productsService.addProduct(productData);
    return 'Product added successfully';
  }

  @Put('update/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: ProductDTO,
  ) {
    await this.productsService.updateProduct(id, updateData);
    return 'Product updated successfully';
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    await this.productsService.deleteProduct(id);
    return 'Product deleted successfully';
  }
}
