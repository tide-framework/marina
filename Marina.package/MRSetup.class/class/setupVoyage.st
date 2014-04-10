public
setupVoyage
	| repository |
	repository := VOMongoRepository database: 'marina'.
	repository enableSingleton.
	^ repository