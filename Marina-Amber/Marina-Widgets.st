Smalltalk createPackage: 'Marina-Widgets'!
Widget subclass: #MRLoginWidget
	instanceVariableNames: 'root'
	package: 'Marina-Widgets'!

!MRLoginWidget methodsFor: 'accessing'!

root
	^ root
!

root: aTDProxy
	root := aTDProxy
! !

!MRLoginWidget methodsFor: 'rendering'!

render
	self appendToJQuery: 'body' asJQuery
!

renderOn: html
	html h1: 'Login'
! !

Object subclass: #MRRootDispatcher
	instanceVariableNames: 'root'
	package: 'Marina-Widgets'!

!MRRootDispatcher methodsFor: 'accessing'!

root
	^ root
!

root: aTDProxy
	root := aTDProxy
! !

!MRRootDispatcher methodsFor: 'actions'!

dispatchWithUser: anUser
	anUser ifNil: [ self login ]
!

login
	MRLoginWidget new
		root: self root;
		render
!

start
	self root connect then: [
		self dispatchWithUser: self root user ]
! !

!MRRootDispatcher class methodsFor: 'initialization'!

initialize
	self new
		root: (TDProxy on: '/_root');
		start
! !

