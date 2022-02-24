/*
* @title generator.js for random_number_generator
* @description This software provides the styling for the random number generator
* Copyright (c) 2022 Eugy Enoch
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the following conditions:
*The above copyright notice and this permission notice shall be included in all
*copies or substantial portions of the Software.
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*SOFTWARE.
* @contact https://github.com/eugyenoch
*/
 //"use strict" //strict mode

 function gen2(){
 	timeout = setTimeout(function(){location.reload()},3000);
 }

function gen(){
	document.querySelector('.first').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.second').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.third').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.fourth').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.fifth').innerHTML = Math.floor(Math.random()*50);

	form.display.value = "Number Generated";

	this.gen2();
}