(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.auth = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var MyButtonComponent = /** @class */ (function () {
    function MyButtonComponent() {
    }
    /**
     * @return {?}
     */
    MyButtonComponent.prototype.ngOnInit = function () { };
    return MyButtonComponent;
}());
MyButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'my-button',
                template: "\n    <p>\n      my-button works!\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
MyButtonComponent.ctorParameters = function () { return []; };
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [MyButtonComponent]
            },] },
];
/**
 * @nocollapse
 */
AuthModule.ctorParameters = function () { return []; };

exports.AuthModule = AuthModule;
exports.ɵa = MyButtonComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=auth.umd.js.map
