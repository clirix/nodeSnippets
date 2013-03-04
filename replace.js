var fs = require('fs');
var startTime = new Date();
console.log('Starte Skript');
var counter = 0;


var getFileNames = function getFileNames(fileString){

  var files = fileString.split("\n");

	return files;

};



var openFiles = function openFiles(fileName ,next){

	fs.readFile(fileName , 'utf-8' ,function (err, data) {

		if (err) console.error(err);

		next(fileName, data);

	});

};



var replaceString = function replaceString(fileName, data){

	if(typeof(data) == 'string' && data.length > 3){

		if(process.argv.length > 3){

			var repString = (process.argv.length === 4) ? "" : process.argv[4];

			var regArg = new RegExp(process.argv[3], 'g');

			console.log(regArg);

			data = data.replace( regArg, repString);

		}



		fs.writeFile(fileName, data ,'utf-8',function (err) {

			if (err) console.error(err);

			console.log(fileName+' saved!');

		});

	}



};



var stInFunc = function(){

	process.stdin.resume(); // stdio

	process.stdin.setEncoding('utf8');

	process.stdin.on('data', function (chunk) {

		getFileNames(chunk).forEach(function(fileName){

			//console.log('name ist: '+fileName);

			if(fileName !== ''){

				counter++;

				openFiles(fileName, replaceString);

			}

		});

	});

	process.stdin.on('end', function () {

		console.log('end');

	});

};



var get_time_diff = function(start , end){

	return end.getTime() - start.getTime() + 'ms';

};



//ARGUMENTS

if(process.argv.length > 2){

	if(process.argv[2] !== '' && process.argv[2] !== 'pipe'){

		openFiles(process.argv[2] , replaceString);

	}else{

		stInFunc();

	}

}else{

	stInFunc();

}

process.on('exit', function () {

  process.nextTick(function () {

   console.log('This will not run');

  });

  console.log(counter +' Dateien in '+get_time_diff(startTime, new Date())+' geändert');

});
