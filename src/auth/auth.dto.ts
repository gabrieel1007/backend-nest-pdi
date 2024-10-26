export class AuthResponseDto {
    token: string;
    expiresIn: number;
    admin: boolean;
    name: string;
    email: string;
    id: number
}