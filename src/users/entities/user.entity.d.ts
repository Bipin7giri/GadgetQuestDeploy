import { Role } from 'src/AllEntites';
import { SoftDelete } from 'src/AllEntites/HelperEntites/SoftDelete.entites';
import { UserCredential } from 'src/users/entities/UserCredential.entities';
import { Gender } from 'src/helper/enums/Users.enum';
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
