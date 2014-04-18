exporting
mustacheContext
	^ { 
		'contents' -> self htmlContents.
		'author' -> self author fullName.
		'title' -> self title.
		self localPath, '-active' -> true.
	 } asDictionary