creation
createDocDirectory
	docDirectory := MRDirectory new.
	docDirectory
		title: 'documentation';
		add: self docPage;
		save.
	^ docDirectory