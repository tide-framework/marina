accessing
userNamed: aString
	^ self users 
		detect: [ :each | each username = aString ]
		ifNone: [ nil ]