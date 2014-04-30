actions
queryDataFromAssertion: anAssertion
	^ (ZnStringEntity
		text:
			{('assertion' -> anAssertion).
			('audience' -> self class personaAudience asString ifNil: [ TDServer server url ]) } asDictionary asJsonString)
		contentType: ZnMimeType applicationJson;
		yourself