var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        return (text.length > 3) ? true : false;
    };
    var validateDate = function (fecha) {
        return (isNaN(fecha.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
var validateText = Validations.validateText("Ho");
console.log(validateText);
