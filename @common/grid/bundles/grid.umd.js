(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.grid = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var RowSelectionComponent = /** @class */ (function () {
    function RowSelectionComponent() {
    }
    /**
     * @return {?}
     */
    RowSelectionComponent.prototype.ngOnInit = function () {
    };
    return RowSelectionComponent;
}());
RowSelectionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'row-selection',
                template: "\n    <p>\n      row-selection works!\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
RowSelectionComponent.ctorParameters = function () { return []; };
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [RowSelectionComponent],
                exports: [RowSelectionComponent]
            },] },
];
/**
 * @nocollapse
 */
GridModule.ctorParameters = function () { return []; };

exports.GridModule = GridModule;
exports.RowSelectionComponent = RowSelectionComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=grid.umd.js.map
