accessing
template
	^ template ifNil: [ template := self defaultTemplate  ]