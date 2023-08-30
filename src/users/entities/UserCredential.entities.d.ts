import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
import { User } from '../../AllEntites';
export declare class UserCredential extends SoftDelete {
    id: number;
    password: string;
    userId: User;
}
