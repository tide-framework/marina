accessing
defaultTemplate
	^ defaultTemplate ifNil: [ defaultTemplate := self createDefaultTemplate ]