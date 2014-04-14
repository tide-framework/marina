actions
findPageFrom: aStructure
	^ (self findFrom: aStructure) ifNil: [ nil ] ifNotNil: [ :structure | structure asPage ]