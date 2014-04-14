writing
writeBlogLinks
	writer tag
		name: 'link';
		attributeAt: 'rel' put: 'self';
		attributeAt: 'type' put: self mimeType printString;
		attributeAt: 'href' put: blog atomUrl printString