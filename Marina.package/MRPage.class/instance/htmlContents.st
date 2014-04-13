exporting
htmlContents
	^ String streamContents: [ :stream | 
		[(PRHTMLWriter on: stream) 
			start: self pillarContents] on: PRWarning do: [ :ex | ex resume ] ]