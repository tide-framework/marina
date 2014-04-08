adding/removing
removeStructure: aChild
	<action>
	children remove: aChild ifAbsent: [  ].
	self save