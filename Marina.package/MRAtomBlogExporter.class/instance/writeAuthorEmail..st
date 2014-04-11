writing
writeAuthorEmail: anAuthor
	anAuthor email isEmptyOrNil
		ifFalse: [ 
			writer tag
				name: 'email';
				with: anAuthor email ]