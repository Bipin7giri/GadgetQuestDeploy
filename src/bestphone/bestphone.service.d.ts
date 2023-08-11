import { CreateBestphoneDto } from './dto/create-bestphone.dto';
import { UpdateBestphoneDto } from './dto/update-bestphone.dto';
import { BestPhone } from './entities/bestphone.entity';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
export declare class BestphoneService {
    private readonly bestPhoneRepository;
    constructor(bestPhoneRepository: Repository<BestPhone>);
    create(createBestPhoneDto: CreateBestphoneDto): Promise<CreateBestphoneDto & BestPhone>;
    findAll(query: PaginateQuery): Promise<Paginated<BestPhone>>;
    findOne(id: number): Promise<BestPhone>;
    update(id: number, updateBestphoneDto: UpdateBestphoneDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
