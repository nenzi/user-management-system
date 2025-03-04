import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DbModule, UserModule, AddressModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
