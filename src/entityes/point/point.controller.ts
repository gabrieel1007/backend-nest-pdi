import { Controller, Get, Post, Body, Param, Delete, UseGuards, Headers } from "@nestjs/common";
import { PointService } from "./point.service";
import { Point } from "./point.entity";
import { User } from "../user/user.entity";
import { AuthGuard } from "../../auth/auth.guard";
import { ConfigService } from "@nestjs/config";
import * as jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";

@UseGuards(AuthGuard)
@Controller('points')
export class PointController{
    constructor(
        private readonly pointService: PointService,
        private readonly configService: ConfigService,
    ) {}

    @Post()
    findAll(): Promise<Point[]> {
        return this.pointService.findAll();
    }

    @Post('reset')
    handleRequest(@Headers('Authorization') token: string): any {
        if(token) {
            const user =  this.getUsetByToken(token);
            return this.pointService.resetAll(user);
        }
        return {response: 'error'};
    }

    @Post('edit')
    editPoints(): any {
        console.log('edit')
        return {response: 'edit'};
    }


    private getUsetByToken(token: string): User {
        if(token) {
            console.log(this.decodeToken(token));
            return this.decodeToken(token);
        }
    }

    private decodeToken(token: string): any {
        const JWT_SECRET = this.configService.get<string>('JWT_SECRET');
        const actualToken = token.replace('Bearer ', '');
        console.log('token', token);
        try {
            return verify(actualToken, JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}