Smalltalk createPackage: 'Marina-Widgets-Users'!
MRMainFrameWidget subclass: #MRUserCreatorWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Users'!

!MRUserCreatorWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-plus-sign'
!

iconColor
	^ '#079E37'
!

title
	^ 'New user'
! !

!MRUserCreatorWidget methodsFor: 'actions'!

createUserEmail: aString
	[ self root 
		createUserEmail: aString;
		then: [ self showUserListWidget ] ]
		onPromiseFailureDo: [ :ex |
			self notifyError: ex ]
!

showUserListWidget
	MRUserListWidget new
		render
! !

!MRUserCreatorWidget methodsFor: 'rendering'!

renderContentOn: html
	| form emailInput |
	
	form := MRBootstrapForm new.
	
	emailInput := form textInput
		placeholder: 'john@doe.com';
		label: 'Email Address';
		yourself.
		
	form submitAction: [
		self createUserEmail: emailInput value ].

	form cancelAction: [ self showUserListWidget ].
	
	html with: form
! !

MRMainFrameWidget subclass: #MRUserListWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Users'!
!MRUserListWidget commentStamp!
I display a list of templates.!

!MRUserListWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-user'
!

iconColor
	^ '#079E37'
!

title
	^ 'Users'
! !

!MRUserListWidget methodsFor: 'actions'!

addUser
	MRUserCreatorWidget new render
!

removeUser: anUser
	self 
		confirm: 'Do you really want to remove ', anUser email, '?'
		ifTrue: [
			anUser remove then: [ 
				self refresh ] ]
! !

!MRUserListWidget methodsFor: 'rendering'!

renderAddUserOn: html
	html div class: 'head'; with: [
		html button
			class: 'btn btn-xs btn-default';
			with: 'New User';
			onClick: [ self addUser ] ]
!

renderContentOn: html
	self adminPresenter users then: [ :proxy |
		proxy contents then: [ :users |
			self renderAddUserOn: html.
			self renderUsers: users on: html ] ]
!

renderUserRow: anUser on: html
	html tr with: [
		html td with: [
			html span class: anUser icon.
					html with: anUser email ].
		html td class: 'align-right'; with: [
			html a 
				with: 'Remove';
				onClick: [ self removeUser: anUser ] ] ]
!

renderUsers: aCollection on: html
	html table 
		class: 'table table-striped';
		with: [
			html tbody with: [
				(aCollection sorted: [ :a :b | a email < b email ])
					do: [ :each |
					self renderUserRow: each on: html ] ] ]
! !

