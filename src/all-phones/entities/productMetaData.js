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
exports.ProductMetadata = void 0;
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
const typeorm_1 = require("typeorm");
const all_phone_entity_1 = require("./all-phone.entity");
let ProductMetadata = class ProductMetadata extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductMetadata.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "chipset", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "gpu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "cardSlot", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "internal", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "single", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "colors", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "camera", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], ProductMetadata.prototype, "models", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => all_phone_entity_1.AllPhone, (allPhone) => allPhone.metadata, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "phone_id" }),
    __metadata("design:type", all_phone_entity_1.AllPhone)
], ProductMetadata.prototype, "phone", void 0);
ProductMetadata = __decorate([
    (0, typeorm_1.Entity)()
], ProductMetadata);
exports.ProductMetadata = ProductMetadata;
//# sourceMappingURL=productMetaData.js.map