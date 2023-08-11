import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/users/dto/create-user.dto';
import { PaginateQuery } from 'nestjs-paginate';
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
