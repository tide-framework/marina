validating
validate
	self title ifNil: [ self validationError: 'Title is empty' ].
	self parent ifNotNil: [ 
		(self parent children reject: [ :each | each = self ])
			detect: [ :each | each title = self title ]
			ifNone: [ ^ self ].
		self validationError: 'A structure with this title already exists' ]