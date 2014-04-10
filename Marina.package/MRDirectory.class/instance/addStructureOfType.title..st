adding/removing
addStructureOfType: aType title: aTitle
	<action>
	
	| structureClass |
	
	structureClass := self validChildrenClasses
		detect: [ :each | each label = aType ]
		ifNone: [ self error: 'Invalid child structure type' ].
		
	^ self add: (structureClass new
		title: aTitle;
		yourself)