accessing
updateTitle: aTitle path: aPath template: aTemplate contents:  newContents published: aBoolean
	<action>
	self setTitle: aTitle.
	self 
		template: aTemplate;
		localPath: aPath;
		contents: newContents;
		published: aBoolean;
		validate;
		save