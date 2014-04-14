writing
writeBlogPostLinks: aBlogPost
	writer tag
		name: 'link';
		attributeAt: 'rel' put: 'alternate';
		attributeAt: 'type' put: ZnMimeType textHtml printString;
		attributeAt: 'href' put: aBlogPost url printString