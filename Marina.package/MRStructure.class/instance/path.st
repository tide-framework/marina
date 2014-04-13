accessing
path
	^ self parent ifNil: [ MRPath newBadRoot , self title ] ifNotNil: [ self parent path , self title ]