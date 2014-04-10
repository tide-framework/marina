creation
createDefaultTemplate
	defaultTemplate := MRTemplate new.
	defaultTemplate contents: '<html>{{{contents}}}</html>'.
	defaultTemplate save.
	^ defaultTemplate