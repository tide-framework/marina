private
indexPageContents
	^ String
		streamContents: [ :stream | 
			| canvas |
			canvas := PRHTMLCanvas on: (PROutputStream on: stream).
			self sortedPublishedPosts do: [ :post | self indexPageContentsFor: post on: canvas ] ]