adding/removing
addUser: anUser
	(users includes: anUser) ifTrue: [ ^ self ].
	
	users add: anUser.
	self validate.
	self save.
	
	^ anUser