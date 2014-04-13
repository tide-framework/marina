printing
printOn: aStream
	aStream
		nextPutAll: (self class name allButFirst: 2);
		nextPutAll: ' @ ';
		print: self path