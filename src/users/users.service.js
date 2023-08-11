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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AllEntites_1 = require("../AllEntites");
const typeorm_2 = require("typeorm");
const hash_services_1 = require("../helper/hash.services");
const nestjs_paginate_1 = require("nestjs-paginate");
const UserCredential_entities_1 = require("./entities/UserCredential.entities");
let UsersService = class UsersService {
    constructor(userRepository, roleRepository, userCredential, hashService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userCredential = userCredential;
        this.hashService = hashService;
    }
    findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.userRepository, {
            sortableColumns: ['id', 'username', 'email'],
            relations: ['roleId'],
            nullSort: 'last',
            searchableColumns: ['username'],
            defaultSortBy: [['id', 'DESC']],
        });
    }
    async registerUser(createUserDto) {
        try {
            console.log(createUserDto);
            const hashPassword = await this.hashService.hashPassword(createUserDto.password);
            const roles = await this.roleRepository.findOne({
                where: {
                    name: 'user',
                },
            });
            const userCredentialId = await this.userCredential.save({
                password: hashPassword,
            });
            const response = await this.userRepository.save({
                userCredentialId: userCredentialId,
                roles: roles,
                email: createUserDto.email,
            });
            return 'user registred';
        }
        catch (err) {
            throw new common_1.UnprocessableEntityException('email must be unique');
            console.log(err);
        }
    }
    getUserByEmail(param) {
        return this.userRepository.findOne(param.email);
    }
    findOne(email) {
        return this.userRepository.findOne({
            where: {
                email: email,
                isBlocked: false,
            },
            relations: {
                userCredentialId: true,
                roleId: true,
            },
        });
    }
    async blockUserById(id) {
        try {
            const checkIfUserExist = await this.userRepository.findOne({
                where: {
                    id: id,
                },
            });
            if (checkIfUserExist) {
                return this.userRepository.update(id, {
                    isBlocked: true,
                });
            }
            else {
                return null;
            }
        }
        catch (err) { }
    }
    findUsersById(id) {
        return this.userRepository.findOne({
            where: {
                id: id,
            },
        });
    }
    pathUserById(id, payload) {
        return this.userRepository.update(id, payload);
    }
    async createUser(createUserDto, avatarUrl) {
        const roleId = await this.roleRepository.findOne({
            where: {
                name: 'employee',
            },
        });
        const hashPassword = await this.hashService.hashPassword(createUserDto.password);
        const userCredentialId = await this.userCredential.save({
            password: hashPassword,
        });
        const checkIfEmailAlreadyexist = await this.userRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });
        if (checkIfEmailAlreadyexist) {
            throw new common_1.UnprocessableEntityException('Email already exist');
        }
        await this.userRepository.save({
            userCredentialId: userCredentialId,
            fullName: createUserDto.fullName,
            gender: createUserDto.gender,
            location: createUserDto.location,
            email: createUserDto.email,
            roleId: roleId,
            avatar: avatarUrl,
        });
        return 'User created';
    }
    async scriptDb() {
        const countIfuser = await this.roleRepository.count();
        console.log(countIfuser);
        if (countIfuser === 0) {
            const admin = new AllEntites_1.Role();
            admin.name = 'superAdmin';
            admin.roles = ['superAdmin'];
            const roles = await this.roleRepository.save({
                name: 'superAdmin',
                roles: ['superAdmin'],
            });
            await this.roleRepository.save({
                name: 'subAdmin',
                roles: ['subAdmin'],
            });
            await this.roleRepository.save({
                name: 'users',
                roles: ['user'],
            });
            console.log(roles);
            const userCredentialId = await this.userCredential.save({
                password: '$2a$12$DzW7DBrHUTYFRie7ycF8ouIubkmsrKzNcZs2bZ6mtWpY4FDYoTwhm',
            });
            const adminCreated = await this.userRepository.save({
                name: 'admin',
                email: 'admin@example.com',
                roleId: roles,
                userCredentialId: userCredentialId,
            });
            console.log(adminCreated);
            return adminCreated;
        }
        else {
            throw new common_1.UnprocessableEntityException('Admin alreay exist');
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AllEntites_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(AllEntites_1.Role)),
    __param(2, (0, typeorm_1.InjectRepository)(UserCredential_entities_1.UserCredential)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        hash_services_1.HashService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map