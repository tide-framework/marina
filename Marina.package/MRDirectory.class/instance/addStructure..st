adding/removing
addStructure: aChild
	(children includes: aChild) ifTrue: [ ^ self ].
	
	children add: aChild.
	self save