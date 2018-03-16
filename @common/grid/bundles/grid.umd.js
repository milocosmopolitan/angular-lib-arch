(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.grid = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
/**
 * @nocollapse
 */
GridModule.ctorParameters = function () { return []; };

exports.GridModule = GridModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=grid.umd.js.map
