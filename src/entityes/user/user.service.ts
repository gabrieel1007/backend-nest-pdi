import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async getAllUsersAndPoints(): Promise<User[]> {
        const users =  await this.userRepository
            .query(`SELECT 
                    user_name as name,
                    total_points,
                    user_id
                FROM user_points`);
        console.log(users);
        return users;
    }   
    
    async findByUserName(userName: string): Promise<User> {
        return await this.userRepository.findOne({ where: { 'name': userName } });
    }

    async verifyIfUserIsAdmin(userid: number): Promise<boolean> {
        const user = await this.userRepository.findOne({ where: { 'user_id': userid } });
        return user.is_admin;
    }
}
