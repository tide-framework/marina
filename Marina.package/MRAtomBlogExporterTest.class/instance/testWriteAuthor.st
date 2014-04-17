tests
testWriteAuthor
	self newInstance writeAuthor: nil.
	self assertXMLEquals: ''.
	self newInstance
		writeAuthor:
			(MRUser new
				fullName: 'Damien Cassou';
				email: 'damien.cassou@gmail.com';
				yourself).
	self assertXMLEquals: '<author><name>Damien Cassou</name><email>damien.cassou@gmail.com</email></author>'