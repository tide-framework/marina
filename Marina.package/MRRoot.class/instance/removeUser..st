adding/removing
removeUser: anUser
	(users size = 1 and: [ users first = anUser ])
		ifTrue: [ self error: 'Can''t delete the last user' ].
	users remove: anUser ifAbsent: [  ].
	self save