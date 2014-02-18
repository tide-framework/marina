accessing
userNamed: username
	^ self selectOne: [ :each | each username = username ]