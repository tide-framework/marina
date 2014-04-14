accessing
updateTitle: aTitle template: aTemplate contents:  newContents published: aBoolean
	<action>
	self setTitle: aTitle.
	self 
		template: aTemplate;
		contents: newContents;
		published: aBoolean;
		validate;
		save