accessing
indexPage
	"Answer the structure named index, if it is found and it is a page"
	
	^ self children 
		detect: [ :each | each title = 'index' and: [ each isPage ] ]
		ifNone: [ nil ]