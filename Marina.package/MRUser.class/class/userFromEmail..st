accessing
userFromEmail: email
	^ self selectOne: [ :each | each email = email ]