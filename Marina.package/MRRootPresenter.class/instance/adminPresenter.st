actions
adminPresenter
	<action>
	self user 
		ifNil: [ self accessForbidden ]
		ifNotNil: [ ^ MRAdminPresenter new ]