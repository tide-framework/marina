actions
updateTitle: aTitle contents: newContents
	<action>
	self 
		setTitle: aTitle;
		contents: newContents;
		validate;
		save