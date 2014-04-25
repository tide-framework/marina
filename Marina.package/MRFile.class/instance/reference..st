accessing
reference: aFileReference
	reference := (aFileReference relativeToPath: FileSystem workingDirectory) segments joinUsing: '/'