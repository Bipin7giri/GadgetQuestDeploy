import { Gender } from '../../helper/enums/Users.enum';
export declare class RegisterDto {
    email: string;
    password: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class AdminAuto {
    key: number;
}
export declare class CreateUserDto {
    email: string;
    password: string;
    location: string;
    gender: Gender;
    fullName: string;
    avatar: any;
}
