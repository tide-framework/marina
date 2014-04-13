request handling
pageForRequest: aRequest
	^ self root ifNotNil: [ :root | 
		 aRequest requestLine uri segments allButFirst asMRPath findPageFrom: root ]