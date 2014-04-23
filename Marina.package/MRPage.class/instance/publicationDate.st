accessing
publicationDate
	^ publicationDate ifNil: [ self updateDate ]