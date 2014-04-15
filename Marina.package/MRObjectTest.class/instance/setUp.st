running
setUp
	oldRepository := VORepository current.
	VORepository setRepository: VOMemoryRepository new.
	super setUp.
	object := self newInstance.
