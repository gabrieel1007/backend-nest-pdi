import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointService } from './point.service';
import { PointController } from './point.controller';
import { Point } from './point.entity';
import { UserModule } from '../user/user.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Point]),
    UserModule 
  ],
  providers: [PointService],
  controllers: [PointController],
})
export class PointModule {}
