actions
updateTitle: aTitle contents: newContents partial: aBoolean
	<action>
	self 
		setTitle: aTitle;
		contents: newContents;
		partial: aBoolean;
		validate;
		save