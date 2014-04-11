validating
validateStructure: aStructure
	(self withAllParents includes: aStructure) ifTrue: [ 
		self validationError: 'Cannot add a parent as a child' ].
	
	self children 
		detect: [ :each | each title = aStructure title ]
		ifNone: [ ^ self ].
		
	self validationError: 'A structure with the same title already exists'