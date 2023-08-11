import { SoftDelete } from "src/AllEntites/HelperEntites/SoftDelete.entites";
import { AllPhone } from "./all-phone.entity";
export declare class ProductMetadata extends SoftDelete {
    id: number;
    key: string;
    value: string | null;
    os: string | null;
    chipset: string | null;
    cpu: string | null;
    gpu: string | null;
    cardSlot: string | null;
    internal: string | null;
    single: string | null;
    colors: string | null;
    camera: string | null;
    models: string | null;
    phone: AllPhone;
}
