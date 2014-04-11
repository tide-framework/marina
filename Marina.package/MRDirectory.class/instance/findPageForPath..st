accessing
findPageForPath: aCollection
	aCollection ifEmpty: [ ^ self indexPage ].
	^ self children
		detect: [ :each | each path = aCollection first urlEncoded ]
		ifFound: [ :child | child findPageForPath: aCollection allButFirst ]
		ifNone: [ nil ]