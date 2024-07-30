namespace Validations{
    export const validateText = (text:string):boolean => {
        return (text.length >3) ? true : false;
    };

    const validateDate = ( fecha: Date ):boolean => {
        return (isNaN(fecha.valueOf())) ? true : false;
    }
}

let validateText = Validations.validateText("Ho");
console.log(validateText);