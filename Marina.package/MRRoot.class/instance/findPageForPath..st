accessing
findPageForPath: aCollection
	| page |
	
	(aCollection isNil or: [ aCollection isEmpty ]) ifTrue: [ ^ self indexPage ].
	
	page := self structures 
		detect: [ :each | each path = aCollection first ]
		ifNone: [ ^ nil ].
	
	aCollection allButFirst do: [ :each | 
		page isDirectory ifFalse: [ ^ nil ].
		page := page children 
			detect: [ :child | child path = each ]
			ifNone: [ ^ nil ] ].
		
	page isPage ifFalse: [ ^ nil ].
	^ page