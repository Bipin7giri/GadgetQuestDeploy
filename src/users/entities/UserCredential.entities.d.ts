import { User } from 'src/AllEntites';
import { SoftDelete } from 'src/AllEntites/HelperEntites/SoftDelete.entites';
export declare class UserCredential extends SoftDelete {
    id: number;
    password: string;
    userId: User;
}
