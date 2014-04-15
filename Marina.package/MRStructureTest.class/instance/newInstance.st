instance creation
newInstance
	| parent newStructure |
	parent := self newParent.
	newStructure := super newInstance
		title: 'foobar';
		yourself.
	parent add: newStructure.
	^ newStructure