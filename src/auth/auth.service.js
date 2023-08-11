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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const hash_services_1 = require("../helper/hash.services");
const users_service_1 = require("../users/users.service");
const dotenv = require("dotenv");
dotenv.config();
let AuthService = class AuthService {
    constructor(usersService, hashService, jwtService) {
        this.usersService = usersService;
        this.hashService = hashService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOne(email);
        if (user) {
            const checkIfCorrectPassword = await this.hashService.comparePassword(pass, user.userCredentialId.password);
            if (!checkIfCorrectPassword) {
                throw new common_1.UnauthorizedException('Incorrect password');
            }
            const { userCredentialId } = user, result = __rest(user, ["userCredentialId"]);
            return result;
        }
        throw new common_1.UnauthorizedException('Email not found');
    }
    async login(user) {
        const payload = {
            email: user.email,
            sub: user.id,
            roleId: user.roleId,
        };
        return {
            access_token: this.jwtService.sign(payload, { secret: 'test' }),
            roleId: user.roleId,
        };
    }
    async decodeJWT(token) {
        return this.jwtService.decode(token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        hash_services_1.HashService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map