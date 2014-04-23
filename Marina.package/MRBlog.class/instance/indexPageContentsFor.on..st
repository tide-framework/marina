private
indexPageContentsFor: aPost on: html
	html tag
		name: 'div';
		parameterAt: 'class' put: 'marina-blog-post';
		with: [ 
					html tag
						name: 'h2';
						with: [ 
									html tag
										name: 'a';
										parameterAt: 'href' put: aPost path serverPath;
										with: aPost title ].
					html tag
						name: 'p';
						with: [ self contentsFor: aPost on: html ] ]