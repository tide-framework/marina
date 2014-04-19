accessing
mustacheContext
	^ {
		'contents' -> self indexPageContents.
		'title' -> self title.
		self localPath, '-active' -> true.
	} asDictionary