accessing
indexPage
	"Answer the structure named index, if it is found and it is a page"
	
	^ self structures 
		detect: [ :each | each path = 'index' and: [ each isPage ] ]
		ifNone: [ nil ]