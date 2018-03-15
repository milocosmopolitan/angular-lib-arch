(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.http = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = function () { return []; };

exports.HttpModule = HttpModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=http.umd.js.map
