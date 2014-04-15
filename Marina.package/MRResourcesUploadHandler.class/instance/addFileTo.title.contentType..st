uploading
addFileTo: aPath title: aTitle contentType: aContentType
	"directory and file are instance of MRDirectory and MRFile respectively, not files on disk"
	
	| directory file |
	
	directory := (($/ split: aPath) reject: [ :each | each isEmpty ]) asMRPath findFrom: self root.
	(directory isNil or: [ directory isDirectory not ]) ifTrue: [ self forbidden ].
	
	file := MRFile new
		title: aTitle;
		contentType: aContentType;
		yourself.
		
	directory add: file.
	
	^ file