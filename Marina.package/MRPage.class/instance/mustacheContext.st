exporting
mustacheContext
	^ { 
		'contents' -> self htmlContents.
		'author' -> self author.
		'title' -> self title
	 } asDictionary