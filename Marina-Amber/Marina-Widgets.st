Smalltalk createPackage: 'Marina-Widgets'!
Widget subclass: #MRBootstrapForm
	instanceVariableNames: 'inputs submitAction cancelAction submitLabel cancelLabel cancellable'
	package: 'Marina-Widgets'!

!MRBootstrapForm methodsFor: 'accessing'!

beNonCancellable
	cancellable := false
!

cancelAction
	^ cancelAction ifNil: [ [] ]
!

cancelAction: aBlock
	cancelAction := aBlock
!

cancelLabel
	^ cancelLabel
!

cancelLabel: aString
	cancelLabel := aString
!

detectInput: aBlock
	^ self detectInput: aBlock ifNone: [ self error: 'Object not found' ]
!

detectInput: aBlock ifNone: errorBlock
	^ self inputs detect: aBlock ifNone: errorBlock
!

inputAt: aString
	^ self at: aString ifAbsent: [ self error: 'Object not found' ]
!

inputAt: aString ifAbsent: errorBlock
	^ self inputs 
		detect: [ :each | each label = aString ]
		ifNone: errorBlock
!

inputs
	^ inputs copy
!

submitAction
	^ submitAction ifNil: [ [] ]
!

submitAction: aBlock
	submitAction := aBlock
!

submitLabel
	^ submitLabel
!

submitLabel: aString
	submitLabel := aString
! !

!MRBootstrapForm methodsFor: 'adding'!

addInput: anInput
	^ inputs add: anInput
!

passwordInput
	^ self addInput: MRBootstrapPasswordInput new
!

textInput
	^ self addInput: MRBootstrapTextInput new
! !

!MRBootstrapForm methodsFor: 'initialization'!

initialize
	super initialize.

	inputs := OrderedCollection new
! !

!MRBootstrapForm methodsFor: 'rendering'!

renderOn: html
	| htmlForm |
	htmlForm := html form with: [
		self inputs do: [ :each | html with: each ].
		
		html button
			class: 'btn btn-default';
			type: 'submit';
			with: self submitLabel.

		self isCancellable ifTrue: [ 
			html button
				class: 'btn';
				with: self cancelLabel;
				onClick: self cancelAction ] ].
			
	htmlForm asJQuery submit: [ :event |
		self submitAction value: self.
		event preventDefault ]
! !

!MRBootstrapForm methodsFor: 'testing'!

isCancellable
	^ cancellable ifNil: [ true ]
! !

Widget subclass: #MRBootstrapInput
	instanceVariableNames: 'label id placeholder htmlInput'
	package: 'Marina-Widgets'!

!MRBootstrapInput methodsFor: 'accessing'!

id
	^ id
!

label
	^ label
!

label: aString
	label := aString
!

placeholder
	^ placeholder
!

placeholder: aString
	placeholder := aString
!

type
	^ self subclassResponsibility
!

value
	^ htmlInput ifNotNil: [ htmlInput asJQuery val ]
! !

!MRBootstrapInput methodsFor: 'initialization'!

initialize
	super initialize.

	id := self class generateId
! !

!MRBootstrapInput methodsFor: 'rendering'!

renderOn: html
	html div 
		class: 'form-group';
		with: [ 
			html label 
				for: self id;
				with: self label.
			htmlInput := html input 
				id: self id;
				type: self type;
				class: 'form-control' ]
! !

MRBootstrapInput class instanceVariableNames: 'nextId'!

!MRBootstrapInput class methodsFor: 'accessing'!

generateId
	nextId ifNil: [ nextId := 0 ].
	nextId := nextId + 1.
	
	^ 'bootstrap_input_', nextId asString
! !

MRBootstrapInput subclass: #MRBootstrapPasswordInput
	instanceVariableNames: ''
	package: 'Marina-Widgets'!

!MRBootstrapPasswordInput methodsFor: 'accessing'!

type
	^ 'password'
! !

MRBootstrapInput subclass: #MRBootstrapTextInput
	instanceVariableNames: ''
	package: 'Marina-Widgets'!

!MRBootstrapTextInput methodsFor: 'accessing'!

type
	^ 'text'
! !

Object subclass: #MRLoginDispatcher
	instanceVariableNames: 'presenter'
	package: 'Marina-Widgets'!

!MRLoginDispatcher methodsFor: 'accessing'!

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

login
	self loginWidget render
!

loginWidget
	^ MRLoginWidget new
		presenter: self presenter;
		onLoginBlock: [ self renderAdminWidget ]
!

logout
	self presenter 
		logout;
		then: [ self login ]
!

renderAdminWidget
	self presenter adminPresenter then: [ :adminPresenter |
		MRAdminFrameWidget new
			presenter: adminPresenter;
			render ]
!

start
	'body' asJQuery empty.
	self presenter connect then: [
		self dispatchWithUser: self presenter user ]
! !

!MRLoginDispatcher class methodsFor: 'initialization'!

initialize
	self new
		presenter: (TDProxy on: '/marina');
		start
! !

Widget subclass: #MRPresenterWidget
	instanceVariableNames: 'presenter'
	package: 'Marina-Widgets'!
!MRPresenterWidget commentStamp!
I am a widget holding a tide presenter.!

!MRPresenterWidget methodsFor: 'accessing'!

presenter
	^ presenter
!

presenter: anObject
	presenter := anObject
! !

MRPresenterWidget subclass: #MRFrameWidget
	instanceVariableNames: 'wrapper'
	package: 'Marina-Widgets'!
!MRFrameWidget commentStamp!
I am an abstract widget building a frame.

I know how to remove and render myself on a page. Only one instance should rendered at a time.!

!MRFrameWidget methodsFor: 'accessing'!

wrapper
	^ wrapper
! !

!MRFrameWidget methodsFor: 'actions'!

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
	package: 'Marina-Widgets'!
!MRAdminFrameWidget commentStamp!
I render the main administration page frame, with a header and main area.!

!MRAdminFrameWidget methodsFor: 'accessing'!

headerWidget
	^ MRHeaderWidget new
		presenter: self presenter;
		yourself
!

mainWidget
	^ MRMainWidget new
! !

!MRAdminFrameWidget methodsFor: 'rendering'!

renderContentOn: html
	html div
		class: 'admin'; 
		with: self headerWidget;
		with: self mainWidget
! !

MRFrameWidget subclass: #MRLoginWidget
	instanceVariableNames: 'errorDiv onLoginBlock'
	package: 'Marina-Widgets'!

!MRLoginWidget methodsFor: 'accessing'!

onLoginBlock
	^ onLoginBlock ifNil: [ [] ]
!

onLoginBlock: aBlock
	onLoginBlock := aBlock
! !

!MRLoginWidget methodsFor: 'actions'!

loginUsername: username password: password
	[ self presenter
		loginUsername: username
		password: password;
		then: [ self onLogin: self presenter user ]
	] onPromiseFailureDo: [ :failure | 
		self onLoginError: failure ]
!

onLogin: anUser
	anUser ifNotNil: [
		self remove.
		self onLoginBlock value ]
! !

!MRLoginWidget methodsFor: 'error handling'!

onLoginError: anError
	errorDiv asJQuery empty.
	[ :html | 
		html p 
			class: 'bg-danger';
			with: anError messageText ] appendToJQuery: errorDiv asJQuery
! !

!MRLoginWidget methodsFor: 'rendering'!

renderContentOn: html
	html div 
		class: 'container-fluid';
		with: [
			html div 
				class: 'row';
				with: [ 
					html div 
						class: 'col-xs-12 col-md-4 col-md-offset-4';
						with: [ 
							html div 
								class: 'login'; 
								with: [
									html h1 with: [
										html span 
											class: 'logo';
											with: 'Marina'.
										html with: 'Log in' ].
									self renderFormOn: html ] ] ] ]
!

renderFormOn: html
	| form usernameInput passwordInput |
	
	form := MRBootstrapForm new.
	
	usernameInput := form textInput 
		label: 'Username'.
	passwordInput := form passwordInput
		label: 'Password'.
		
	form beNonCancellable.
	form submitLabel: 'Log in'.
			
	form submitAction: [
		self
			loginUsername: usernameInput value
			password: passwordInput value ].
	
	errorDiv := html div class: 'login-errors'.
	html with: form
!

renderFrameOn: html
	html div 
		class: 'container-fluid';
		with: [
			html div 
				class: 'row';
				with: [ 
					html div 
						class: 'col-xs-12 col-md-4 col-md-offset-4';
						with: [ 
							html div 
								class: 'login'; 
								with: [
									html h1 with: [
										html span 
											class: 'logo';
											with: 'Marina'.
										html with: 'Log in' ].
									self renderFormOn: html ] ] ] ]
! !

MRFrameWidget subclass: #MRMainFrameWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets'!
!MRMainFrameWidget commentStamp!
I render myself in the '#main' div of the admin app, removing previously rendered widgets in this area.!

!MRMainFrameWidget methodsFor: 'accessing'!

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
	html h2 with: self title.
	self renderContentOn: html
! !

MRMainFrameWidget subclass: #MRStructuresWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets'!

!MRStructuresWidget methodsFor: 'accessing'!

structures
	^ self presenter
!

title
	^ 'Structures'
! !

!MRStructuresWidget methodsFor: 'rendering'!

renderContentOn: html
	html table 
		class: 'table table-striped';
		with: [
			html tbody with: [
				self structures contents then: [ :structures |
					structures do: [ :each |
						html tr with: each title ] ] ] ]
! !

MRPresenterWidget subclass: #MRHeaderWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets'!
!MRHeaderWidget commentStamp!
I display the main header of the admin page.!

!MRHeaderWidget methodsFor: 'actions'!

showStructuresWidget
	MRStructuresWidget new
		presenter: self presenter structures;
		render
! !

!MRHeaderWidget methodsFor: 'rendering'!

renderMenuItemsOn: html
	html li with: [ 
		html a 
			with: 'Pages';
			onClick: [ self showStructuresWidget ] ].
	html li with: [ 
		html a 
			with: 'Templates';
			onClick: [ self showTemplatesWidget ] ].
	html li with: [ 
		html a 
			with: 'Users';
			onClick: [ self showUsersWidget ] ]
!

renderMenuOn: html
	html div 
		class: 'collapse navbar-collapse';
		id: 'menu';
		with: [
			html ul 
				class: 'nav navbar-nav';
				with: [ self renderMenuItemsOn: html ] ]
!

renderOn: html
	html div
		class: 'navbar navbar-default';
		at: 'role' put: 'navigation';
		with: [
			html div 
				class: 'container'; 
				with: [
					self renderToggleOn: html.
					self renderMenuOn: html ] ]
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
				with: 'Marina' ]
! !

MRPresenterWidget subclass: #MRMainWidget
	instanceVariableNames: 'contentsDiv'
	package: 'Marina-Widgets'!

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
						with: [ html div id: self mainAreaId ] ] ]
! !

!MRMainWidget class methodsFor: 'rendering'!

mainAreaId
	^ 'main'
! !

