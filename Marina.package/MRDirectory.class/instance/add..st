adding/removing
add: anObject
	anObject addTo: self.
	self save.
	^ anObject