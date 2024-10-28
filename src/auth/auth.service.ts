import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../entityes/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ){
        this.jwtExpirationTimeInSeconds = this.configService.get<number>('JWT_EXPIRATION_TIME');
    }

    async signIn(username: string, password: string): Promise<AuthResponseDto> {
        const foundUser = await this.userService.findByUserName(username);

        if(!foundUser) {;
            throw new UnauthorizedException();
        }
        
        const payload = { 
            sub: foundUser.user_id, 
            username: foundUser.name, 
            admin: foundUser.is_admin 
        };  
        
        const token = this.jwtService.sign(payload);

        return { 
            token, 
            //expiresIn: this.jwtExpirationTimeInSeconds, 
            admin: foundUser.is_admin,
            name: foundUser.name,
            email: foundUser.email,
            id: foundUser.user_id
        };
    };
}

