initialization
initialize
	TDDispatcher default sessionManager sessionClass: self.
	MRLoginPresenter registerAt: 'marina'.
	(MRPagesHandler path: 'web') register.
	(MRResourcesUploadHandler path: 'upload') register