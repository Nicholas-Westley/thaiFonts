'use strict';

thaiFonts.factory("test", function() {
    return {
        compareInput: function(question, answer) {
        	if(typeof question != "string" || typeof answer != "string" || answer.length == 0) return question;

        	var output = "";

        	for (var i=0; i<question.length; i++) {
        		if(i >= answer.length) { //finished input
        			output += question.substr(i);
        			break;
        		}
        		output += question[i] === answer[i] ? '<span class="green">'+question[i]+'</span>' : '<span class="red">'+question[i]+'</span>';
        	}
            return output;
        }
    };
});