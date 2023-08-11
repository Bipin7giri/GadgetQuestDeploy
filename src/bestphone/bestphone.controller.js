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
exports.BestphoneController = void 0;
const common_1 = require("@nestjs/common");
const bestphone_service_1 = require("./bestphone.service");
const create_bestphone_dto_1 = require("./dto/create-bestphone.dto");
const update_bestphone_dto_1 = require("./dto/update-bestphone.dto");
const nestjs_paginate_1 = require("nestjs-paginate");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const imageupload_service_1 = require("../helper/imageupload.service");
let BestphoneController = class BestphoneController {
    constructor(bestphoneService, imageUploadService) {
        this.bestphoneService = bestphoneService;
        this.imageUploadService = imageUploadService;
    }
    async create(file, createBestphoneDto) {
        const imageuploadUrl = await this.imageUploadService.uploadImage(file === null || file === void 0 ? void 0 : file.path);
        return this.bestphoneService.create(Object.assign(Object.assign({}, createBestphoneDto), { cloudinaryUrl: imageuploadUrl }));
    }
    getAll(query, req) {
        return this.bestphoneService.findAll(query);
    }
    findOne(id) {
        return this.bestphoneService.findOne(+id);
    }
    async update(id, updateBestphoneDto, file) {
        if (file) {
            const imageuploadUrl = await this.imageUploadService.uploadImage(file === null || file === void 0 ? void 0 : file.path);
            return this.bestphoneService.update(+id, Object.assign(Object.assign({}, updateBestphoneDto), { cloudinaryUrl: imageuploadUrl }));
        }
        return this.bestphoneService.update(+id, updateBestphoneDto);
    }
    remove(id) {
        return this.bestphoneService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_bestphone_dto_1.CreateBestphoneDto]),
    __metadata("design:returntype", Promise)
], BestphoneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BestphoneController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BestphoneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bestphone_dto_1.UpdateBestphoneDto, Object]),
    __metadata("design:returntype", Promise)
], BestphoneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BestphoneController.prototype, "remove", null);
BestphoneController = __decorate([
    (0, swagger_1.ApiTags)('Bestphone'),
    (0, common_1.Controller)('bestphone'),
    __metadata("design:paramtypes", [bestphone_service_1.BestphoneService,
        imageupload_service_1.ImageUploadSerive])
], BestphoneController);
exports.BestphoneController = BestphoneController;
//# sourceMappingURL=bestphone.controller.js.map