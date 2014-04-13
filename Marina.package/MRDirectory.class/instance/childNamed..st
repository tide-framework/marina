accessing
childNamed: aName
		^ self children detect: [ :child | child title = aName ] ifNone: [ nil ]