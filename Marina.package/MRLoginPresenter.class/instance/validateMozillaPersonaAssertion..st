actions
validateMozillaPersonaAssertion: anAssertion
	<action>
	| response json |
	response := ZnEasy
		post: 'https://verifier.login.persona.org/verify'
		data: (self queryDataFromAssertion: anAssertion).
	json := Json readFrom: response entity readStream.
	json status = 'okay' ifFalse: [ self  loginError ].
	self loginUserWithEmail: json email