import { CreateBestphonecategoryDto } from './dto/create-bestphonecategory.dto';
import { UpdateBestphonecategoryDto } from './dto/update-bestphonecategory.dto';
import { BestPhoneCategory } from './entities/bestphonecategory.entity';
import { Repository } from 'typeorm';
export declare class BestphonecategoryService {
    private readonly bestPhoneCategoryRepository;
    constructor(bestPhoneCategoryRepository: Repository<BestPhoneCategory>);
    create(createBestphonecategoryDto: CreateBestphonecategoryDto): Promise<CreateBestphonecategoryDto & BestPhoneCategory>;
    findAll(): Promise<BestPhoneCategory[]>;
    findOne(id: number): Promise<BestPhoneCategory>;
    update(id: number, updateBestphonecategoryDto: UpdateBestphonecategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
