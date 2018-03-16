import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class RowSelectionComponent {
    constructor() {
        this.title = 'something';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RowSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'row-selection',
                template: `
    <p>
      row-selection works!!!
    </p>
    {{title}}
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
RowSelectionComponent.ctorParameters = () => [];

class GridModule {
}
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
GridModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { GridModule, RowSelectionComponent };
//# sourceMappingURL=grid.js.map
