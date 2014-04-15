uploading
addFileTo: aPath title: aTitle
	"directory and file are instance of MRDirectory and MRFile respectively, not files on disk"
	
	| directory file |
	
	directory := ($/ split: aPath) asMRPath findFrom: self root.
	(directory isNil or: [ directory isDirectory not ]) ifTrue: [ self forbidden ].
	
	file := MRFile new
		title: aTitle;
		yourself.
		
	directory add: file.
	
	^ file