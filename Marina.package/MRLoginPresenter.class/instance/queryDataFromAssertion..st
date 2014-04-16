actions
queryDataFromAssertion: anAssertion
	^ (ZnStringEntity
		text:
			{('assertion' -> anAssertion).
			('audience' -> TDServer server url asString)} asDictionary asJsonString)
		contentType: ZnMimeType applicationJson;
		yourself