import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.db.user.findUnique({
      where: { id: createUserDto.id },
    });
    if (user)
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);

    return this.db.user.create({ data: createUserDto });
  }

  findAll(query: { pageSize?: number; pageNumber?: number }) {
    let { pageSize = 10, pageNumber = 1 } = query;

    return this.db.user.findMany({
      orderBy: { createdAt: 'desc' },
      skip: pageSize * (pageNumber - 1),
      take: pageSize,
    });
  }

  async count() {
    return { count: await this.db.user.count() };
  }

  async findOne(id: number) {
    const user = await this.db.user.findUnique({
      where: { id: id },
      include: { address: true },
    });

    console.log(user);
    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);

    return user;
  }
}
