Smalltalk createPackage: 'Marina-Widgets-Structures'!
MRMainFrameWidget subclass: #MRPageEditorWidget
	instanceVariableNames: 'page templates'
	package: 'Marina-Widgets-Structures'!

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

templateTitles
	^ (self templates reject: [ :each | each partial ])
		collect: [ :each | each title ]
!

templates
	^ templates ifNil: [ #() ]
!

templates: aCollection
	templates := aCollection
!

title
	^ 'Edit page ', self page title
! !

!MRPageEditorWidget methodsFor: 'actions'!

showStructureListWidget
	self page parent then: [ :parent |
		MRStructureListWidget new
			directory: parent;
			render ]
!

updatePageWithTitle: aTitle path: aPath template: aTemplateTitle contents: contents published: aBoolean
	| template |
	
	template := self templates detect: [ :each | 
		each title = aTemplateTitle ].
		
	[
		self page
			updateTitle: aTitle
			path: aPath
			template: template
			contents: contents
			published: aBoolean;
			then: [
				self showStructureListWidget ]
	] onPromiseFailureDo: [ :ex | 
		self notifyError: ex ]
! !

!MRPageEditorWidget methodsFor: 'rendering'!

renderContentOn: html
	| form titleInput pathInput templateInput contentsInput publishedInput |
	
	form := MRBootstrapForm new.
	
	titleInput := form textInput
		placeholder: 'Title';
		defaultValue: self page title;
		label: 'Title';
		yourself.
		
	pathInput := form textInput
		placeholder: 'Path';
		defaultValue: self page localPath;
		label: 'Path';
		yourself.
	
	templateInput := form selectInput
		options: self templateTitles;
		selectedOption: self page template title;
		label: 'Template';
		yourself.
		
	contentsInput := form textareaInput
		label: 'Contents';
		defaultValue: self page contents;
		yourself.
		
	publishedInput := form checkboxInput
		label: 'Published';
		checked: self page published;
		yourself.

	form submitAction: [
		self 
			updatePageWithTitle: titleInput value
			path: pathInput value
			template: templateInput value
			contents: contentsInput value
			published: publishedInput value ].

	form cancelAction: [ self showStructureListWidget ].
	
	html with: form
! !

MRMainFrameWidget subclass: #MRStructureCreatorWidget
	instanceVariableNames: 'directory structureTitle structureType'
	package: 'Marina-Widgets-Structures'!

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
	[
		self directory 
			addStructureOfType: aType title: aTitle;
			then: [ self showStructureListWidget ] 
	] onPromiseFailureDo: [ :ex | 
		self notifyError: ex ]
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
	package: 'Marina-Widgets-Structures'!
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
	^ aStructure icon
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
	self root templates then: [ :proxy |
		proxy contents then: [ :templates |
			MRPageEditorWidget new
				page: aPage;
				templates: templates;
				render ] ]
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
	[ 
		self directory 
			setTitle: aString; 
			then: [ self refresh ] 
	] onPromiseFailureDo: [ :error |
		self notifyError: error ]
!

upload
	MRUploadWidget new 
		directory: self directory;
		render
! !

!MRStructureListWidget methodsFor: 'rendering'!

renderAddStructureOn: html
	html button
		class: 'btn btn-xs btn-default';
		with: 'Add structure';
		onClick: [ self addStructure ]
!

renderBreadcrumbOn: html
	self directory allParents then: [ :parentProxies |
		parentProxies contents then: [ :parents | 
			self context templates then: [ :templatesProxies |
				templatesProxies contents then: [ :templates |
					html ul class: 'head breadcrumb'; with: [
						html li with: [
							html a 
								with: 'Root';
								onClick: [ self openStructure: self root ] ].
						parents allButLast reversed do: [ :each |
							html li with: [
								html a 
									with: each title;
									onClick: [ self openStructure: each ] ] ].
						html li with: [	
							self directory isRoot ifFalse: [
								self renderDirectoryTitleOn: html ].
							self 
								renderAddStructureOn: html;
								renderUploadOn: html;
								renderDefaultTemplateWith: templates on: html ] ] ] ] ] ]
!

renderContentOn: html
	self renderBreadcrumbOn: html copy.
	self directory children then: [ :proxy |
		proxy contents then: [ :structures |
			self renderStructures: structures on: html ] ]
!

renderDefaultTemplateWith: aCollection on: html
	| templates select |
	 
	templates := aCollection reject: [ :each | each partial ].
	
	html label with: 'Default template:'.
	
	select := html select
		class: 'form-control small';
		yourself.
		
	select with: [
		(templates collect: [ :each | 
			each title ]) do: [ :each | | option |
			option := html option 
				value: each;
				with: each.
			(self directory defaultTemplate title = each)
				ifTrue: [ option at: 'selected' put: 'selected' ] ] ].
		
	select onChange: [
		self directory setDefaultTemplate: (templates detect: [ :each |
			each title = select asJQuery val]) ]
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
			aStructure canBeEdited 
				ifTrue: [
					html a 
						with: [
							self renderStructureTitle: aStructure on: html ];
						onClick: [ self openStructure: aStructure ] ]
				ifFalse: [ self renderStructureTitle: aStructure on: html ] ].
		html td with: aStructure localPath.
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

renderStructureTitle: aStructure on: html
	html span class: (self iconFor: aStructure).
	html with: aStructure title
!

renderStructures: aCollection on: html
	html table 
		class: 'table table-striped';
		with: [
			html tbody with: [
				(aCollection sorted: [ :a :b | a title < b title ])
					do: [ :each |
						self renderStructureRow: each on: html ] ] ]
!

renderUploadOn: html
	html button
		class: 'btn btn-xs btn-default';
		with: 'Upload';
		onClick: [ self upload ]
! !

MRMainFrameWidget subclass: #MRTemplateCreatorWidget
	instanceVariableNames: 'templates templateTitle'
	package: 'Marina-Widgets-Structures'!

!MRTemplateCreatorWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-plus-sign'
!

iconColor
	^ '#178F34'
!

templateTitle
	^ templateTitle
!

templateTitle: anObject
	templateTitle := anObject
!

templates
	^ templates
!

templates: anObject
	templates := anObject
!

title
	^ 'New template'
! !

!MRTemplateCreatorWidget methodsFor: 'actions'!

createTemplateTitle: aString
	[ self root 
		createTemplateTitle: aString;
		then: [ self showTemplateListWidget ] ]
		onPromiseFailureDo: [ :ex |
			self notifyError: ex ]
!

showTemplateListWidget
	MRTemplateListWidget new
		render
! !

!MRTemplateCreatorWidget methodsFor: 'rendering'!

renderContentOn: html
	| form titleInput |
	
	form := MRBootstrapForm new.
	
	titleInput := form textInput
		placeholder: 'Title';
		label: 'Title';
		yourself.
		
	form submitAction: [
		self createTemplateTitle: titleInput value ].

	form cancelAction: [ self showTemplateListWidget ].
	
	html with: form
! !

MRMainFrameWidget subclass: #MRTemplateEditorWidget
	instanceVariableNames: 'template'
	package: 'Marina-Widgets-Structures'!

!MRTemplateEditorWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-pencil'
!

iconColor
	^ '#B37113'
!

template
	^ template
!

template: anObject
	template := anObject
!

title
	^ 'Edit template ', self template title
! !

!MRTemplateEditorWidget methodsFor: 'actions'!

showTemplateListWidget
	MRTemplateListWidget new
		render
!

updateTemplateWithTitle: aTitle contents: contents partial: aBoolean
	[
		self template
			updateTitle: aTitle
			contents: contents
			partial: aBoolean;
			then: [
				self showTemplateListWidget ]
	] onPromiseFailureDo: [ :ex | 
		self notifyError: ex ]
! !

!MRTemplateEditorWidget methodsFor: 'rendering'!

renderContentOn: html
	| form titleInput contentsInput partialInput |
	
	form := MRBootstrapForm new.
	
	titleInput := form textInput
		placeholder: 'Title';
		defaultValue: self template title;
		label: 'Title';
		yourself.
	
	contentsInput := form textareaInput
		label: 'Contents';
		defaultValue: self template contents;
		yourself.
		
	partialInput := form checkboxInput
		label: 'Partial';
		checked: self template partial;
		yourself.

	form submitAction: [
		self 
			updateTemplateWithTitle: titleInput value
			contents: contentsInput value
			partial: partialInput value ].

	form cancelAction: [ self showTemplateListWidget ].
	
	html with: form
! !

MRMainFrameWidget subclass: #MRTemplateListWidget
	instanceVariableNames: ''
	package: 'Marina-Widgets-Structures'!
!MRTemplateListWidget commentStamp!
I display a list of templates.!

!MRTemplateListWidget methodsFor: 'accessing'!

icon
	^ 'glyphicon glyphicon-list-alt'
!

iconColor
	^ '#EB2292'
!

title
	^ 'Templates'
! !

!MRTemplateListWidget methodsFor: 'actions'!

addTemplate
	MRTemplateCreatorWidget new
		render
!

editTemplate: aTemplate
	MRTemplateEditorWidget new
		template: aTemplate;
		render
!

removeTemplate: aTemplate
	self 
		confirm: 'Do you really want to remove ', aTemplate title, '?'
		ifTrue: [
			aTemplate remove then: [ 
				self refresh ] ]
! !

!MRTemplateListWidget methodsFor: 'rendering'!

renderAddTemplateOn: html
	html div class: 'head'; with: [
		html button
			class: 'btn btn-xs btn-default';
			with: 'New Template';
			onClick: [ self addTemplate ] ]
!

renderContentOn: html
	self root templates then: [ :proxy |
		proxy contents then: [ :templates |
			self renderAddTemplateOn: html.
			self renderTemplates: templates on: html ] ]
!

renderTemplateRow: aTemplate on: html
	html tr with: [
		html td with: [
			html a 
				with: [
					html span class: aTemplate icon.
					html with: aTemplate title ];
				onClick: [ self editTemplate: aTemplate ] ].
		html td with: [
			aTemplate partial
				ifTrue: [ html span 
					class: 'label label-warning';
					with: 'Partial template' ]
				ifFalse: [ html span
					class: 'label label-success';
					with: 'Main template' ] ].
		html td class: 'align-right'; with: [
			html a 
				with: 'Remove';
				onClick: [ self removeTemplate: aTemplate ] ] ]
!

renderTemplates: aCollection on: html
	html table 
		class: 'table table-striped';
		with: [
			html tbody with: [
				(aCollection sorted: [ :a :b | a title < b title ])
					do: [ :each |
					self renderTemplateRow: each on: html ] ] ]
! !

MRMainFrameWidget subclass: #MRUploadWidget
	instanceVariableNames: 'fileInput directory'
	package: 'Marina-Widgets-Structures'!

!MRUploadWidget methodsFor: 'accessing'!

directory
	^ directory
!

directory: aDirectory
	directory := aDirectory
!

fileInput
	^ fileInput
!

fileInput: anObject
	fileInput := anObject
!

icon
	^ 'glyphicon glyphicon-open'
!

iconColor
	^ '#2AB963'
!

title
	^ 'Upload a file'
! !

!MRUploadWidget methodsFor: 'actions'!

cancel
	MRStructureListWidget new
		directory: self directory;
		render
!

upload
	| htmlInput file formData |
	
	htmlInput := fileInput asJQuery get: 0.
	file := (htmlInput at: 'files') at: 0.
	
	formData := FormData new.
	formData append: 'path' path: self directory pathString.
	formData append: 'file' file: file.
	
	jQuery ajax: #{
		'url' -> '/upload'.
		'type' -> 'POST'.
		'data' -> formData.
		'cache' -> false.
        'contentType' -> false.
        'processData' -> false.
		'success' -> [ self cancel ].
		'error' -> [ :xhr |
			self notifyError: (Error new messageText: xhr responseText) ]
	}
!

upload2
	| htmlInput file formData |
	
	htmlInput := fileInput asJQuery get: 0.
	file := (htmlInput at: 'files') at: 0.
	
	formData := FormData new.
	formData append: 'path' path: self directory pathString.
	formData append: 'file' file: file.
	
	XMLHttpRequest new
		open: 'POST' path: '/upload' async: true;
		at: 'onload' put: [ self aqa ];
		at: 'onerror' put: [ self notifyError: (Error new messageText: 'nope') ];
		send: formData
! !

!MRUploadWidget methodsFor: 'rendering'!

renderContentOn: html
	html form with: [
		html div 
			class: 'form-group';
			with: [
				fileInput := html input
					type: 'file';
					yourself ].
		html div 
			class: 'form-group';
			with: [
				html button
					class: 'btn btn-default';
					type: 'submit';
					onClick: [ :event |
						event preventDefault.
						self upload ];
					with: 'Upload'.
				html button
					class: 'btn';
					type: 'cancel';
					onClick: [ :event |
						event preventDefault.
						self cancel ];
					with: 'Cancel' ] ]
! !

