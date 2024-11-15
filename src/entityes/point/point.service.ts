import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Point } from "./point.entity";

@Injectable()
export class PointService{
    constructor(
        @InjectRepository(Point)
        private pointRepository: Repository<Point>
    ) {}

    async findAll(): Promise<Point[]> {
        const  response =  await this.pointRepository.find({
            select: ["points", "modified_at", "type_operation" ],
            where: {
                user_id: 22,
                expired_points: false
            }
        });
        console.log('response', response);
        return response;
    }

}