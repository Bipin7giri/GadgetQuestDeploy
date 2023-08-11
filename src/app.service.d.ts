import { Repository } from 'typeorm';
import { Role, User } from './AllEntites';
export declare class AppService {
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>);
    getHello(): string;
}
