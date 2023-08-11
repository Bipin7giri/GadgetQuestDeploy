import { Category } from "src/AllEntites";
import { SoftDelete } from "src/AllEntites/HelperEntites/SoftDelete.entites";
import { AllPhone } from "src/all-phones/entities/all-phone.entity";
export declare class SubCategory extends SoftDelete {
    id: number;
    name: string;
    description: string;
    category: Category;
    products: AllPhone[];
}
