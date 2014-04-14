accessing
posts
	^ self children sorted: [ :p1 :p2 | p1 publicationDate < p2 publicationDate  ]