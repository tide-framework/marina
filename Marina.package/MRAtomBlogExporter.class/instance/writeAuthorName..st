writing
writeAuthorName: anAuthor
	writer tag
		name: 'name';
		with:
				(anAuthor fullName isEmptyOrNil
						ifTrue: [ anAuthor username ]
						ifFalse: [ anAuthor fullName ])