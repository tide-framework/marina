validating
validateChildTitle: aString
	(self parent children reject: [ :each | each = self ])
		detect: [ :each | each title = aString ]
		ifNone: [ ^ self ].
		
	self validationError: 'A structure with this title already exists'