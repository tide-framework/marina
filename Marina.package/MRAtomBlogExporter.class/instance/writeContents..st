writing
writeContents: aBlogPost
	writer tag
		name: 'content';
		with: [ 
			writer 
				raw: '<![CDATA[';
				raw: (PRHTMLWriter write: aBlogPost pillarContents);
				raw: ']]>' ]