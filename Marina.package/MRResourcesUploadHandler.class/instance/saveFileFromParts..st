uploading
saveFileFromParts: aCollection
	| filePath file |
	aCollection size = 2 ifFalse: [ 
		self methodNotAllowed ].
	filePath := aCollection first fieldValueString.
	file := aCollection second.
	
	(self addFileTo: filePath title: file fileName contentType: file contentType)
		reference: (self saveOnDisk: file);
		save;
		yourself