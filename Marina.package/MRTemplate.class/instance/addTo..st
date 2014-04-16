adding/removing
addTo: anObject
	self parent: anObject.
	self validate.
	anObject addTemplate: self.
	self save.
	^ self