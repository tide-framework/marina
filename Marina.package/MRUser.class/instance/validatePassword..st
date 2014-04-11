testing
validatePassword: aString
	^ (self hashPassword: aString) asArray = password asArray