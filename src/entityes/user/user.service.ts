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
                    total_points
                FROM user_points`);
        console.log(users);
        return users;
    }   
    
    async findByUserName(userName: string): Promise<User> {
        return await this.userRepository.findOne({ where: { 'name': userName } });

    }
}
