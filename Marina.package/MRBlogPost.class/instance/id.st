accessing
id
	^ id ifNil: [ id := self generateUUID. self save. id ]