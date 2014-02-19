accessing
mustachePartials
	^ self root templates collect: [ :each |
		each mustacheContents ]