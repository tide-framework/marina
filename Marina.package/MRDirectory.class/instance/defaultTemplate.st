accessing
defaultTemplate
	<state>
	^ defaultTemplate ifNil: [ self root defaultTemplate ]