private
hashPassword: aString
	^ MD5 hashStream: aString readStream