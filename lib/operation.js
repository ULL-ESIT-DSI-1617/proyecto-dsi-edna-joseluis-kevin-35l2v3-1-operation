"use strict";

var regexp;

class Operation {
	constructor (izq, dch) {
		this.izq_ = izq;
		this.dch_ = dch;
	}
}

Operation.operate = function (valor) {
	if (!regexp){
		regexp = "^\s*([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([" + operations.symbols + "])\s*([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)$";
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

module.exports = Operation;
