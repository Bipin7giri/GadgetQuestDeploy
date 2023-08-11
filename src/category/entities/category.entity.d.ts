import { SoftDelete } from "../../AllEntites/HelperEntites/SoftDelete.entites";
import { SubCategory } from "../../AllEntites/index";
export declare class Category extends SoftDelete {
    id: number;
    name: string;
    description: string;
    subcategories: SubCategory[];
}
