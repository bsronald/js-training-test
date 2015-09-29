var getBio=require('./getBio.js');

describe('Name Undefined', function() {
	it('should behave Return the name and age', function() {
		var name='Ronald';
		var age=15;
		var actual= getBio(name,age);
		var exp='Hi, my name is '+name+' , I am '+age+' years old and I am a nice guy';
		expect(actual).toEqual(exp);
	});

	it('Error Need name and age to provide a biography', function() {
		var name='Ronald';
		var age=undefined;
		//var actual= getBio(name,age);
		//var exp='Need name and age to provide a biography';
		expect(function(){getBio('Ronald', undefined );}).toThrow(new Error('Need name and age to provide a biography'));
	});

	it('Error inserting age',function(){

		var name='Ronald';
		var age='a';
		//var actual= getBio(name,age);
		var exp='Invalid age';
		
		expect(function(){getBio('Ronald',-1);}).toThrow(new Error('Invalid age'));
            
	});
});