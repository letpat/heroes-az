import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.addingHero = false;
        this.heroes = [];
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.cancel = function () {
        this.addingHero = false;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        this.heroService.deleteHero(hero).subscribe(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        return this.heroService.getHeroes().subscribe(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroesComponent.prototype.enableAddMode = function () {
        this.addingHero = true;
        this.selectedHero = new Hero();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.addingHero = false;
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.save = function () {
        var _this = this;
        if (this.addingHero) {
            this.heroService.addHero(this.selectedHero).subscribe(function (hero) {
                _this.addingHero = false;
                _this.selectedHero = null;
                _this.heroes.push(hero);
            });
        }
        else {
            this.heroService.updateHero(this.selectedHero).subscribe(function (hero) {
                _this.addingHero = false;
                _this.selectedHero = null;
            });
        }
    };
    HeroesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map