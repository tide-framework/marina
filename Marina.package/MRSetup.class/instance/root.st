accessing
root
	^ root ifNil: [ root := self createRoot ]