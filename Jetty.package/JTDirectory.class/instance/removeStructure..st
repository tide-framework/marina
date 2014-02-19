adding/removing
removeStructure: aChild
	children remove: aChild ifAbsent: [  ].
	self save