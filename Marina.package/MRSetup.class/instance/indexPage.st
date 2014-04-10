accessing
indexPage
	^ indexPage ifNil: [ indexPage := self createIndexPage ]