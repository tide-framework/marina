tests
testWithAllParents
	| dirRoot dirSub root |
	dirRoot := MRDirectory new title: 'a'; yourself.
	dirSub := MRDirectory new title: 'a'; yourself.
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