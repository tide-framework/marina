validating
validateChildLocalPath: aString
	(self parent children reject: [ :each | each = self ])
		detect: [ :each | each localPath = aString ]
		ifNone: [ ^ self ].
		
	self validationError: 'A structure with this path already exists'