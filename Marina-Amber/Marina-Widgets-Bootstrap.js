define("marina/Marina-Widgets-Bootstrap", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets-Bootstrap');
smalltalk.packages["Marina-Widgets-Bootstrap"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRBootstrapDialog', globals.Widget, ['id'], 'Marina-Widgets-Bootstrap');
globals.MRBootstrapDialog.comment="I am an abstract widget rendering a bootstrap modal dialog.";
smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=(function(){
});
return $1;
},
args: [],
source: "cancelBlock\x0a\x09^ []",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Cancel";
},
args: [],
source: "cancelLabel\x0a\x09^ 'Cancel'",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@id"];
if(($receiver = $2) == nil || $receiver == null){
self["@id"]=_st((100000)._atRandom())._asString();
$1=self["@id"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},globals.MRBootstrapDialog)})},
args: [],
source: "id\x0a\x09^ id ifNil: [ id := 100000 atRandom asString ]",
messageSends: ["ifNil:", "asString", "atRandom"],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "okBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=(function(){
});
return $1;
},
args: [],
source: "okBlock\x0a\x09^ []",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "okLabel",
protocol: 'accessing',
fn: function (){
var self=this;
return "Ok";
},
args: [],
source: "okLabel\x0a\x09^ 'Ok'",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("modal-body");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderContentOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},globals.MRBootstrapDialog)})},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div\x0a\x09\x09class: 'modal-body';\x0a\x09\x09with: [ \x0a\x09\x09\x09html p with: [ \x0a\x09\x09\x09\x09self renderContentOn: html ] ]",
messageSends: ["class:", "div", "with:", "p", "renderContentOn:"],
referencedClasses: []
}),
globals.MRBootstrapDialog);

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
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFooterOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("modal-footer");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._type_("button");
$ctx2.sendIdx["type:"]=1;
_st($3)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=2;
_st($3)._at_put_("data-dismiss","modal");
$ctx2.sendIdx["at:put:"]=1;
_st($3)._with_(self._cancelLabel());
$ctx2.sendIdx["with:"]=2;
$4=_st($3)._onClick_(self._cancelBlock());
$ctx2.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
_st($5)._type_("button");
_st($5)._class_("btn btn-primary");
_st($5)._at_put_("data-dismiss","modal");
_st($5)._with_(self._okLabel());
$6=_st($5)._onClick_(self._okBlock());
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},globals.MRBootstrapDialog)})},
args: ["html"],
source: "renderFooterOn: html\x0a\x09html div\x0a\x09\x09class: 'modal-footer';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09at: 'data-dismiss' put: 'modal';\x0a\x09\x09\x09\x09with: self cancelLabel;\x0a\x09\x09\x09\x09onClick: self cancelBlock. \x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09at: 'data-dismiss' put: 'modal';\x0a\x09\x09\x09\x09with: self okLabel;\x0a\x09\x09\x09\x09onClick: self okBlock ]",
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "cancelLabel", "onClick:", "cancelBlock", "okLabel", "okBlock"],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("modal-header");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._type_("button");
_st($3)._class_("close");
$ctx2.sendIdx["class:"]=2;
_st($3)._at_put_("data-dismiss","modal");
$ctx2.sendIdx["at:put:"]=1;
_st($3)._at_put_("aria-hidden","true");
$4=_st($3)._with_("×");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._h4();
_st($5)._class_("modal-title");
$6=_st($5)._with_(self._title());
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.MRBootstrapDialog)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html div class: 'modal-header'; with: [ \x0a\x09\x09html button\x0a\x09\x09\x09type: 'button';\x0a\x09\x09\x09class: 'close';\x0a\x09\x09\x09at: 'data-dismiss' put: 'modal';\x0a\x09\x09\x09at: 'aria-hidden' put: 'true';\x0a\x09\x09\x09with: '×'.\x0a\x09\x09html h4 \x0a\x09\x09\x09class: 'modal-title';\x0a\x09\x09\x09with: self title ]",
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "h4", "title"],
referencedClasses: []
}),
globals.MRBootstrapDialog);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$7,$9,$8,$6,$4;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("modal fade");
$ctx1.sendIdx["class:"]=1;
$2=$1;
$3=self._id();
$ctx1.sendIdx["id"]=1;
_st($2)._id_($3);
$4=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($5)._class_("modal-dialog");
$ctx2.sendIdx["class:"]=2;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._div();
_st($7)._class_("modal-content");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx4) {
self._renderHeaderOn_(html);
self._renderBodyOn_(html);
$9=self._renderFooterOn_(html);
return $9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st("#".__comma(self._id()))._asJQuery())._modal();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRBootstrapDialog)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'modal fade';\x0a\x09\x09id: self id;\x0a\x09\x09with: [ \x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'modal-dialog';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'modal-content';\x0a\x09\x09\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09\x09\x09\x09renderHeaderOn: html;\x0a\x09\x09\x09\x09\x09\x09\x09\x09renderBodyOn: html;\x0a\x09\x09\x09\x09\x09\x09\x09\x09renderFooterOn: html ] ] ].\x0a\x09('#', self id) asJQuery modal",
messageSends: ["class:", "div", "id:", "id", "with:", "renderHeaderOn:", "renderBodyOn:", "renderFooterOn:", "modal", "asJQuery", ","],
referencedClasses: []
}),
globals.MRBootstrapDialog);

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
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.MRBootstrapDialog)})},
args: [],
source: "title\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MRBootstrapDialog);



smalltalk.addClass('MRBootstrapConfirmation', globals.MRBootstrapDialog, ['contents', 'okBlock', 'cancelBlock'], 'Marina-Widgets-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelBlock",{},globals.MRBootstrapConfirmation)})},
args: [],
source: "cancelBlock\x0a\x09^ cancelBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "cancelBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@cancelBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "cancelBlock: aBlock\x0a\x09cancelBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@contents"];
if(($receiver = $2) == nil || $receiver == null){
$1="Confirmation";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},globals.MRBootstrapConfirmation)})},
args: [],
source: "contents\x0a\x09^ contents ifNil: [ 'Confirmation' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@contents"]=aString;
return self},
args: ["aString"],
source: "contents: aString\x0a\x09contents := aString",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "okBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@okBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"okBlock",{},globals.MRBootstrapConfirmation)})},
args: [],
source: "okBlock\x0a\x09^ okBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "okBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@okBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "okBlock: aBlock\x0a\x09okBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._contents());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRBootstrapConfirmation)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self contents",
messageSends: ["with:", "contents"],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Confirmation";
},
args: [],
source: "title\x0a\x09^ 'Confirmation'",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapConfirmation);



smalltalk.addClass('MRBootstrapForm', globals.Widget, ['inputs', 'submitAction', 'cancelAction', 'submitLabel', 'cancelLabel', 'cancellable'], 'Marina-Widgets-Bootstrap');
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
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@cancelLabel"];
if(($receiver = $2) == nil || $receiver == null){
$1="Cancel";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"cancelLabel",{},globals.MRBootstrapForm)})},
args: [],
source: "cancelLabel\x0a\x09^ cancelLabel ifNil: [ 'Cancel' ]",
messageSends: ["ifNil:"],
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
selector: "checkboxInput",
protocol: 'adding',
fn: function (){
var self=this;
function $MRBootstrapCheckboxInput(){return globals.MRBootstrapCheckboxInput||(typeof MRBootstrapCheckboxInput=="undefined"?nil:MRBootstrapCheckboxInput)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addInput_(_st($MRBootstrapCheckboxInput())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"checkboxInput",{},globals.MRBootstrapForm)})},
args: [],
source: "checkboxInput\x0a\x09^ self addInput: MRBootstrapCheckboxInput new",
messageSends: ["addInput:", "new"],
referencedClasses: ["MRBootstrapCheckboxInput"]
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
var $1,$3,$4,$5,$6,$7,$2;
htmlForm=_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self._inputs())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(each);
$ctx3.sendIdx["with:"]=2;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
$1=_st(html)._div();
_st($1)._class_("form-group");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($3)._class_("btn btn-default");
$ctx3.sendIdx["class:"]=2;
_st($3)._type_("submit");
$ctx3.sendIdx["type:"]=1;
$4=_st($3)._with_(self._submitLabel());
$ctx3.sendIdx["with:"]=4;
$4;
$5=self._isCancellable();
if(smalltalk.assert($5)){
$6=_st(html)._button();
_st($6)._class_("btn");
_st($6)._type_("cancel");
_st($6)._with_(self._cancelLabel());
$7=_st($6)._onClick_((function(e){
return smalltalk.withContext(function($ctx4) {
_st(self._cancelAction())._value();
_st(e)._preventDefault();
$ctx4.sendIdx["preventDefault"]=1;
return false;
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,5)})}));
return $7;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(htmlForm)._asJQuery())._submit_((function(event){
return smalltalk.withContext(function($ctx2) {
_st(self._submitAction())._value_(self);
return _st(event)._preventDefault();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,6)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,htmlForm:htmlForm},globals.MRBootstrapForm)})},
args: ["html"],
source: "renderOn: html\x0a\x09| htmlForm |\x0a\x09htmlForm := html form with: [\x0a\x09\x09self inputs do: [ :each | html with: each ].\x0a\x09\x0a\x09\x09html div \x0a\x09\x09\x09class: 'form-group';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09\x09type: 'submit';\x0a\x09\x09\x09\x09\x09with: self submitLabel.\x0a\x09\x0a\x09\x09\x09\x09self isCancellable ifTrue: [ \x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09\x09\x09type: 'cancel';\x0a\x09\x09\x09\x09\x09\x09with: self cancelLabel;\x0a\x09\x09\x09\x09\x09\x09onClick: [ :e | \x0a\x09\x09\x09\x09\x09\x09\x09self cancelAction value.\x0a\x09\x09\x09\x09\x09\x09\x09e preventDefault. false ] ] ] ].\x0a\x09\x09\x09\x0a\x09htmlForm asJQuery submit: [ :event |\x0a\x09\x09self submitAction value: self.\x0a\x09\x09event preventDefault ]",
messageSends: ["with:", "form", "do:", "inputs", "class:", "div", "button", "type:", "submitLabel", "ifTrue:", "isCancellable", "cancelLabel", "onClick:", "value", "cancelAction", "preventDefault", "submit:", "asJQuery", "value:", "submitAction"],
referencedClasses: []
}),
globals.MRBootstrapForm);

smalltalk.addMethod(
smalltalk.method({
selector: "selectInput",
protocol: 'adding',
fn: function (){
var self=this;
function $MRBootstrapSelectInput(){return globals.MRBootstrapSelectInput||(typeof MRBootstrapSelectInput=="undefined"?nil:MRBootstrapSelectInput)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addInput_(_st($MRBootstrapSelectInput())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectInput",{},globals.MRBootstrapForm)})},
args: [],
source: "selectInput\x0a\x09^ self addInput: MRBootstrapSelectInput new",
messageSends: ["addInput:", "new"],
referencedClasses: ["MRBootstrapSelectInput"]
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
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@submitLabel"];
if(($receiver = $2) == nil || $receiver == null){
$1="Save";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"submitLabel",{},globals.MRBootstrapForm)})},
args: [],
source: "submitLabel\x0a\x09^ submitLabel ifNil: [ 'Save' ]",
messageSends: ["ifNil:"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "textareaInput",
protocol: 'adding',
fn: function (){
var self=this;
function $MRBootstrapTextareaInput(){return globals.MRBootstrapTextareaInput||(typeof MRBootstrapTextareaInput=="undefined"?nil:MRBootstrapTextareaInput)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._addInput_(_st($MRBootstrapTextareaInput())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"textareaInput",{},globals.MRBootstrapForm)})},
args: [],
source: "textareaInput\x0a\x09^ self addInput: MRBootstrapTextareaInput new",
messageSends: ["addInput:", "new"],
referencedClasses: ["MRBootstrapTextareaInput"]
}),
globals.MRBootstrapForm);



smalltalk.addClass('MRBootstrapInput', globals.Widget, ['label', 'id', 'htmlInput'], 'Marina-Widgets-Bootstrap');
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
function $MRBootstrapInput(){return globals.MRBootstrapInput||(typeof MRBootstrapInput=="undefined"?nil:MRBootstrapInput)}
return smalltalk.withContext(function($ctx1) { 
globals.MRBootstrapInput.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@id"]=_st($MRBootstrapInput())._generateId();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MRBootstrapInput)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09id := MRBootstrapInput generateId",
messageSends: ["initialize", "generateId"],
referencedClasses: ["MRBootstrapInput"]
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
selector: "renderFormInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderFormInputOn:",{html:html},globals.MRBootstrapInput)})},
args: ["html"],
source: "renderFormInputOn: html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("form-group");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._label();
$ctx2.sendIdx["label"]=1;
_st($3)._for_(self._id());
$4=_st($3)._with_(self._label());
$4;
return self._renderFormInputOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRBootstrapInput)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'form-group';\x0a\x09\x09with: [ \x0a\x09\x09\x09html label \x0a\x09\x09\x09\x09for: self id;\x0a\x09\x09\x09\x09with: self label.\x0a\x09\x09\x09self renderFormInputOn: html ]",
messageSends: ["class:", "div", "with:", "for:", "label", "id", "renderFormInputOn:"],
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


smalltalk.addClass('MRBootstrapCheckboxInput', globals.MRBootstrapInput, ['checked'], 'Marina-Widgets-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "checked",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@checked"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"checked",{},globals.MRBootstrapCheckboxInput)})},
args: [],
source: "checked\x0a\x09^ checked ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapCheckboxInput);

smalltalk.addMethod(
smalltalk.method({
selector: "checked:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@checked"]=aBoolean;
return self},
args: ["aBoolean"],
source: "checked: aBoolean\x0a\x09checked := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapCheckboxInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(html)._input();
_st($1)._id_(self._id());
$2=_st($1)._type_("checkbox");
self["@htmlInput"]=$2;
$3=self._checked();
$ctx1.sendIdx["checked"]=1;
if(smalltalk.assert($3)){
_st(self["@htmlInput"])._at_put_("checked",self._checked());
};
_st(html)._with_(self._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderFormInputOn:",{html:html},globals.MRBootstrapCheckboxInput)})},
args: ["html"],
source: "renderFormInputOn: html\x0a\x09htmlInput := html input \x0a\x09\x09id: self id;\x0a\x09\x09type: 'checkbox'.\x0a\x09\x09\x0a\x09self checked ifTrue: [\x0a\x09\x09htmlInput at: 'checked' put: self checked ].\x0a\x09\x09\x09\x0a\x09html with: self label",
messageSends: ["id:", "input", "id", "type:", "ifTrue:", "checked", "at:put:", "with:", "label"],
referencedClasses: []
}),
globals.MRBootstrapCheckboxInput);

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
_st($1)._class_("form-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("checkbox");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._label())._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderFormInputOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRBootstrapCheckboxInput)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'form-group';\x0a\x09\x09with: [ \x0a\x09\x09\x09html div class: 'checkbox'; with: [\x0a\x09\x09\x09\x09html label \x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09self renderFormInputOn: html ] ] ]",
messageSends: ["class:", "div", "with:", "label", "renderFormInputOn:"],
referencedClasses: []
}),
globals.MRBootstrapCheckboxInput);

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
$1=_st(_st(self["@htmlInput"])._asJQuery())._is_(":checked");
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.MRBootstrapCheckboxInput)})},
args: [],
source: "value\x0a\x09^ htmlInput ifNotNil: [ htmlInput asJQuery is: ':checked' ]",
messageSends: ["ifNotNil:", "is:", "asJQuery"],
referencedClasses: []
}),
globals.MRBootstrapCheckboxInput);



smalltalk.addClass('MRBootstrapSelectInput', globals.MRBootstrapInput, ['options', 'selectedOption'], 'Marina-Widgets-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "options",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@options"];
if(($receiver = $2) == nil || $receiver == null){
$1=[];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},globals.MRBootstrapSelectInput)})},
args: [],
source: "options\x0a\x09^ options ifNil: [ #() ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapSelectInput);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@options"]=aCollection;
return self},
args: ["aCollection"],
source: "options: aCollection\x0a\x09options := aCollection",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapSelectInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(html)._select();
_st($1)._id_(self._id());
_st($1)._class_("form-control");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._options())._do_((function(each){
var option;
return smalltalk.withContext(function($ctx3) {
option=_st(_st(html)._option())._with_(each);
option;
$3=_st(self._selectedOption()).__eq(each);
if(smalltalk.assert($3)){
return _st(option)._at_put_("selected","selected");
};
}, function($ctx3) {$ctx3.fillBlock({each:each,option:option},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@htmlInput"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderFormInputOn:",{html:html},globals.MRBootstrapSelectInput)})},
args: ["html"],
source: "renderFormInputOn: html\x0a\x09htmlInput := html select\x0a\x09\x09id: self id;\x0a\x09\x09class: 'form-control';\x0a\x09\x09with: [ \x0a\x09\x09\x09self options do: [ :each || option |\x0a\x09\x09\x09\x09option := html option with: each.\x0a\x09\x09\x09\x09self selectedOption = each ifTrue: [\x0a\x09\x09\x09\x09\x09option at: 'selected' put: 'selected' ] ] ]",
messageSends: ["id:", "select", "id", "class:", "with:", "do:", "options", "option", "ifTrue:", "=", "selectedOption", "at:put:"],
referencedClasses: []
}),
globals.MRBootstrapSelectInput);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedOption",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectedOption"];
return $1;
},
args: [],
source: "selectedOption\x0a\x09^ selectedOption",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapSelectInput);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedOption:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@selectedOption"]=anObject;
return self},
args: ["anObject"],
source: "selectedOption: anObject\x0a\x09selectedOption := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapSelectInput);



smalltalk.addClass('MRBootstrapTextInput', globals.MRBootstrapInput, ['placeholder', 'defaultValue'], 'Marina-Widgets-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@defaultValue"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultValue",{},globals.MRBootstrapTextInput)})},
args: [],
source: "defaultValue\x0a\x09^ defaultValue ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapTextInput);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@defaultValue"]=anObject;
return self},
args: ["anObject"],
source: "defaultValue: anObject\x0a\x09defaultValue := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MRBootstrapTextInput);

smalltalk.addMethod(
smalltalk.method({
selector: "placeholder",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@placeholder"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"placeholder",{},globals.MRBootstrapTextInput)})},
args: [],
source: "placeholder\x0a\x09^ placeholder ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRBootstrapTextInput);

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
globals.MRBootstrapTextInput);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._input();
_st($1)._id_(self._id());
_st($1)._type_(self._type());
_st($1)._at_put_("placeholder",self._placeholder());
_st($1)._value_(self._defaultValue());
$2=_st($1)._class_("form-control");
self["@htmlInput"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderFormInputOn:",{html:html},globals.MRBootstrapTextInput)})},
args: ["html"],
source: "renderFormInputOn: html\x0a\x09htmlInput := html input \x0a\x09\x09id: self id;\x0a\x09\x09type: self type;\x0a\x09\x09at: 'placeholder' put: self placeholder;\x0a\x09\x09value: self defaultValue;\x0a\x09\x09class: 'form-control'",
messageSends: ["id:", "input", "id", "type:", "type", "at:put:", "placeholder", "value:", "defaultValue", "class:"],
referencedClasses: []
}),
globals.MRBootstrapTextInput);

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



smalltalk.addClass('MRBootstrapPasswordInput', globals.MRBootstrapTextInput, [], 'Marina-Widgets-Bootstrap');
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



smalltalk.addClass('MRBootstrapTextareaInput', globals.MRBootstrapTextInput, [], 'Marina-Widgets-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "renderFormInputOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._textarea();
_st($1)._id_(self._id());
_st($1)._at_put_("placeholder",self._placeholder());
_st($1)._with_(self._defaultValue());
$2=_st($1)._class_("form-control");
self["@htmlInput"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderFormInputOn:",{html:html},globals.MRBootstrapTextareaInput)})},
args: ["html"],
source: "renderFormInputOn: html\x0a\x09htmlInput := html textarea \x0a\x09\x09id: self id;\x0a\x09\x09at: 'placeholder' put: self placeholder;\x0a\x09\x09with: self defaultValue;\x0a\x09\x09class: 'form-control'",
messageSends: ["id:", "textarea", "id", "at:put:", "placeholder", "with:", "defaultValue", "class:"],
referencedClasses: []
}),
globals.MRBootstrapTextareaInput);


});
