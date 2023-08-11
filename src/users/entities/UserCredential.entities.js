"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredential = void 0;
const AllEntites_1 = require("../../AllEntites");
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
const typeorm_1 = require("typeorm");
let UserCredential = class UserCredential extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'id',
    }),
    __metadata("design:type", Number)
], UserCredential.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserCredential.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => AllEntites_1.User, (user) => user.roleId),
    __metadata("design:type", AllEntites_1.User)
], UserCredential.prototype, "userId", void 0);
UserCredential = __decorate([
    (0, typeorm_1.Entity)()
], UserCredential);
exports.UserCredential = UserCredential;
//# sourceMappingURL=UserCredential.entities.js.map