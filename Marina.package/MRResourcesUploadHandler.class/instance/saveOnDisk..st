uploading
saveOnDisk: aFile
	| directory file |
	directory := (self resourcesDirectory / (UUID new asString36 first: 10))
		ensureCreateDirectory.
	file := directory / aFile fileName.
	file writeStreamDo: [ :str | 
		str binary nextPutAll: aFile contents ].
	^ file