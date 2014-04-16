actions
loginUserWithEmail: email
	| user |
	user := MRUser userFromEmail: email.
	user ifNil: [ ^ self loginError ].
	self session user: user