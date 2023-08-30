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
exports.BestPhone = void 0;
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
const bestphonecategory_entity_1 = require("../../bestphonecategory/entities/bestphonecategory.entity");
const typeorm_1 = require("typeorm");
let BestPhone = class BestPhone extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BestPhone.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BestPhone.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "display", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "chipset", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "memory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "software_and_UI", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "rear_camera", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "front_camera", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "security", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "connectivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "sensors", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "price_in_nepal", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BestPhone.prototype, "cloudinaryUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bestphonecategory_entity_1.BestPhoneCategory, (bestPhoneCategory) => bestPhoneCategory.bestPhoneId, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'best_phone_category_id' }),
    __metadata("design:type", bestphonecategory_entity_1.BestPhoneCategory)
], BestPhone.prototype, "bestPhoneCategoryId", void 0);
BestPhone = __decorate([
    (0, typeorm_1.Entity)()
], BestPhone);
exports.BestPhone = BestPhone;
//# sourceMappingURL=bestphone.entity.js.map