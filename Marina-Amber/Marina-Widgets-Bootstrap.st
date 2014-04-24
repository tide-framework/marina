Smalltalk createPackage: 'Marina-Widgets-Bootstrap'!
Widget subclass: #MRBootstrapDialog
	instanceVariableNames: 'id'
	package: 'Marina-Widgets-Bootstrap'!
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
	package: 'Marina-Widgets-Bootstrap'!

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
	package: 'Marina-Widgets-Bootstrap'!

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

checkboxInput
	^ self addInput: MRBootstrapCheckboxInput new
!

passwordInput
	^ self addInput: MRBootstrapPasswordInput new
!

selectInput
	^ self addInput: MRBootstrapSelectInput new
!

textInput
	^ self addInput: MRBootstrapTextInput new
!

textareaInput
	^ self addInput: MRBootstrapTextareaInput new
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
						type: 'cancel';
						with: self cancelLabel;
						onClick: [ :e | 
							self cancelAction value.
							e preventDefault. false ] ] ] ].
			
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
	package: 'Marina-Widgets-Bootstrap'!

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

MRBootstrapInput subclass: #MRBootstrapCheckboxInput
	instanceVariableNames: 'checked'
	package: 'Marina-Widgets-Bootstrap'!

!MRBootstrapCheckboxInput methodsFor: 'accessing'!

checked
	^ checked ifNil: [ false ]
!

checked: aBoolean
	checked := aBoolean
!

value
	^ htmlInput ifNotNil: [ htmlInput asJQuery is: ':checked' ]
! !

!MRBootstrapCheckboxInput methodsFor: 'rendering'!

renderFormInputOn: html
	htmlInput := html input 
		id: self id;
		type: 'checkbox'.
		
	self checked ifTrue: [
		htmlInput at: 'checked' put: self checked ].
			
	html with: self label
!

renderOn: html
	html div 
		class: 'form-group';
		with: [ 
			html div class: 'checkbox'; with: [
				html label 
					with: [
						self renderFormInputOn: html ] ] ]
! !

MRBootstrapInput subclass: #MRBootstrapSelectInput
	instanceVariableNames: 'options selectedOption'
	package: 'Marina-Widgets-Bootstrap'!

!MRBootstrapSelectInput methodsFor: 'accessing'!

options
	^ options ifNil: [ #() ]
!

options: aCollection
	options := aCollection
!

selectedOption
	^ selectedOption
!

selectedOption: anObject
	selectedOption := anObject
! !

!MRBootstrapSelectInput methodsFor: 'rendering'!

renderFormInputOn: html
	htmlInput := html select
		id: self id;
		class: 'form-control';
		with: [ 
			self options do: [ :each || option |
				option := html option with: each.
				self selectedOption = each ifTrue: [
					option at: 'selected' put: 'selected' ] ] ]
! !

MRBootstrapInput subclass: #MRBootstrapTextInput
	instanceVariableNames: 'placeholder defaultValue'
	package: 'Marina-Widgets-Bootstrap'!

!MRBootstrapTextInput methodsFor: 'accessing'!

defaultValue
	^ defaultValue ifNil: [ '' ]
!

defaultValue: anObject
	defaultValue := anObject
!

placeholder
	^ placeholder ifNil: [ '' ]
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
		at: 'placeholder' put: self placeholder;
		value: self defaultValue;
		class: 'form-control'
! !

MRBootstrapTextInput subclass: #MRBootstrapPasswordInput
	instanceVariableNames: ''
	package: 'Marina-Widgets-Bootstrap'!

!MRBootstrapPasswordInput methodsFor: 'accessing'!

type
	^ 'password'
! !

MRBootstrapTextInput subclass: #MRBootstrapTextareaInput
	instanceVariableNames: ''
	package: 'Marina-Widgets-Bootstrap'!

!MRBootstrapTextareaInput methodsFor: 'rendering'!

renderFormInputOn: html
	htmlInput := html textarea 
		id: self id;
		at: 'placeholder' put: self placeholder;
		with: self defaultValue;
		class: 'form-control'
! !

