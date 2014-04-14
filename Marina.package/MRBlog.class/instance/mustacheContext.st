accessing
mustacheContext
	^ {('posts' -> self indexPageContents).
	('title' -> self title)}