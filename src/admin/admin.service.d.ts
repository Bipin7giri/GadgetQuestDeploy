import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Role, User, UserCredential } from '../AllEntites';
import { Repository } from 'typeorm';
import { HashService } from '../helper/hash.services';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
export declare class AdminService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly userCredential;
    private hashService;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>, userCredential: Repository<UserCredential>, hashService: HashService);
    create(createAdminDto: CreateAdminDto): string;
    findAll(query: PaginateQuery): Promise<Paginated<User>>;
    blockUserById(id: number): Promise<import("typeorm").UpdateResult>;
    findOne(id: number): string;
    update(id: number, updateAdminDto: UpdateAdminDto): string;
    remove(id: number): string;
}
