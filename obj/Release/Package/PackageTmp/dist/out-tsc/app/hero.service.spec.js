import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
describe('HeroService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HeroService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=hero.service.spec.js.map