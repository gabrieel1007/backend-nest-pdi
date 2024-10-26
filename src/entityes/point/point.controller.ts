import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { PointService } from "./point.service";
import { Point } from "./point.entity";

@Controller('points')
export class PointController{
    constructor(private readonly pointService: PointService) {}

    @Get()
    findAll(): Promise<Point[]> {
        return this.pointService.findAll();
    }
}