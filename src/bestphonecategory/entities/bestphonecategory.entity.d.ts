import { SoftDelete } from "src/AllEntites/HelperEntites/SoftDelete.entites";
import { BestPhone } from "src/bestphone/entities/bestphone.entity";
export declare class BestPhoneCategory extends SoftDelete {
    id: number;
    name: string;
    description: string;
    bestPhoneId: BestPhone[];
}
