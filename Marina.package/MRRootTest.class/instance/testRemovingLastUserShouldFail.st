tests
testRemovingLastUserShouldFail
	self assert: object users size equals: 1.
	self
		should: [ object users anyOne removeFrom: object ]
		raise: Error
		whoseDescriptionIncludes: 'delete the last user'
		description: 'It should not be possible to remove the latest user'