request handling
pageNotFound: aRequest
	self respond: (ZnResponse notFound: aRequest requestLine uri)