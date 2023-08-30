"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestphoneModule = void 0;
const common_1 = require("@nestjs/common");
const bestphone_service_1 = require("./bestphone.service");
const bestphone_controller_1 = require("./bestphone.controller");
const bestphone_entity_1 = require("./entities/bestphone.entity");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
const imageupload_service_1 = require("../helper/imageupload.service");
const multer_1 = require("multer");
let BestphoneModule = class BestphoneModule {
};
BestphoneModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bestphone_entity_1.BestPhone]),
            platform_express_1.MulterModule.register({
                dest: './files',
            }),
        ],
        controllers: [bestphone_controller_1.BestphoneController],
        providers: [bestphone_service_1.BestphoneService, imageupload_service_1.ImageUploadSerive],
    })
], BestphoneModule);
exports.BestphoneModule = BestphoneModule;
//# sourceMappingURL=bestphone.module.js.map