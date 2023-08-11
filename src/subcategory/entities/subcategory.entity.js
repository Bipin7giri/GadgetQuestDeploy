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
exports.SubCategory = void 0;
const typeorm_1 = require("typeorm");
const AllEntites_1 = require("../../AllEntites");
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
const all_phone_entity_1 = require("../../all-phones/entities/all-phone.entity");
let SubCategory = class SubCategory extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SubCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AllEntites_1.Category, (category) => category.subcategories, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", AllEntites_1.Category)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => all_phone_entity_1.AllPhone, (phone) => phone.subCategory),
    __metadata("design:type", Array)
], SubCategory.prototype, "products", void 0);
SubCategory = __decorate([
    (0, typeorm_1.Entity)()
], SubCategory);
exports.SubCategory = SubCategory;
//# sourceMappingURL=subcategory.entity.js.map