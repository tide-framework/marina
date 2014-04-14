accessing
webContents
	^ self indexPage ifNotNil: [ :page | page webContents ]