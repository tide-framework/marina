exporting
htmlContents
	^ String
		streamContents: [ :stream | 
			| config writer |
			config := PRExportConfiguration new.
			config internalLinksAreAllAnchors: false.
			config stopNumberingAtHeadingLevel: 0.
			writer := PRHTMLWriter on: stream.
			writer configuration: config.
			[ writer start: self pillarContents ]
				on: PRWarning
				do: [ :ex | ex resume ] ]