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
        return await this.pointRepository.find();
    }

}