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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.isAccOpen1 = false;
        this.isAccOpen2 = false;
        this.isAccOpen3 = false;
        this.isAccOpen4 = false;
        this.isAccOpen5 = false;
        this.isAccOpen6 = false;
    }
    FaqComponent.prototype.ngOnInit = function () { };
    FaqComponent = __decorate([
        core_1.Component({
            selector: 'app-faq',
            templateUrl: './faq.component.html',
            styleUrls: ['./faq.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());
exports.FaqComponent = FaqComponent;
//# sourceMappingURL=faq.component.js.map