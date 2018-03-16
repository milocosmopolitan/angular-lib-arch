import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
                selector: 'my-button',
                template: "\n    <p>\n      my-button works!!!!!\n    </p>\n  ",
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MyButtonComponent],
                exports: [MyButtonComponent]
            },] },
];
/**
 * @nocollapse
 */
AuthModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { AuthModule, MyButtonComponent };
//# sourceMappingURL=auth.es5.js.map
