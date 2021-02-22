"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EsComponent = void 0;
var core_1 = require("@angular/core");
var EsComponent = /** @class */ (function () {
    function EsComponent() {
        this.options = {
            path: '/assets/img/mitu.json'
        };
        this.loading = true;
    }
    EsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listNews = [
            {
                text: 'Este móvil Xiaomi se está bloqueado tras actualizar a la última versión',
                link: 'https://www.proandroid.com/movil-xiaomi-bloqueado-actualizacion/',
                slug: 'proandroid',
                left: true
            },
            {
                text: 'Problemas de MIUI 12 que aún esperan solución y los modelos más afectados',
                link: 'https://www.movilzona.es/2021/01/20/modelos-problemas-no-resueltos-miui-12/',
                slug: 'movilzona',
                left: false
            },
            {
                text: 'El Xiaomi Redmi Note 9 Pro tiene problemas tras la última actualización',
                link: 'https://elandroidelibre.elespanol.com/2021/02/el-xiaomi-redmi-note-9-pro-tiene-problemas-tras-la-ultima-actualizacion.html',
                slug: 'elandroidelibre',
                left: true
            }
        ];
        setTimeout(function () { _this.loading = false; }, 3000);
    };
    EsComponent = __decorate([
        core_1.Component({
            selector: 'app-es',
            templateUrl: './es.component.html',
            styleUrls: ['./es.component.scss']
        })
    ], EsComponent);
    return EsComponent;
}());
exports.EsComponent = EsComponent;
