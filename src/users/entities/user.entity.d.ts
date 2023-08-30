import { Role } from '../../AllEntites/index';
import { SoftDelete } from '../../AllEntites/HelperEntites/SoftDelete.entites';
import { UserCredential } from '../../AllEntites';
import { Gender } from '../../helper/enums/Users.enum';
export declare class User extends SoftDelete {
    id: number;
    fullName: string;
    username: string;
    email: string;
    address: string;
    phoneNumber: string;
    gender: Gender;
    location: string;
    avatar: string;
    isBlocked: boolean;
    roleId: Role;
    userCredentialId: UserCredential;
}
