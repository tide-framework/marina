accessing
defaultTemplate
	^ self templates ifEmpty: [ self add: self class defaultTemplate ] ifNotEmpty: [ self templates first ]