function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\"  >\n    <div id=\"div\">\n        <a routerLink=\"register\">New User!! Register Here</a><br><br>\n        <div [formGroup]=\"loginForm\">\n            <input type=\"text\" formControlName=\"phone\" placeholder=\"Phone\"><br><br>\n            <input type=\"text\" formControlName=\"password\" placeholder=\"Password\"><br><br>\n            <button class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"login()\">Login</button><br><br>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registration/registration.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registration/registration.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\"  > \n   <div id=\"div\" [formGroup]=\"regForm\"><br><br>\n        <input type=\"text\" placeholder=\"username\" formControlName=\"username\"><br>\n       \n        <br>\n        <input type=\"text\" placeholder=\"password\" formControlName=\"password\"><br><br>\n        <input type=\"text\" placeholder=\"phone\" formControlName=\"phone\"><br>\n        <span>\n            <i class=\"fa fa-check-square\" style=\"color:green\" *ngIf=\"(regForm.controls.phone.valid)&&(regForm.controls.phone.dirty)\"></i>\n            <i class=\"fa fa-times-circle\" style=\"color:red\" *ngIf=\"regForm.controls.phone.invalid\"></i>\n            phone should be 10 characters\n            \n        </span><br><br>\n        <button class=\"btn btn-primary\" [disabled]=\"!regForm.valid\" (click)=\"register()\">Register</button><br><br>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/authentication/auth.service.ts":
  /*!************************************************!*\
    !*** ./src/app/authentication/auth.service.ts ***!
    \************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthenticationAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(db) {
        _classCallCheck(this, AuthService);

        this.db = db;
        this.db.collection('testing').valueChanges().subscribe(function (res) {
          console.log("res", res);
        });
      }

      _createClass(AuthService, [{
        key: "addUser",
        value: function addUser(user) {
          user.usertype = "pending";
          return this.db.collection('users').add(user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.db.collection('users', function (ref) {
            return ref.where('phone', '==', user.phone);
          }).valueChanges();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/authentication/authentication-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/authentication/authentication-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/authentication/registration/registration.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/authentication/authentication-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/authentication/registration/registration.component.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], AuthenticationModule);
    /***/
  },

  /***/
  "./src/app/authentication/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/authentication/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#div{\r\n    background:rgba(0,0,0,0.8);\r\n    color:white;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n   \r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7OztBQUd2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2e1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgXHJcbiAgICBcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/authentication/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/authentication/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(as, fb, router) {
        _classCallCheck(this, LoginComponent);

        this.as = as;
        this.fb = fb;
        this.router = router;
        this.loginForm = this.fb.group({
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = JSON.parse(localStorage.getItem('user'));

          if (user) {
            if (user.usertype == 'admin') {
              this.router.navigate(['admin']);
            }

            if (user.usertype == 'manager') {
              this.router.navigate(['manager']);
            }

            if (user.usertype == 'user') {
              this.router.navigate(['user']);
            }
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.as.login(this.loginForm.value).subscribe(function (res) {
            if (res) {
              console.log(res.length);
              console.log(res);
              window.localStorage.setItem('user', JSON.stringify(res));

              if (res.length == 0) {
                alert("Your Account is not Registered");
              }

              if (res[0].usertype == 'pending') {
                alert("Your account activation is still Pending!! please wait");
              }

              if (res[0].usertype == 'admin') {
                if (_this.loginForm.value.password == res[0].password) {
                  _this.router.navigate(['admin']);
                } else {
                  alert("password mismatch");
                }
              }

              if (res[0].usertype == 'manager') {
                if (_this.loginForm.value.password == res[0].password) {
                  _this.router.navigate(['manager']);
                } else {
                  alert("password mismatch");
                }
              }

              if (res[0].usertype == 'user') {
                if (_this.loginForm.value.password == res[0].password) {
                  _this.router.navigate(['user']);
                } else {
                  alert("password mismatch");
                }
              }
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/authentication/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/authentication/registration/registration.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/authentication/registration/registration.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationRegistrationRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#div{\r\n    background:rgba(0,0,0,0.8);\r\n    color:white;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n   \r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7O0FBR3ZCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdntcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/authentication/registration/registration.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/authentication/registration/registration.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppAuthenticationRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/authentication/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(fb, as, router) {
        _classCallCheck(this, RegistrationComponent);

        this.fb = fb;
        this.as = as;
        this.router = router;
        this.regForm = this.fb.group({
          username: [''],
          password: [''],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern[0 - 9]]
        });
      }

      _createClass(RegistrationComponent, [{
        key: "register",
        value: function register(rf) {
          var _this2 = this;

          this.as.addUser(this.regForm.value).then(function (res) {
            console.log("reg", res);

            _this2.router.navigate([""]);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.dir(this.regForm);
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registration/registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.css */
      "./src/app/authentication/registration/registration.component.css")).default]
    })], RegistrationComponent);
    /***/
  }
}]); //# sourceMappingURL=authentication-authentication-module-es2015.js.map
//# sourceMappingURL=authentication-authentication-module-es5.js.map