actions
loginUsername: username password: password
	<action>
	| user |
	
	user := MRUser userNamed: username.
	(user validatePassword: password)
		ifTrue: [ self session user: user ]
		ifFalse: [ self loginError ]