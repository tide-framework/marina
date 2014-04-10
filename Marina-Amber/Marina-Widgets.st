Smalltalk createPackage: 'Marina-Widgets'!
Widget subclass: #MRBootstrapDialog
	instanceVariableNames: 'id'
	package: 'Marina-Widgets'!
!MRBootstrapDialog commentStamp!
I am an abstract widget rendering a bootstrap modal dialog.!

!MRBootstrapDialog methodsFor: 'accessing'!

cancelBlock
	^ []
!

cancelLabel
	^ 'Cancel'
!

id
	^ id ifNil: [ id := 100000 atRandom asString ]
!

okBlock
	^ []
!

okLabel
	^ 'Ok'
!

title
	^ self subclassResponsibility
! !

!MRBootstrapDialog methodsFor: 'rendering'!

renderBodyOn: html
	html div
		class: 'modal-body';
		with: [ 
			html p with: [ 
				self renderContentOn: html ] ]
!

renderContentOn: html
!

renderFooterOn: html
	html div
		class: 'modal-footer';
		with: [
			html button
				type: 'button';
				class: 'btn btn-default';
				at: 'data-dismiss' put: 'modal';
				with: self cancelLabel;
				onClick: self cancelBlock. 
			html button
				type: 'button';
				class: 'btn btn-primary';
				at: 'data-dismiss' put: 'modal';
				with: self okLabel;
				onClick: self okBlock ]
!

renderHeaderOn: html
	html div class: 'modal-header'; with: [ 
		html button
			type: 'button';
			class: 'close';
			at: 'data-dismiss' put: 'modal';
			at: 'aria-hidden' put: 'true';
			with: '×'.
		html h4 
			class: 'modal-title';
			with: self title ]
!

renderOn: html
	html div 
		class: 'modal fade';
		id: self id;
		with: [ 
			html div 
				class: 'modal-dialog';
				with: [ 
					html div 
						class: 'modal-content';
						with: [ 
							self 
								renderHeaderOn: html;
								renderBodyOn: html;
								renderFooterOn: html ] ] ].
	('#', self id) asJQuery modal
! !

MRBootstrapDialog subclass: #MRBootstrapConfirmation
	instanceVariableNames: 'contents okBlock cancelBlock'
	package: 'Marina-Widgets'!

!MRBootstrapConfirmation methodsFor: 'accessing'!

cancelBlock
	^ cancelBlock ifNil: [ [] ]
!

cancelBlock: aBlock
	cancelBlock := aBlock
!

contents
	^ contents ifNil: [ 'Confirmation' ]
!

contents: aString
	contents := aString
!

okBlock
	^ okBlock ifNil: [ [] ]
!

okBlock: aBlock
	okBlock := aBlock
!

title
	^ 'Confirmation'
! !

!MRBootstrapConfirmation methodsFor: 'rendering'!

renderContentOn: html
	html with: self contents
! !

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
	^ cancelLabel ifNil: [ 'Cancel' ]
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
	^ submitLabel ifNil: [ 'Save' ]
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

selectInput
	^ self addInput: MRBootstrapSelectInput new
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
	
	html div 
		class: 'form-group';
		with: [
			html button
				class: 'btn btn-default';
				type: 'submit';
				with: self submitLabel.
	
			self isCancellable ifTrue: [ 
				html button
					class: 'btn';
					with: self cancelLabel;
					onClick: self cancelAction ] ] ].
			
	htmlForm asJQuery submit: [ :event |
		self submitAction value: self.
		event preventDefault ]
! !

!MRBootstrapForm methodsFor: 'testing'!

isCancellable
	^ cancellable ifNil: [ true ]
! !

Widget subclass: #MRBootstrapInput
	instanceVariableNames: 'label id htmlInput'
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

value
	^ htmlInput ifNotNil: [ htmlInput asJQuery val ]
! !

!MRBootstrapInput methodsFor: 'initialization'!

initialize
	super initialize.

	id := MRBootstrapInput generateId
! !

!MRBootstrapInput methodsFor: 'rendering'!

renderFormInputOn: html
	self subclassResponsibility
!

renderOn: html
	html div 
		class: 'form-group';
		with: [ 
			html label 
				for: self id;
				with: self label.
			self renderFormInputOn: html ]
! !

MRBootstrapInput class instanceVariableNames: 'nextId'!

!MRBootstrapInput class methodsFor: 'accessing'!

generateId
	nextId ifNil: [ nextId := 0 ].
	nextId := nextId + 1.
	
	^ 'bootstrap_input_', nextId asString
! !

MRBootstrapInput subclass: #MRBootstrapSelectInput
	instanceVariableNames: 'options'
	package: 'Marina-Widgets'!

!MRBootstrapSelectInput methodsFor: 'accessing'!

options
	^ options ifNil: [ #() ]
!

options: aCollection
	options := aCollection
! !

!MRBootstrapSelectInput methodsFor: 'rendering'!

renderFormInputOn: html
	htmlInput := html select
		id: self id;
		class: 'form-control';
		with: [ 
			self options do: [ :each |
				html option with: each ] ]
! !

MRBootstrapInput subclass: #MRBootstrapTextInput
	instanceVariableNames: 'placeholder'
	package: 'Marina-Widgets'!

!MRBootstrapTextInput methodsFor: 'accessing'!

placeholder
	^ placeholder
!

placeholder: aString
	placeholder := aString
!

type
	^ 'text'
! !

!MRBootstrapTextInput methodsFor: 'rendering'!

renderFormInputOn: html
	htmlInput := html input 
		id: self id;
		type: self type;
		class: 'form-control'
!

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

MRBootstrapTextInput subclass: #MRBootstrapPasswordInput
	instanceVariableNames: ''
	package: 'Marina-Widgets'!

!MRBootstrapPasswordInput methodsFor: 'accessing'!

type
	^ 'password'
! !

Object subclass: #MRContext
	instanceVariableNames: 'adminPresenter'
	package: 'Marina-Widgets'!
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

structures
	^ self adminPresenter structures
!

templates
	^ self adminPresenter templates
!

users
	^ self adminPresenter users
! !

MRContext class instanceVariableNames: 'current'!

!MRContext class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

Object subclass: #MRLoginDispatcher
	instanceVariableNames: 'presenter'
	package: 'Marina-Widgets'!

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

login
	self loginWidget render
!

loginWidget
	^ MRLoginWidget new
		presenter: self presenter;
		onLoginBlock: [ self renderAdminWidget ]
!

renderAdminWidget
	self presenter adminPresenter then: [ :adminPresenter |
		self context adminPresenter: adminPresenter.
		MRAdminFrameWidget new render ]
!

start
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
	package: 'Marina-Widgets'!
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
!

structures
	^ self context structures
!

templates
	^ self context templates
!

users
	^ self context users
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
! !

MRWidget subclass: #MRFrameWidget
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
	package: 'Marina-Widgets'!
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

MRFrameWidget subclass: #MRLoginWidget
	instanceVariableNames: 'errorDiv onLoginBlock presenter'
	package: 'Marina-Widgets'!

!MRLoginWidget methodsFor: 'accessing'!

onLoginBlock
	^ onLoginBlock ifNil: [ [] ]
!

onLoginBlock: aBlock
	onLoginBlock := aBlock
!

presenter
	^ presenter
!

presenter: aPresenter
	presenter := aPresenter
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
									self renderHeaderOn: html.
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
!

renderHeaderOn: html
	html h1 with: [
		html span 
			class: 'logo';
			with: [
				html span class: 'glyphicon glyphicon-tint'.
				html with: ' Marina' ] ]
! !

MRFrameWidget subclass: #MRMainFrameWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets'!
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
			self renderContentOn: html ]
!

renderTitleOn: html
	html h2 with: [
		html span 
			class: self icon;
			style: 'color: ', self iconColor.
		html with: self title ]
! !

MRMainFrameWidget subclass: #MRPageEditorWidget
	instanceVariableNames: 'page'
	package: 'Marina-Widgets'!

!MRPageEditorWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-pencil'
!

iconColor
	^ '#B37113'
!

page
	^ page
!

page: anObject
	page := anObject
!

title
	^ 'Edit page ', self page title
! !

!MRPageEditorWidget methodsFor: 'rendering'!

renderContentOn: html
! !

MRMainFrameWidget subclass: #MRStructureCreatorWidget
	instanceVariableNames: 'directory structureTitle structureType'
	package: 'Marina-Widgets'!

!MRStructureCreatorWidget methodsFor: 'accessing'!

directory
	^ directory
!

directory: aDirectory
	directory := aDirectory
!

icon
	^ 'glyphicon glyphicon-plus-sign'
!

iconColor
	^ '#178F34'
!

structureTitle
	^ structureTitle
!

structureTitle: anObject
	structureTitle := anObject
!

structureType
	^ structureType
!

structureType: anObject
	structureType := anObject
!

title
	^ 'New structure'
!

validStructureTypes
	^ self directory validChildrenLabels
! !

!MRStructureCreatorWidget methodsFor: 'actions'!

createStructureOfType: aType title: aTitle
	self directory 
		addStructureOfType: aType title: aTitle;
		then: [ self showStructureListWidget ]
!

showStructureListWidget
	MRStructureListWidget new
		directory: self directory;
		render
! !

!MRStructureCreatorWidget methodsFor: 'rendering'!

renderContentOn: html
	| form typeInput titleInput |
	
	form := MRBootstrapForm new.
	
	titleInput := form textInput
		placeholder: 'Title';
		label: 'Title';
		yourself.
	
	typeInput := form selectInput
		options: self validStructureTypes;
		label: 'Type';
		yourself.
		
	form submitAction: [
		self 
			createStructureOfType: typeInput value
			title: titleInput value ].

	form cancelAction: [ self showStructureListWidget ].
	
	html with: form
! !

MRMainFrameWidget subclass: #MRStructureListWidget
	instanceVariableNames: 'directory titleSpan titleEditorSpan'
	package: 'Marina-Widgets'!
!MRStructureListWidget commentStamp!
I display a list of structures, children of `directory`. If `directory` is not set, the `root` is used.!

!MRStructureListWidget methodsFor: 'accessing'!

directory
	^ directory ifNil: [ self root ]
!

directory: anObject
	directory := anObject
!

icon
	^ 'glyphicon glyphicon-list-alt'
!

iconColor
	^ '#6F5499'
!

iconFor: aStructure
	^ aStructure isPage 
		ifTrue: [ 'structure-icon glyphicon glyphicon-file' ]
		ifFalse: [ 'structure-icon glyphicon glyphicon-folder-open' ]
!

title
	^ 'Pages'
! !

!MRStructureListWidget methodsFor: 'actions'!

addStructure
	MRStructureCreatorWidget new
		directory: self directory;
		render
!

cancelDirectoryTitleEdition
	titleSpan asJQuery show.
	titleEditorSpan asJQuery hide
!

editDirectoryTitle
	titleSpan asJQuery hide.
	titleEditorSpan asJQuery show.
	titleEditorSpan asJQuery focus
!

editPage: aPage
	MRPageEditorWidget new
		page: aPage;
		render
!

openStructure: aStructure
	aStructure isPage ifTrue: [ ^ self editPage: aStructure ].
	
	self 
		directory: aStructure; 
		refresh
!

removeStructure: aStructure
	self 
		confirm: 'Do you really want to remove ', aStructure title, '?'
		ifTrue: [
			aStructure remove then: [ 
				self refresh ] ]
!

setDirectoryTitle: aString
	self directory 
		title: aString; 
		then: [ self refresh ]
! !

!MRStructureListWidget methodsFor: 'rendering'!

renderAddStructureOn: html
	html button
		class: 'btn btn-xs btn-default';
		with: 'Add structure';
		onClick: [ self addStructure ]
!

renderBreadcrumbOn: html
	self directory allParents then: [ :proxies |
		proxies contents then: [ :parents | 
			html ul class: 'breadcrumb'; with: [
				html li with: [
					html a 
						with: 'Root directory';
						onClick: [ self openStructure: self root ] ].
				parents allButLast reversed do: [ :each |
					html li with: [
						html a 
							with: each title;
							onClick: [ self openStructure: each ] ] ].
				html li with: [	
					self directory isRoot ifFalse: [
						self renderDirectoryTitleOn: html ].
					self renderAddStructureOn: html ] ] ] ]
!

renderContentOn: html
	self renderBreadcrumbOn: html copy.
	self directory children then: [ :children |
			children contents then: [ :structures |
				self renderStructures: structures on: html ] ]
!

renderDirectoryTitleOn: html
	titleSpan := html span 
		class: 'title';
		with: [
			html with: self directory title.
			html button
				class: 'btn btn-xs btn-default';
				with: 'Edit title';
				onClick: [ self editDirectoryTitle ] ].
	titleEditorSpan := html span
		class: 'title_editor';
		with: [
			| titleInput |
			titleInput := html input
				class: 'input-xs';
				class: 'form-control';
				type: 'text';
				value: self directory title.
			html button 
				class: 'btn btn-default btn-xs';
				with: 'Save';
				onClick: [ self setDirectoryTitle: titleInput asJQuery val ].
			html a 
				with: 'Cancel';
				onClick: [ self cancelDirectoryTitleEdition ] ].
	titleEditorSpan asJQuery hide
!

renderStructureRow: aStructure on: html
	html tr with: [
		html td with: [
			html a 
				with: [
					html span class: (self iconFor: aStructure).
					html with: aStructure title ];
				onClick: [ self openStructure: aStructure ] ].
		html td with: [
			aStructure isPage ifTrue: [
				aStructure published 
					ifTrue: [ html span 
						class: 'label label-success';
						with: 'Published' ]
					ifFalse: [ html span
						class: 'label label-warning';
						with: 'draft' ] ] ].
		html td class: 'align-right'; with: [
			html a 
				with: 'Remove';
				onClick: [ self removeStructure: aStructure ] ] ]
!

renderStructures: aCollection on: html
	html table 
		class: 'table table-striped';
		with: [
			html tbody with: [
				aCollection do: [ :each |
					self renderStructureRow: each on: html ] ] ]
! !

MRWidget subclass: #MRHeaderWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets'!
!MRHeaderWidget commentStamp!
I display the main header of the admin page.!

!MRHeaderWidget methodsFor: 'actions'!

editUserSettings
!

logout
	self adminPresenter logout then: [ 
		MRLoginDispatcher start ]
!

showStructureListWidget
	MRStructureListWidget new render
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
				html with: ' ', self adminPresenter user fullName ];
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

