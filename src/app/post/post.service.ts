import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class PostService {
  constructor(private db: DbService) {}
  create(createPostDto: CreatePostDto) {
    return this.db.post.create({ data: createPostDto });
  }

  findUserId(id: number) {
    return this.db.post.findMany({ where: { userId: id } });
  }

  async remove(id: number) {
    const post = await this.db.post.findUnique({ where: { id: id } });

    if (!post)
      throw new HttpException('post not found', HttpStatus.BAD_REQUEST);

    return this.db.post.delete({ where: { id } });
  }
}
