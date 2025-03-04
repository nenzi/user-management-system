import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from '../pipe/zod_validation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':id')
  create(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(createUserSchema)) createUserDto: CreateUserDto
  ) {
    if (!id) throw new HttpException('id is required', HttpStatus.BAD_REQUEST);

    createUserDto.id = id;

    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query('pageNumber', ParseIntPipe) number: number,
    @Query('pageSize', ParseIntPipe) size: number
  ) {
    return this.userService.findAll({ pageNumber: number, pageSize: size });
  }

  @Get('count')
  count() {
    return this.userService.count();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
