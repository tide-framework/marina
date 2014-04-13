*marina
asMRPath
	^ self inject: MRPath newRoot into: [ :path :each | path , each ]