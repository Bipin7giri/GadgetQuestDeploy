import { User, Role } from '../AllEntites';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { HashService } from '../helper/hash.services';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { UserCredential } from './entities/UserCredential.entities';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly userCredential;
    private hashService;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>, userCredential: Repository<UserCredential>, hashService: HashService);
    findAll(query: PaginateQuery): Promise<Paginated<User>>;
    registerUser(createUserDto: CreateUserDto): Promise<string>;
    getUserByEmail(param: any): Promise<User>;
    findOne(email: string): Promise<User>;
    blockUserById(id: number): Promise<import("typeorm").UpdateResult>;
    findUsersById(id: number): Promise<User>;
    pathUserById(id: number, payload: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    createUser(createUserDto: CreateUserDto, avatarUrl: string): Promise<string>;
    scriptDb(): Promise<{
        name: string;
        email: string;
        roleId: any;
        userCredentialId: {
            password: string;
        } & UserCredential;
    } & User>;
}
