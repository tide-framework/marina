adding/removing
addTo: anObject
	anObject addUser: self.
	self save.
	
	^ self