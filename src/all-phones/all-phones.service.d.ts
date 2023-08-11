import { CreateAllPhoneDto } from './dto/create-all-phone.dto';
import { UpdateAllPhoneDto } from './dto/update-all-phone.dto';
import { AllPhone } from './entities/all-phone.entity';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
export declare class AllPhonesService {
    private readonly allPhoneRepository;
    constructor(allPhoneRepository: Repository<AllPhone>);
    create(createAllPhoneDto: CreateAllPhoneDto): string;
    findAll(query: PaginateQuery): Promise<Paginated<AllPhone>>;
    findOne(id: number): Promise<AllPhone>;
    update(id: number, updateAllPhoneDto: UpdateAllPhoneDto): string;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
