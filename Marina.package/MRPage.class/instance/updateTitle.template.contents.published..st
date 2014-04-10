accessing
updateTitle: aTitle template: aTemplate contents:  newContents published: aBoolean
	<action>
	self setTitle: aTitle.
	self validate.
	self 
		template: aTemplate;
		contents: newContents;
		published: aBoolean;
		save