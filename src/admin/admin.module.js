"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const typeorm_1 = require("@nestjs/typeorm");
const AllEntites_1 = require("../AllEntites");
const platform_express_1 = require("@nestjs/platform-express");
const users_service_1 = require("../users/users.service");
const hash_services_1 = require("../helper/hash.services");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const local_strategy_1 = require("../auth/local.strategy");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const imageupload_service_1 = require("../helper/imageupload.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([AllEntites_1.User, AllEntites_1.Role, AllEntites_1.UserCredential]),
            platform_express_1.MulterModule.register({
                dest: './files',
            }),
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [
            admin_service_1.AdminService,
            users_service_1.UsersService,
            hash_services_1.HashService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            imageupload_service_1.ImageUploadSerive,
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map