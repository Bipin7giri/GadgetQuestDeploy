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
exports.BestphonecategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bestphonecategory_entity_1 = require("./entities/bestphonecategory.entity");
const typeorm_2 = require("typeorm");
let BestphonecategoryService = class BestphonecategoryService {
    constructor(bestPhoneCategoryRepository) {
        this.bestPhoneCategoryRepository = bestPhoneCategoryRepository;
    }
    create(createBestphonecategoryDto) {
        return this.bestPhoneCategoryRepository.save(createBestphonecategoryDto);
    }
    findAll() {
        return this.bestPhoneCategoryRepository.find({
            where: {
                deleted: false,
            },
        });
    }
    findOne(id) {
        return this.bestPhoneCategoryRepository.findOne({
            where: {
                id: id,
            },
        });
    }
    update(id, updateBestphonecategoryDto) {
        return this.bestPhoneCategoryRepository.update(id, updateBestphonecategoryDto);
    }
    remove(id) {
        return this.bestPhoneCategoryRepository.update(id, {
            deleted: true,
        });
    }
};
BestphonecategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bestphonecategory_entity_1.BestPhoneCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BestphonecategoryService);
exports.BestphonecategoryService = BestphonecategoryService;
//# sourceMappingURL=bestphonecategory.service.js.map