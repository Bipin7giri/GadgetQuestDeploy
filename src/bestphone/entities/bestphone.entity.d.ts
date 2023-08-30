import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
import { BestPhoneCategory } from '../../bestphonecategory/entities/bestphonecategory.entity';
export declare class BestPhone extends SoftDelete {
    id: number;
    key: string;
    description: string;
    product_name: string;
    display: string;
    chipset: string;
    memory: string;
    software_and_UI: string;
    rear_camera: string;
    front_camera: string;
    security: string;
    connectivity: string;
    sensors: string;
    battery: string;
    price_in_nepal: string;
    cloudinaryUrl: string;
    bestPhoneCategoryId: BestPhoneCategory;
}
