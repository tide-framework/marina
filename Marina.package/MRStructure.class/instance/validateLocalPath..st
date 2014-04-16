validating
validateLocalPath: aString
	aString isEmptyOrNil ifTrue: [ self validationError: 'Path is empty' ].
	
	self parent ifNotNil: [ 
		self validateChildLocalPath: aString ]