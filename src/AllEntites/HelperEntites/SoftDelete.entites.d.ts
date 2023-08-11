import { TimeStamp } from './TimeStamp.entities';
export declare class SoftDelete extends TimeStamp {
    deletedBy?: string;
    deleted?: boolean;
    deletedAt?: Date;
}
