import { AllPhonesService } from './all-phones.service';
import { CreateAllPhoneDto } from './dto/create-all-phone.dto';
import { UpdateAllPhoneDto } from './dto/update-all-phone.dto';
import { PaginateQuery } from 'nestjs-paginate';
export declare class AllPhonesController {
    private readonly allPhonesService;
    constructor(allPhonesService: AllPhonesService);
    create(createAllPhoneDto: CreateAllPhoneDto): string;
    getAll(query: PaginateQuery, req: any): Promise<import("nestjs-paginate").Paginated<import("./entities/all-phone.entity").AllPhone>>;
    findOne(id: string): Promise<import("./entities/all-phone.entity").AllPhone>;
    update(id: string, updateAllPhoneDto: UpdateAllPhoneDto): string;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
