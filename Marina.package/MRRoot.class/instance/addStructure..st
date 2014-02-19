adding/removing
addStructure: aStructure
	(structures includes: aStructure) ifTrue: [ ^ self ].
	
	structures add: aStructure.
	self save