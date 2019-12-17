(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/myvisitors/myvisitors.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/myvisitors/myvisitors.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container \">\n        <li *ngFor=\"let v of myvisitors;let i=index\"  >\n        {{v.visitorName}}&nbsp;&nbsp;&nbsp;\n        \n        <button (click)=\"del(i)\" >Delete</button>\n        <button>Undo</button>       \n        </li>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n   <!-- Brand/logo -->\n   <a class=\"navbar-brand\" ><i class='far fa-building' style='font-size:48px;color:white'></i></a>\n   \n   <!-- Links -->\n   <ul class=\"navbar-nav\">\n         <li class=\"nav-item\">\n               <h4 >Tenant / Owner Dashboard</h4>\n         </li>\n     <li class=\"nav-item\">\n       <button class=\"btn btn-primary\" (click)=\"lout()\" id=\"h4\">Logout</button>\n     </li>\n     \n   </ul>\n </nav>\n\n<div [formGroup]=\"visitorForm\" class=\"container jumbotron\"  id=\"d1\">\n        <b>Visitor Name:</b><br><input class=\"form-control\" type=\"text\" formControlName=\"visitorName\"><br>\n        <b>Visitor ID:</b><br><input class=\"form-control\" type=\"text\"  formControlName=\"visitorid\"><br>\n        <b>Visitor Mobile:</b><br><input class=\"form-control\" type=\"text\"  formControlName=\"visitorMobile\"><br>\n        <b>Visitor Vehicle:</b><br><input class=\"form-control\" type=\"text\"  formControlName=\"visitorVehicle\"><br>\n        <b>Visitor FlatNumber:</b><br><input class=\"form-control\" type=\"text\"  formControlName=\"flatNumber\"><br>\n        <b>Visiting Date:</b><br><input class=\"form-control\" type=\"date\" formControlName=\"visitordate\"><br>\n   <div id=\"d3\"> <button  class=\"btn btn-primary\" (click)=\"visitBooking()\">Book Visit</button></div>\n </div>\n <div id=\"d2\">\n    <app-myvisitors></app-myvisitors>\n </div>\n");

/***/ }),

/***/ "./src/app/user/myvisitors/myvisitors.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/myvisitors/myvisitors.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".over{\r\n    text-decoration: line-through;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teXZpc2l0b3JzL215dmlzaXRvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbXl2aXNpdG9ycy9teXZpc2l0b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/user/myvisitors/myvisitors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/myvisitors/myvisitors.component.ts ***!
  \*********************************************************/
/*! exports provided: MyvisitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyvisitorsComponent", function() { return MyvisitorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");



let MyvisitorsComponent = class MyvisitorsComponent {
    constructor(us) {
        this.us = us;
        this.flag = false;
        this.myvisit = this.myvisitors;
    }
    del(x) {
        console.log(x);
        this.us.deleteVisit(x);
    }
    done(y) {
        console.log(y.visitorName);
        console.dir(y);
        y.flag = true;
    }
    ngOnInit() {
        this.us.getVisitorsByUser(JSON.parse(localStorage.getItem('user'))[0].id)
            .subscribe((res) => {
            console.log(res);
            this.myvisitors = res;
        });
        console.log(this.myvisitors);
        console.log(this.myvisit);
    }
};
MyvisitorsComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
MyvisitorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myvisitors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myvisitors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/myvisitors/myvisitors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myvisitors.component.css */ "./src/app/user/myvisitors/myvisitors.component.css")).default]
    })
], MyvisitorsComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userdashboard/userdashboard.component */ "./src/app/user/userdashboard/userdashboard.component.ts");




const routes = [
    {
        path: '',
        component: _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserdashboardComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userdashboard/userdashboard.component */ "./src/app/user/userdashboard/userdashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myvisitors_myvisitors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myvisitors/myvisitors.component */ "./src/app/user/myvisitors/myvisitors.component.ts");







let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_4__["UserdashboardComponent"], _myvisitors_myvisitors_component__WEBPACK_IMPORTED_MODULE_6__["MyvisitorsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/userdashboard/userdashboard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/userdashboard/userdashboard.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#d1{\r\n    padding:30px;\r\n    float: left;\r\n    width: 43%;\r\n    margin-left: 55px;\r\n    margin-top: 50px;\r\n    color: white;\r\n    border-radius: 10px;\r\n }\r\n #d2{\r\n    padding: 30px;\r\n    float: right;\r\n    width: 43%;\r\n    margin-right: 40px;\r\n    background-color:rgba(233, 169, 169, 0.8);\r\n    color: white;\r\n    margin-top: 50px;\r\n    border-radius: 10px;\r\n }\r\n .jumbotron{\r\n    background-color:rgba(231, 139, 139, 0.8);\r\n }\r\n #d3{\r\n    padding: 20px\r\n }\r\n div:hover{\r\n    opacity:1;\r\n    box-shadow: 10px 10px 20px 10px grey;\r\n }\r\n h4{\r\n    text-align: center;\r\n    margin-left:300px;\r\n    color:white;\r\n }\r\n #h4{\r\n   margin-left:500px;\r\n }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyZGFzaGJvYXJkL3VzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtDQUNBO0lBQ0csYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtDQUNBO0lBQ0cseUNBQXlDO0NBQzVDO0NBQ0E7SUFDRztDQUNIO0NBQ0E7SUFDRyxTQUFTO0lBQ1Qsb0NBQW9DO0NBQ3ZDO0NBQ0E7SUFDRyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDtDQUVBO0dBQ0UsaUJBQWlCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyZGFzaGJvYXJkL3VzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkMXtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAjZDJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzMsIDE2OSwgMTY5LCAwLjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAuanVtYm90cm9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMSwgMTM5LCAxMzksIDAuOCk7XHJcbiB9XHJcbiAjZDN7XHJcbiAgICBwYWRkaW5nOiAyMHB4XHJcbiB9IFxyXG4gZGl2OmhvdmVye1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggMTBweCBncmV5O1xyXG4gfVxyXG4gaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gfVxyXG5cclxuICNoNHtcclxuICAgbWFyZ2luLWxlZnQ6NTAwcHg7XHJcbiB9XHJcblxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/user/userdashboard/userdashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/userdashboard/userdashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: UserdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashboardComponent", function() { return UserdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserdashboardComponent = class UserdashboardComponent {
    constructor(fb, us, router) {
        this.fb = fb;
        this.us = us;
        this.router = router;
        if (localStorage.getItem('user')) {
            this.visitorForm = this.fb.group({
                visitorName: [],
                visitorid: [],
                visitorMobile: [],
                visitorVehicle: [],
                flatNumber: [],
                visitordate: [],
                status: false,
                userid: [JSON.parse(localStorage.getItem('user'))[0].id]
            });
        }
        else {
            this.router.navigate([""]);
        }
    }
    visitBooking() {
        this.us.bookVisit(this.visitorForm.value).then((res) => {
            console.log(res);
        });
    }
    ngOnInit() {
    }
    lout() {
        window.localStorage.clear();
        this.router.navigate([""]);
    }
};
UserdashboardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userdashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userdashboard.component.css */ "./src/app/user/userdashboard/userdashboard.component.css")).default]
    })
], UserdashboardComponent);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map