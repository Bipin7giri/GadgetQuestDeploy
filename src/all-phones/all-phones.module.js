"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPhonesModule = void 0;
const common_1 = require("@nestjs/common");
const all_phones_service_1 = require("./all-phones.service");
const all_phones_controller_1 = require("./all-phones.controller");
const all_phone_entity_1 = require("./entities/all-phone.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AllPhonesModule = class AllPhonesModule {
};
AllPhonesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([all_phone_entity_1.AllPhone])
        ],
        controllers: [all_phones_controller_1.AllPhonesController],
        providers: [all_phones_service_1.AllPhonesService]
    })
], AllPhonesModule);
exports.AllPhonesModule = AllPhonesModule;
//# sourceMappingURL=all-phones.module.js.map