adding/removing
removeStructure: aStructure
	structures remove: aStructure ifAbsent: [].
	self save