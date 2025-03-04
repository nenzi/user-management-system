import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import {
  UpdateAddressDto,
  updateAddressSchema,
} from './dto/update-address.dto';
import {
  CreateAddressDto,
  createAddressSchema,
} from './dto/create-address.dto';
import { ZodValidationPipe } from '../pipe/zod_validation.pipe';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createAddressSchema))
    createAddressDto: CreateAddressDto
  ) {
    return this.addressService.create(createAddressDto);
  }

  @Get(':id')
  findByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.findByUserId(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(updateAddressSchema))
    updateAddressDto: UpdateAddressDto
  ) {
    return this.addressService.update(id, updateAddressDto);
  }
}
