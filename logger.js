 module.exports = function(request, response, next) {
	 var start= +new Date();
	 var stream = process.stdout;
	 var url = request.url;
	 var method = request.method;
	 response.on('finish',function(){

		 var duration =+new Date() -start;
		 var message = method + ' to ' + url + ' took '+duration + 'ms ' + Counter.increment()+'count \n';
		 stream.write(message);
	 });
	 
	 next();
	 	 
 }
 var Counter = {
	 count :0,
	 increment : function(){
		 this.count=this.count+1;
		 return this.count;
	 }
 }