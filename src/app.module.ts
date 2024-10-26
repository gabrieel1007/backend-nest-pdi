import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entityes/user/user.entity';
import { UserModule } from './entityes/user/user.module';
import { Point } from './entityes/point/point.entity';
import { PointModule } from './entityes/point/point.module';
import { AuthModule } from './auth/auth.module';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'postgres',
      entities: [User, Point], 
    }),
    UserModule,
    PointModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
