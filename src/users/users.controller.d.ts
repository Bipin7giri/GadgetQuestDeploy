/// <reference types="multer" />
import { AdminAuto, CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { PaginateQuery } from 'nestjs-paginate';
import { ImageUploadSerive } from 'src/helper/imageupload.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    private authService;
    private imageUploadService;
    constructor(userService: UsersService, authService: AuthService, imageUploadService: ImageUploadSerive);
    getUsers(query: PaginateQuery, req: any): Promise<import("nestjs-paginate").Paginated<import("./entities/user.entity").User>>;
    create(req: any, file: Express.Multer.File, createUserDto: CreateUserDto): Promise<string>;
    getUser(user: any): Promise<import("./entities/user.entity").User>;
    blockUser(id: string): Promise<import("typeorm").UpdateResult>;
    loginSuperAdmin(req: any, loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    login(req: any, loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    updateUserMe(currentUser: any, updateUser: UpdateUserDto, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
    RunScript(autoMigrate: AdminAuto): Promise<any>;
}
