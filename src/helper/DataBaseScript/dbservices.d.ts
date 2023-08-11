import { Repository } from 'typeorm';
import { User, Role } from '../../AllEntites/index';
export declare class EntityNameService {
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>);
}
