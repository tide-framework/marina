adding/removing
add: anObject
	<action>
	anObject addTo: self.
	self save.
	^ anObject