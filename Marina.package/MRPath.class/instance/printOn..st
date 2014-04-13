printing
printOn: aStream
	aStream nextPut: $/.
	self segments do: [ :segment | aStream nextPutAll: segment ] separatedBy: [ aStream nextPut: $/ ]