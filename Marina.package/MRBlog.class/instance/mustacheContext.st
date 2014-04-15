accessing
mustacheContext
	^ {('contents' -> self indexPageContents).
	('title' -> self title)} asDictionary