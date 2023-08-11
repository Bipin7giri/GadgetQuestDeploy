import { BestphonecategoryService } from './bestphonecategory.service';
import { CreateBestphonecategoryDto } from './dto/create-bestphonecategory.dto';
import { UpdateBestphonecategoryDto } from './dto/update-bestphonecategory.dto';
export declare class BestphonecategoryController {
    private readonly bestphonecategoryService;
    constructor(bestphonecategoryService: BestphonecategoryService);
    create(createBestphonecategoryDto: CreateBestphonecategoryDto): Promise<CreateBestphonecategoryDto & import("./entities/bestphonecategory.entity").BestPhoneCategory>;
    findAll(): Promise<import("./entities/bestphonecategory.entity").BestPhoneCategory[]>;
    findOne(id: string): Promise<import("./entities/bestphonecategory.entity").BestPhoneCategory>;
    update(id: string, updateBestphonecategoryDto: UpdateBestphonecategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
