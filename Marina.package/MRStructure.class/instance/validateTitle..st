validating
validateTitle: aString
	aString isEmptyOrNil ifTrue: [ self validationError: 'Title is empty' ].
	
	self parent ifNotNil: [ 
		self validateChildTitle: aString ]