accessing
summaryLimitedTo: sizeLimit
	| tmpStream |
	tmpStream := LimitedWriteStream on: (String new: (sizeLimit min: self contents size)).
	tmpStream setLimit: sizeLimit limitBlock: [ ^ tmpStream contents ].
	PRTextWriter write: self pillarContents to: tmpStream.
	^ tmpStream contents