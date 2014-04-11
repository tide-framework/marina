accessing
findPageForPath: aCollection
	^ aCollection ifEmpty: [ self ] ifNotEmpty: [ nil ]