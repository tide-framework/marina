adding/removing
remove: aChild
	<action>
	children remove: aChild ifAbsent: [  ].
	self save.
	aChild remove