adding/removing
addTemplate: aTemplate
	(templates includes: aTemplate) ifTrue: [ ^ self ].
	
	templates add: aTemplate.
	self save.
	
	^ aTemplate