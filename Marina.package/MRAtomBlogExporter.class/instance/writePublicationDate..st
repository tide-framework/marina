writing
writePublicationDate: aStructureWithPublicationDate
	aStructureWithPublicationDate publicationDate ifNil: [ self error: 'It is not possible to write a structure without a publication date' ].
	writer tag
		name: 'published';
		with: aStructureWithPublicationDate publicationDate printString