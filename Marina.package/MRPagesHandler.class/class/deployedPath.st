accessing
deployedPath
	^ TDDispatcher default handlers
		detect: [ :handler | handler isKindOf: self ]
		ifFound: [ :handler | handler path ]
		ifNone: [ nil ]