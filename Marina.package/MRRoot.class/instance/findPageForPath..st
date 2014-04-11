accessing
findPageForPath: aCollection
	| page |
	aCollection ifEmpty: [ ^ self indexPage ].
	page := self structures detect: [ :each | each path = aCollection first urlEncoded ] ifNone: [ ^ nil ].
	aCollection allButFirst
		do: [ :each | 
			page isDirectory
				ifFalse: [ ^ nil ].
			page := page children detect: [ :child | child path = each urlEncoded ] ifNone: [ ^ nil ] ].
	page isPage
		ifFalse: [ ^ nil ].
	^ page