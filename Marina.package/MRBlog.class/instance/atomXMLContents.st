exporting
atomXMLContents
	^ MRAtomBlogExporter new
		blog: self;
		writeBlog;
		contents