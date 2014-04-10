accessing
defaultTemplate
	<state>
	^ defaultTemplate ifNil: [ self root templates first ]