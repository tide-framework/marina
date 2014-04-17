accessing
defaultUser
	^ self users ifEmpty: [ nil ] ifNotEmpty: [ self users first ]