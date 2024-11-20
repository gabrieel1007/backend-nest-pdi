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
    async resetPoints(@Headers('Authorization') token: string): Promise<any> {
        if(token) {
            const user =  await this.getUsetByToken(token);
            const isAdmin = await this.verifyIfUserIsAdmin(user.sub);
            if(isAdmin) {
                return this.pointService.resetAll(user);
            }
            return {response: 'error'};
        }
        return {response: 'error'};
    }

    @Post('edit')
    async editPoints(@Headers('Authorization') token: string, @Body() body: any ): Promise<any> {
        if(token) {
            const user = await this.getUsetByToken(token);
            const isAdmin = await this.verifyIfUserIsAdmin(user.sub);
            if(isAdmin) {
                return this.pointService.editPoints(user, body);
            }
        }
    }
    
    private getUsetByToken(token: string): any {
        if(token) {
            return this.decodeToken(token);
        }
    }

    private decodeToken(token: string): any {
        const JWT_SECRET = this.configService.get<string>('JWT_SECRET');
        const actualToken = token.replace('Bearer ', '');
        try {
            return verify(actualToken, JWT_SECRET);
        } catch (error) {
            return null;
        }
    }

   private verifyIfUserIsAdmin(userid: number): Promise<boolean> {
       return this.pointService.verifyIfUserIsAdmin(userid);
    }
}