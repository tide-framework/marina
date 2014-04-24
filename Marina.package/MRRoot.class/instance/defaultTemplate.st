accessing
defaultTemplate
	^ defaultTemplate ifNil: [ 
		self templates 
			ifEmpty: [ self add: self class defaultTemplate ] 
			ifNotEmpty: [ self templates first ] ]