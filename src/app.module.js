"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const AllEntites_1 = require("./AllEntites");
const nestjs_form_data_1 = require("nestjs-form-data");
const admin_module_1 = require("./admin/admin.module");
const category_module_1 = require("./category/category.module");
const subcategory_module_1 = require("./subcategory/subcategory.module");
const bestphone_module_1 = require("./bestphone/bestphone.module");
const bestphonecategory_module_1 = require("./bestphonecategory/bestphonecategory.module");
const all_phones_module_1 = require("./all-phones/all-phones.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_form_data_1.NestjsFormDataModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: "postgres://default:RPnpt53ZrjEQ@ep-broad-block-49161663.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
                    entities: AllEntites_1.default,
                    logger: 'simple-console',
                    logging: 'all',
                    synchronize: false,
                    autoLoadEntities: true,
                    migrations: ["dist/migrations/*{.ts,.js}"],
                    migrationsTableName: "custom_migration_table",
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            admin_module_1.AdminModule,
            category_module_1.CategoryModule,
            subcategory_module_1.SubcategoryModule,
            bestphone_module_1.BestphoneModule,
            bestphonecategory_module_1.BestphonecategoryModule,
            all_phones_module_1.AllPhonesModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map