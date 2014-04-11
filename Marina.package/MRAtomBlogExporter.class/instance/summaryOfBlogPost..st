private
summaryOfBlogPost: aBlogPost
	| tmpStream sizeLimit |
	sizeLimit := self summarySizeLimit.
	tmpStream := LimitedWriteStream on: (String new: (sizeLimit min: aBlogPost contents size)).
	tmpStream setLimit: sizeLimit limitBlock: [ ^ tmpStream contents ].
	PRTextWriter write: aBlogPost pillarContents to: tmpStream.
	^ tmpStream contents