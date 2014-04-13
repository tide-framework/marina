copying
, aString
	^ MRPath new
		setName: aString parent: self;
		yourself