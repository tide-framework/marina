public
startWebserverWith: serverBasePath port: serverPort
	TDServer startOn: serverPort.
	TDServer server serverUrl: 'http://', (serverBasePath trimRight: [:char | char = $/ ]).