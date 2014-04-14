accessing
docDirectory
	^ docDirectory ifNil: [ docDirectory := self createDocDirectory ]