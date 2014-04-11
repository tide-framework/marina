tests
testEmptyTitleValidation

	object title: ''.
	self denyIsValid.
	
	object title: 'test'.
	self assertIsValid