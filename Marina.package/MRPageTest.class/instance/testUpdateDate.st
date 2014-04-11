tests
testUpdateDate
	self deny: object updateDate isNil.
	object contents: 'some random content for testUpdateDate'.
	self assert: (DateAndTime now asTime subtractTime: object updateDate asTime) < 2 seconds