adding/removing
addTo: anObject
	anObject addStructure: self.
	self parent: anObject.
	self save