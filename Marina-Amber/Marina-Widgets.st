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
		ifNotNil: [ self logout ]
!

login
	MRLoginWidget new
		presenter: self presenter;
		render
!

logout
	self presenter 
		logout;
		then: [ self login ]
!

start
	self presenter connect then: [
		self dispatchWithUser: self presenter user ]
! !

!MRLoginDispatcher class methodsFor: 'initialization'!

initialize
	self new
		presenter: (TDProxy on: '/marina');
		start
! !

Widget subclass: #MRLoginWidget
	instanceVariableNames: 'presenter errorDiv'
	package: 'Marina-Widgets'!

!MRLoginWidget methodsFor: 'accessing'!

presenter
	^ presenter
!

presenter: aTDProxy
	presenter := aTDProxy
! !

!MRLoginWidget methodsFor: 'actions'!

loginUsername: username password: password
	[ self presenter
		loginUsername: username
		password: password;
		then: [ window alert: self presenter user fullName ]
	] onPromiseFailureDo: [ :failure | 
		self onLoginError: failure ]
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

render
	self appendToJQuery: 'body' asJQuery
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

renderOn: html
	html div 
		class: 'row';
		with: [ 
			html div class: 'col-xs-6 col-md-4'.
			html div 
				class: 'col-xs-6 col-md-4';
				with: [ 
					html div 
						class: 'login'; 
						with: [
							html h1 with: 'Log in'.
							self renderFormOn: html ] ].
			html div class: 'col-xs-6 col-md-4' ]
! !

