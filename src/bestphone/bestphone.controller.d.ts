/// <reference types="multer" />
import { BestphoneService } from './bestphone.service';
import { CreateBestphoneDto } from './dto/create-bestphone.dto';
import { UpdateBestphoneDto } from './dto/update-bestphone.dto';
import { PaginateQuery } from 'nestjs-paginate';
import { ImageUploadSerive } from '../helper/imageupload.service';
export declare class BestphoneController {
    private readonly bestphoneService;
    private imageUploadService;
    constructor(bestphoneService: BestphoneService, imageUploadService: ImageUploadSerive);
    create(file: Express.Multer.File, createBestphoneDto: CreateBestphoneDto): Promise<CreateBestphoneDto & import("./entities/bestphone.entity").BestPhone>;
    getAll(query: PaginateQuery, req: any): Promise<import("nestjs-paginate").Paginated<import("./entities/bestphone.entity").BestPhone>>;
    findOne(id: string): Promise<import("./entities/bestphone.entity").BestPhone>;
    update(id: string, updateBestphoneDto: UpdateBestphoneDto, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
