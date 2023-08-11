import { Gender } from 'src/helper/enums/Users.enum';
import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    phoneNumber: string;
    position: string;
    gender: Gender;
    fullName: string;
    avatar: any;
}
export {};
