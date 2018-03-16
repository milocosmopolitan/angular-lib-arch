import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var RowSelectionComponent = /** @class */ (function () {
    function RowSelectionComponent() {
        this.title = 'something';
    }
    /**
     * @return {?}
     */
    RowSelectionComponent.prototype.ngOnInit = function () {
    };
    return RowSelectionComponent;
}());
RowSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'row-selection',
                template: "\n    <p>\n      row-selection works!!!\n    </p>\n    {{title}}\n  ",
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [RowSelectionComponent],
                exports: [RowSelectionComponent]
            },] },
];
/**
 * @nocollapse
 */
GridModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { GridModule, RowSelectionComponent };
//# sourceMappingURL=grid.es5.js.map
