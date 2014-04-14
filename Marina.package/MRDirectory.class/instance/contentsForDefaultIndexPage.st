private
contentsForDefaultIndexPage
	^ String streamContents: [ :stream 
		|
		stream nextPutAll: '! Index of ', self title; lf.
		self children do: [ :child |
			stream
				nextPutAll: '-*';
				nextPutAll: child  title;
				nextPutAll: '>';
				nextPutAll: child path serverPath;
				nextPutAll: '*'
			 ] separatedBy: [ stream lf ]
		 ]