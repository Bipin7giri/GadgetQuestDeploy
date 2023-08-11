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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
const roles_enum_1 = require("../constants/roles.enum");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const has_roles_decorator_1 = require("../auth/has-roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let AdminController = class AdminController {
    constructor(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
    }
    create(createAdminDto) {
        return this.adminService.create(createAdminDto);
    }
    async loginSuperAdmin(req, loginDto) {
        const result = await this.authService.login(req.user);
        if (result.roleId.name === roles_enum_1.Role.ADMIN) {
            const access_token = { access_token: result.access_token };
            return access_token;
        }
        else {
            throw new common_1.UnauthorizedException('Sorry Unauthorized ');
        }
    }
    getUsers(query, req) {
        return this.adminService.findAll(query);
    }
    findOne(id) {
        return this.adminService.findOne(+id);
    }
    update(id, updateAdminDto) {
        return this.adminService.update(+id, updateAdminDto);
    }
    remove(id) {
        return this.adminService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('sub_admin/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('SuperAdmin/login'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "loginSuperAdmin", null);
__decorate([
    (0, has_roles_decorator_1.HasRoles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('/all'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        auth_service_1.AuthService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map