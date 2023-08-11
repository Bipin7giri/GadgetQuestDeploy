import { User } from 'src/AllEntites';
import { SoftDelete } from 'src/AllEntites/HelperEntites/SoftDelete.entites';
export declare class Role extends SoftDelete {
    static Admin(Admin: any): void;
    id: number;
    name: string;
    roles: string[];
    userId: User[];
}
