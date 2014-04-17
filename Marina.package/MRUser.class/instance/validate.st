validating
validate
	super validate.
	self email isEmptyOrNil
		ifTrue: [ self validationError: 'a user must have a valid email address' ]