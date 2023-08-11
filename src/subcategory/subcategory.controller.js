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
exports.SubcategoryController = void 0;
const common_1 = require("@nestjs/common");
const subcategory_service_1 = require("./subcategory.service");
const create_subcategory_dto_1 = require("./dto/create-subcategory.dto");
const update_subcategory_dto_1 = require("./dto/update-subcategory.dto");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const category_service_1 = require("../category/category.service");
let SubcategoryController = class SubcategoryController {
    constructor(subcategoryService, categoryRepository) {
        this.subcategoryService = subcategoryService;
        this.categoryRepository = categoryRepository;
    }
    async create(createSubcategoryDto) {
        const categoryId = await this.categoryRepository.findOne(createSubcategoryDto.category);
        return this.subcategoryService.create(Object.assign(Object.assign({}, createSubcategoryDto), { category: categoryId }));
    }
    getAll(query, req) {
        return this.subcategoryService.findAll(query);
    }
    findOne(id) {
        return this.subcategoryService.findOne(+id);
    }
    update(id, updateSubcategoryDto) {
        return this.subcategoryService.update(+id, updateSubcategoryDto);
    }
    remove(id) {
        return this.subcategoryService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subcategory_dto_1.CreateSubcategoryDto]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subcategory_dto_1.UpdateSubcategoryDto]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "remove", null);
SubcategoryController = __decorate([
    (0, swagger_1.ApiTags)('subcategory'),
    (0, common_1.Controller)('subcategory'),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService, category_service_1.CategoryService])
], SubcategoryController);
exports.SubcategoryController = SubcategoryController;
//# sourceMappingURL=subcategory.controller.js.map