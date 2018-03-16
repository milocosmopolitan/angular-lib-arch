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
var AJAX_LAZY_LOAD_API_URLS = new core.InjectionToken('ajax-lazy-load-service AJAX_LAZY_LOAD_API_URLS');
var AJAX_ITEM_API_URLS = new core.InjectionToken('ajax-item-service AJAX_ITEM_API_URLS');
var AJAX_LIST_API_URLS = new core.InjectionToken('ajax-list-service AJAX_LIST_API_URLS');

exports.HttpModule = HttpModule;
exports.AJAX_LAZY_LOAD_API_URLS = AJAX_LAZY_LOAD_API_URLS;
exports.AJAX_ITEM_API_URLS = AJAX_ITEM_API_URLS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=http.umd.js.map
