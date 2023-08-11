import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { SubCategory } from './entities/subcategory.entity';
export declare class SubcategoryService {
    private readonly subCategoryRepository;
    constructor(subCategoryRepository: Repository<SubCategory>);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<{
        category: any;
        name: string;
        description: string;
    } & SubCategory>;
    findAll(query: PaginateQuery): Promise<Paginated<SubCategory>>;
    findOne(id: number): Promise<SubCategory>;
    update(id: number, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
