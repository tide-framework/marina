actions
queryDataFromAssertion: anAssertion
	^ (ZnStringEntity
		text:
			{('assertion' -> anAssertion).
			('audience' -> (self class personaAudience  
				ifNotNil: [ :audience | audience asString ]
				ifNil: [ TDServer server url ])) } asDictionary asJsonString)
		contentType: ZnMimeType applicationJson;
		yourself