accessing
indexPage
	^ MRGeneratedContent new
		title: self title;
		contents: (self indexTemplate valueFromContext: self mustacheContext);
		parent: self;
		yourself