"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestphonecategoryModule = void 0;
const common_1 = require("@nestjs/common");
const bestphonecategory_service_1 = require("./bestphonecategory.service");
const bestphonecategory_controller_1 = require("./bestphonecategory.controller");
const bestphonecategory_entity_1 = require("./entities/bestphonecategory.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BestphonecategoryModule = class BestphonecategoryModule {
};
BestphonecategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bestphonecategory_entity_1.BestPhoneCategory])
        ],
        controllers: [bestphonecategory_controller_1.BestphonecategoryController],
        providers: [bestphonecategory_service_1.BestphonecategoryService]
    })
], BestphonecategoryModule);
exports.BestphonecategoryModule = BestphonecategoryModule;
//# sourceMappingURL=bestphonecategory.module.js.map