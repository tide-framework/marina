accessing
setTitle: aString
	<action>
	self validateTitle: aString.
	
	self 
		title: aString; 
		save