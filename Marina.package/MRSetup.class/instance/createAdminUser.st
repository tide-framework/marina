creation
createAdminUser
	adminUser := MRUser new.
	adminUser username: 'admin'.
	adminUser password: 'admin'.
	adminUser email: 'admin@localhost'.
	adminUser fullName: 'Admin'.
	adminUser save.
	^ adminUser