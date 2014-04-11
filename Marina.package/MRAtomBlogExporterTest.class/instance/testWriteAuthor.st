tests
testWriteAuthor
	self newInstance writeAuthor: nil.
	self assertXMLEquals: ''.
	self newInstance
		writeAuthor:
			(MRUser new
				username: 'cassou';
				yourself).
	self assertXMLEquals: '<author><name>cassou</name></author>'.
	self newInstance
		writeAuthor:
			(MRUser new
				username: 'cassou';
				fullName: 'Damien Cassou';
				yourself).
	self assertXMLEquals: '<author><name>Damien Cassou</name></author>'.
	self newInstance
		writeAuthor:
			(MRUser new
				username: 'cassou';
				email: 'damien.cassou@gmail.com';
				yourself).
	self assertXMLEquals: '<author><name>cassou</name><email>damien.cassou@gmail.com</email></author>'