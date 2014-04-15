accessing
defaultUser
	^ self users ifEmpty: [ self add: self class defaultUser ] ifNotEmpty: [ self users first ]