exporting
htmlContents
	^ String streamContents: [ :stream | 
		(PRHTMLWriter on: stream) 
			start: self pillarContents ]