writing
writeAuthor: anAuthor
	anAuthor ifNil: [ ^ self ].
	writer tag
		name: 'author';
		with: [ 
					self writeAuthorName: anAuthor.
					self writeAuthorEmail: anAuthor ]