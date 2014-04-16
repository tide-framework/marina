accessing
setTitle: aString
	<action>
	self validateLocalPath: aString.
	
	self 
		title: aString; 
		save