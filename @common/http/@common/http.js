import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HttpModule {
}
HttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = () => [];

const AJAX_LAZY_LOAD_API_URLS = new InjectionToken('ajax-lazy-load-service AJAX_LAZY_LOAD_API_URLS');
const AJAX_ITEM_API_URLS = new InjectionToken('ajax-item-service AJAX_ITEM_API_URLS');
const AJAX_LIST_API_URLS = new InjectionToken('ajax-list-service AJAX_LIST_API_URLS');

/**
 * Generated bundle index. Do not edit.
 */

export { HttpModule, AJAX_LAZY_LOAD_API_URLS, AJAX_ITEM_API_URLS };
//# sourceMappingURL=http.js.map
