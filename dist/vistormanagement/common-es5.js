function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(db) {
        _classCallCheck(this, UserService);

        this.db = db;
      }

      _createClass(UserService, [{
        key: "bookVisit",
        value: function bookVisit(visit) {
          visit.status = "pending";
          return this.db.collection('visits').add(visit);
        }
      }, {
        key: "getVisitorsByUser",
        value: function getVisitorsByUser(uid) {
          return this.db.collection("visits", function (ref) {
            return ref.where('userid', '==', uid);
          }).valueChanges({
            idField: 'id'
          });
        }
      }, {
        key: "deleteVisit",
        value: function deleteVisit(x) {
          console.log(x); // console.log()

          this.db.doc("visits/".concat(x.id)).delete().then(function (res) {
            console.log(res);
          }); //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(x) {
          console.log(x); // console.log()

          return this.db.doc("users/".concat(x.id)).delete(); //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  }
}]); //# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map