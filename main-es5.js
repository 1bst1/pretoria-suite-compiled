function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/room/room.component */
    "./src/app/components/room/room.component.ts");
    /* harmony import */


    var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/booking/booking.component */
    "./src/app/components/booking/booking.component.ts");
    /* harmony import */


    var _components_struttura_struttura_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/struttura/struttura.component */
    "./src/app/components/struttura/struttura.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'prenota',
      component: _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"]
    }, {
      path: 'camere',
      component: _components_struttura_struttura_component__WEBPACK_IMPORTED_MODULE_5__["StrutturaComponent"]
    }, {
      path: "camere/:idRoom",
      component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'bnb-app';
        var path = localStorage.getItem('path');

        if (path) {
          localStorage.removeItem('path');
          this.router.navigateByUrl(path);
        }
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 29,
      vars: 0,
      consts: [[1, "bg-primary", 2, "height", "100vh"], [1, "bg-light", "container-fluid", "pt-3", "pb-5"], [1, "footer", "bg-primary", "text-light", "p-5", 2, "font-size", ".85rem"], [1, "row", "m-4", "pb-4"], [1, "col-xs-12", "col-sm-12", "col-md"], [1, "font-weight-bold"], [1, "m-4", "p-2", "text-secondary"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Chi siamo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Pretoria Suite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Bed & Breakfast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Indirizzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Via Pretoria, 63");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " 85100 Potenza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Italia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Disclaimer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Questo sito utilizza cookies tecnici necessari per la navigazione tra pagine. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Non \xE8 attivo nessun servizio di profilazione commerciale e/o statistica. Teniamo ai vostri dati. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");
    /* harmony import */


    var _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/room/room.component */
    "./src/app/components/room/room.component.ts");
    /* harmony import */


    var _services_room_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/rooms/rooms.component */
    "./src/app/components/rooms/rooms.component.ts");
    /* harmony import */


    var _components_price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/price-selector/price-selector.component */
    "./src/app/components/price-selector/price-selector.component.ts");
    /* harmony import */


    var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/booking/booking.component */
    "./src/app/components/booking/booking.component.ts");
    /* harmony import */


    var _components_struttura_struttura_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/struttura/struttura.component */
    "./src/app/components/struttura/struttura.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_room_service__WEBPACK_IMPORTED_MODULE_9__["RoomService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"], _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__["RoomComponent"], _components_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__["RoomsComponent"], _components_price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_12__["PriceSelector"], _components_struttura_struttura_component__WEBPACK_IMPORTED_MODULE_14__["StrutturaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_13__["BookingComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"], _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__["RoomComponent"], _components_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__["RoomsComponent"], _components_price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_12__["PriceSelector"], _components_struttura_struttura_component__WEBPACK_IMPORTED_MODULE_14__["StrutturaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
          exports: [],
          providers: [_services_room_service__WEBPACK_IMPORTED_MODULE_9__["RoomService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/booking/booking.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/booking/booking.component.ts ***!
    \*********************************************************/

  /*! exports provided: BookingComponent */

  /***/
  function srcAppComponentsBookingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingComponent", function () {
      return BookingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../price-selector/price-selector.component */
    "./src/app/components/price-selector/price-selector.component.ts");

    function BookingComponent_ng_container_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "price-selector", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var room_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Camera ", room_r1.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("prices", room_r1.price);
      }
    }

    var BookingComponent = /*#__PURE__*/function () {
      function BookingComponent(roomService, router) {
        _classCallCheck(this, BookingComponent);

        this.roomService = roomService;
        this.router = router;
        this.Arr = Array;
      }

      _createClass(BookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rooms = this.roomService.getRooms();
        }
      }]);

      return BookingComponent;
    }();

    BookingComponent.??fac = function BookingComponent_Factory(t) {
      return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    BookingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BookingComponent,
      selectors: [["booking"]],
      decls: 42,
      vars: 1,
      consts: [[1, "container-fluid", "p-3"], [1, "row"], [1, "col-md-12", "col-lg-8", "mx-auto", "bg-transparent", "p-3"], [1, "row", "px-3", "pb-4"], [1, "card", "col", "bg-transparent", "text-primary", "shadow-lg", "col", "px-0", "text-center", "rounded"], [1, "card-header", "bg-primary", "text-white", "border-0", "m-0", "rounded-0"], [1, "font-weight-bold"], [1, "card-footer", "bg-white", "rounded-0", "m-0"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.com/maps/place/B%26B+Pretoria+Suite", 1, "text-secondary"], [1, "row", "px-3"], [1, "col-12", "card", "rounded", "shadow", "mt-4"], [1, "col-4", "card-body", "bg-primary", "text-white", "text-center"], [1, "text-info", 2, "font-size", "5rem"], [1, "fas", "fa-phone"], [1, "col-8", "card-body"], ["href", "tel:+393466857869", 1, "text-secondary"], [1, "text-warning", 2, "font-size", "5rem"], [1, "fas", "fa-envelope"], ["href", "mailto:talos91@libero.it", 1, "text-secondary"], [1, "col-md-12", "col-lg-4", "bg-transparent", "p-3"], [1, "shadow", "card", "rounded", "bg-light"], [1, "card-header", "bg-primary", "text-white", "text-center", "p-0"], [1, "font-weight-bold", "my-4"], [1, "card-body"], [4, "ngFor", "ngForOf"], [1, "row", "mb-4"], [1, "col-auto", "mx-auto"], [1, "text-center"], [3, "prices"]],
      template: function BookingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Pretoria Suite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Via Pretoria 63, Potenza, Italia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Telefono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "+39 346 685 7869");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Indirizzo Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "talos91@libero.it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "La nostra offerta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, BookingComponent_ng_container_41_Template, 6, 2, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.rooms);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_4__["PriceSelector"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'booking',
          templateUrl: 'booking.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/gallery/gallery.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/gallery/gallery.component.ts ***!
    \*********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_models_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/room.model */
    "./src/app/models/room.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["carousel"];

    function GalleryComponent_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var i_r3 = ctx_r5.index;
        var img_r2 = ctx_r5.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("alt", "", ctx_r4.description, " - ", i_r3, " - B&B Suite Pretoria - Via Pretoria 63, Potenza");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function GalleryComponent_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, GalleryComponent_2_ng_template_0_Template, 2, 3, "ng-template", 3);
      }
    }

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);

        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "togglePaused",
        value: function togglePaused() {
          if (this.paused) {
            this.carousel.cycle();
          } else {
            this.carousel.pause();
          }

          this.paused = !this.paused;
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
          }

          if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
          }
        }
      }, {
        key: "room",
        set: function set(room) {
          if (!room) {
            this.images = [];
          }

          this.description = room.label;
          this.images = room.pics.map(function (pic) {
            return "/assets/img/" + room.id + "/" + pic + ".jpg";
          });
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.??fac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GalleryComponent,
      selectors: [["gallery"]],
      viewQuery: function GalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.carousel = _t.first);
        }
      },
      inputs: {
        room: "room"
      },
      decls: 3,
      vars: 3,
      consts: [[3, "interval", "pauseOnHover", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "h-100"], [1, "w-100", 3, "src", "alt"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-carousel", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("slide", function GalleryComponent_Template_ngb_carousel_slide_0_listener($event) {
            return ctx.onSlide($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, GalleryComponent_2_Template, 1, 0, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("interval", 5000)("pauseOnHover", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.images);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "gallery",
          templateUrl: 'gallery.component.html'
        }]
      }], null, {
        room: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        carousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['carousel', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");
    /* harmony import */


    var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../rooms/rooms.component */
    "./src/app/components/rooms/rooms.component.ts");

    var _c0 = function _c0() {
      return ["camere"];
    };

    var _c1 = function _c1() {
      return ["prenota"];
    };

    var HomeComponent = function HomeComponent(router) {
      _classCallCheck(this, HomeComponent);

      this.router = router;
      this.room = {
        id: "struttura",
        label: "La nostra struttura",
        pics: ["1", "2", "3", "4", "5", "6", "7"],
        adults: 0,
        children: 0,
        shortDescription: "struttura",
        price: []
      };
    };

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 52,
      vars: 5,
      consts: [[1, "row", "px-2", "bg-light", "w-100", "m-0"], [1, "col-md-12", "col-lg-6", "bg-primary", "p-0", "shadow", "text-white", "rounded", "mt-4", "ml-auto"], [3, "room"], [1, "text-center", "py-5"], [1, "text-light"], [1, "font-weight-bold", "my-3"], [1, "col-md-12", "col-lg-4", "mr-auto", "bg-white", "text-secondary", "p-0", "text-center", "card", "rounded", "shadow", "mt-4"], [1, "card-header", "border-0", "bg-transparent"], [1, "card-group"], [1, "card", "bg-transparent", "border-0"], [1, "card-body", "text-center", "p-1", "d-flex"], [1, "btn", "btn-primary", "w-100", "shadow"], [1, "pt-3"], [1, "fas", "fa-map-marked", "xl-icon"], [1, "btn", "btn-primary", "w-100", "shadow", 3, "routerLink"], [1, "fas", "fa-bed", "xl-icon"], [1, "py-0"], [1, "btn", "btn-primary", "w-100", "shadow-sm"], [1, "pt-4"], [1, "fas", "fa-utensils", "xl-icon"], [1, "card-body"], [1, "p-5", "d-flex"], [1, "card-footer", "text-center", "bg-transparent", "border-0", "row"], [1, "col-md-12", "col-lg-6", "mx-auto", "pb-3"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "mt-5", "row"], [1, "col-lg-12", "col-xl-10", "mx-auto"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "gallery", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Bed & Breakfast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Pretoria Suite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Via Pretoria 63, Potenza ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Esplora la Basilicata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Dormi da noi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Mangia locale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Nato dalla passione per i viaggi di Maria Grazia e Claudio la Suite Pretoria offre un'ospitalit\xE0 curata in ogni dettaglio. A vostra disposizione avrete tutte le nostre attenzioni, una solida rete WiFi e una meticolosa cura per la pulizia, senza dimenticare la colazione ai tavoli del caff\xE8 affacciato sulla piazza principale.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Nell'ampia Suite avrete a disposizione tavolo, angolo cottura, un bagno spazioso e tutto l'occorrente per trascorrere uno splendido soggiorno. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Offriamo una pulizia professionale, inoltre ci rivolgiamo a servizi di lavanderia industriali per poter garantire la massima igiene ai nostri ospiti. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Riserva una camera ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("room", ctx.room);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));
        }
      },
      directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__["RoomsComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["/camere/suite"];
    };

    var _c2 = function _c2() {
      return ["/prenota"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.collapse = true;
      }

      _createClass(NavbarComponent, [{
        key: "navigateTo",
        value: function navigateTo(url) {
          this.router.navigate(url.split('/'));
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          this.collapse = !this.collapse;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["navbar"]],
      decls: 15,
      vars: 13,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "py-2", "shadow"], [1, "navbar-brand", 3, "routerLink"], [1, "font-weight-bold", "p-2"], ["type", "button", 1, "navbar-toggler", "border-0", 3, "click"], [1, "text-white", "bg-primary", 2, "font-size", "1.75rem"], [1, "fas", "fa-dot-circle"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav"], [1, "nav-item", "active", "rounded", "px-2"], [1, "nav-link", 3, "ngClass", "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Pretoria Suite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_span_click_4_listener() {
            return ctx.toggleCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "La Suite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Prenota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.collapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-white", ctx.router.url.split("/")[1] == "camere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.router.url.split("/")[1] == "camere" && "font-weight-bold text-primary")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-white", ctx.router.url.split("/")[1] == "prenota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.router.url.split("/")[1] == "prenota" && "font-weight-bold text-primary")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'navbar',
          templateUrl: './navbar.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/price-selector/price-selector.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/price-selector/price-selector.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PriceSelector */

  /***/
  function srcAppComponentsPriceSelectorPriceSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceSelector", function () {
      return PriceSelector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PriceSelector_ng_container_7_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }
    }

    function PriceSelector_ng_container_7_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", option_r2.price, "\u20AC");
      }
    }

    function PriceSelector_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PriceSelector_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PriceSelector_ng_container_7_ng_template_4_Template, 2, 1, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbNavItem", i_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.Arr(option_r2.person).fill(1));
      }
    }

    var PriceSelector = function PriceSelector() {
      _classCallCheck(this, PriceSelector);

      this.Arr = Array;
    };

    PriceSelector.??fac = function PriceSelector_Factory(t) {
      return new (t || PriceSelector)();
    };

    PriceSelector.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PriceSelector,
      selectors: [["price-selector"]],
      inputs: {
        prices: "prices"
      },
      decls: 12,
      vars: 2,
      consts: [[1, "row"], [1, "col-auto", "bg-white", "shadow", "rounded", "mx-auto"], [1, "m-2"], [1, "d-flex", "pb-2"], ["ngbNav", "", 1, "nav-pills"], ["nav", "ngbNav"], [4, "ngFor", "ngForOf"], [1, "col-auto", "bg-primary", "rounded", "shadow", "text-white", "text-right", "mx-auto", "pl-5"], [1, "mt-2"], [3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "fa", "fa-male", 2, "font-size", "1.5rem", "margin-right", "0.1rem"], [1, "font-weight-bold", 2, "font-size", "1.5rem"]],
      template: function PriceSelector_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Ospiti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PriceSelector_ng_container_7_Template, 5, 2, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Prezzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.prices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavOutlet", _r0);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PriceSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'price-selector',
          templateUrl: 'price-selector.component.html'
        }]
      }], null, {
        prices: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/room/room.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/room/room.component.ts ***!
    \***************************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppComponentsRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");
    /* harmony import */


    var _price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../price-selector/price-selector.component */
    "./src/app/components/price-selector/price-selector.component.ts");

    var _c0 = function _c0() {
      return ["/prenota"];
    };

    var RoomComponent = /*#__PURE__*/function () {
      function RoomComponent(route, roomService, router, location) {
        _classCallCheck(this, RoomComponent);

        this.route = route;
        this.roomService = roomService;
        this.router = router;
        this.location = location;
      }

      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            return _this.room = _this.roomService.getRoomById(params.get("idRoom"));
          });
        }
      }]);

      return RoomComponent;
    }();

    RoomComponent.??fac = function RoomComponent_Factory(t) {
      return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    RoomComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RoomComponent,
      selectors: [["room"]],
      decls: 55,
      vars: 6,
      consts: [[1, "container-fluid", "px-5", "py-4"], [1, "row", "rounded", "bg-white", "shadow"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-7", "px-0"], [3, "room"], [1, "col", "pt-3", "ml-3", "mr-4", "mb-3"], [3, "innerHTML"], [1, "row", "mt-4", "mx-auto"], [1, "col-auto"], [3, "prices"], [2, "font-size", ".75rem"], [1, "mt-4"], [1, "row", "px-2"], [1, "alert", "alert-info", "col-md-12", "col-lg-auto", "m-1", "px-3", "py-1"], [1, "mr-1"], [1, "fas", "fa-wifi"], [1, "fas", "fa-desktop"], [1, "fas", "fa-fan"], [1, "fas", "fa-fire"], [1, "row", "mt-2"], [1, "col-md-12", "col-lg-4", "ml-auto", "px-4", "mt-2", "bg-transparent"], [1, "btn", "btn-md", "btn-secondary", "shadow", "w-100", 3, "routerLink"], [1, "col-md-12", "col-lg-2", "mr-auto", "px-4", "mt-2"], [1, "btn", "btn-md", "btn-primary", "shadow", "w-100", 3, "click"]],
      template: function RoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "gallery", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "price-selector", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "*per i bambini fino a sei anni non si applica il sovrapprezzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Servizi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "WiFi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "TV ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Ventilatore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Angolo Cottura ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Asciugacapelli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Biancheria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Asciugamani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Armadio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Scrivania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Bagno privato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Balcone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Parquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Prenota subito ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RoomComponent_Template_button_click_53_listener() {
            return ctx.location.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Indietro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("room", ctx.room);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.room.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.room.shortDescription + " <br>Dimensioni: " + ctx.room.size + "mq\xB2.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("prices", ctx.room.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        }
      },
      directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"], _price_selector_price_selector_component__WEBPACK_IMPORTED_MODULE_5__["PriceSelector"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'room',
          templateUrl: 'room.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/rooms/rooms.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/rooms/rooms.component.ts ***!
    \*****************************************************/

  /*! exports provided: RoomsComponent */

  /***/
  function srcAppComponentsRoomsRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsComponent", function () {
      return RoomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RoomsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " a partire da ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RoomsComponent_div_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var room_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.roomDetail(room_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Scopri di pi\xF9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var room_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.previews[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", room_r1.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", room_r1.price[0].price, "\u20AC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", room_r1.shortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
      }
    }

    var RoomsComponent = /*#__PURE__*/function () {
      function RoomsComponent(roomService, router) {
        _classCallCheck(this, RoomsComponent);

        this.roomService = roomService;
        this.router = router;
        this.Arr = Array;
      }

      _createClass(RoomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rooms = this.roomService.getRooms();
          this.previews = this.rooms.map(function (room) {
            return "/assets/img/" + room.id + "/" + room.pics[0] + ".jpg";
          });
        }
      }, {
        key: "roomDetail",
        value: function roomDetail(roomId) {
          this.router.navigate(['camere', roomId]);
        }
      }]);

      return RoomsComponent;
    }();

    RoomsComponent.??fac = function RoomsComponent_Factory(t) {
      return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RoomsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RoomsComponent,
      selectors: [["rooms"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container", "card-deck"], ["class", "card shadow", 4, "ngFor", "ngForOf"], [1, "card", "shadow"], [1, "card-header", "p-0", "bg-primary"], [1, "card-img-top", 3, "src"], [1, "bg-primary", "text-white", "text-center", "p-2", 2, "font-size", ".9rem"], [1, "font-weight-bold"], [1, "card-body", "text-secondary", "mx-2", "d-flex"], [2, "font-size", "0.9", 3, "innerHTML"], [1, "card-footer", "bg-white", "text-center", "border-0"], [1, "btn", "btn-sm", "btn-secondary", "w-100", 3, "click"]],
      template: function RoomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RoomsComponent_div_1_Template, 16, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.rooms);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rooms',
          templateUrl: 'rooms.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/struttura/struttura.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/struttura/struttura.component.ts ***!
    \*************************************************************/

  /*! exports provided: StrutturaComponent */

  /***/
  function srcAppComponentsStrutturaStrutturaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StrutturaComponent", function () {
      return StrutturaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../rooms/rooms.component */
    "./src/app/components/rooms/rooms.component.ts");

    var StrutturaComponent = function StrutturaComponent() {
      _classCallCheck(this, StrutturaComponent);
    };

    StrutturaComponent.??fac = function StrutturaComponent_Factory(t) {
      return new (t || StrutturaComponent)();
    };

    StrutturaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StrutturaComponent,
      selectors: [["struttura"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container-fluid"]],
      template: function StrutturaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_1__["RoomsComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StrutturaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'struttura',
          templateUrl: './struttura.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/room.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/room.model.ts ***!
    \**************************************/

  /*! exports provided: Room, RoomPrice */

  /***/
  function srcAppModelsRoomModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomPrice", function () {
      return RoomPrice;
    });

    var Room = function Room() {
      _classCallCheck(this, Room);
    };

    var RoomPrice = function RoomPrice() {
      _classCallCheck(this, RoomPrice);
    };
    /***/

  },

  /***/
  "./src/app/services/room.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/room.service.ts ***!
    \******************************************/

  /*! exports provided: RoomService */

  /***/
  function srcAppServicesRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomService", function () {
      return RoomService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomService = /*#__PURE__*/function () {
      function RoomService() {
        _classCallCheck(this, RoomService);

        this.rooms = [{
          id: "suite",
          label: "La Suite",
          pics: ["1", "2", "3", "4"],
          adults: 2,
          children: 1,
          shortDescription: "Spaziosa Suite con angolo cottura.<br>Su richiesta ?? disponibile un letto aggiuntivo.",
          price: [{
            person: 1,
            price: 65
          }, {
            person: 2,
            price: 80
          }],
          size: 40
        }];
      }

      _createClass(RoomService, [{
        key: "getRoomById",
        value: function getRoomById(id) {
          return this.rooms.find(function (r) {
            return r.id == id;
          });
        }
      }, {
        key: "getRooms",
        value: function getRooms() {
          return this.rooms;
        }
      }]);

      return RoomService;
    }();

    RoomService.??fac = function RoomService_Factory(t) {
      return new (t || RoomService)();
    };

    RoomService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: RoomService,
      factory: RoomService.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serviceUrl: 'http://localhost:8080/documentaleRest/api',
      title: "Due Torri Documentale",
      portaleUrl: undefined,
      baseLocation: 'documentaleClient',
      baseHref: '/documentaleClient/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/frpastore/Java/Project/bnb/cloned/pretoria-suite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map