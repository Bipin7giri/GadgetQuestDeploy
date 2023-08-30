import { LoginDto } from '../users/dto/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { PaginateQuery } from 'nestjs-paginate';
import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    private authService;
    constructor(adminService: AdminService, authService: AuthService);
    create(createAdminDto: CreateAdminDto): string;
    loginSuperAdmin(req: any, loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    getUsers(query: PaginateQuery, req: any): Promise<import("nestjs-paginate").Paginated<import("../AllEntites").User>>;
    findOne(id: string): string;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}
