Smalltalk createPackage: 'Marina-Widgets-Core'!
Object subclass: #MRContext
	instanceVariableNames: 'adminPresenter'
	package: 'Marina-Widgets-Core'!
!MRContext commentStamp!
I hold context objects related to the current Tide session.!

!MRContext methodsFor: 'accessing'!

adminPresenter
	^ adminPresenter
!

adminPresenter: aPresenter
	adminPresenter := aPresenter
!

root
	^ self adminPresenter root
!

templates
	^ self root templates
! !

MRContext class instanceVariableNames: 'current'!

!MRContext class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

Object subclass: #MRLoginDispatcher
	instanceVariableNames: 'presenter'
	package: 'Marina-Widgets-Core'!

!MRLoginDispatcher methodsFor: 'accessing'!

context
	^ MRContext current
!

presenter
	^ presenter
!

presenter: aTDProxy
	presenter := aTDProxy
! !

!MRLoginDispatcher methodsFor: 'actions'!

dispatchWithUser: anUser
	anUser 
		ifNil: [ self login ]
		ifNotNil: [ self renderAdminWidget ]
!

informSessionError
	window alert: 'Your session has expired, you will be redirected.'
!

login
	self loginWidget render
!

loginWidget
	^ MRMozillaPersonaLoginWidget new
		presenter: self presenter;
		onLoginBlock: [ self renderAdminWidget ]
!

renderAdminWidget
	self presenter adminPresenter then: [ :adminPresenter |
		self context adminPresenter: adminPresenter.
		MRAdminFrameWidget new render ]
!

start
	TDSessionErrorHandler onSessionError: [
		self informSessionError.
		window location reload ].
	'body' asJQuery empty.
	self presenter connect then: [
		self dispatchWithUser: self presenter user ]
! !

!MRLoginDispatcher class methodsFor: 'initialization'!

start
	self new
		presenter: (TDProxy on: '/marina');
		start
! !

Widget subclass: #MRWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Core'!
!MRWidget commentStamp!
I am the abstract superclass of all Marina widgets.!

!MRWidget methodsFor: 'accessing'!

adminPresenter
	^ self context adminPresenter
!

context
	^ MRContext current
!

root
	^ self context root
! !

!MRWidget methodsFor: 'actions'!

confirm: aString ifTrue: aBlock
	self 
		confirm: aString
		ifTrue: aBlock
		ifFalse: []
!

confirm: aString ifTrue: aBlock ifFalse: anotherBlock
	MRBootstrapConfirmation new
		contents: aString;
		okBlock: aBlock;
		cancelBlock: anotherBlock;
		appendToJQuery: 'body' asJQuery
!

notifyError: anError
	'#notification' asJQuery empty.
	[ :html | 
		html div
			class: 'alert alert-danger alert-dismissable'; 
			with: [
				html button
					class: 'close';
					type: 'button';
					at: 'data-dismiss' put: 'alert';
					at: 'aria-hidden' put: 'true';
					with: '×'.
				html with: anError messageText ] ]
		appendToJQuery: '#notification' asJQuery.
! !

MRWidget subclass: #MRFrameWidget
	instanceVariableNames: 'wrapper'
	package: 'Marina-Widgets-Core'!
!MRFrameWidget commentStamp!
I am an abstract widget building a frame.

I know how to remove and render myself on a page. Only one instance should rendered at a time.!

!MRFrameWidget methodsFor: 'accessing'!

wrapper
	^ wrapper
! !

!MRFrameWidget methodsFor: 'actions'!

refresh
	self remove; render
!

remove
	self wrapper ifNotNil: [ wrapper asJQuery remove ]
! !

!MRFrameWidget methodsFor: 'rendering'!

render
	self appendToJQuery: 'body' asJQuery
!

renderContentOn: html
!

renderOn: html
	wrapper := html div with: [
		self renderContentOn: html ]
! !

MRFrameWidget subclass: #MRAdminFrameWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Core'!
!MRAdminFrameWidget commentStamp!
I render the main administration page frame, with a header and main area.!

!MRAdminFrameWidget methodsFor: 'accessing'!

headerWidget
	^ MRHeaderWidget new
!

mainWidget
	^ MRMainWidget new
!

structureListWidget
	^ MRStructureListWidget new
! !

!MRAdminFrameWidget methodsFor: 'rendering'!

renderContentOn: html
	html div
		class: 'admin';
		with: self headerWidget;
		with: self mainWidget.
	self structureListWidget render
! !

MRFrameWidget subclass: #MRMainFrameWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Core'!
!MRMainFrameWidget commentStamp!
I render myself in the '#main' div of the admin app, removing previously rendered widgets in this area.!

!MRMainFrameWidget methodsFor: 'accessing'!

icon
	^ ''
!

iconColor
	^ 'black'
!

mainArea
	^ ('#', MRMainWidget mainAreaId) asJQuery
!

title
	^ self subclassResponsibility
! !

!MRMainFrameWidget methodsFor: 'rendering'!

render
	self mainArea empty.
	self appendToJQuery: self mainArea
!

renderContentOn: html
!

renderOn: html
	html div 
		class: 'main_frame'; 
		with: [
			self renderTitleOn: html.
			html div id: 'notification'.
			self renderContentOn: html ]
!

renderTitleOn: html
	html h2 with: [
		html span 
			class: self icon;
			style: 'color: ', self iconColor.
		html with: self title ]
! !

MRWidget subclass: #MRHeaderWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Core'!
!MRHeaderWidget commentStamp!
I display the main header of the admin page.!

!MRHeaderWidget methodsFor: 'actions'!

editUserSettings
!

logout
	navigator id logout.
	self adminPresenter logout then: [ 
		MRLoginDispatcher start ]
!

showStructureListWidget
	MRStructureListWidget new render
!

showTemplateListWidget
	MRTemplateListWidget new render
!

showUserListWidget
	MRUserListWidget new render
! !

!MRHeaderWidget methodsFor: 'rendering'!

renderHeaderOn: html
	html div
		class: 'navbar navbar-default';
		at: 'role' put: 'navigation';
		with: [
			html div 
				class: 'container-fluid'; 
				with: [
					self renderToggleOn: html.
					self renderMenuOn: html ] ]
!

renderLeftItemsOn: html
	html li with: [ 
		html a 
			with: 'Pages';
			onClick: [ self showStructureListWidget ] ].
	html li with: [ 
		html a 
			with: 'Templates';
			onClick: [ self showTemplateListWidget ] ].
	html li with: [ 
		html a 
			with: 'Users';
			onClick: [ self showUserListWidget ] ]
!

renderMenuOn: html
	html div 
		class: 'collapse navbar-collapse';
		id: 'menu';
		with: [
			html ul 
				class: 'nav navbar-nav';
				with: [ self renderLeftItemsOn: html ].
			html ul
				class: 'nav navbar-nav navbar-right';
				with: [ self renderRightItemsOn: html ] ]
!

renderOn: html
	html div 
		class: 'container-fluid';
		with: [
			html div
				class: 'row';
				with: [
					html div 
						class: 'col-md-8 col-md-offset-2 col-xs-12';
						with: [ self renderHeaderOn: html ] ] ]
!

renderRightItemsOn: html
	html li with: [ 
		html a 
			with: [
				html span class: 'glyphicon glyphicon-user'.
				html with: ' ', self adminPresenter user email ];
			onClick: [ self editUserSettings ] ].
	html li with: [ 
		html a 
			with: 'logout';
			onClick: [ self logout ] ]
!

renderToggleOn: html
	html div
		class: 'navbar-header';
		with: [
			html button
				type: 'button';
				class: 'navbar-toggle';
				at: 'data-toggle' put: 'collapse';
				at: 'data-target' put: 'menu';
				with: [
					html span 
						class: 'sr-only';
						with: 'Toggle Navigation'.
					3 timesRepeat: [ 
						html span class: 'icon-bar' ] ].
			html a 
				class: 'navbar-brand';
				href: '#'; 
				with: [
					html span class: 'glyphicon glyphicon-tint'.
					html with: ' Marina' ] ]
! !

MRWidget subclass: #MRMainWidget
	instanceVariableNames: 'contentsDiv'
	package: 'Marina-Widgets-Core'!

!MRMainWidget methodsFor: 'rendering'!

mainAreaId
	^ self class mainAreaId
!

renderOn: html
	html div 
		class: 'container-fluid';
		with: [
			html div
				class: 'row';
				with: [
					contentsDiv := html div 
						class: 'main col-md-8 col-md-offset-2 col-xs-12';
						with: [
							html div id: self mainAreaId ] ] ]
! !

!MRMainWidget class methodsFor: 'rendering'!

mainAreaId
	^ 'main'
! !

