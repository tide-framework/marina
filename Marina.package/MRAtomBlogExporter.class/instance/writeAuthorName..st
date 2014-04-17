writing
writeAuthorName: anAuthor
	anAuthor fullName isEmptyOrNil
		ifFalse: [ 
			writer tag
				name: 'name';
				with: anAuthor fullName ]