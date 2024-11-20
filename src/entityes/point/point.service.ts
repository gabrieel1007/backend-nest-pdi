import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Point } from "./point.entity";
import { UserService } from "../user/user.service";



@Injectable()
export class PointService{
    constructor(
        @InjectRepository(Point)
        private pointRepository: Repository<Point>,
        private readonly userSerivce: UserService
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

    async resetAll(user: any): Promise<any> {
        const response = await this.pointRepository.update({
            expired_points: false
        }, {
            expired_points: true,
            modified_by: user.user_id,
            modified_at: new Date()
        });
        console.log('response', response);
        return response;
    }

    async editPoints(user: any, body: any): Promise<any> {
        console.log('user',user);
        console.log('body', body);
        const usersToInsert = body.usersSelected.map((selectedUser) => {
            return {
                user_id: selectedUser.user_id,
                points: body.points,
                type_operation: body.addPoints ? 'sum' : 'reduce',
                modified_by: user.sub,
                modified_at: new Date()
            }
        });

        const response = await this.pointRepository.insert(usersToInsert);
        return response;
    }


    async verifyIfUserIsAdmin(userid: number): Promise<boolean> {
        return this.userSerivce.verifyIfUserIsAdmin(userid);
    }

}