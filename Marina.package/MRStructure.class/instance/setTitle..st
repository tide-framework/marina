accessing
setTitle: aString
	<action>
	title := aString.
	self validate.
	self save