import { Controller, Get, Post, Body, Param, Delete, UseGuards } from "@nestjs/common";
import { PointService } from "./point.service";
import { Point } from "./point.entity";
import { User } from "../user/user.entity";
import { AuthGuard } from "../../auth/auth.guard";

@UseGuards(AuthGuard)
@Controller('points')
export class PointController{
    constructor(private readonly pointService: PointService) {}

    @Post()
    findAll(): Promise<Point[]> {
        return this.pointService.findAll();
    }
}