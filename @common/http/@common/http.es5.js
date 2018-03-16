import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = function () { return []; };
var AJAX_LAZY_LOAD_API_URLS = new InjectionToken('ajax-lazy-load-service AJAX_LAZY_LOAD_API_URLS');
var AJAX_ITEM_API_URLS = new InjectionToken('ajax-item-service AJAX_ITEM_API_URLS');
var AJAX_LIST_API_URLS = new InjectionToken('ajax-list-service AJAX_LIST_API_URLS');
/**
 * Generated bundle index. Do not edit.
 */
export { HttpModule, AJAX_LAZY_LOAD_API_URLS, AJAX_ITEM_API_URLS };
//# sourceMappingURL=http.es5.js.map
