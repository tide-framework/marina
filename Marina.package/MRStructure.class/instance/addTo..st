adding/removing
addTo: anObject
	self parent: anObject.
	self validate.
	anObject addStructure: self.
	self save.
	^ self