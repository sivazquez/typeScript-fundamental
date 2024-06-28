"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let ForceValue;
    (function (ForceValue) {
        ForceValue[ForceValue["fuerzaFlash"] = 5] = "fuerzaFlash";
        ForceValue[ForceValue["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        ForceValue[ForceValue["fuerzaBatman"] = 1] = "fuerzaBatman";
        ForceValue[ForceValue["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(ForceValue || (ForceValue = {}));
    const fuerzaFlash = ForceValue.fuerzaFlash;
    const fuerzaSuperman = ForceValue.fuerzaSuperman;
    const fuerzaBatman = ForceValue.fuerzaBatman;
    const fuerzaAcuaman = ForceValue.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
