import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
import { AllPhone, Category } from '../../AllEntites';
export declare class SubCategory extends SoftDelete {
    id: number;
    name: string;
    description: string;
    category: Category;
    products: AllPhone[];
}
