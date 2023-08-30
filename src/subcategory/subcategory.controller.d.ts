import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { PaginateQuery } from 'nestjs-paginate';
import { CategoryService } from '../category/category.service';
export declare class SubcategoryController {
    private readonly subcategoryService;
    private readonly categoryRepository;
    constructor(subcategoryService: SubcategoryService, categoryRepository: CategoryService);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<{
        category: any;
        name: string;
        description: string;
    } & import("./entities/subcategory.entity").SubCategory>;
    getAll(query: PaginateQuery, req: any): Promise<import("nestjs-paginate").Paginated<import("./entities/subcategory.entity").SubCategory>>;
    findOne(id: string): Promise<import("./entities/subcategory.entity").SubCategory>;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
