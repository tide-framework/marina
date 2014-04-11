accessing
contents: anObject
	(contents = anObject)
		ifFalse: [ updateDate := DateAndTime now ].
	super contents: anObject