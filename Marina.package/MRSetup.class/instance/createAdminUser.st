creation
createAdminUser
	| user email |
	user := MRUser new.
	email := UIManager default request: 'Email of the admin user. This MUST be a valid email address.' initialAnswer: 'your.email@server.com' title: 'Email of admin'.
	user email: email.
	user fullName: email.
	user save.
	^ user