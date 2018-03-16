import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class MyButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
MyButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-button',
                template: `
    <p>
      my-button works!
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
MyButtonComponent.ctorParameters = () => [];

class AuthModule {
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MyButtonComponent]
            },] },
];
/**
 * @nocollapse
 */
AuthModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AuthModule, MyButtonComponent as ɵa };
//# sourceMappingURL=auth.js.map
