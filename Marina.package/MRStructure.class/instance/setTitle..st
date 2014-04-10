accessing
setTitle: aString
	<action>
	self title = aString ifTrue: [ ^ self ].
	self validate.
	self parent ifNotNil: [ self parent validateStructure: self ].
	title := aString.
	self save