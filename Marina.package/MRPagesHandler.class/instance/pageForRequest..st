request handling
pageForRequest: aRequest
	^ self root ifNotNil: [ :root | | segments |
		segments := aRequest requestLine uri segments allButFirst.
		segments ifEmpty: [ ^ root ].
		segments last = #/ ifTrue: [ segments := segments allButLast ].
		segments asMRPath findFrom: root ]