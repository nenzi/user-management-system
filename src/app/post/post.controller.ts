import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, createPostSchema } from './dto/create-post.dto';
import { ZodValidationPipe } from '../pipe/zod_validation.pipe';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createPostSchema)) createPostDto: CreatePostDto
  ) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findByUserId(@Query('userId', ParseIntPipe) userId: number) {
    return this.postService.findUserId(userId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}
