import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get("")
    async ping(): Promise<string> {
        return await this.userService.ping()
    }
}
