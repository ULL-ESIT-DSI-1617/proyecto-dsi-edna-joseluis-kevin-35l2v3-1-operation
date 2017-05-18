"use strict";

var regexp;
var operations = [];
operations.symbols;

/**
* Clase que calcula operaciones matemáticas simples
* @class Operation
* @param {number} izq Operando izquierdo
* @param {number} dch Operando derecho
*/
class Operation {
	/**
	* Constructor de la clase Operation
	* @param {number} izq Operando izquierdo
	* @param {number} dch Operando derecho
	*/
	constructor (izq, dch) {
		this.izq_ = izq;
		this.dch_ = dch;
	}
}

/**
* Función que devuelve el resultado de una operación matemática simple
* @function operate
* @param {string} valor Operación a realizar
* @return {number} Resultado de la operación
*/
Operation.operate = function (valor) {
	try{
		if (!regexp){
			regexp = "^\\s*([-+]?\\d+(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)\\s*([" + operations.symbols + "])\\s*([-+]?\\d+(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)$";
		}
	}
	catch(err){
		return "ERROR. The set of operators is empty";
	}
	
	let m = valor.match(regexp);
	
	if (m){
		let izq = parseFloat(m[1]),
			ope = m[2],
			dch = parseFloat(m[3]);
			
		try{
			var operation = new operations[ope](izq, dch);
			return operation.calculate();
		}
		catch(err){
			return "ERROR. Operator '" + ope + "' unknown";
		}
	}
	else{
		return "ERROR. Try something like 2+3";
	}
};
