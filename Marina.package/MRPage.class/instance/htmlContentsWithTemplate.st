exporting
htmlContentsWithTemplate
	^ self template mustacheContents 
		value: self mustacheContext
		partials: self template mustachePartials