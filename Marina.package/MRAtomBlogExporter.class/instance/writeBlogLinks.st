writing
writeBlogLinks
	publicationLocation ifNotNil: [ 
		writer tag
			name: 'link';
			attributeAt: 'rel' put: 'self';
			attributeAt: 'type' put: self mimeType printString;
			attributeAt: 'href' put: publicationLocation printString		
		 ]