accessing
localPath
	<state>
	^ (localPath ifNil: [ self title ]) urlEncoded