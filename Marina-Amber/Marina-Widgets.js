define("marina/Marina-Widgets", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets');
smalltalk.packages["Marina-Widgets"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRBootstrapForm', globals.Widget, ['inputs', 'submitAction', 'cancelAction', 'submitLabel', 'cancelLabel', 'cancellable'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "addInput:",
protocol: 'adding',
fn: function (anInput){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@inputs"])._add_(anInput);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addInput:",{anInput:anInput},globals.MRBootstrapForm)})},
args: ["anInput"],
source: "addInput: anInput\x0a\x09^ inputs add: anInput",
messageSends: ["add:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "beNonCancellable",
protocol: 'accessing',
fn: function (){
var self=this;
self["@cancellable"]=false;
return self},
args: [],
source: "beNonCancellable\x0a\x09cancellable := false",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelAction",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelAction"];
if(($receiver = $2) == nil || $receiver == null){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelAction",{},globals.MRBootstrapForm)})},
args: [],
source: "cancelAction\x0a\x09^ cancelAction ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelAction:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelAction"]=aBlock;
return self},
args: ["aBlock"],
source: "cancelAction: aBlock\x0a\x09cancelAction := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelLabel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@cancelLabel"];
return $1;
},
args: [],
source: "cancelLabel\x0a\x09^ cancelLabel",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@cancelLabel"]=aString;
return self},
args: ["aString"],
source: "cancelLabel: aString\x0a\x09cancelLabel := aString",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "detectInput:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._detectInput_ifNone_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Object not found");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectInput:",{aBlock:aBlock},globals.MRBootstrapForm)})},
args: ["aBlock"],
source: "detectInput: aBlock\x0a\x09^ self detectInput: aBlock ifNone: [ self error: 'Object not found' ]",
messageSends: ["detectInput:ifNone:", "error:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "detectInput:ifNone:",
protocol: 'accessing',
fn: function (aBlock,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inputs())._detect_ifNone_(aBlock,errorBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detectInput:ifNone:",{aBlock:aBlock,errorBlock:errorBlock},globals.MRBootstrapForm)})},
args: ["aBlock", "errorBlock"],
source: "detectInput: aBlock ifNone: errorBlock\x0a\x09^ self inputs detect: aBlock ifNone: errorBlock",
messageSends: ["detect:ifNone:", "inputs"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
globals.MRBootstrapForm.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@inputs"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MRBootstrapForm)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09inputs := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "inputAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Object not found");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputAt:",{aString:aString},globals.MRBootstrapForm)})},
args: ["aString"],
source: "inputAt: aString\x0a\x09^ self at: aString ifAbsent: [ self error: 'Object not found' ]",
messageSends: ["at:ifAbsent:", "error:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "inputAt:ifAbsent:",
protocol: 'accessing',
fn: function (aString,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._inputs())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._label()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),errorBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputAt:ifAbsent:",{aString:aString,errorBlock:errorBlock},globals.MRBootstrapForm)})},
args: ["aString", "errorBlock"],
source: "inputAt: aString ifAbsent: errorBlock\x0a\x09^ self inputs \x0a\x09\x09detect: [ :each | each label = aString ]\x0a\x09\x09ifNone: errorBlock",
messageSends: ["detect:ifNone:", "inputs", "=", "label"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "inputs",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@inputs"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputs",{},globals.MRBootstrapForm)})},
args: [],
source: "inputs\x0a\x09^ inputs copy",
messageSends: ["copy"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "isCancellable",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancellable"];
if(($receiver = $2) == nil || $receiver == null){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isCancellable",{},globals.MRBootstrapForm)})},
args: [],
source: "isCancellable\x0a\x09^ cancellable ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "passwordInput",
protocol: 'adding',
fn: function (){
var self=this;
function $MRBootstrapPasswordInput(){return globals.MRBootstrapPasswordInput||(typeof MRBootstrapPasswordInput=="undefined"?nil:MRBootstrapPasswordInput)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addInput_(_st($MRBootstrapPasswordInput())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"passwordInput",{},globals.MRBootstrapForm)})},
args: [],
source: "passwordInput\x0a\x09^ self addInput: MRBootstrapPasswordInput new",
messageSends: ["addInput:", "new"],
referencedClasses: ["MRBootstrapPasswordInput"]
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var htmlForm;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
htmlForm=_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._inputs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(each);
$ctx3.sendIdx["with:"]=2;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
$1=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($1)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=1;
_st($1)._type_("submit");
$2=_st($1)._with_(self._submitLabel());
$ctx2.sendIdx["with:"]=3;
$2;
$3=self._isCancellable();
if(smalltalk.assert($3)){
$4=_st(html)._button();
_st($4)._class_("btn");
_st($4)._with_(self._cancelLabel());
$5=_st($4)._onClick_(self._cancelAction());
return $5;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(htmlForm)._asJQuery())._submit_((function(event){
return smalltalk.withContext(function($ctx2) {
_st(self._submitAction())._value_(self);
return _st(event)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,htmlForm:htmlForm},globals.MRBootstrapForm)})},
args: ["html"],
source: "renderOn: html\x0a\x09| htmlForm |\x0a\x09htmlForm := html form with: [\x0a\x09\x09self inputs do: [ :each | html with: each ].\x0a\x09\x09\x0a\x09\x09html button\x0a\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09type: 'submit';\x0a\x09\x09\x09with: self submitLabel.\x0a\x0a\x09\x09self isCancellable ifTrue: [ \x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09with: self cancelLabel;\x0a\x09\x09\x09\x09onClick: self cancelAction ] ].\x0a\x09\x09\x09\x0a\x09htmlForm asJQuery submit: [ :event |\x0a\x09\x09self submitAction value: self.\x0a\x09\x09event preventDefault ]",
messageSends: ["with:", "form", "do:", "inputs", "class:", "button", "type:", "submitLabel", "ifTrue:", "isCancellable", "cancelLabel", "onClick:", "cancelAction", "submit:", "asJQuery", "value:", "submitAction", "preventDefault"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "submitAction",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@submitAction"];
if(($receiver = $2) == nil || $receiver == null){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"submitAction",{},globals.MRBootstrapForm)})},
args: [],
source: "submitAction\x0a\x09^ submitAction ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "submitAction:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@submitAction"]=aBlock;
return self},
args: ["aBlock"],
source: "submitAction: aBlock\x0a\x09submitAction := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "submitLabel",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@submitLabel"];
return $1;
},
args: [],
source: "submitLabel\x0a\x09^ submitLabel",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "submitLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@submitLabel"]=aString;
return self},
args: ["aString"],
source: "submitLabel: aString\x0a\x09submitLabel := aString",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "textInput",
protocol: 'adding',
fn: function (){
var self=this;
function $MRBootstrapTextInput(){return globals.MRBootstrapTextInput||(typeof MRBootstrapTextInput=="undefined"?nil:MRBootstrapTextInput)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addInput_(_st($MRBootstrapTextInput())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"textInput",{},globals.MRBootstrapForm)})},
args: [],
source: "textInput\x0a\x09^ self addInput: MRBootstrapTextInput new",
messageSends: ["addInput:", "new"],
referencedClasses: ["MRBootstrapTextInput"]
}),
globals.MRBootstrapForm);



smalltalk.addClass('MRBootstrapInput', globals.Widget, ['label', 'id', 'placeholder', 'htmlInput'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;
},
args: [],
source: "id\x0a\x09^ id",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MRBootstrapInput.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@id"]=_st(self._class())._generateId();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MRBootstrapInput)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09id := self class generateId",
messageSends: ["initialize", "generateId", "class"],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "placeholder",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@placeholder"];
return $1;
},
args: [],
source: "placeholder\x0a\x09^ placeholder",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "placeholder:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@placeholder"]=aString;
return self},
args: ["aString"],
source: "placeholder: aString\x0a\x09placeholder := aString",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=_st(html)._div();
_st($1)._class_("form-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._label();
$ctx2.sendIdx["label"]=1;
$4=$3;
$5=self._id();
$ctx2.sendIdx["id"]=1;
_st($4)._for_($5);
$6=_st($3)._with_(self._label());
$6;
$7=_st(html)._input();
_st($7)._id_(self._id());
_st($7)._type_(self._type());
$8=_st($7)._class_("form-control");
self["@htmlInput"]=$8;
return self["@htmlInput"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRBootstrapInput)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'form-group';\x0a\x09\x09with: [ \x0a\x09\x09\x09html label \x0a\x09\x09\x09\x09for: self id;\x0a\x09\x09\x09\x09with: self label.\x0a\x09\x09\x09htmlInput := html input \x0a\x09\x09\x09\x09id: self id;\x0a\x09\x09\x09\x09type: self type;\x0a\x09\x09\x09\x09class: 'form-control' ]",
messageSends: ["class:", "div", "with:", "for:", "label", "id", "id:", "input", "type:", "type"],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},globals.MRBootstrapInput)})},
args: [],
source: "type\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MRBootstrapInput);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@htmlInput"];
if(($receiver = $2) == nil || $receiver == null){
$1=$2;
} else {
$1=_st(_st(self["@htmlInput"])._asJQuery())._val();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.MRBootstrapInput)})},
args: [],
source: "value\x0a\x09^ htmlInput ifNotNil: [ htmlInput asJQuery val ]",
messageSends: ["ifNotNil:", "val", "asJQuery"],
referencedClasses: []
}),
globals.MRBootstrapInput);


globals.MRBootstrapInput.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
smalltalk.method({
selector: "generateId",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == null){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
self["@nextId"]=_st(self["@nextId"]).__plus((1));
$2="bootstrap_input_".__comma(_st(self["@nextId"])._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"generateId",{},globals.MRBootstrapInput.klass)})},
args: [],
source: "generateId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a\x09nextId := nextId + 1.\x0a\x09\x0a\x09^ 'bootstrap_input_', nextId asString",
messageSends: ["ifNil:", "+", ",", "asString"],
referencedClasses: []
}),
globals.MRBootstrapInput.klass);


smalltalk.addClass('MRBootstrapPasswordInput', globals.MRBootstrapInput, [], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return "password";
},
args: [],
source: "type\x0a\x09^ 'password'",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapPasswordInput);



smalltalk.addClass('MRBootstrapTextInput', globals.MRBootstrapInput, [], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
return "text";
},
args: [],
source: "type\x0a\x09^ 'text'",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapTextInput);



smalltalk.addClass('MRLoginDispatcher', globals.Object, ['presenter'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "dispatchWithUser:",
protocol: 'actions',
fn: function (anUser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $receiver;
if(($receiver = anUser) == nil || $receiver == null){
self._login();
} else {
self._renderAdminWidget();
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchWithUser:",{anUser:anUser},globals.MRLoginDispatcher)})},
args: ["anUser"],
source: "dispatchWithUser: anUser\x0a\x09anUser \x0a\x09\x09ifNil: [ self login ]\x0a\x09\x09ifNotNil: [ self renderAdminWidget ]",
messageSends: ["ifNil:ifNotNil:", "login", "renderAdminWidget"],
referencedClasses: []
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "login",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._loginWidget())._render();
return self}, function($ctx1) {$ctx1.fill(self,"login",{},globals.MRLoginDispatcher)})},
args: [],
source: "login\x0a\x09self loginWidget render",
messageSends: ["render", "loginWidget"],
referencedClasses: []
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "loginWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRLoginWidget(){return globals.MRLoginWidget||(typeof MRLoginWidget=="undefined"?nil:MRLoginWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MRLoginWidget())._new();
_st($2)._presenter_(self._presenter());
$3=_st($2)._onLoginBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderAdminWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loginWidget",{},globals.MRLoginDispatcher)})},
args: [],
source: "loginWidget\x0a\x09^ MRLoginWidget new\x0a\x09\x09presenter: self presenter;\x0a\x09\x09onLoginBlock: [ self renderAdminWidget ]",
messageSends: ["presenter:", "new", "presenter", "onLoginBlock:", "renderAdminWidget"],
referencedClasses: ["MRLoginWidget"]
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._presenter();
_st($1)._logout();
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._login();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"logout",{},globals.MRLoginDispatcher)})},
args: [],
source: "logout\x0a\x09self presenter \x0a\x09\x09logout;\x0a\x09\x09then: [ self login ]",
messageSends: ["logout", "presenter", "then:", "login"],
referencedClasses: []
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "presenter",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presenter"];
return $1;
},
args: [],
source: "presenter\x0a\x09^ presenter",
messageSends: [],
referencedClasses: []
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "presenter:",
protocol: 'accessing',
fn: function (aTDProxy){
var self=this;
self["@presenter"]=aTDProxy;
return self},
args: ["aTDProxy"],
source: "presenter: aTDProxy\x0a\x09presenter := aTDProxy",
messageSends: [],
referencedClasses: []
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAdminWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRAdminFrameWidget(){return globals.MRAdminFrameWidget||(typeof MRAdminFrameWidget=="undefined"?nil:MRAdminFrameWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._presenter())._adminPresenter())._then_((function(adminPresenter){
return smalltalk.withContext(function($ctx2) {
$1=_st($MRAdminFrameWidget())._new();
_st($1)._presenter_(adminPresenter);
$2=_st($1)._render();
return $2;
}, function($ctx2) {$ctx2.fillBlock({adminPresenter:adminPresenter},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAdminWidget",{},globals.MRLoginDispatcher)})},
args: [],
source: "renderAdminWidget\x0a\x09self presenter adminPresenter then: [ :adminPresenter |\x0a\x09\x09MRAdminFrameWidget new\x0a\x09\x09\x09presenter: adminPresenter;\x0a\x09\x09\x09render ]",
messageSends: ["then:", "adminPresenter", "presenter", "presenter:", "new", "render"],
referencedClasses: ["MRAdminFrameWidget"]
}),
globals.MRLoginDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
_st("body"._asJQuery())._empty();
$2=self._presenter();
$ctx1.sendIdx["presenter"]=1;
$1=_st($2)._connect();
_st($1)._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._dispatchWithUser_(_st(self._presenter())._user());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MRLoginDispatcher)})},
args: [],
source: "start\x0a\x09'body' asJQuery empty.\x0a\x09self presenter connect then: [\x0a\x09\x09self dispatchWithUser: self presenter user ]",
messageSends: ["empty", "asJQuery", "then:", "connect", "presenter", "dispatchWithUser:", "user"],
referencedClasses: []
}),
globals.MRLoginDispatcher);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $TDProxy(){return globals.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._presenter_(_st($TDProxy())._on_("/marina"));
$2=_st($1)._start();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MRLoginDispatcher.klass)})},
args: [],
source: "initialize\x0a\x09self new\x0a\x09\x09presenter: (TDProxy on: '/marina');\x0a\x09\x09start",
messageSends: ["presenter:", "new", "on:", "start"],
referencedClasses: ["TDProxy"]
}),
globals.MRLoginDispatcher.klass);


smalltalk.addClass('MRPresenterWidget', globals.Widget, ['presenter'], 'Marina-Widgets');
globals.MRPresenterWidget.comment="I am a widget holding a tide presenter.";
smalltalk.addMethod(
smalltalk.method({
selector: "presenter",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presenter"];
return $1;
},
args: [],
source: "presenter\x0a\x09^ presenter",
messageSends: [],
referencedClasses: []
}),
globals.MRPresenterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "presenter:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@presenter"]=anObject;
return self},
args: ["anObject"],
source: "presenter: anObject\x0a\x09presenter := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRPresenterWidget);



smalltalk.addClass('MRFrameWidget', globals.MRPresenterWidget, ['wrapper'], 'Marina-Widgets');
globals.MRFrameWidget.comment="I am an abstract widget building a frame.\x0a\x0aI know how to remove and render myself on a page. Only one instance should rendered at a time.";
smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._wrapper();
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@wrapper"])._asJQuery())._remove();
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.MRFrameWidget)})},
args: [],
source: "remove\x0a\x09self wrapper ifNotNil: [ wrapper asJQuery remove ]",
messageSends: ["ifNotNil:", "wrapper", "remove", "asJQuery"],
referencedClasses: []
}),
globals.MRFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.MRFrameWidget)})},
args: [],
source: "render\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.MRFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MRFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRFrameWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09wrapper := html div with: [\x0a\x09\x09self renderContentOn: html ]",
messageSends: ["with:", "div", "renderContentOn:"],
referencedClasses: []
}),
globals.MRFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@wrapper"];
return $1;
},
args: [],
source: "wrapper\x0a\x09^ wrapper",
messageSends: [],
referencedClasses: []
}),
globals.MRFrameWidget);



smalltalk.addClass('MRAdminFrameWidget', globals.MRFrameWidget, [], 'Marina-Widgets');
globals.MRAdminFrameWidget.comment="I render the main administration page frame, with a header and main area.";
smalltalk.addMethod(
smalltalk.method({
selector: "headerWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRHeaderWidget(){return globals.MRHeaderWidget||(typeof MRHeaderWidget=="undefined"?nil:MRHeaderWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MRHeaderWidget())._new();
_st($2)._presenter_(self._presenter());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"headerWidget",{},globals.MRAdminFrameWidget)})},
args: [],
source: "headerWidget\x0a\x09^ MRHeaderWidget new\x0a\x09\x09presenter: self presenter;\x0a\x09\x09yourself",
messageSends: ["presenter:", "new", "presenter", "yourself"],
referencedClasses: ["MRHeaderWidget"]
}),
globals.MRAdminFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "mainWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRMainWidget(){return globals.MRMainWidget||(typeof MRMainWidget=="undefined"?nil:MRMainWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MRMainWidget())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainWidget",{},globals.MRAdminFrameWidget)})},
args: [],
source: "mainWidget\x0a\x09^ MRMainWidget new",
messageSends: ["new"],
referencedClasses: ["MRMainWidget"]
}),
globals.MRAdminFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("admin");
_st($1)._with_(self._headerWidget());
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._with_(self._mainWidget());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRAdminFrameWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div\x0a\x09\x09class: 'admin'; \x0a\x09\x09with: self headerWidget;\x0a\x09\x09with: self mainWidget",
messageSends: ["class:", "div", "with:", "headerWidget", "mainWidget"],
referencedClasses: []
}),
globals.MRAdminFrameWidget);



smalltalk.addClass('MRLoginWidget', globals.MRFrameWidget, ['errorDiv', 'onLoginBlock'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "loginUsername:password:",
protocol: 'actions',
fn: function (username,password){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._presenter();
$ctx2.sendIdx["presenter"]=1;
_st($1)._loginUsername_password_(username,password);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._onLogin_(_st(self._presenter())._user());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(failure){
return smalltalk.withContext(function($ctx2) {
return self._onLoginError_(failure);
}, function($ctx2) {$ctx2.fillBlock({failure:failure},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loginUsername:password:",{username:username,password:password},globals.MRLoginWidget)})},
args: ["username", "password"],
source: "loginUsername: username password: password\x0a\x09[ self presenter\x0a\x09\x09loginUsername: username\x0a\x09\x09password: password;\x0a\x09\x09then: [ self onLogin: self presenter user ]\x0a\x09] onPromiseFailureDo: [ :failure | \x0a\x09\x09self onLoginError: failure ]",
messageSends: ["onPromiseFailureDo:", "loginUsername:password:", "presenter", "then:", "onLogin:", "user", "onLoginError:"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onLogin:",
protocol: 'actions',
fn: function (anUser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $receiver;
if(($receiver = anUser) == nil || $receiver == null){
anUser;
} else {
self._remove();
_st(self._onLoginBlock())._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"onLogin:",{anUser:anUser},globals.MRLoginWidget)})},
args: ["anUser"],
source: "onLogin: anUser\x0a\x09anUser ifNotNil: [\x0a\x09\x09self remove.\x0a\x09\x09self onLoginBlock value ]",
messageSends: ["ifNotNil:", "remove", "value", "onLoginBlock"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoginBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onLoginBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onLoginBlock",{},globals.MRLoginWidget)})},
args: [],
source: "onLoginBlock\x0a\x09^ onLoginBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoginBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onLoginBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "onLoginBlock: aBlock\x0a\x09onLoginBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoginError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@errorDiv"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._p();
_st($2)._class_("bg-danger");
$3=_st($2)._with_(_st(anError)._messageText());
return $3;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}))._appendToJQuery_(_st(self["@errorDiv"])._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"onLoginError:",{anError:anError},globals.MRLoginWidget)})},
args: ["anError"],
source: "onLoginError: anError\x0a\x09errorDiv asJQuery empty.\x0a\x09[ :html | \x0a\x09\x09html p \x0a\x09\x09\x09class: 'bg-danger';\x0a\x09\x09\x09with: anError messageText ] appendToJQuery: errorDiv asJQuery",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "class:", "p", "with:", "messageText"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$9,$10,$8,$6,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("container-fluid");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("row");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("col-xs-12 col-md-4 col-md-offset-4");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._div();
_st($7)._class_("login");
$ctx4.sendIdx["class:"]=4;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx6) {
$9=_st(html)._span();
_st($9)._class_("logo");
$10=_st($9)._with_("Marina");
$ctx6.sendIdx["with:"]=6;
$10;
return _st(html)._with_("Log in");
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["with:"]=5;
return self._renderFormOn_(html);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRLoginWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-12 col-md-4 col-md-offset-4';\x0a\x09\x09\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'login'; \x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html h1 with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09class: 'logo';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: 'Marina'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html with: 'Log in' ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderFormOn: html ] ] ] ]",
messageSends: ["class:", "div", "with:", "h1", "span", "renderFormOn:"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,usernameInput,passwordInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1;
form=_st($MRBootstrapForm())._new();
usernameInput=_st(_st(form)._textInput())._label_("Username");
$ctx1.sendIdx["label:"]=1;
passwordInput=_st(_st(form)._passwordInput())._label_("Password");
_st(form)._beNonCancellable();
_st(form)._submitLabel_("Log in");
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(usernameInput)._value();
$ctx2.sendIdx["value"]=1;
return self._loginUsername_password_($1,_st(passwordInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@errorDiv"]=_st(_st(html)._div())._class_("login-errors");
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,form:form,usernameInput:usernameInput,passwordInput:passwordInput},globals.MRLoginWidget)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09| form usernameInput passwordInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09usernameInput := form textInput \x0a\x09\x09label: 'Username'.\x0a\x09passwordInput := form passwordInput\x0a\x09\x09label: 'Password'.\x0a\x09\x09\x0a\x09form beNonCancellable.\x0a\x09form submitLabel: 'Log in'.\x0a\x09\x09\x09\x0a\x09form submitAction: [\x0a\x09\x09self\x0a\x09\x09\x09loginUsername: usernameInput value\x0a\x09\x09\x09password: passwordInput value ].\x0a\x09\x0a\x09errorDiv := html div class: 'login-errors'.\x0a\x09html with: form",
messageSends: ["new", "label:", "textInput", "passwordInput", "beNonCancellable", "submitLabel:", "submitAction:", "loginUsername:password:", "value", "class:", "div", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFrameOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$9,$10,$8,$6,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("container-fluid");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("row");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("col-xs-12 col-md-4 col-md-offset-4");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._div();
_st($7)._class_("login");
$ctx4.sendIdx["class:"]=4;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx6) {
$9=_st(html)._span();
_st($9)._class_("logo");
$10=_st($9)._with_("Marina");
$ctx6.sendIdx["with:"]=6;
$10;
return _st(html)._with_("Log in");
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["with:"]=5;
return self._renderFormOn_(html);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderFrameOn:",{html:html},globals.MRLoginWidget)})},
args: ["html"],
source: "renderFrameOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-12 col-md-4 col-md-offset-4';\x0a\x09\x09\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'login'; \x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html h1 with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09class: 'logo';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: 'Marina'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html with: 'Log in' ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderFormOn: html ] ] ] ]",
messageSends: ["class:", "div", "with:", "h1", "span", "renderFormOn:"],
referencedClasses: []
}),
globals.MRLoginWidget);



smalltalk.addClass('MRMainFrameWidget', globals.MRFrameWidget, [], 'Marina-Widgets');
globals.MRMainFrameWidget.comment="I render myself in the '#main' div of the admin app, removing previously rendered widgets in this area.";
smalltalk.addMethod(
smalltalk.method({
selector: "mainArea",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRMainWidget(){return globals.MRMainWidget||(typeof MRMainWidget=="undefined"?nil:MRMainWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("#".__comma(_st($MRMainWidget())._mainAreaId()))._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainArea",{},globals.MRMainFrameWidget)})},
args: [],
source: "mainArea\x0a\x09^ ('#', MRMainWidget mainAreaId) asJQuery",
messageSends: ["asJQuery", ",", "mainAreaId"],
referencedClasses: ["MRMainWidget"]
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._mainArea();
$ctx1.sendIdx["mainArea"]=1;
_st($1)._empty();
self._appendToJQuery_(self._mainArea());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.MRMainFrameWidget)})},
args: [],
source: "render\x0a\x09self mainArea empty.\x0a\x09self appendToJQuery: self mainArea",
messageSends: ["empty", "mainArea", "appendToJQuery:"],
referencedClasses: []
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h2())._with_(self._title());
self._renderContentOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRMainFrameWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 with: self title.\x0a\x09self renderContentOn: html",
messageSends: ["with:", "h2", "title", "renderContentOn:"],
referencedClasses: []
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.MRMainFrameWidget)})},
args: [],
source: "title\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MRMainFrameWidget);



smalltalk.addClass('MRStructuresWidget', globals.MRMainFrameWidget, [], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._table();
_st($1)._class_("table table-striped");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self._structures())._contents())._then_((function(structures){
return smalltalk.withContext(function($ctx4) {
return _st(structures)._do_((function(each){
return smalltalk.withContext(function($ctx5) {
return _st(_st(html)._tr())._with_(_st(each)._title());
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,4)})}));
}, function($ctx4) {$ctx4.fillBlock({structures:structures},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRStructuresWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09self structures contents then: [ :structures |\x0a\x09\x09\x09\x09\x09structures do: [ :each |\x0a\x09\x09\x09\x09\x09\x09html tr with: each title ] ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "then:", "contents", "structures", "do:", "tr", "title"],
referencedClasses: []
}),
globals.MRStructuresWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structures",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._presenter();
return $1;
}, function($ctx1) {$ctx1.fill(self,"structures",{},globals.MRStructuresWidget)})},
args: [],
source: "structures\x0a\x09^ self presenter",
messageSends: ["presenter"],
referencedClasses: []
}),
globals.MRStructuresWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Structures";
},
args: [],
source: "title\x0a\x09^ 'Structures'",
messageSends: [],
referencedClasses: []
}),
globals.MRStructuresWidget);



smalltalk.addClass('MRHeaderWidget', globals.MRPresenterWidget, [], 'Marina-Widgets');
globals.MRHeaderWidget.comment="I display the main header of the admin page.";
smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuItemsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(html)._li();
$ctx1.sendIdx["li"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($2)._with_("Pages");
$ctx2.sendIdx["with:"]=2;
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showStructuresWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st(html)._li();
$ctx1.sendIdx["li"]=2;
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._a();
$ctx2.sendIdx["a"]=2;
_st($5)._with_("Templates");
$ctx2.sendIdx["with:"]=4;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showTemplatesWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=2;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=3;
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._a();
_st($7)._with_("Users");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showUsersWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuItemsOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderMenuItemsOn: html\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Pages';\x0a\x09\x09\x09onClick: [ self showStructuresWidget ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Templates';\x0a\x09\x09\x09onClick: [ self showTemplatesWidget ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Users';\x0a\x09\x09\x09onClick: [ self showUsersWidget ] ]",
messageSends: ["with:", "li", "a", "onClick:", "showStructuresWidget", "showTemplatesWidget", "showUsersWidget"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMenuOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("collapse navbar-collapse");
$ctx1.sendIdx["class:"]=1;
_st($1)._id_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._ul();
_st($3)._class_("nav navbar-nav");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderMenuItemsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderMenuOn: html\x0a\x09html div \x0a\x09\x09class: 'collapse navbar-collapse';\x0a\x09\x09id: 'menu';\x0a\x09\x09with: [\x0a\x09\x09\x09html ul \x0a\x09\x09\x09\x09class: 'nav navbar-nav';\x0a\x09\x09\x09\x09with: [ self renderMenuItemsOn: html ] ]",
messageSends: ["class:", "div", "id:", "with:", "ul", "renderMenuItemsOn:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("navbar navbar-default");
$ctx1.sendIdx["class:"]=1;
_st($1)._at_put_("role","navigation");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("container");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderToggleOn_(html);
return self._renderMenuOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'navbar navbar-default';\x0a\x09\x09at: 'role' put: 'navigation';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'container'; \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderToggleOn: html.\x0a\x09\x09\x09\x09\x09self renderMenuOn: html ] ]",
messageSends: ["class:", "div", "at:put:", "with:", "renderToggleOn:", "renderMenuOn:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToggleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$4,$7,$8,$2;
$1=_st(html)._div();
_st($1)._class_("navbar-header");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._type_("button");
_st($3)._class_("navbar-toggle");
$ctx2.sendIdx["class:"]=2;
_st($3)._at_put_("data-toggle","collapse");
$ctx2.sendIdx["at:put:"]=1;
_st($3)._at_put_("data-target","menu");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._span();
$ctx3.sendIdx["span"]=1;
_st($5)._class_("sr-only");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_("Toggle Navigation");
$ctx3.sendIdx["with:"]=3;
$6;
return (3)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._span())._class_("icon-bar");
$ctx4.sendIdx["class:"]=4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$7=_st(html)._a();
_st($7)._class_("navbar-brand");
_st($7)._href_("#");
$8=_st($7)._with_("Marina");
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderToggleOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderToggleOn: html\x0a\x09html div\x0a\x09\x09class: 'navbar-header';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'navbar-toggle';\x0a\x09\x09\x09\x09at: 'data-toggle' put: 'collapse';\x0a\x09\x09\x09\x09at: 'data-target' put: 'menu';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09class: 'sr-only';\x0a\x09\x09\x09\x09\x09\x09with: 'Toggle Navigation'.\x0a\x09\x09\x09\x09\x093 timesRepeat: [ \x0a\x09\x09\x09\x09\x09\x09html span class: 'icon-bar' ] ].\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09class: 'navbar-brand';\x0a\x09\x09\x09\x09href: '#'; \x0a\x09\x09\x09\x09with: 'Marina' ]",
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "span", "timesRepeat:", "a", "href:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStructuresWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructuresWidget(){return globals.MRStructuresWidget||(typeof MRStructuresWidget=="undefined"?nil:MRStructuresWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRStructuresWidget())._new();
_st($1)._presenter_(_st(self._presenter())._structures());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"showStructuresWidget",{},globals.MRHeaderWidget)})},
args: [],
source: "showStructuresWidget\x0a\x09MRStructuresWidget new\x0a\x09\x09presenter: self presenter structures;\x0a\x09\x09render",
messageSends: ["presenter:", "new", "structures", "presenter", "render"],
referencedClasses: ["MRStructuresWidget"]
}),
globals.MRHeaderWidget);



smalltalk.addClass('MRMainWidget', globals.MRPresenterWidget, ['contentsDiv'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "mainAreaId",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._mainAreaId();
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainAreaId",{},globals.MRMainWidget)})},
args: [],
source: "mainAreaId\x0a\x09^ self class mainAreaId",
messageSends: ["mainAreaId", "class"],
referencedClasses: []
}),
globals.MRMainWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("container-fluid");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("row");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("main col-md-8 col-md-offset-2 col-xs-12");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._div())._id_(self._mainAreaId());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
self["@contentsDiv"]=$6;
return self["@contentsDiv"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRMainWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09contentsDiv := html div \x0a\x09\x09\x09\x09\x09\x09class: 'main col-md-8 col-md-offset-2 col-xs-12';\x0a\x09\x09\x09\x09\x09\x09with: [ html div id: self mainAreaId ] ] ]",
messageSends: ["class:", "div", "with:", "id:", "mainAreaId"],
referencedClasses: []
}),
globals.MRMainWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "mainAreaId",
protocol: 'rendering',
fn: function (){
var self=this;
return "main";
},
args: [],
source: "mainAreaId\x0a\x09^ 'main'",
messageSends: [],
referencedClasses: []
}),
globals.MRMainWidget.klass);

});
