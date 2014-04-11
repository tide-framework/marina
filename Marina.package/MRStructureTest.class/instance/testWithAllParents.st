tests
testWithAllParents
	| dirRoot dirSub root |
	dirRoot := MRDirectory new.
	dirSub := MRDirectory new.
	root := MRRoot new.
	dirRoot add: dirSub.
	dirSub add: object.
	root add: dirRoot.
	self
		assert: object withAllParents
		equals:
			{object.
			dirSub.
			dirRoot.
			root}