accessing
indexTemplate
	^ indexTemplate ifNil: [ indexTemplate := self defaultTemplate  ]