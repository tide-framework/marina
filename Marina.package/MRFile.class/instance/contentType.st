accessing
contentType
	^ contentType ifNil: [ self defaultContentType ]