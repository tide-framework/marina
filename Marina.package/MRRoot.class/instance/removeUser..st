adding/removing
removeUser: anUser
	users remove: anUser ifAbsent: [].
	self save