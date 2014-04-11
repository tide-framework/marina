validating
validate
	self title ifNil: [ self validationError: 'Title is empty' ]