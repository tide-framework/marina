accessing
docPage
	^ docPage ifNil: [ docPage := self createDocPage  ]