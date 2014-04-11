assertions
assertXMLIncludes: aString 
	self assert: (self exportedXML includesSubstring: aString caseSensitive: true)