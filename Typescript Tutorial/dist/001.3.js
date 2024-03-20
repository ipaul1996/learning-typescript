"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Small;
console.log(mySize);
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["SaveData"] = 5] = "SaveData";
    RequestType[RequestType["DeleteData"] = 6] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.ReadData);
console.log(RequestType["ReadData"]);
var RequestType2;
(function (RequestType2) {
    RequestType2["ReadData"] = "READ_DATA";
    RequestType2["DeleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "READ_DATA";
    RequestType3["DeleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
