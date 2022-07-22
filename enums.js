"use strict";
// coming from JS, most of the things I have seen in TS so far make absolute sense, but enums don't...yet
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// enums are data structures of constant length that hold a set of constant values
// they are useful when setting properties or values that can only be a certain number of possible values
// they are compiled into javascript objects
// enums can be: numeric enums, string enums, heterogeneous enums
// a string enum
var Direction;
(function (Direction) {
    Direction["up"] = "U";
    Direction["down"] = "D";
    Direction["left"] = "L";
    Direction["right"] = "R";
})(Direction || (Direction = {}));
// each of the directions has a letter value that indicates which direction they are tied to
console.log(Direction.up); // U
// BI-DIRECTIONAL ENUM MEMBERS
// enums are compiled to javascript objects. But they are a bit different to objects
// 1. Enums offer a more stable data structure for storing constant members than objects.
// 2. Enums offer bi-directional referencing for enum members
// bi-directional referencing
var otherDirections;
(function (otherDirections) {
    otherDirections[otherDirections["up"] = 1] = "up";
    otherDirections[otherDirections["down"] = 2] = "down";
    otherDirections[otherDirections["left"] = 3] = "left";
    otherDirections[otherDirections["right"] = 4] = "right";
})(otherDirections || (otherDirections = {}));
// assigning 1 to the first member will make TS automatically increment that assignment for the rest of the members
// if 1 was not assigned, it would just start from 0 and increment the assignment for the rest of the members, up = 0, down = 1 ...etc
console.log(otherDirections.up); // 1
console.log(otherDirections[1]); // up
// bi-directional referencing means the value can be used to reference the member and the member can be used to reference the value
