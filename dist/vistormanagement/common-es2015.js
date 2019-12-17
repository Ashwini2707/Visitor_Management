(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let UserService = class UserService {
    constructor(db) {
        this.db = db;
    }
    bookVisit(visit) {
        visit.status = "pending";
        return this.db.collection('visits').add(visit);
    }
    getVisitorsByUser(uid) {
        return this.db.collection("visits", ref => ref.where('userid', '==', uid))
            .valueChanges({ idField: 'id' });
    }
    deleteVisit(x) {
        console.log(x);
        // console.log()
        this.db.doc(`visits/${x.id}`).delete().then((res) => { console.log(res); });
        //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
    }
    deleteUser(x) {
        console.log(x);
        // console.log()
        return this.db.doc(`users/${x.id}`).delete();
        //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map