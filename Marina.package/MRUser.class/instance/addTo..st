adding/removing
addTo: anObject
	self validate.
	anObject addUser: self.
	self save.
	
	^ self