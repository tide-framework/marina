define("marina/Marina-Widgets-Structures", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "marina/Marina-Widgets-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets-Structures');
smalltalk.packages["Marina-Widgets-Structures"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRPageEditorWidget', globals.MRMainFrameWidget, ['page', 'templates'], 'Marina-Widgets-Structures');
smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-pencil";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-pencil'",
messageSends: [],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#B37113";
},
args: [],
source: "iconColor\x0a\x09^ '#B37113'",
messageSends: [],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "page",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@page"];
return $1;
},
args: [],
source: "page\x0a\x09^ page",
messageSends: [],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "page:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@page"]=anObject;
return self},
args: ["anObject"],
source: "page: anObject\x0a\x09page := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,titleInput,pathInput,templateInput,contentsInput,publishedInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$9,$8,$10,$11,$12,$15,$14,$13,$16,$17,$18,$20,$19,$21,$22,$23,$24,$25,$26,$27;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
$ctx1.sendIdx["textInput"]=1;
_st($1)._placeholder_("Title");
$ctx1.sendIdx["placeholder:"]=1;
$2=$1;
$4=self._page();
$ctx1.sendIdx["page"]=1;
$3=_st($4)._title();
$ctx1.sendIdx["title"]=1;
_st($2)._defaultValue_($3);
$ctx1.sendIdx["defaultValue:"]=1;
_st($1)._label_("Title");
$ctx1.sendIdx["label:"]=1;
$5=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
titleInput=$5;
$6=_st(form)._textInput();
_st($6)._placeholder_("Path");
$7=$6;
$9=self._page();
$ctx1.sendIdx["page"]=2;
$8=_st($9)._localPath();
_st($7)._defaultValue_($8);
$ctx1.sendIdx["defaultValue:"]=2;
_st($6)._label_("Path");
$ctx1.sendIdx["label:"]=2;
$10=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=2;
pathInput=$10;
$11=_st(form)._selectInput();
_st($11)._options_(self._templateTitles());
$12=$11;
$15=self._page();
$ctx1.sendIdx["page"]=3;
$14=_st($15)._template();
$13=_st($14)._title();
_st($12)._selectedOption_($13);
_st($11)._label_("Template");
$ctx1.sendIdx["label:"]=3;
$16=_st($11)._yourself();
$ctx1.sendIdx["yourself"]=3;
templateInput=$16;
$17=_st(form)._textareaInput();
_st($17)._label_("Contents");
$ctx1.sendIdx["label:"]=4;
$18=$17;
$20=self._page();
$ctx1.sendIdx["page"]=4;
$19=_st($20)._contents();
_st($18)._defaultValue_($19);
$21=_st($17)._yourself();
$ctx1.sendIdx["yourself"]=4;
contentsInput=$21;
$22=_st(form)._checkboxInput();
_st($22)._label_("Published");
_st($22)._checked_(_st(self._page())._published());
$23=_st($22)._yourself();
publishedInput=$23;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$24=_st(titleInput)._value();
$ctx2.sendIdx["value"]=1;
$25=_st(pathInput)._value();
$ctx2.sendIdx["value"]=2;
$26=_st(templateInput)._value();
$ctx2.sendIdx["value"]=3;
$27=_st(contentsInput)._value();
$ctx2.sendIdx["value"]=4;
return self._updatePageWithTitle_path_template_contents_published_($24,$25,$26,$27,_st(publishedInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showStructureListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,titleInput:titleInput,pathInput:pathInput,templateInput:templateInput,contentsInput:contentsInput,publishedInput:publishedInput},globals.MRPageEditorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form titleInput pathInput templateInput contentsInput publishedInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09defaultValue: self page title;\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09pathInput := form textInput\x0a\x09\x09placeholder: 'Path';\x0a\x09\x09defaultValue: self page localPath;\x0a\x09\x09label: 'Path';\x0a\x09\x09yourself.\x0a\x09\x0a\x09templateInput := form selectInput\x0a\x09\x09options: self templateTitles;\x0a\x09\x09selectedOption: self page template title;\x0a\x09\x09label: 'Template';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09contentsInput := form textareaInput\x0a\x09\x09label: 'Contents';\x0a\x09\x09defaultValue: self page contents;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09publishedInput := form checkboxInput\x0a\x09\x09label: 'Published';\x0a\x09\x09checked: self page published;\x0a\x09\x09yourself.\x0a\x0a\x09form submitAction: [\x0a\x09\x09self \x0a\x09\x09\x09updatePageWithTitle: titleInput value\x0a\x09\x09\x09path: pathInput value\x0a\x09\x09\x09template: templateInput value\x0a\x09\x09\x09contents: contentsInput value\x0a\x09\x09\x09published: publishedInput value ].\x0a\x0a\x09form cancelAction: [ self showStructureListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "defaultValue:", "title", "page", "label:", "yourself", "localPath", "options:", "selectInput", "templateTitles", "selectedOption:", "template", "textareaInput", "contents", "checkboxInput", "checked:", "published", "submitAction:", "updatePageWithTitle:path:template:contents:published:", "value", "cancelAction:", "showStructureListWidget", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStructureListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructureListWidget(){return globals.MRStructureListWidget||(typeof MRStructureListWidget=="undefined"?nil:MRStructureListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._page())._parent())._then_((function(parent){
return smalltalk.withContext(function($ctx2) {
$1=_st($MRStructureListWidget())._new();
_st($1)._directory_(parent);
$2=_st($1)._render();
return $2;
}, function($ctx2) {$ctx2.fillBlock({parent:parent},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showStructureListWidget",{},globals.MRPageEditorWidget)})},
args: [],
source: "showStructureListWidget\x0a\x09self page parent then: [ :parent |\x0a\x09\x09MRStructureListWidget new\x0a\x09\x09\x09directory: parent;\x0a\x09\x09\x09render ]",
messageSends: ["then:", "parent", "page", "directory:", "new", "render"],
referencedClasses: ["MRStructureListWidget"]
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templateTitles",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._templates())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._partial();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._title();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"templateTitles",{},globals.MRPageEditorWidget)})},
args: [],
source: "templateTitles\x0a\x09^ (self templates reject: [ :each | each partial ])\x0a\x09\x09collect: [ :each | each title ]",
messageSends: ["collect:", "reject:", "templates", "partial", "title"],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templates",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@templates"];
if(($receiver = $2) == nil || $receiver == null){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"templates",{},globals.MRPageEditorWidget)})},
args: [],
source: "templates\x0a\x09^ templates ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templates:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@templates"]=aCollection;
return self},
args: ["aCollection"],
source: "templates: aCollection\x0a\x09templates := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="Edit page ".__comma(_st(self._page())._title());
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.MRPageEditorWidget)})},
args: [],
source: "title\x0a\x09^ 'Edit page ', self page title",
messageSends: [",", "title", "page"],
referencedClasses: []
}),
globals.MRPageEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updatePageWithTitle:path:template:contents:published:",
protocol: 'actions',
fn: function (aTitle,aPath,aTemplateTitle,contents,aBoolean){
var self=this;
var template;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
template=_st(self._templates())._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._title()).__eq(aTemplateTitle);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._page();
_st($1)._updateTitle_path_template_contents_published_(aTitle,aPath,template,contents,aBoolean);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showStructureListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updatePageWithTitle:path:template:contents:published:",{aTitle:aTitle,aPath:aPath,aTemplateTitle:aTemplateTitle,contents:contents,aBoolean:aBoolean,template:template},globals.MRPageEditorWidget)})},
args: ["aTitle", "aPath", "aTemplateTitle", "contents", "aBoolean"],
source: "updatePageWithTitle: aTitle path: aPath template: aTemplateTitle contents: contents published: aBoolean\x0a\x09| template |\x0a\x09\x0a\x09template := self templates detect: [ :each | \x0a\x09\x09each title = aTemplateTitle ].\x0a\x09\x09\x0a\x09[\x0a\x09\x09self page\x0a\x09\x09\x09updateTitle: aTitle\x0a\x09\x09\x09path: aPath\x0a\x09\x09\x09template: template\x0a\x09\x09\x09contents: contents\x0a\x09\x09\x09published: aBoolean;\x0a\x09\x09\x09then: [\x0a\x09\x09\x09\x09self showStructureListWidget ]\x0a\x09] onPromiseFailureDo: [ :ex | \x0a\x09\x09self notifyError: ex ]",
messageSends: ["detect:", "templates", "=", "title", "onPromiseFailureDo:", "updateTitle:path:template:contents:published:", "page", "then:", "showStructureListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRPageEditorWidget);



smalltalk.addClass('MRStructureCreatorWidget', globals.MRMainFrameWidget, ['directory', 'structureTitle', 'structureType'], 'Marina-Widgets-Structures');
smalltalk.addMethod(
smalltalk.method({
selector: "createStructureOfType:title:",
protocol: 'actions',
fn: function (aType,aTitle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._directory();
_st($1)._addStructureOfType_title_(aType,aTitle);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showStructureListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createStructureOfType:title:",{aType:aType,aTitle:aTitle},globals.MRStructureCreatorWidget)})},
args: ["aType", "aTitle"],
source: "createStructureOfType: aType title: aTitle\x0a\x09[\x0a\x09\x09self directory \x0a\x09\x09\x09addStructureOfType: aType title: aTitle;\x0a\x09\x09\x09then: [ self showStructureListWidget ] \x0a\x09] onPromiseFailureDo: [ :ex | \x0a\x09\x09self notifyError: ex ]\x09\x09",
messageSends: ["onPromiseFailureDo:", "addStructureOfType:title:", "directory", "then:", "showStructureListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@directory"];
return $1;
},
args: [],
source: "directory\x0a\x09^ directory",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory:",
protocol: 'accessing',
fn: function (aDirectory){
var self=this;
self["@directory"]=aDirectory;
return self},
args: ["aDirectory"],
source: "directory: aDirectory\x0a\x09directory := aDirectory",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-plus-sign";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-plus-sign'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#178F34";
},
args: [],
source: "iconColor\x0a\x09^ '#178F34'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,typeInput,titleInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
_st($1)._placeholder_("Title");
_st($1)._label_("Title");
$ctx1.sendIdx["label:"]=1;
$2=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
titleInput=$2;
$3=_st(form)._selectInput();
_st($3)._options_(self._validStructureTypes());
_st($3)._label_("Type");
$4=_st($3)._yourself();
typeInput=$4;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(typeInput)._value();
$ctx2.sendIdx["value"]=1;
return self._createStructureOfType_title_($5,_st(titleInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showStructureListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,typeInput:typeInput,titleInput:titleInput},globals.MRStructureCreatorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form typeInput titleInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x0a\x09typeInput := form selectInput\x0a\x09\x09options: self validStructureTypes;\x0a\x09\x09label: 'Type';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09form submitAction: [\x0a\x09\x09self \x0a\x09\x09\x09createStructureOfType: typeInput value\x0a\x09\x09\x09title: titleInput value ].\x0a\x0a\x09form cancelAction: [ self showStructureListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "label:", "yourself", "options:", "selectInput", "validStructureTypes", "submitAction:", "createStructureOfType:title:", "value", "cancelAction:", "showStructureListWidget", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStructureListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructureListWidget(){return globals.MRStructureListWidget||(typeof MRStructureListWidget=="undefined"?nil:MRStructureListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRStructureListWidget())._new();
_st($1)._directory_(self._directory());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"showStructureListWidget",{},globals.MRStructureCreatorWidget)})},
args: [],
source: "showStructureListWidget\x0a\x09MRStructureListWidget new\x0a\x09\x09directory: self directory;\x0a\x09\x09render",
messageSends: ["directory:", "new", "directory", "render"],
referencedClasses: ["MRStructureListWidget"]
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structureTitle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@structureTitle"];
return $1;
},
args: [],
source: "structureTitle\x0a\x09^ structureTitle",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structureTitle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@structureTitle"]=anObject;
return self},
args: ["anObject"],
source: "structureTitle: anObject\x0a\x09structureTitle := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structureType",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@structureType"];
return $1;
},
args: [],
source: "structureType\x0a\x09^ structureType",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structureType:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@structureType"]=anObject;
return self},
args: ["anObject"],
source: "structureType: anObject\x0a\x09structureType := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "New structure";
},
args: [],
source: "title\x0a\x09^ 'New structure'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "validStructureTypes",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._directory())._validChildrenLabels();
return $1;
}, function($ctx1) {$ctx1.fill(self,"validStructureTypes",{},globals.MRStructureCreatorWidget)})},
args: [],
source: "validStructureTypes\x0a\x09^ self directory validChildrenLabels",
messageSends: ["validChildrenLabels", "directory"],
referencedClasses: []
}),
globals.MRStructureCreatorWidget);



smalltalk.addClass('MRStructureListWidget', globals.MRMainFrameWidget, ['directory', 'titleSpan', 'titleEditorSpan'], 'Marina-Widgets-Structures');
globals.MRStructureListWidget.comment="I display a list of structures, children of `directory`. If `directory` is not set, the `root` is used.";
smalltalk.addMethod(
smalltalk.method({
selector: "addStructure",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructureCreatorWidget(){return globals.MRStructureCreatorWidget||(typeof MRStructureCreatorWidget=="undefined"?nil:MRStructureCreatorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRStructureCreatorWidget())._new();
_st($1)._directory_(self._directory());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"addStructure",{},globals.MRStructureListWidget)})},
args: [],
source: "addStructure\x0a\x09MRStructureCreatorWidget new\x0a\x09\x09directory: self directory;\x0a\x09\x09render",
messageSends: ["directory:", "new", "directory", "render"],
referencedClasses: ["MRStructureCreatorWidget"]
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelDirectoryTitleEdition",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@titleSpan"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._show();
_st(_st(self["@titleEditorSpan"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"cancelDirectoryTitleEdition",{},globals.MRStructureListWidget)})},
args: [],
source: "cancelDirectoryTitleEdition\x0a\x09titleSpan asJQuery show.\x0a\x09titleEditorSpan asJQuery hide",
messageSends: ["show", "asJQuery", "hide"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@directory"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._root();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"directory",{},globals.MRStructureListWidget)})},
args: [],
source: "directory\x0a\x09^ directory ifNil: [ self root ]",
messageSends: ["ifNil:", "root"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@directory"]=anObject;
return self},
args: ["anObject"],
source: "directory: anObject\x0a\x09directory := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editDirectoryTitle",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@titleSpan"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._hide();
$2=_st(self["@titleEditorSpan"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._show();
_st(_st(self["@titleEditorSpan"])._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"editDirectoryTitle",{},globals.MRStructureListWidget)})},
args: [],
source: "editDirectoryTitle\x0a\x09titleSpan asJQuery hide.\x0a\x09titleEditorSpan asJQuery show.\x0a\x09titleEditorSpan asJQuery focus",
messageSends: ["hide", "asJQuery", "show", "focus"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editPage:",
protocol: 'actions',
fn: function (aPage){
var self=this;
function $MRPageEditorWidget(){return globals.MRPageEditorWidget||(typeof MRPageEditorWidget=="undefined"?nil:MRPageEditorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._root())._templates())._then_((function(proxy){
return smalltalk.withContext(function($ctx2) {
return _st(_st(proxy)._contents())._then_((function(templates){
return smalltalk.withContext(function($ctx3) {
$1=_st($MRPageEditorWidget())._new();
_st($1)._page_(aPage);
_st($1)._templates_(templates);
$2=_st($1)._render();
return $2;
}, function($ctx3) {$ctx3.fillBlock({templates:templates},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({proxy:proxy},$ctx1,1)})}));
$ctx1.sendIdx["then:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"editPage:",{aPage:aPage},globals.MRStructureListWidget)})},
args: ["aPage"],
source: "editPage: aPage\x0a\x09self root templates then: [ :proxy |\x0a\x09\x09proxy contents then: [ :templates |\x0a\x09\x09\x09MRPageEditorWidget new\x0a\x09\x09\x09\x09page: aPage;\x0a\x09\x09\x09\x09templates: templates;\x0a\x09\x09\x09\x09render ] ]",
messageSends: ["then:", "templates", "root", "contents", "page:", "new", "templates:", "render"],
referencedClasses: ["MRPageEditorWidget"]
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-list-alt";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-list-alt'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#6F5499";
},
args: [],
source: "iconColor\x0a\x09^ '#6F5499'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconFor:",
protocol: 'accessing',
fn: function (aStructure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aStructure)._icon();
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconFor:",{aStructure:aStructure},globals.MRStructureListWidget)})},
args: ["aStructure"],
source: "iconFor: aStructure\x0a\x09^ aStructure icon",
messageSends: ["icon"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "openStructure:",
protocol: 'actions',
fn: function (aStructure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aStructure)._isPage();
if(smalltalk.assert($1)){
$2=self._editPage_(aStructure);
return $2;
};
self._directory_(aStructure);
$3=self._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"openStructure:",{aStructure:aStructure},globals.MRStructureListWidget)})},
args: ["aStructure"],
source: "openStructure: aStructure\x0a\x09aStructure isPage ifTrue: [ ^ self editPage: aStructure ].\x0a\x09\x0a\x09self \x0a\x09\x09directory: aStructure; \x0a\x09\x09refresh",
messageSends: ["ifTrue:", "isPage", "editPage:", "directory:", "refresh"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeStructure:",
protocol: 'actions',
fn: function (aStructure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Do you really want to remove ".__comma(_st(aStructure)._title())).__comma("?");
$ctx1.sendIdx[","]=1;
self._confirm_ifTrue_($1,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aStructure)._remove())._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeStructure:",{aStructure:aStructure},globals.MRStructureListWidget)})},
args: ["aStructure"],
source: "removeStructure: aStructure\x0a\x09self \x0a\x09\x09confirm: 'Do you really want to remove ', aStructure title, '?'\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aStructure remove then: [ \x0a\x09\x09\x09\x09self refresh ] ]",
messageSends: ["confirm:ifTrue:", ",", "title", "then:", "remove", "refresh"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddStructureOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn btn-xs btn-default");
_st($1)._with_("Add structure");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._addStructure();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAddStructureOn:",{html:html},globals.MRStructureListWidget)})},
args: ["html"],
source: "renderAddStructureOn: html\x0a\x09html button\x0a\x09\x09class: 'btn btn-xs btn-default';\x0a\x09\x09with: 'Add structure';\x0a\x09\x09onClick: [ self addStructure ]",
messageSends: ["class:", "button", "with:", "onClick:", "addStructure"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBreadcrumbOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$6,$7,$8,$9,$10,$11,$12,$4;
$2=self._directory();
$ctx1.sendIdx["directory"]=1;
$1=_st($2)._allParents();
_st($1)._then_((function(proxies){
return smalltalk.withContext(function($ctx2) {
return _st(_st(proxies)._contents())._then_((function(parents){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._ul();
_st($3)._class_("head breadcrumb");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$5=_st(html)._li();
$ctx4.sendIdx["li"]=1;
_st($5)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$6=_st(html)._a();
$ctx5.sendIdx["a"]=1;
_st($6)._with_("Root directory");
$ctx5.sendIdx["with:"]=3;
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return self._openStructure_(self._root());
$ctx6.sendIdx["openStructure:"]=1;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["onClick:"]=1;
return $7;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=2;
_st(_st(_st(parents)._allButLast())._reversed())._do_((function(each){
return smalltalk.withContext(function($ctx5) {
$8=_st(html)._li();
$ctx5.sendIdx["li"]=2;
return _st($8)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$9=_st(html)._a();
_st($9)._with_(_st(each)._title());
$ctx6.sendIdx["with:"]=5;
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx7) {
return self._openStructure_(each);
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,8)})}));
return $10;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
$ctx5.sendIdx["with:"]=4;
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,6)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$11=_st(self._directory())._isRoot();
if(! smalltalk.assert($11)){
self._renderDirectoryTitleOn_(html);
};
self._renderAddStructureOn_(html);
$12=self._renderUploadOn_(html);
return $12;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=1;
return $4;
}, function($ctx3) {$ctx3.fillBlock({parents:parents},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({proxies:proxies},$ctx1,1)})}));
$ctx1.sendIdx["then:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderBreadcrumbOn:",{html:html},globals.MRStructureListWidget)})},
args: ["html"],
source: "renderBreadcrumbOn: html\x0a\x09self directory allParents then: [ :proxies |\x0a\x09\x09proxies contents then: [ :parents | \x0a\x09\x09\x09html ul class: 'head breadcrumb'; with: [\x0a\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09with: 'Root directory';\x0a\x09\x09\x09\x09\x09\x09onClick: [ self openStructure: self root ] ].\x0a\x09\x09\x09\x09parents allButLast reversed do: [ :each |\x0a\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09\x09with: each title;\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [ self openStructure: each ] ] ].\x0a\x09\x09\x09\x09html li with: [\x09\x0a\x09\x09\x09\x09\x09self directory isRoot ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self renderDirectoryTitleOn: html ].\x0a\x09\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09\x09renderAddStructureOn: html;\x0a\x09\x09\x09\x09\x09\x09renderUploadOn: html ] ] ] ]",
messageSends: ["then:", "allParents", "directory", "contents", "class:", "ul", "with:", "li", "a", "onClick:", "openStructure:", "root", "do:", "reversed", "allButLast", "title", "ifFalse:", "isRoot", "renderDirectoryTitleOn:", "renderAddStructureOn:", "renderUploadOn:"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderBreadcrumbOn_(_st(html)._copy());
_st(_st(self._directory())._children())._then_((function(children){
return smalltalk.withContext(function($ctx2) {
return _st(_st(children)._contents())._then_((function(structures){
return smalltalk.withContext(function($ctx3) {
return self._renderStructures_on_(structures,html);
}, function($ctx3) {$ctx3.fillBlock({structures:structures},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({children:children},$ctx1,1)})}));
$ctx1.sendIdx["then:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRStructureListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self renderBreadcrumbOn: html copy.\x0a\x09self directory children then: [ :children |\x0a\x09\x09\x09children contents then: [ :structures |\x0a\x09\x09\x09\x09self renderStructures: structures on: html ] ]",
messageSends: ["renderBreadcrumbOn:", "copy", "then:", "children", "directory", "contents", "renderStructures:on:"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDirectoryTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$5,$6,$2,$7,$9,$10,$11,$14,$13,$12,$15,$16,$8;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._class_("title");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=self._directory();
$ctx2.sendIdx["directory"]=1;
$3=_st($4)._title();
$ctx2.sendIdx["title"]=1;
_st(html)._with_($3);
$ctx2.sendIdx["with:"]=2;
$5=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($5)._class_("btn btn-xs btn-default");
$ctx2.sendIdx["class:"]=2;
_st($5)._with_("Edit title");
$ctx2.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._editDirectoryTitle();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@titleSpan"]=$2;
$7=_st(html)._span();
_st($7)._class_("title_editor");
$ctx1.sendIdx["class:"]=3;
$8=_st($7)._with_((function(){
var titleInput;
return smalltalk.withContext(function($ctx2) {
$9=_st(html)._input();
_st($9)._class_("input-xs");
$ctx2.sendIdx["class:"]=4;
_st($9)._class_("form-control");
$ctx2.sendIdx["class:"]=5;
_st($9)._type_("text");
$10=_st($9)._value_(_st(self._directory())._title());
titleInput=$10;
titleInput;
$11=_st(html)._button();
_st($11)._class_("btn btn-default btn-xs");
_st($11)._with_("Save");
$ctx2.sendIdx["with:"]=5;
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
$14=_st(titleInput)._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
$13=_st($14)._val();
return self._setDirectoryTitle_($13);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=2;
$12;
$15=_st(html)._a();
_st($15)._with_("Cancel");
$16=_st($15)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._cancelDirectoryTitleEdition();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $16;
}, function($ctx2) {$ctx2.fillBlock({titleInput:titleInput},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=4;
self["@titleEditorSpan"]=$8;
_st(_st(self["@titleEditorSpan"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"renderDirectoryTitleOn:",{html:html},globals.MRStructureListWidget)})},
args: ["html"],
source: "renderDirectoryTitleOn: html\x0a\x09titleSpan := html span \x0a\x09\x09class: 'title';\x0a\x09\x09with: [\x0a\x09\x09\x09html with: self directory title.\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'btn btn-xs btn-default';\x0a\x09\x09\x09\x09with: 'Edit title';\x0a\x09\x09\x09\x09onClick: [ self editDirectoryTitle ] ].\x0a\x09titleEditorSpan := html span\x0a\x09\x09class: 'title_editor';\x0a\x09\x09with: [\x0a\x09\x09\x09| titleInput |\x0a\x09\x09\x09titleInput := html input\x0a\x09\x09\x09\x09class: 'input-xs';\x0a\x09\x09\x09\x09class: 'form-control';\x0a\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09value: self directory title.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09class: 'btn btn-default btn-xs';\x0a\x09\x09\x09\x09with: 'Save';\x0a\x09\x09\x09\x09onClick: [ self setDirectoryTitle: titleInput asJQuery val ].\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Cancel';\x0a\x09\x09\x09\x09onClick: [ self cancelDirectoryTitleEdition ] ].\x0a\x09titleEditorSpan asJQuery hide",
messageSends: ["class:", "span", "with:", "title", "directory", "button", "onClick:", "editDirectoryTitle", "input", "type:", "value:", "setDirectoryTitle:", "val", "asJQuery", "a", "cancelDirectoryTitleEdition", "hide"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStructureRow:on:",
protocol: 'rendering',
fn: function (aStructure,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$15,$16,$14;
_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(aStructure)._canBeEdited();
if(smalltalk.assert($2)){
$3=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderStructureTitle_on_(aStructure,html);
$ctx4.sendIdx["renderStructureTitle:on:"]=1;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=3;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._openStructure_(aStructure);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$ctx3.sendIdx["onClick:"]=1;
return $4;
} else {
return self._renderStructureTitle_on_(aStructure,html);
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$5=_st(html)._td();
$ctx2.sendIdx["td"]=2;
_st($5)._with_(_st(aStructure)._localPath());
$ctx2.sendIdx["with:"]=4;
$6=_st(html)._td();
$ctx2.sendIdx["td"]=3;
_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(aStructure)._isPage();
if(smalltalk.assert($7)){
$8=_st(aStructure)._published();
if(smalltalk.assert($8)){
$9=_st(html)._span();
$ctx3.sendIdx["span"]=1;
_st($9)._class_("label label-success");
$ctx3.sendIdx["class:"]=1;
$10=_st($9)._with_("Published");
$ctx3.sendIdx["with:"]=6;
return $10;
} else {
$11=_st(html)._span();
_st($11)._class_("label label-warning");
$ctx3.sendIdx["class:"]=2;
$12=_st($11)._with_("draft");
$ctx3.sendIdx["with:"]=7;
return $12;
};
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$ctx2.sendIdx["with:"]=5;
$13=_st(html)._td();
_st($13)._class_("align-right");
$14=_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$15=_st(html)._a();
_st($15)._with_("Remove");
$16=_st($15)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeStructure_(aStructure);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,12)})}));
return $16;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,11)})}));
$ctx2.sendIdx["with:"]=8;
return $14;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderStructureRow:on:",{aStructure:aStructure,html:html},globals.MRStructureListWidget)})},
args: ["aStructure", "html"],
source: "renderStructureRow: aStructure on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: [\x0a\x09\x09\x09aStructure canBeEdited \x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09self renderStructureTitle: aStructure on: html ];\x0a\x09\x09\x09\x09\x09\x09onClick: [ self openStructure: aStructure ] ]\x0a\x09\x09\x09\x09ifFalse: [ self renderStructureTitle: aStructure on: html ] ].\x0a\x09\x09html td with: aStructure localPath.\x0a\x09\x09html td with: [\x0a\x09\x09\x09aStructure isPage ifTrue: [\x0a\x09\x09\x09\x09aStructure published \x0a\x09\x09\x09\x09\x09ifTrue: [ html span \x0a\x09\x09\x09\x09\x09\x09class: 'label label-success';\x0a\x09\x09\x09\x09\x09\x09with: 'Published' ]\x0a\x09\x09\x09\x09\x09ifFalse: [ html span\x0a\x09\x09\x09\x09\x09\x09class: 'label label-warning';\x0a\x09\x09\x09\x09\x09\x09with: 'draft' ] ] ].\x0a\x09\x09html td class: 'align-right'; with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Remove';\x0a\x09\x09\x09\x09onClick: [ self removeStructure: aStructure ] ] ]",
messageSends: ["with:", "tr", "td", "ifTrue:ifFalse:", "canBeEdited", "a", "renderStructureTitle:on:", "onClick:", "openStructure:", "localPath", "ifTrue:", "isPage", "published", "class:", "span", "removeStructure:"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStructureTitle:on:",
protocol: 'rendering',
fn: function (aStructure,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._span())._class_(self._iconFor_(aStructure));
_st(html)._with_(_st(aStructure)._title());
return self}, function($ctx1) {$ctx1.fill(self,"renderStructureTitle:on:",{aStructure:aStructure,html:html},globals.MRStructureListWidget)})},
args: ["aStructure", "html"],
source: "renderStructureTitle: aStructure on: html\x0a\x09html span class: (self iconFor: aStructure).\x0a\x09html with: aStructure title",
messageSends: ["class:", "span", "iconFor:", "with:", "title"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStructures:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._table();
_st($1)._class_("table table-striped");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(aCollection)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
$3=_st(a)._title();
$ctx4.sendIdx["title"]=1;
return _st($3).__lt(_st(b)._title());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,3)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return self._renderStructureRow_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderStructures:on:",{aCollection:aCollection,html:html},globals.MRStructureListWidget)})},
args: ["aCollection", "html"],
source: "renderStructures: aCollection on: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09(aCollection sorted: [ :a :b | a title < b title ])\x0a\x09\x09\x09\x09\x09do: [ :each |\x0a\x09\x09\x09\x09\x09\x09self renderStructureRow: each on: html ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "do:", "sorted:", "<", "title", "renderStructureRow:on:"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUploadOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("btn btn-xs btn-default");
_st($1)._with_("Upload");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._upload();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderUploadOn:",{html:html},globals.MRStructureListWidget)})},
args: ["html"],
source: "renderUploadOn: html\x0a\x09html button\x0a\x09\x09class: 'btn btn-xs btn-default';\x0a\x09\x09with: 'Upload';\x0a\x09\x09onClick: [ self upload ]",
messageSends: ["class:", "button", "with:", "onClick:", "upload"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setDirectoryTitle:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._directory();
_st($1)._setTitle_(aString);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(error){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(error);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setDirectoryTitle:",{aString:aString},globals.MRStructureListWidget)})},
args: ["aString"],
source: "setDirectoryTitle: aString\x0a\x09[ \x0a\x09\x09self directory \x0a\x09\x09\x09setTitle: aString; \x0a\x09\x09\x09then: [ self refresh ] \x0a\x09] onPromiseFailureDo: [ :error |\x0a\x09\x09self notifyError: error ]\x09\x09",
messageSends: ["onPromiseFailureDo:", "setTitle:", "directory", "then:", "refresh", "notifyError:"],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Pages";
},
args: [],
source: "title\x0a\x09^ 'Pages'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructureListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "upload",
protocol: 'actions',
fn: function (){
var self=this;
function $MRUploadWidget(){return globals.MRUploadWidget||(typeof MRUploadWidget=="undefined"?nil:MRUploadWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRUploadWidget())._new();
_st($1)._directory_(self._directory());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"upload",{},globals.MRStructureListWidget)})},
args: [],
source: "upload\x0a\x09MRUploadWidget new \x0a\x09\x09directory: self directory;\x0a\x09\x09render",
messageSends: ["directory:", "new", "directory", "render"],
referencedClasses: ["MRUploadWidget"]
}),
globals.MRStructureListWidget);



smalltalk.addClass('MRTemplateCreatorWidget', globals.MRMainFrameWidget, ['templates'], 'Marina-Widgets-Structures');
smalltalk.addMethod(
smalltalk.method({
selector: "createTemplateTitle:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._root();
_st($1)._createTemplateTitle_(aString);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showTemplateListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createTemplateTitle:",{aString:aString},globals.MRTemplateCreatorWidget)})},
args: ["aString"],
source: "createTemplateTitle: aString\x0a\x09[ self root \x0a\x09\x09createTemplateTitle: aString;\x0a\x09\x09then: [ self showTemplateListWidget ] ]\x0a\x09\x09onPromiseFailureDo: [ :ex |\x0a\x09\x09\x09self notifyError: ex ]",
messageSends: ["onPromiseFailureDo:", "createTemplateTitle:", "root", "then:", "showTemplateListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-plus-sign";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-plus-sign'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#178F34";
},
args: [],
source: "iconColor\x0a\x09^ '#178F34'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,titleInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
_st($1)._placeholder_("Title");
_st($1)._label_("Title");
$2=_st($1)._yourself();
titleInput=$2;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._createTemplateTitle_(_st(titleInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showTemplateListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,titleInput:titleInput},globals.MRTemplateCreatorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form titleInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09form submitAction: [\x0a\x09\x09self createTemplateTitle: titleInput value ].\x0a\x0a\x09form cancelAction: [ self showTemplateListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "label:", "yourself", "submitAction:", "createTemplateTitle:", "value", "cancelAction:", "showTemplateListWidget", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showTemplateListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRTemplateListWidget(){return globals.MRTemplateListWidget||(typeof MRTemplateListWidget=="undefined"?nil:MRTemplateListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRTemplateListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showTemplateListWidget",{},globals.MRTemplateCreatorWidget)})},
args: [],
source: "showTemplateListWidget\x0a\x09MRTemplateListWidget new\x0a\x09\x09render",
messageSends: ["render", "new"],
referencedClasses: ["MRTemplateListWidget"]
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templateTitle",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@templateTitle"];
return $1;
},
args: [],
source: "templateTitle\x0a\x09^ templateTitle",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templateTitle:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@templateTitle"]=anObject;
return self},
args: ["anObject"],
source: "templateTitle: anObject\x0a\x09templateTitle := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templates",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@templates"];
return $1;
},
args: [],
source: "templates\x0a\x09^ templates",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "templates:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@templates"]=anObject;
return self},
args: ["anObject"],
source: "templates: anObject\x0a\x09templates := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "New template";
},
args: [],
source: "title\x0a\x09^ 'New template'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateCreatorWidget);



smalltalk.addClass('MRTemplateEditorWidget', globals.MRMainFrameWidget, ['template'], 'Marina-Widgets-Structures');
smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-pencil";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-pencil'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#B37113";
},
args: [],
source: "iconColor\x0a\x09^ '#B37113'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,titleInput,contentsInput,partialInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$9,$8,$10,$11,$12,$13,$14;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
_st($1)._placeholder_("Title");
$2=$1;
$4=self._template();
$ctx1.sendIdx["template"]=1;
$3=_st($4)._title();
_st($2)._defaultValue_($3);
$ctx1.sendIdx["defaultValue:"]=1;
_st($1)._label_("Title");
$ctx1.sendIdx["label:"]=1;
$5=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
titleInput=$5;
$6=_st(form)._textareaInput();
_st($6)._label_("Contents");
$ctx1.sendIdx["label:"]=2;
$7=$6;
$9=self._template();
$ctx1.sendIdx["template"]=2;
$8=_st($9)._contents();
_st($7)._defaultValue_($8);
$10=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=2;
contentsInput=$10;
$11=_st(form)._checkboxInput();
_st($11)._label_("Partial");
_st($11)._checked_(_st(self._template())._partial());
$12=_st($11)._yourself();
partialInput=$12;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$13=_st(titleInput)._value();
$ctx2.sendIdx["value"]=1;
$14=_st(contentsInput)._value();
$ctx2.sendIdx["value"]=2;
return self._updateTemplateWithTitle_contents_partial_($13,$14,_st(partialInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showTemplateListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,titleInput:titleInput,contentsInput:contentsInput,partialInput:partialInput},globals.MRTemplateEditorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form titleInput contentsInput partialInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09defaultValue: self template title;\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x0a\x09contentsInput := form textareaInput\x0a\x09\x09label: 'Contents';\x0a\x09\x09defaultValue: self template contents;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09partialInput := form checkboxInput\x0a\x09\x09label: 'Partial';\x0a\x09\x09checked: self template partial;\x0a\x09\x09yourself.\x0a\x0a\x09form submitAction: [\x0a\x09\x09self \x0a\x09\x09\x09updateTemplateWithTitle: titleInput value\x0a\x09\x09\x09contents: contentsInput value\x0a\x09\x09\x09partial: partialInput value ].\x0a\x0a\x09form cancelAction: [ self showTemplateListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "defaultValue:", "title", "template", "label:", "yourself", "textareaInput", "contents", "checkboxInput", "checked:", "partial", "submitAction:", "updateTemplateWithTitle:contents:partial:", "value", "cancelAction:", "showTemplateListWidget", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showTemplateListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRTemplateListWidget(){return globals.MRTemplateListWidget||(typeof MRTemplateListWidget=="undefined"?nil:MRTemplateListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRTemplateListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showTemplateListWidget",{},globals.MRTemplateEditorWidget)})},
args: [],
source: "showTemplateListWidget\x0a\x09MRTemplateListWidget new\x0a\x09\x09render",
messageSends: ["render", "new"],
referencedClasses: ["MRTemplateListWidget"]
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "template",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@template"];
return $1;
},
args: [],
source: "template\x0a\x09^ template",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "template:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@template"]=anObject;
return self},
args: ["anObject"],
source: "template: anObject\x0a\x09template := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="Edit template ".__comma(_st(self._template())._title());
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.MRTemplateEditorWidget)})},
args: [],
source: "title\x0a\x09^ 'Edit template ', self template title",
messageSends: [",", "title", "template"],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "updateTemplateWithTitle:contents:partial:",
protocol: 'actions',
fn: function (aTitle,contents,aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._template();
_st($1)._updateTitle_contents_partial_(aTitle,contents,aBoolean);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showTemplateListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTemplateWithTitle:contents:partial:",{aTitle:aTitle,contents:contents,aBoolean:aBoolean},globals.MRTemplateEditorWidget)})},
args: ["aTitle", "contents", "aBoolean"],
source: "updateTemplateWithTitle: aTitle contents: contents partial: aBoolean\x0a\x09[\x0a\x09\x09self template\x0a\x09\x09\x09updateTitle: aTitle\x0a\x09\x09\x09contents: contents\x0a\x09\x09\x09partial: aBoolean;\x0a\x09\x09\x09then: [\x0a\x09\x09\x09\x09self showTemplateListWidget ]\x0a\x09] onPromiseFailureDo: [ :ex | \x0a\x09\x09self notifyError: ex ]\x09\x09",
messageSends: ["onPromiseFailureDo:", "updateTitle:contents:partial:", "template", "then:", "showTemplateListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);



smalltalk.addClass('MRTemplateListWidget', globals.MRMainFrameWidget, [], 'Marina-Widgets-Structures');
globals.MRTemplateListWidget.comment="I display a list of templates.";
smalltalk.addMethod(
smalltalk.method({
selector: "addTemplate",
protocol: 'actions',
fn: function (){
var self=this;
function $MRTemplateCreatorWidget(){return globals.MRTemplateCreatorWidget||(typeof MRTemplateCreatorWidget=="undefined"?nil:MRTemplateCreatorWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRTemplateCreatorWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"addTemplate",{},globals.MRTemplateListWidget)})},
args: [],
source: "addTemplate\x0a\x09MRTemplateCreatorWidget new\x0a\x09\x09render",
messageSends: ["render", "new"],
referencedClasses: ["MRTemplateCreatorWidget"]
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "editTemplate:",
protocol: 'actions',
fn: function (aTemplate){
var self=this;
function $MRTemplateEditorWidget(){return globals.MRTemplateEditorWidget||(typeof MRTemplateEditorWidget=="undefined"?nil:MRTemplateEditorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRTemplateEditorWidget())._new();
_st($1)._template_(aTemplate);
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"editTemplate:",{aTemplate:aTemplate},globals.MRTemplateListWidget)})},
args: ["aTemplate"],
source: "editTemplate: aTemplate\x0a\x09MRTemplateEditorWidget new\x0a\x09\x09template: aTemplate;\x0a\x09\x09render",
messageSends: ["template:", "new", "render"],
referencedClasses: ["MRTemplateEditorWidget"]
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-list-alt";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-list-alt'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#EB2292";
},
args: [],
source: "iconColor\x0a\x09^ '#EB2292'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTemplate:",
protocol: 'actions',
fn: function (aTemplate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Do you really want to remove ".__comma(_st(aTemplate)._title())).__comma("?");
$ctx1.sendIdx[","]=1;
self._confirm_ifTrue_($1,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aTemplate)._remove())._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeTemplate:",{aTemplate:aTemplate},globals.MRTemplateListWidget)})},
args: ["aTemplate"],
source: "removeTemplate: aTemplate\x0a\x09self \x0a\x09\x09confirm: 'Do you really want to remove ', aTemplate title, '?'\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09aTemplate remove then: [ \x0a\x09\x09\x09\x09self refresh ] ]",
messageSends: ["confirm:ifTrue:", ",", "title", "then:", "remove", "refresh"],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddTemplateOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("head");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_("btn btn-xs btn-default");
_st($3)._with_("New Template");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addTemplate();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderAddTemplateOn:",{html:html},globals.MRTemplateListWidget)})},
args: ["html"],
source: "renderAddTemplateOn: html\x0a\x09html div class: 'head'; with: [\x0a\x09\x09html button\x0a\x09\x09\x09class: 'btn btn-xs btn-default';\x0a\x09\x09\x09with: 'New Template';\x0a\x09\x09\x09onClick: [ self addTemplate ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "addTemplate"],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._root())._templates())._then_((function(proxy){
return smalltalk.withContext(function($ctx2) {
return _st(_st(proxy)._contents())._then_((function(templates){
return smalltalk.withContext(function($ctx3) {
self._renderAddTemplateOn_(html);
return self._renderTemplates_on_(templates,html);
}, function($ctx3) {$ctx3.fillBlock({templates:templates},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({proxy:proxy},$ctx1,1)})}));
$ctx1.sendIdx["then:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRTemplateListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self root templates then: [ :proxy |\x0a\x09\x09proxy contents then: [ :templates |\x0a\x09\x09\x09self renderAddTemplateOn: html.\x0a\x09\x09\x09self renderTemplates: templates on: html ] ]",
messageSends: ["then:", "templates", "root", "contents", "renderAddTemplateOn:", "renderTemplates:on:"],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTemplateRow:on:",
protocol: 'rendering',
fn: function (aTemplate,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$13,$14,$12;
_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._span();
$ctx4.sendIdx["span"]=1;
_st($3)._class_(_st(aTemplate)._icon());
$ctx4.sendIdx["class:"]=1;
return _st(html)._with_(_st(aTemplate)._title());
$ctx4.sendIdx["with:"]=4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
$4=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._editTemplate_(aTemplate);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=1;
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$5=_st(html)._td();
$ctx2.sendIdx["td"]=2;
_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(aTemplate)._partial();
if(smalltalk.assert($6)){
$7=_st(html)._span();
$ctx3.sendIdx["span"]=2;
_st($7)._class_("label label-warning");
$ctx3.sendIdx["class:"]=2;
$8=_st($7)._with_("Partial template");
$ctx3.sendIdx["with:"]=6;
return $8;
} else {
$9=_st(html)._span();
_st($9)._class_("label label-success");
$ctx3.sendIdx["class:"]=3;
$10=_st($9)._with_("Main template");
$ctx3.sendIdx["with:"]=7;
return $10;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=5;
$11=_st(html)._td();
_st($11)._class_("align-right");
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$13=_st(html)._a();
_st($13)._with_("Remove");
$14=_st($13)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeTemplate_(aTemplate);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,9)})}));
return $14;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)})}));
$ctx2.sendIdx["with:"]=8;
return $12;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTemplateRow:on:",{aTemplate:aTemplate,html:html},globals.MRTemplateListWidget)})},
args: ["aTemplate", "html"],
source: "renderTemplateRow: aTemplate on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span class: aTemplate icon.\x0a\x09\x09\x09\x09\x09html with: aTemplate title ];\x0a\x09\x09\x09\x09onClick: [ self editTemplate: aTemplate ] ].\x0a\x09\x09html td with: [\x0a\x09\x09\x09aTemplate partial\x0a\x09\x09\x09\x09ifTrue: [ html span \x0a\x09\x09\x09\x09\x09class: 'label label-warning';\x0a\x09\x09\x09\x09\x09with: 'Partial template' ]\x0a\x09\x09\x09\x09ifFalse: [ html span\x0a\x09\x09\x09\x09\x09class: 'label label-success';\x0a\x09\x09\x09\x09\x09with: 'Main template' ] ].\x0a\x09\x09html td class: 'align-right'; with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Remove';\x0a\x09\x09\x09\x09onClick: [ self removeTemplate: aTemplate ] ] ]",
messageSends: ["with:", "tr", "td", "a", "class:", "span", "icon", "title", "onClick:", "editTemplate:", "ifTrue:ifFalse:", "partial", "removeTemplate:"],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTemplates:on:",
protocol: 'rendering',
fn: function (aCollection,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._table();
_st($1)._class_("table table-striped");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(aCollection)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx4) {
$3=_st(a)._title();
$ctx4.sendIdx["title"]=1;
return _st($3).__lt(_st(b)._title());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,3)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return self._renderTemplateRow_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTemplates:on:",{aCollection:aCollection,html:html},globals.MRTemplateListWidget)})},
args: ["aCollection", "html"],
source: "renderTemplates: aCollection on: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09(aCollection sorted: [ :a :b | a title < b title ])\x0a\x09\x09\x09\x09\x09do: [ :each |\x0a\x09\x09\x09\x09\x09self renderTemplateRow: each on: html ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "do:", "sorted:", "<", "title", "renderTemplateRow:on:"],
referencedClasses: []
}),
globals.MRTemplateListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Templates";
},
args: [],
source: "title\x0a\x09^ 'Templates'",
messageSends: [],
referencedClasses: []
}),
globals.MRTemplateListWidget);



smalltalk.addClass('MRUploadWidget', globals.MRMainFrameWidget, ['fileInput', 'directory'], 'Marina-Widgets-Structures');
smalltalk.addMethod(
smalltalk.method({
selector: "cancel",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructureListWidget(){return globals.MRStructureListWidget||(typeof MRStructureListWidget=="undefined"?nil:MRStructureListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRStructureListWidget())._new();
_st($1)._directory_(self._directory());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"cancel",{},globals.MRUploadWidget)})},
args: [],
source: "cancel\x0a\x09MRStructureListWidget new\x0a\x09\x09directory: self directory;\x0a\x09\x09render",
messageSends: ["directory:", "new", "directory", "render"],
referencedClasses: ["MRStructureListWidget"]
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@directory"];
return $1;
},
args: [],
source: "directory\x0a\x09^ directory",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "directory:",
protocol: 'accessing',
fn: function (aDirectory){
var self=this;
self["@directory"]=aDirectory;
return self},
args: ["aDirectory"],
source: "directory: aDirectory\x0a\x09directory := aDirectory",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "fileInput",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@fileInput"];
return $1;
},
args: [],
source: "fileInput\x0a\x09^ fileInput",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "fileInput:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@fileInput"]=anObject;
return self},
args: ["anObject"],
source: "fileInput: anObject\x0a\x09fileInput := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-open";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-open'",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#2AB963";
},
args: [],
source: "iconColor\x0a\x09^ '#2AB963'",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$7,$8,$9,$10,$6;
_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($1)._class_("form-group");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._input();
_st($3)._type_("file");
$ctx3.sendIdx["type:"]=1;
$4=_st($3)._yourself();
self["@fileInput"]=$4;
return self["@fileInput"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$2;
$5=_st(html)._div();
_st($5)._class_("form-group");
$ctx2.sendIdx["class:"]=2;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($7)._class_("btn btn-default");
$ctx3.sendIdx["class:"]=3;
_st($7)._type_("submit");
$ctx3.sendIdx["type:"]=2;
_st($7)._onClick_((function(event){
return smalltalk.withContext(function($ctx4) {
_st(event)._preventDefault();
$ctx4.sendIdx["preventDefault"]=1;
return self._upload();
}, function($ctx4) {$ctx4.fillBlock({event:event},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=1;
$8=_st($7)._with_("Upload");
$ctx3.sendIdx["with:"]=4;
$8;
$9=_st(html)._button();
_st($9)._class_("btn");
_st($9)._type_("cancel");
_st($9)._onClick_((function(event){
return smalltalk.withContext(function($ctx4) {
_st(event)._preventDefault();
return self._cancel();
}, function($ctx4) {$ctx4.fillBlock({event:event},$ctx3,5)})}));
$10=_st($9)._with_("Cancel");
return $10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=3;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRUploadWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html form with: [\x0a\x09\x09html div \x0a\x09\x09\x09class: 'form-group';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09fileInput := html input\x0a\x09\x09\x09\x09\x09type: 'file';\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09html div \x0a\x09\x09\x09class: 'form-group';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09\x09type: 'submit';\x0a\x09\x09\x09\x09\x09onClick: [ :event |\x0a\x09\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09\x09self upload ];\x0a\x09\x09\x09\x09\x09with: 'Upload'.\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09\x09type: 'cancel';\x0a\x09\x09\x09\x09\x09onClick: [ :event |\x0a\x09\x09\x09\x09\x09\x09event preventDefault.\x0a\x09\x09\x09\x09\x09\x09self cancel ];\x0a\x09\x09\x09\x09\x09with: 'Cancel' ] ]",
messageSends: ["with:", "form", "class:", "div", "type:", "input", "yourself", "button", "onClick:", "preventDefault", "upload", "cancel"],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Upload a file";
},
args: [],
source: "title\x0a\x09^ 'Upload a file'",
messageSends: [],
referencedClasses: []
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "upload",
protocol: 'actions',
fn: function (){
var self=this;
var htmlInput,file,formData;
function $FormData(){return globals.FormData||(typeof FormData=="undefined"?nil:FormData)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
htmlInput=_st(_st(self["@fileInput"])._asJQuery())._get_((0));
file=_st(_st(htmlInput)._at_("files"))._at_((0));
$ctx1.sendIdx["at:"]=1;
formData=_st($FormData())._new();
$ctx1.sendIdx["new"]=1;
_st(formData)._append_path_("path",_st(self._directory())._pathString());
_st(formData)._append_file_("file",file);
_st(jQuery)._ajax_(globals.HashedCollection._newFromPairs_(["url","/upload","type","POST","data",formData,"cache",false,"contentType",false,"processData",false,"success",(function(){
return smalltalk.withContext(function($ctx2) {
return self._cancel();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),"error",(function(xhr){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(_st(_st($Error())._new())._messageText_(_st(xhr)._responseText()));
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr},$ctx1,2)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"upload",{htmlInput:htmlInput,file:file,formData:formData},globals.MRUploadWidget)})},
args: [],
source: "upload\x0a\x09| htmlInput file formData |\x0a\x09\x0a\x09htmlInput := fileInput asJQuery get: 0.\x0a\x09file := (htmlInput at: 'files') at: 0.\x0a\x09\x0a\x09formData := FormData new.\x0a\x09formData append: 'path' path: self directory pathString.\x0a\x09formData append: 'file' file: file.\x0a\x09\x0a\x09jQuery ajax: #{\x0a\x09\x09'url' -> '/upload'.\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'data' -> formData.\x0a\x09\x09'cache' -> false.\x0a        'contentType' -> false.\x0a        'processData' -> false.\x0a\x09\x09'success' -> [ self cancel ].\x0a\x09\x09'error' -> [ :xhr |\x0a\x09\x09\x09self notifyError: (Error new messageText: xhr responseText) ]\x0a\x09}",
messageSends: ["get:", "asJQuery", "at:", "new", "append:path:", "pathString", "directory", "append:file:", "ajax:", "cancel", "notifyError:", "messageText:", "responseText"],
referencedClasses: ["FormData", "Error"]
}),
globals.MRUploadWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "upload2",
protocol: 'actions',
fn: function (){
var self=this;
var htmlInput,file,formData;
function $FormData(){return globals.FormData||(typeof FormData=="undefined"?nil:FormData)}
function $XMLHttpRequest(){return globals.XMLHttpRequest||(typeof XMLHttpRequest=="undefined"?nil:XMLHttpRequest)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
htmlInput=_st(_st(self["@fileInput"])._asJQuery())._get_((0));
file=_st(_st(htmlInput)._at_("files"))._at_((0));
$ctx1.sendIdx["at:"]=1;
formData=_st($FormData())._new();
$ctx1.sendIdx["new"]=1;
_st(formData)._append_path_("path",_st(self._directory())._pathString());
_st(formData)._append_file_("file",file);
$1=_st($XMLHttpRequest())._new();
$ctx1.sendIdx["new"]=2;
_st($1)._open_path_async_("POST","/upload",true);
_st($1)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
return self._aqa();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("onerror",(function(){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(_st(_st($Error())._new())._messageText_("nope"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$2=_st($1)._send_(formData);
return self}, function($ctx1) {$ctx1.fill(self,"upload2",{htmlInput:htmlInput,file:file,formData:formData},globals.MRUploadWidget)})},
args: [],
source: "upload2\x0a\x09| htmlInput file formData |\x0a\x09\x0a\x09htmlInput := fileInput asJQuery get: 0.\x0a\x09file := (htmlInput at: 'files') at: 0.\x0a\x09\x0a\x09formData := FormData new.\x0a\x09formData append: 'path' path: self directory pathString.\x0a\x09formData append: 'file' file: file.\x0a\x09\x0a\x09XMLHttpRequest new\x0a\x09\x09open: 'POST' path: '/upload' async: true;\x0a\x09\x09at: 'onload' put: [ self aqa ];\x0a\x09\x09at: 'onerror' put: [ self notifyError: (Error new messageText: 'nope') ];\x0a\x09\x09send: formData",
messageSends: ["get:", "asJQuery", "at:", "new", "append:path:", "pathString", "directory", "append:file:", "open:path:async:", "at:put:", "aqa", "notifyError:", "messageText:", "send:"],
referencedClasses: ["FormData", "XMLHttpRequest", "Error"]
}),
globals.MRUploadWidget);


});
