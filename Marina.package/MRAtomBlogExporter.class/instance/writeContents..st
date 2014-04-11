writing
writeContents: aBlogPost
	writer tag
		name: 'content';
		attributeAt: 'type' put: 'xhtml';
		with: [ 
					writer tag
						name: 'div';
						xmlns: 'http://www.w3.org/1999/xhtml';
						with: [ writer raw: (PRHTMLWriter write: aBlogPost pillarContents) ] ]