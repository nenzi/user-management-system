import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class AddressService {
  constructor(private db: DbService) {}
  create(createAddressDto: CreateAddressDto) {
    return this.db.address.create({ data: createAddressDto });
  }

  async findByUserId(id: number) {
    const address = await this.db.address.findFirst({ where: { userId: id } });
    if (!address)
      throw new HttpException('address not found', HttpStatus.BAD_REQUEST);

    return address;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.db.address.update({
      where: { userId: id },
      data: updateAddressDto,
    });
  }
}
