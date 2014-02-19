adding/removing
removeTemplate: aTemplate
	templates remove: aTemplate ifAbsent: [].
	self save