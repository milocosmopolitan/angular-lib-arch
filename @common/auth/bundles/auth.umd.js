(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.auth = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule]
            },] },
];
/**
 * @nocollapse
 */
AuthModule.ctorParameters = function () { return []; };

exports.AuthModule = AuthModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
