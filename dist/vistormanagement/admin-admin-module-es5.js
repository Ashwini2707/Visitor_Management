function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdmindashboardAdmindashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n       \n        <i class='far fa-building' style='font-size:48px;color:white'></i>&nbsp;&nbsp;&nbsp;&nbsp;\n  \n         <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n          <a routerLink=\"pendingRegistrations\">Pending Registrations</a>&nbsp;&nbsp;&nbsp;&nbsp;\n\n          </li>\n          <li class=\"nav-item\">\n                <a routerLink=\"Allusers\">All Users</a>&nbsp;&nbsp;&nbsp;&nbsp;\n          </li>\n          <li class=\"nav-item\">\n                <a routerLink=\"Allmangers\">All Managers</a>&nbsp;&nbsp;&nbsp;&nbsp;\n          </li>\n\n         \n\n          <li  class=\"nav-item\">\n                  <a routerLink=\"\" (click)=\"Lout()\">Log Out</a>\n          </li>\n      \n         \n        </ul>\n     \n</nav>\n\n<br><br>\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n\n\n \n      \n      ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allmanagers/allmanagers.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allmanagers/allmanagers.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAllmanagersAllmanagersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div  style=\"float:left\">\n    <input class=\"form-control \" type=\"text\" placeholder=\"Search\">\n    <button class=\"btn-success\" type=\"submit\">Search</button>\n</div> -->\n<p><b>All Managers </b></p>\n\n<div class=\"container \">\n        <table class=\"table-secondary table-striped shadow-lg\" border=\"2\">\n        <tr >\n            <th>Phone</th>\n            <th>Managersname</th>\n            <th>Managerstype</th>\n            <th>Status</th>\n        </tr>\n        <tr *ngFor=\"let managers of allManagers\" >\n            <td  *ngIf=\"managers.usertype=='manager'\">{{managers.phone}}</td>\n            <td *ngIf=\"managers.usertype=='manager'\">{{managers.username}}</td>\n            <td *ngIf=\"managers.usertype=='manager'\" >{{managers.usertype}}</td>\n            <td *ngIf=\"(managers.usertype=='pending')&& (managers.usertype=='manager')\"><button class=\"btn-info\">pending</button></td>\n             <td *ngIf=\"( managers.usertype!='pending')&& (managers.usertype=='manager')\">approved</td> \n        </tr>\n       </table><br><br>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allusers/allusers.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allusers/allusers.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAllusersAllusersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p><b>All Users </b></p>\n<div class=\"container \">\n    <table class=\"table-secondary table-striped shadow-lg\" border=\"2\">\n        <tr >\n            <th>Phone</th>\n            <th>Username</th>\n            <th>Usertype</th>\n            <th>Status</th>\n            <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let user of allUsers\" >\n            <td *ngIf=\"(user.usertype=='user')\">{{user.phone}}</td>\n            <td *ngIf=\"(user.usertype=='user')\">{{user.username}}</td>\n            <td *ngIf=\"(user.usertype=='user')\" >{{user.usertype}}</td>\n            <td *ngIf=\" (user.usertype=='pending')&&(user.usertype=='user')\"><button class=\"btn-info\">pending</button></td>\n            <td *ngIf=\" (user.usertype!='pending')&&(user.usertype=='user')\">approved</td> \n            <td *ngIf=\"(user.usertype=='user')\"><button class=\"btn-danger\" (click)=\"delUser(user)\">Delete</button></td> \n\n        </tr>\n    </table><br><br>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/pendingregistrations/pendingregistrations.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/pendingregistrations/pendingregistrations.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPendingregistrationsPendingregistrationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container \">\n  \n    <p><b>Pending Registrations</b></p>\n    <table  class=\"table-secondary table-striped shadow-lg\" border=\"2\">\n        <tr>\n            <td> User name</td>\n            <td>Phone</td>\n            <td> Approve </td>\n             <td>Approve as manager</td>\n        </tr>          \n\n\n        <tr *ngFor=\"let user of pendingUsers\">\n            <td> {{user.username}}</td>\n            <td>{{user.phone}}</td>\n            <td>  <button class=\"btn btn-info\" (click)=\"approve(user,'user')\">Approve as user</button></td>\n            <td>  <button class=\"btn btn-primary\"  (click)=\"approve(user,'manager')\">Approve as manager</button></td>\n        </tr>\n    </table>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admindashboard/admindashboard.component */
    "./src/app/admin/admindashboard/admindashboard.component.ts");
    /* harmony import */


    var _pendingregistrations_pendingregistrations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pendingregistrations/pendingregistrations.component */
    "./src/app/admin/pendingregistrations/pendingregistrations.component.ts");
    /* harmony import */


    var _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./allusers/allusers.component */
    "./src/app/admin/allusers/allusers.component.ts");
    /* harmony import */


    var _allmanagers_allmanagers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./allmanagers/allmanagers.component */
    "./src/app/admin/allmanagers/allmanagers.component.ts");

    var routes = [{
      path: '',
      component: _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"],
      children: [{
        path: 'pendingRegistrations',
        component: _pendingregistrations_pendingregistrations_component__WEBPACK_IMPORTED_MODULE_4__["PendingregistrationsComponent"]
      }, {
        path: 'Allmangers',
        component: _allmanagers_allmanagers_component__WEBPACK_IMPORTED_MODULE_6__["AllmanagersComponent"]
      }, {
        path: 'Allusers',
        component: _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_5__["AllusersComponent"]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admindashboard/admindashboard.component */
    "./src/app/admin/admindashboard/admindashboard.component.ts");
    /* harmony import */


    var _pendingregistrations_pendingregistrations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pendingregistrations/pendingregistrations.component */
    "./src/app/admin/pendingregistrations/pendingregistrations.component.ts");
    /* harmony import */


    var _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./allusers/allusers.component */
    "./src/app/admin/allusers/allusers.component.ts");
    /* harmony import */


    var _allmanagers_allmanagers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./allmanagers/allmanagers.component */
    "./src/app/admin/allmanagers/allmanagers.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdmindashboardComponent"], _pendingregistrations_pendingregistrations_component__WEBPACK_IMPORTED_MODULE_5__["PendingregistrationsComponent"], _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_6__["AllusersComponent"], _allmanagers_allmanagers_component__WEBPACK_IMPORTED_MODULE_7__["AllmanagersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.service.ts":
  /*!****************************************!*\
    !*** ./src/app/admin/admin.service.ts ***!
    \****************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppAdminAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(db) {
        _classCallCheck(this, AdminService);

        this.db = db;
      }

      _createClass(AdminService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.db.collection('users').valueChanges({
            idField: 'id'
          });
        }
      }, {
        key: "updateUserType",
        value: function updateUserType(u) {
          return this.db.doc("users/".concat(u.id)).update(u);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/admin/admindashboard/admindashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/admindashboard/admindashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdmindashboardAdmindashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admindashboard/admindashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admindashboard/admindashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdmindashboardComponent */

  /***/
  function srcAppAdminAdmindashboardAdmindashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function () {
      return AdmindashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdmindashboardComponent =
    /*#__PURE__*/
    function () {
      function AdmindashboardComponent(router) {
        _classCallCheck(this, AdmindashboardComponent);

        this.router = router;
      }

      _createClass(AdmindashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = JSON.parse(localStorage.getItem('user'));

          if (localStorage.getItem('user')) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['']);
          }
        }
      }, {
        key: "Lout",
        value: function Lout() {
          console.log(window.localStorage.clear());
        }
      }]);

      return AdmindashboardComponent;
    }();

    AdmindashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admindashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admindashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admindashboard.component.css */
      "./src/app/admin/admindashboard/admindashboard.component.css")).default]
    })], AdmindashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/allmanagers/allmanagers.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin/allmanagers/allmanagers.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAllmanagersAllmanagersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n    text-align: center;\r\n}\r\ntable tr td{\r\n    padding:15px;\r\n}\r\ndiv table{\r\n    margin-top: 10px;\r\n    margin-left: 340px;\r\n    text-align: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWxsbWFuYWdlcnMvYWxsbWFuYWdlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWxsbWFuYWdlcnMvYWxsbWFuYWdlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGFibGUgdHIgdGR7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuZGl2IHRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/allmanagers/allmanagers.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/allmanagers/allmanagers.component.ts ***!
    \************************************************************/

  /*! exports provided: AllmanagersComponent */

  /***/
  function srcAppAdminAllmanagersAllmanagersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllmanagersComponent", function () {
      return AllmanagersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");

    var AllmanagersComponent =
    /*#__PURE__*/
    function () {
      function AllmanagersComponent(ads) {
        _classCallCheck(this, AllmanagersComponent);

        this.ads = ads;
      }

      _createClass(AllmanagersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ads.getUsers().subscribe(function (res) {
            console.log(res);
            _this.allManagers = res;
          });
        }
      }]);

      return AllmanagersComponent;
    }();

    AllmanagersComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    AllmanagersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allmanagers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./allmanagers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allmanagers/allmanagers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./allmanagers.component.css */
      "./src/app/admin/allmanagers/allmanagers.component.css")).default]
    })], AllmanagersComponent);
    /***/
  },

  /***/
  "./src/app/admin/allusers/allusers.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/allusers/allusers.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAllusersAllusersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n    text-align: center;\r\n}\r\ntable tr td{\r\n    padding:15px;\r\n}\r\ndiv table{\r\n    margin-top: 10px;\r\n    margin-left: 340px;\r\n    text-align: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWxsdXNlcnMvYWxsdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWxsdXNlcnMvYWxsdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGFibGUgdHIgdGR7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuZGl2IHRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/allusers/allusers.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/allusers/allusers.component.ts ***!
    \******************************************************/

  /*! exports provided: AllusersComponent */

  /***/
  function srcAppAdminAllusersAllusersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllusersComponent", function () {
      return AllusersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/user/user.service */
    "./src/app/user/user.service.ts");

    var AllusersComponent =
    /*#__PURE__*/
    function () {
      function AllusersComponent(ads, us) {
        _classCallCheck(this, AllusersComponent);

        this.ads = ads;
        this.us = us;
      }

      _createClass(AllusersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ads.getUsers().subscribe(function (res) {
            console.log(res);
            _this2.allUsers = res;
          });
        }
      }, {
        key: "delUser",
        value: function delUser(user) {
          this.us.deleteUser(user).then(function (res) {
            console.log(res);
          });
        }
      }]);

      return AllusersComponent;
    }();

    AllusersComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AllusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allusers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./allusers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/allusers/allusers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./allusers.component.css */
      "./src/app/admin/allusers/allusers.component.css")).default]
    })], AllusersComponent);
    /***/
  },

  /***/
  "./src/app/admin/pendingregistrations/pendingregistrations.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/pendingregistrations/pendingregistrations.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPendingregistrationsPendingregistrationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div table{\r\n    margin-top: 30px;\r\n    margin-left: 280px;\r\n    text-align: center;\r\n    \r\n}\r\ntable tr td{\r\n    padding:15px;\r\n}\r\np{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGVuZGluZ3JlZ2lzdHJhdGlvbnMvcGVuZGluZ3JlZ2lzdHJhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGVuZGluZ3JlZ2lzdHJhdGlvbnMvcGVuZGluZ3JlZ2lzdHJhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB0YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG50YWJsZSB0ciB0ZHtcclxuICAgIHBhZGRpbmc6MTVweDtcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/pendingregistrations/pendingregistrations.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/pendingregistrations/pendingregistrations.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PendingregistrationsComponent */

  /***/
  function srcAppAdminPendingregistrationsPendingregistrationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingregistrationsComponent", function () {
      return PendingregistrationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");

    var PendingregistrationsComponent =
    /*#__PURE__*/
    function () {
      function PendingregistrationsComponent(ads) {
        _classCallCheck(this, PendingregistrationsComponent);

        this.ads = ads;
      }

      _createClass(PendingregistrationsComponent, [{
        key: "approve",
        value: function approve(user, s) {
          user.usertype = s;
          this.ads.updateUserType(user).then(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.ads.getUsers().subscribe(function (res) {
            console.log(res);
            _this3.pendingUsers = res.filter(function (a) {
              return a.usertype.localeCompare('pending') == 0;
            });
          });
        }
      }]);

      return PendingregistrationsComponent;
    }();

    PendingregistrationsComponent.ctorParameters = function () {
      return [{
        type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    PendingregistrationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pendingregistrations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pendingregistrations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/pendingregistrations/pendingregistrations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pendingregistrations.component.css */
      "./src/app/admin/pendingregistrations/pendingregistrations.component.css")).default]
    })], PendingregistrationsComponent);
    /***/
  }
}]); //# sourceMappingURL=admin-admin-module-es2015.js.map
//# sourceMappingURL=admin-admin-module-es5.js.map