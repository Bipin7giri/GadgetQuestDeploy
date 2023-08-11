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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPhonesController = void 0;
const common_1 = require("@nestjs/common");
const all_phones_service_1 = require("./all-phones.service");
const create_all_phone_dto_1 = require("./dto/create-all-phone.dto");
const update_all_phone_dto_1 = require("./dto/update-all-phone.dto");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
let AllPhonesController = class AllPhonesController {
    constructor(allPhonesService) {
        this.allPhonesService = allPhonesService;
    }
    create(createAllPhoneDto) {
        return this.allPhonesService.create(createAllPhoneDto);
    }
    getAll(query, req) {
        return this.allPhonesService.findAll(query);
    }
    findOne(id) {
        return this.allPhonesService.findOne(+id);
    }
    update(id, updateAllPhoneDto) {
        return this.allPhonesService.update(+id, updateAllPhoneDto);
    }
    remove(id) {
        return this.allPhonesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_all_phone_dto_1.CreateAllPhoneDto]),
    __metadata("design:returntype", void 0)
], AllPhonesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AllPhonesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllPhonesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_all_phone_dto_1.UpdateAllPhoneDto]),
    __metadata("design:returntype", void 0)
], AllPhonesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllPhonesController.prototype, "remove", null);
AllPhonesController = __decorate([
    (0, swagger_1.ApiTags)('All Phones'),
    (0, common_1.Controller)('all-phones'),
    __metadata("design:paramtypes", [all_phones_service_1.AllPhonesService])
], AllPhonesController);
exports.AllPhonesController = AllPhonesController;
//# sourceMappingURL=all-phones.controller.js.map