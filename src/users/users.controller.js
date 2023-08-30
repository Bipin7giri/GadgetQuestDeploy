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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const users_service_1 = require("../users/users.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
const has_roles_decorator_1 = require("../auth/has-roles.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const roles_enum_1 = require("../constants/roles.enum");
const nestjs_paginate_1 = require("nestjs-paginate");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_1 = require("cloudinary");
const imageupload_service_1 = require("../helper/imageupload.service");
const update_user_dto_1 = require("./dto/update-user.dto");
cloudinary_1.v2.config({
    cloud_name: 'dr54a7gze',
    api_key: '868275163814591',
    api_secret: 'U0-E-H34SF1Dl1vpyroUU361AUQ',
});
let UsersController = class UsersController {
    constructor(userService, authService, imageUploadService) {
        this.userService = userService;
        this.authService = authService;
        this.imageUploadService = imageUploadService;
    }
    getUsers(query, req) {
        return this.userService.findAll(query);
    }
    async create(req, file, createUserDto) {
        console.log(file);
        const imageuploadUrl = await this.imageUploadService.uploadImage(file === null || file === void 0 ? void 0 : file.path);
        return this.userService.createUser(createUserDto, imageuploadUrl);
    }
    getUser(user) {
        return this.userService.findUsersById(user.userId);
    }
    async blockUser(id) {
        const response = await this.userService.blockUserById(+id);
        console.log(response);
        if (response === null) {
            throw new common_1.UnauthorizedException('User not found');
        }
        else {
            return response;
        }
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
    async login(req, loginDto) {
        const result = await this.authService.login(req.user);
        const accessToken = {
            access_token: result.access_token,
        };
        return accessToken;
    }
    async updateUserMe(currentUser, updateUser, file) {
        console.log(file);
        const imageuploadUrl = await this.imageUploadService.uploadImage(file === null || file === void 0 ? void 0 : file.path);
        updateUser.avatar = imageuploadUrl;
        const { userId } = currentUser;
        return this.userService.pathUserById(userId, updateUser);
    }
    async RunScript(autoMigrate) {
        const key = 123456;
        if (autoMigrate.key === key) {
            await this.userService.scriptDb();
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
__decorate([
    (0, has_roles_decorator_1.HasRoles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Get)('/all'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, has_roles_decorator_1.HasRoles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Delete)('block/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "blockUser", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('SuperAdmin/login'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginSuperAdmin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('auth/login'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Patch)('/me'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserMe", null);
__decorate([
    (0, common_1.Post)('/automigrate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.AdminAuto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "RunScript", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        imageupload_service_1.ImageUploadSerive])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map