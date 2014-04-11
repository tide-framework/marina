accessing
published: aBoolean
	<action>
	(self published not & aBoolean )
		ifTrue: [ publicationDate := DateAndTime now ]
		ifFalse: [ publicationDate := nil ].
	published := aBoolean.