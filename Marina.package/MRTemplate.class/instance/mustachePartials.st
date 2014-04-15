accessing
mustachePartials
	^ (self root templates collect: [ :each |
		each title -> each mustacheContents ]) asDictionary