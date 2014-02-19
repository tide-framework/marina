testing
validatePassword: aString
	^ (self hashPassword: aString) = password