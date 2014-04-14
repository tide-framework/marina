exporting
atomXML
	^ MRGeneratedContent new
		contents: self atomXMLContents;
		parent: self;
		title: self atomFeedFileName;
		yourself