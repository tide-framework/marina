accessing
allChildren
	| allChildren |
	
	allChildren := OrderedCollection new.
	self children do: [ :each |
		allChildren add: each.
		allChildren addAll: each allChildren ].
	
	^ allChildren 