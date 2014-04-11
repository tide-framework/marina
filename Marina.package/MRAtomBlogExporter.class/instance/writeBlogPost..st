writing
writeBlogPost: aBlogPost
	aBlogPost published ifFalse: [ ^ self ].
	writer tag
		name: 'entry';
		with: [ 
					self
						writeTitle: aBlogPost;
						writeBlogPostLinks: aBlogPost;
						writeId: aBlogPost;
						writePublicationDate: aBlogPost;
						writeUpdateDate: aBlogPost;
						writeSummary: aBlogPost;
						writeAuthor: aBlogPost author;
						writeContents: aBlogPost ]