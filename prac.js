var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var obj = {
    name: 'kim',
    legs: 2
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p1 = new Person('harimad', 20);
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// 추상 클래스
var 추상동물 = /** @class */ (function () {
    function 추상동물(species, legs) {
        this.species = species;
        this.legs = legs;
    }
    추상동물.prototype.info = function () {
        console.log("species: ".concat(this.species, ", legs: ").concat(this.legs));
    };
    return 추상동물;
}());
var 동물 = /** @class */ (function (_super) {
    __extends(동물, _super);
    function 동물() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    동물.prototype.say = function () {
        console.log("".concat(this.species, " \uC785\uB2C8\uB2E4."));
    };
    return 동물;
}(추상동물));
var lion = new 동물('사자', 4);
lion.say();
lion.info();
var dog = new 동물('고양이', 2);
dog.say();
dog.info();
