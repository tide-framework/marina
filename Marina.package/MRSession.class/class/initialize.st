initialization
initialize
	TDDispatcher default sessionManager sessionClass: self.
	MRRootPresenter registerAt: '_root'.
	(MRPagesHandler path: 'web') register