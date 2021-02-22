"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsComponent = void 0;
var core_1 = require("@angular/core");
var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.goToLink = function () {
        window.open(this.link, "_blank");
    };
    __decorate([
        core_1.Input()
    ], NewsComponent.prototype, "left");
    __decorate([
        core_1.Input()
    ], NewsComponent.prototype, "link");
    __decorate([
        core_1.Input()
    ], NewsComponent.prototype, "text");
    __decorate([
        core_1.Input()
    ], NewsComponent.prototype, "slug");
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.scss']
        })
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
