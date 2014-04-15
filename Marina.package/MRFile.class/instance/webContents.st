accessing
webContents
	^ (ZnEntity bytes: self reference binaryReadStream contents)
		contentType: self contentType;
		yourself