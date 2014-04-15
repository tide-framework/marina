exporting
mustacheContext
	^ { 
		'contents' -> self htmlContents.
		'author' -> self author fullName.
		'title' -> self title
	 } asDictionary