accessing
indexPage
	^ MRGeneratedContent new
		title: self title;
		contents: self htmlContentsWithTemplate;
		parent: self;
		yourself