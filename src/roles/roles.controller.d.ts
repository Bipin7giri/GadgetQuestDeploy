import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PaginateQuery } from 'nestjs-paginate';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<CreateRoleDto & import("./entities/role.entity").Role>;
    findAll(query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<import("./entities/role.entity").Role>>;
    findOne(id: string): string;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
