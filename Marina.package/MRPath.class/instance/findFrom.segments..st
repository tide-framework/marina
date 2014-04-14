private
findFrom: aStructure segments: segments
	aStructure isNil ifTrue: [ ^ nil ].
	^segments
		ifEmpty: [ aStructure ]
		ifNotEmpty: [ self findFrom: (aStructure childNamed: segments first) segments: segments allButFirst   ]