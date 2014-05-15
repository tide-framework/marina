accessing
fullName
	<state>
	^ fullName ifNil: [ self email ]