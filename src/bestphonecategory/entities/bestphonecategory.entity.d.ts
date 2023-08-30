import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
import { BestPhone } from "../../bestphone/entities/bestphone.entity";
export declare class BestPhoneCategory extends SoftDelete {
    id: number;
    name: string;
    description: string;
    bestPhoneId: BestPhone[];
}
