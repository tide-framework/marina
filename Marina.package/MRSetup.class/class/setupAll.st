public
setupAll
	(self confirm: 'This will erase your marina database, are you *really* sure?')
		ifTrue: [ 
			self setupVoyage.
			self dropDatabase.
			self setupWebsite ]