tests
testPathIsEncoded
	| title encodedTitle |
	title := 'foo bar with a space'.
	encodedTitle := title copyReplaceAll: String space with: '%20'.
	self deny: title = encodedTitle.
	object title: title.
	self assert: object path equals: encodedTitle