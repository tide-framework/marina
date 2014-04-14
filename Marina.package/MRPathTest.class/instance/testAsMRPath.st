tests
testAsMRPath
	self assert: {  } asMRPath equals: MRPath newRoot.
	self assert: { 'foo' } asMRPath equals: MRPath newRoot , 'foo'