(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/mangerdashboard/mangerdashboard.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manager/mangerdashboard/mangerdashboard.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n     \n        <a class=\"navbar-brand\" ><i class='far fa-building' style='font-size:48px;color:white'></i></a>\n\n        <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                    <h4 >Visitors list</h4>\n              </li>\n          <li class=\"nav-item\">\n            <button class=\"btn btn-primary\" (click)=\"lout()\" id=\"h4\">Logout</button>\n          </li>\n          \n        </ul>\n      </nav>\n\n<div class=\"container \">\n    <table class=\"table-secondary table-striped shadow-lg\" border=\"2\">\n        <tr>\n            <th>Visitor Name</th>\n            <th>visitor Date</th>\n            <th>visitorid</th>\n            <th>Vehicle Number</th>\n            <th>Mobile </th>\n            <th>Flat</th>\n            <th>Approve Visit</th>\n            <th>Visited</th>\n        </tr>\n        <tr *ngFor=\"let visit of visits | showpipe:searchKey\">\n            <td> {{visit.visitorName}}</td>\n            <td>{{visit.visitordate}}</td>\n            <td>{{visit.visitorid}}</td>\n            <td>{{visit.visitorVehicle}}</td>\n            <td>{{visit.visitorMobile}}</td>\n            <td>{{visit.flatNumber}}</td>\n            <td> <button class=\"btn btn-info\" (click)=\"visited(visit)\" *ngIf=\"visit.status!='done'\">Approve Visit</button></td>\n            <td><button class=\"btn btn-primary\" class=\"\" *ngIf=\"visit.status=='done'\" [disabled]=\"true\">Visited</button></td>\n        </tr>\n    </table>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/manager/manager-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/manager/manager-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mangerdashboard_mangerdashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mangerdashboard/mangerdashboard.component */ "./src/app/manager/mangerdashboard/mangerdashboard.component.ts");




const routes = [
    {
        path: '',
        component: _mangerdashboard_mangerdashboard_component__WEBPACK_IMPORTED_MODULE_3__["MangerdashboardComponent"]
    }
];
let ManagerRoutingModule = class ManagerRoutingModule {
};
ManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagerRoutingModule);



/***/ }),

/***/ "./src/app/manager/manager.module.ts":
/*!*******************************************!*\
  !*** ./src/app/manager/manager.module.ts ***!
  \*******************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-routing.module */ "./src/app/manager/manager-routing.module.ts");
/* harmony import */ var _mangerdashboard_mangerdashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mangerdashboard/mangerdashboard.component */ "./src/app/manager/mangerdashboard/mangerdashboard.component.ts");
/* harmony import */ var _showpipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showpipe.pipe */ "./src/app/manager/showpipe.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ManagerModule = class ManagerModule {
};
ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mangerdashboard_mangerdashboard_component__WEBPACK_IMPORTED_MODULE_4__["MangerdashboardComponent"], _showpipe_pipe__WEBPACK_IMPORTED_MODULE_5__["ShowpipePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ManagerModule);



/***/ }),

/***/ "./src/app/manager/manager.service.ts":
/*!********************************************!*\
  !*** ./src/app/manager/manager.service.ts ***!
  \********************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ManagerService = class ManagerService {
    constructor(db) {
        this.db = db;
    }
    getVisits() {
        return this.db.collection('visits').valueChanges({ idField: 'id' });
    }
    updateVisit(v) {
        console.log(v);
        return this.db.doc(`visits/${v.id}`).update(v);
    }
};
ManagerService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ManagerService);



/***/ }),

/***/ "./src/app/manager/mangerdashboard/mangerdashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/manager/mangerdashboard/mangerdashboard.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table tr td{\r\n    padding:15px;\r\n}\r\ndiv table{\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    text-align: center;\r\n    \r\n}\r\np{\r\n    text-align: center;\r\n}\r\nh4{\r\n    text-align: center;\r\n    margin-left:480px;\r\n    color:white;\r\n }\r\n#h4{\r\n   margin-left:500px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci9tYW5nZXJkYXNoYm9hcmQvbWFuZ2VyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7QUFFQTtHQUNFLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuZ2VyZGFzaGJvYXJkL21hbmdlcmRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdHIgdGR7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuZGl2IHRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDo0ODBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gfVxyXG5cclxuICNoNHtcclxuICAgbWFyZ2luLWxlZnQ6NTAwcHg7XHJcbiB9Il19 */");

/***/ }),

/***/ "./src/app/manager/mangerdashboard/mangerdashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/manager/mangerdashboard/mangerdashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: MangerdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangerdashboardComponent", function() { return MangerdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager.service */ "./src/app/manager/manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MangerdashboardComponent = class MangerdashboardComponent {
    constructor(ms, router) {
        this.ms = ms;
        this.router = router;
    }
    ngOnInit() {
        var user = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.router.navigate(['manager']);
        }
        else {
            this.router.navigate(['']);
        }
        this.ms.getVisits().subscribe((res) => {
            this.visits = res;
            console.log("Visists", res);
        });
    }
    visited(v) {
        v.status = 'done';
        this.ms.updateVisit(v).then((res) => {
            console.log(res);
        });
    }
    lout() {
        window.localStorage.clear();
        this.router.navigate([""]);
    }
};
MangerdashboardComponent.ctorParameters = () => [
    { type: _manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MangerdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mangerdashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mangerdashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manager/mangerdashboard/mangerdashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mangerdashboard.component.css */ "./src/app/manager/mangerdashboard/mangerdashboard.component.css")).default]
    })
], MangerdashboardComponent);



/***/ }),

/***/ "./src/app/manager/showpipe.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/manager/showpipe.pipe.ts ***!
  \******************************************/
/*! exports provided: ShowpipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowpipePipe", function() { return ShowpipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowpipePipe = class ShowpipePipe {
    transform(value, ...args) {
        var ar = value.map((a) => {
            return JSON.stringify(a);
        });
        var res = ar.filter((a) => {
            if (a.indexOf(args) != -1) {
                return true;
            }
        });
        res = res.map(a => JSON.parse(a));
        return res;
    }
};
ShowpipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'showpipe'
    })
], ShowpipePipe);



/***/ })

}]);
//# sourceMappingURL=manager-manager-module-es2015.js.map