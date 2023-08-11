import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(query: PaginateQuery): Promise<Paginated<Category>>;
    findOne(id: number): Promise<Category>;
    create(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        description: string;
    } & Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
