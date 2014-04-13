tests
testFullPath
	| dirRoot dirSub dirRootTitle dirSubTitle objectTitle root |
	dirRootTitle := 'root'.
	dirSubTitle := 'sub'.
	objectTitle := 'leaf'.
	dirRoot := MRDirectory new
		title: dirRootTitle;
		yourself.
	dirSub := MRDirectory new
		title: dirSubTitle;
		yourself.
	root := MRRoot new.
	object title: objectTitle.
	dirRoot add: dirSub.
	dirSub add: object.
	root add: dirRoot.
	self
		assert: object path
		equals:
			{dirRootTitle.
			dirSubTitle.
			objectTitle} asMRPath