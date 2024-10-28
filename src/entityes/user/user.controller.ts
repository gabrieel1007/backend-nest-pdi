import { Controller, Get, Post, Body, Param, Delete, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { AuthGuard } from "../../auth/auth.guard";
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsersAndPoints(): Promise<User[]> {
        return this.userService.getAllUsersAndPoints();
    }
}