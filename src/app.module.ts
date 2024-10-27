import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(),
            UserModule,
            MongooseModule.forRoot(process.env.DB_URI),
            AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
