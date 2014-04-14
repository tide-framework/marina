request handling
handleRequest: aRequest
	| structure |
	structure := self pageForRequest: aRequest.
	structure ifNil: [ self pageNotFound: aRequest ].
	structure published
		ifFalse: [ self pageNotFound: aRequest ].
	structure webContents
		ifNil: [ self pageNotFound: aRequest ]
		ifNotNil: [ :contents | self respond: (ZnResponse ok: (ZnEntity html: contents)) ]