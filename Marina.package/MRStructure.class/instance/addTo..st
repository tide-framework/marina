adding/removing
addTo: anObject
	self parent: anObject.
	self validate.
	self parent validateStructure: self.
	anObject addStructure: self.
	self save.
	^ self