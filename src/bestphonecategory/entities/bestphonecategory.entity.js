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
exports.BestPhoneCategory = void 0;
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
const bestphone_entity_1 = require("../../bestphone/entities/bestphone.entity");
const typeorm_1 = require("typeorm");
let BestPhoneCategory = class BestPhoneCategory extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BestPhoneCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BestPhoneCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhoneCategory.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bestphone_entity_1.BestPhone, (metadata) => metadata.bestPhoneCategoryId, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], BestPhoneCategory.prototype, "bestPhoneId", void 0);
BestPhoneCategory = __decorate([
    (0, typeorm_1.Entity)()
], BestPhoneCategory);
exports.BestPhoneCategory = BestPhoneCategory;
//# sourceMappingURL=bestphonecategory.entity.js.map