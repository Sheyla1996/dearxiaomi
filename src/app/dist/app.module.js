"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.playerFactory = void 0;
var news_component_1 = require("./components/misc/news/news.component");
var es_component_1 = require("./components/pages/es/es.component");
var disqus_component_1 = require("./components/misc/disqus/disqus.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_disqus_1 = require("ngx-disqus");
var card_1 = require("@angular/material/card");
var toolbar_1 = require("@angular/material/toolbar");
var tabs_1 = require("@angular/material/tabs");
var ngx_lottie_1 = require("ngx-lottie");
var lottie_web_1 = require("lottie-web");
function playerFactory() {
    return lottie_web_1["default"];
}
exports.playerFactory = playerFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                es_component_1.EsComponent,
                disqus_component_1.DisqusComponent,
                news_component_1.NewsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                ngx_disqus_1.DisqusModule.forRoot('dear-xiaomi'),
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                tabs_1.MatTabsModule,
                ngx_lottie_1.LottieModule.forRoot({ player: playerFactory })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
