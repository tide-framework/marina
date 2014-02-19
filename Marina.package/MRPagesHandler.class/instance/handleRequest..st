request handling
handleRequest: aRequest
	| page |
	page := self pageForRequest: aRequest.
	page ifNil: [ self pageNotFound: aRequest ].
	page published ifFalse: [ self pageNotFound: aRequest ].
	
	self respond: (ZnResponse ok: (ZnEntity html: page htmlContentsWithTemplate))