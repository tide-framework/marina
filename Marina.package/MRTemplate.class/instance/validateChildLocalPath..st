validating
validateChildLocalPath: aString
	(self root templates reject: [ :each | each = self ])
		detect: [ :each | each localPath = aString ]
		ifNone: [ ^ self ].
		
	self validationError: 'A template with this title already exists'