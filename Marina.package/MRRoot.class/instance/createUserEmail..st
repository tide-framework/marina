adding/removing
createUserEmail: aString
	<action>
	^ self add: (MRUser new
		email: aString;
		yourself)