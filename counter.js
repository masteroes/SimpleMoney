module.exports = function(request, response, next) {
	 var stream = process.stdout;
	 response.on('finish',function(){

		 var message = Counter.increment()+'count \n';
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