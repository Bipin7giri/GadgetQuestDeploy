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
exports.Storage = void 0;
const typeorm_1 = require("typeorm");
const all_phone_entity_1 = require("./all-phone.entity");
const SoftDelete_entites_1 = require("../../AllEntites/HelperEntites/SoftDelete.entites");
let Storage = class Storage extends SoftDelete_entites_1.SoftDelete {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Storage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Storage.prototype, "ram", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Storage.prototype, "rom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => all_phone_entity_1.AllPhone, phone => phone.storage),
    (0, typeorm_1.JoinColumn)({ name: "product_id" }),
    __metadata("design:type", all_phone_entity_1.AllPhone)
], Storage.prototype, "product_id", void 0);
Storage = __decorate([
    (0, typeorm_1.Entity)()
], Storage);
exports.Storage = Storage;
//# sourceMappingURL=storage.entity.js.map