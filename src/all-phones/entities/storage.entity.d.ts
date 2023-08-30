import { AllPhone } from './all-phone.entity';
import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
export declare class Storage extends SoftDelete {
    id: number;
    ram: number;
    rom: number;
    product_id: AllPhone;
}
