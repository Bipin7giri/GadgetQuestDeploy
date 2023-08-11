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
exports.AllPhonesService = void 0;
const common_1 = require("@nestjs/common");
const all_phone_entity_1 = require("./entities/all-phone.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
let AllPhonesService = class AllPhonesService {
    constructor(allPhoneRepository) {
        this.allPhoneRepository = allPhoneRepository;
    }
    create(createAllPhoneDto) {
        return 'This action adds a new allPhone';
    }
    findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.allPhoneRepository, {
            sortableColumns: ['id', 'announced', 'build', 'metadata.camera', 'metadata.camera', 'metadata.gpu'],
            nullSort: 'last',
            searchableColumns: [
                'metadata.camera', 'metadata.camera', 'metadata.gpu', 'prices.amount', 'metadata.os', 'metadata.colors', 'storage.ram'
            ],
            relations: {
                metadata: true,
                prices: true,
                storage: true,
            },
            defaultSortBy: [['updatedAt', 'DESC']],
            where: {
                deleted: false
            }
        });
    }
    findOne(id) {
        return this.allPhoneRepository.findOne({ where: { id: id }, relations: { prices: true, storage: true, metadata: true } });
    }
    update(id, updateAllPhoneDto) {
        return `This action updates a #${id} allPhone`;
    }
    remove(id) {
        return this.allPhoneRepository.update(id, { deleted: true });
    }
};
AllPhonesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(all_phone_entity_1.AllPhone)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AllPhonesService);
exports.AllPhonesService = AllPhonesService;
//# sourceMappingURL=all-phones.service.js.map