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
exports.BestphoneService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bestphone_entity_1 = require("./entities/bestphone.entity");
const typeorm_2 = require("typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
let BestphoneService = class BestphoneService {
    constructor(bestPhoneRepository) {
        this.bestPhoneRepository = bestPhoneRepository;
    }
    create(createBestPhoneDto) {
        return this.bestPhoneRepository.save(createBestPhoneDto);
    }
    findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.bestPhoneRepository, {
            sortableColumns: ['id', 'battery', 'price_in_nepal'],
            nullSort: 'last',
            searchableColumns: [
                'battery',
                'chipset',
                'display',
                'key',
                'description',
                'front_camera',
                'memory',
                'product_name',
            ],
            defaultSortBy: [['updatedAt', 'DESC']],
            where: {
                deleted: false
            }
        });
    }
    findOne(id) {
        return this.bestPhoneRepository.findOne({
            where: {
                id: id,
            },
        });
    }
    update(id, updateBestphoneDto) {
        return this.bestPhoneRepository.update(id, updateBestphoneDto);
    }
    remove(id) {
        return this.bestPhoneRepository.update(id, {
            deleted: true,
        });
    }
};
BestphoneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bestphone_entity_1.BestPhone)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BestphoneService);
exports.BestphoneService = BestphoneService;
//# sourceMappingURL=bestphone.service.js.map