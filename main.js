function stack(){
	this.elements = [];
}

stack.prototype = {

	push: function(){
		for(var i = 0; i < arguments.length; i++){
			this.elements.push(arguments[i]);
		}
	},

	pop: function(){
		return this.elements.pop();
	},

	peek: function(){
		return this.elements[this.elements.length - 1];
	}

}

module.exports = stack;