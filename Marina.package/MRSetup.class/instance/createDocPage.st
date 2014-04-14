creation
createDocPage
	docPage := MRPage new.
	docPage
		title: 'documentation';
		contents:
				'! Documentation of Marina
We will have to put some contents here at some point.';
		published: true;
		save.
	^ docPage