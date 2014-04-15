running
setUp
	super setUp.
	object := self newInstance.
	oldRepository := VORepository current.
	VORepository setRepository: VOMemoryRepository new