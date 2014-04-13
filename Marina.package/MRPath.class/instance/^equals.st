comparing
= aPath
	(aPath isKindOf: MRPath) ifFalse: [  ^ false ].
	^ self segments hasEqualElements: aPath segments