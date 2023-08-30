import { JwtService } from '@nestjs/jwt';
import { HashService } from '../helper/hash.services';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private hashService;
    private jwtService;
    constructor(usersService: UsersService, hashService: HashService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        roleId: any;
    }>;
    decodeJWT(token: string): Promise<string | {
        [key: string]: any;
    }>;
}
