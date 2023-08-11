"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadSerive = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: 'dr54a7gze',
    api_key: '868275163814591',
    api_secret: 'U0-E-H34SF1Dl1vpyroUU361AUQ',
});
let ImageUploadSerive = class ImageUploadSerive {
    async uploadImage(path) {
        try {
            const imageUrl = await cloudinary_1.v2.uploader.upload(path);
            return imageUrl.secure_url;
        }
        catch (err) {
            return err;
        }
    }
};
ImageUploadSerive = __decorate([
    (0, common_1.Injectable)()
], ImageUploadSerive);
exports.ImageUploadSerive = ImageUploadSerive;
//# sourceMappingURL=imageupload.service.js.map