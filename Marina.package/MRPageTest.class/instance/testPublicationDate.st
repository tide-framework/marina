tests
testPublicationDate
	object published: true.
	self assert: (DateAndTime now asTime subtractTime: object publicationDate asTime) < 2 seconds