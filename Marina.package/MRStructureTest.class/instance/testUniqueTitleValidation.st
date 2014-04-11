tests
testUniqueTitleValidation
	| parent sibling |
	
	parent := MRDirectory new.
	sibling := self classToBeTested  new.
	sibling title: 'a'.
	parent add: sibling.

	object title: 'a'.
	object parent: parent.
	self denyIsValid.
	
	object title: 'b'.
	self assertIsValid