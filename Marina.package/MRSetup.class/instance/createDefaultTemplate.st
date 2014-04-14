creation
createDefaultTemplate
	defaultTemplate := MRTemplate new.
	defaultTemplate title: 'default'.
	defaultTemplate contents: '<html>{{{contents}}}</html>'.
	defaultTemplate save.
	^ defaultTemplate