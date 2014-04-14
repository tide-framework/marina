accessing
serverPath
	^ String
		streamContents: [ :stream | 
			stream
				nextPut: $/;
				nextPutAll: MRPagesHandler deployedPath;
				print: self ]