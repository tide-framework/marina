accessing
childNamed: aName
	^ (super childNamed: aName)
		ifNil: [ 
			aName = self atomFeedFileName
				ifTrue: [ self atomXML ] ]