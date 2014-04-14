private
summaryFor: aPost on: html
	html nextPutAll: (aPost summaryLimitedTo: self summarySizeLimit)