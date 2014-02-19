initialization
initialize
	TDDispatcher default sessionManager sessionClass: self.
	JTRootPresenter registerAt: '_root'.
	(JTPagesHandler path: 'web') register