request handling
handleRequest: aRequest
	self withContextForRequest: aRequest do: [ 
		self session user ifNil: [ self forbidden ].
		aRequest method ==  #POST ifFalse: [ self methodNotAllowed ].

		self saveFileFromParts: aRequest entity parts.
		self respondOkTo: aRequest ]