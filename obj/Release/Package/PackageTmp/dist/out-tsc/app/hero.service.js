import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var api = '/api';
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(api + "/heroes");
    };
    HeroService.prototype.deleteHero = function (hero) {
        return this.http.delete(api + "/hero/" + hero.uid);
    };
    HeroService.prototype.addHero = function (hero) {
        return this.http.post(api + "/hero/", hero);
    };
    HeroService.prototype.updateHero = function (hero) {
        return this.http.put(api + "/hero/" + hero.uid, hero);
    };
    HeroService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HeroService);
    return HeroService;
}());
export { HeroService };
//# sourceMappingURL=hero.service.js.map