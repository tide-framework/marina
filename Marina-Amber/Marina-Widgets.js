define("marina/Marina-Widgets", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets');
smalltalk.packages["Marina-Widgets"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRBootstrapDialog', globals.Widget, ['id'], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapConfirmation', globals.MRBootstrapDialog, ['contents', 'okBlock', 'cancelBlock'], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapInput', globals.Widget, ['label', 'id', 'htmlInput'], 'Marina-Widgets');
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


smalltalk.addClass('MRBootstrapCheckboxInput', globals.MRBootstrapInput, ['checked'], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapSelectInput', globals.MRBootstrapInput, ['options', 'selectedOption'], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapTextInput', globals.MRBootstrapInput, ['placeholder', 'defaultValue'], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapPasswordInput', globals.MRBootstrapTextInput, [], 'Marina-Widgets');
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



smalltalk.addClass('MRBootstrapTextareaInput', globals.MRBootstrapTextInput, [], 'Marina-Widgets');
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



smalltalk.addClass('MRContext', globals.Object, ['adminPresenter'], 'Marina-Widgets');
globals.MRContext.comment="I hold context objects related to the current Tide session.";
smalltalk.addMethod(
smalltalk.method({
selector: "adminPresenter",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@adminPresenter"];
return $1;
},
args: [],
source: "adminPresenter\x0a\x09^ adminPresenter",
messageSends: [],
referencedClasses: []
}),
globals.MRContext);

smalltalk.addMethod(
smalltalk.method({
selector: "adminPresenter:",
protocol: 'accessing',
fn: function (aPresenter){
var self=this;
self["@adminPresenter"]=aPresenter;
return self},
args: ["aPresenter"],
source: "adminPresenter: aPresenter\x0a\x09adminPresenter := aPresenter",
messageSends: [],
referencedClasses: []
}),
globals.MRContext);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._adminPresenter())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},globals.MRContext)})},
args: [],
source: "root\x0a\x09^ self adminPresenter root",
messageSends: ["root", "adminPresenter"],
referencedClasses: []
}),
globals.MRContext);

smalltalk.addMethod(
smalltalk.method({
selector: "templates",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._root())._templates();
return $1;
}, function($ctx1) {$ctx1.fill(self,"templates",{},globals.MRContext)})},
args: [],
source: "templates\x0a\x09^ self root templates",
messageSends: ["templates", "root"],
referencedClasses: []
}),
globals.MRContext);


globals.MRContext.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.MRContext.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.MRContext.klass);


smalltalk.addClass('MRLoginDispatcher', globals.Object, ['presenter'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRContext(){return globals.MRContext||(typeof MRContext=="undefined"?nil:MRContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MRContext())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},globals.MRLoginDispatcher)})},
args: [],
source: "context\x0a\x09^ MRContext current",
messageSends: ["current"],
referencedClasses: ["MRContext"]
}),
globals.MRLoginDispatcher);

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
_st(_st(self._presenter())._adminPresenter())._then_((function(adminPresenter){
return smalltalk.withContext(function($ctx2) {
_st(self._context())._adminPresenter_(adminPresenter);
return _st(_st($MRAdminFrameWidget())._new())._render();
}, function($ctx2) {$ctx2.fillBlock({adminPresenter:adminPresenter},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAdminWidget",{},globals.MRLoginDispatcher)})},
args: [],
source: "renderAdminWidget\x0a\x09self presenter adminPresenter then: [ :adminPresenter |\x0a\x09\x09self context adminPresenter: adminPresenter.\x0a\x09\x09MRAdminFrameWidget new render ]",
messageSends: ["then:", "adminPresenter", "presenter", "adminPresenter:", "context", "render", "new"],
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
selector: "start",
protocol: 'initialization',
fn: function (){
var self=this;
function $TDProxy(){return globals.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._presenter_(_st($TDProxy())._on_("/marina"));
$2=_st($1)._start();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MRLoginDispatcher.klass)})},
args: [],
source: "start\x0a\x09self new\x0a\x09\x09presenter: (TDProxy on: '/marina');\x0a\x09\x09start",
messageSends: ["presenter:", "new", "on:", "start"],
referencedClasses: ["TDProxy"]
}),
globals.MRLoginDispatcher.klass);


smalltalk.addClass('MRWidget', globals.Widget, [], 'Marina-Widgets');
globals.MRWidget.comment="I am the abstract superclass of all Marina widgets.";
smalltalk.addMethod(
smalltalk.method({
selector: "adminPresenter",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._adminPresenter();
return $1;
}, function($ctx1) {$ctx1.fill(self,"adminPresenter",{},globals.MRWidget)})},
args: [],
source: "adminPresenter\x0a\x09^ self context adminPresenter",
messageSends: ["adminPresenter", "context"],
referencedClasses: []
}),
globals.MRWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._confirm_ifTrue_ifFalse_(aString,aBlock,(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:",{aString:aString,aBlock:aBlock},globals.MRWidget)})},
args: ["aString", "aBlock"],
source: "confirm: aString ifTrue: aBlock\x0a\x09self \x0a\x09\x09confirm: aString\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: []",
messageSends: ["confirm:ifTrue:ifFalse:"],
referencedClasses: []
}),
globals.MRWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "confirm:ifTrue:ifFalse:",
protocol: 'actions',
fn: function (aString,aBlock,anotherBlock){
var self=this;
function $MRBootstrapConfirmation(){return globals.MRBootstrapConfirmation||(typeof MRBootstrapConfirmation=="undefined"?nil:MRBootstrapConfirmation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRBootstrapConfirmation())._new();
_st($1)._contents_(aString);
_st($1)._okBlock_(aBlock);
_st($1)._cancelBlock_(anotherBlock);
$2=_st($1)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"confirm:ifTrue:ifFalse:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},globals.MRWidget)})},
args: ["aString", "aBlock", "anotherBlock"],
source: "confirm: aString ifTrue: aBlock ifFalse: anotherBlock\x0a\x09MRBootstrapConfirmation new\x0a\x09\x09contents: aString;\x0a\x09\x09okBlock: aBlock;\x0a\x09\x09cancelBlock: anotherBlock;\x0a\x09\x09appendToJQuery: 'body' asJQuery",
messageSends: ["contents:", "new", "okBlock:", "cancelBlock:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["MRBootstrapConfirmation"]
}),
globals.MRWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRContext(){return globals.MRContext||(typeof MRContext=="undefined"?nil:MRContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MRContext())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},globals.MRWidget)})},
args: [],
source: "context\x0a\x09^ MRContext current",
messageSends: ["current"],
referencedClasses: ["MRContext"]
}),
globals.MRWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "notifyError:",
protocol: 'actions',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1="#notification"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
_st($2)._class_("alert alert-danger alert-dismissable");
$ctx2.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._button();
_st($4)._class_("close");
_st($4)._type_("button");
_st($4)._at_put_("data-dismiss","alert");
$ctx3.sendIdx["at:put:"]=1;
_st($4)._at_put_("aria-hidden","true");
$5=_st($4)._with_("×");
$ctx3.sendIdx["with:"]=2;
$5;
return _st(html)._with_(_st(anError)._messageText());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
return $3;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}))._appendToJQuery_("#notification"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"notifyError:",{anError:anError},globals.MRWidget)})},
args: ["anError"],
source: "notifyError: anError\x0a\x09'#notification' asJQuery empty.\x0a\x09[ :html | \x0a\x09\x09html div\x0a\x09\x09\x09class: 'alert alert-danger alert-dismissable'; \x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'close';\x0a\x09\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09\x09at: 'data-dismiss' put: 'alert';\x0a\x09\x09\x09\x09\x09at: 'aria-hidden' put: 'true';\x0a\x09\x09\x09\x09\x09with: '×'.\x0a\x09\x09\x09\x09html with: anError messageText ] ]\x0a\x09\x09appendToJQuery: '#notification' asJQuery.",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "class:", "div", "with:", "button", "type:", "at:put:", "messageText"],
referencedClasses: []
}),
globals.MRWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._context())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},globals.MRWidget)})},
args: [],
source: "root\x0a\x09^ self context root",
messageSends: ["root", "context"],
referencedClasses: []
}),
globals.MRWidget);



smalltalk.addClass('MRFrameWidget', globals.MRWidget, ['wrapper'], 'Marina-Widgets');
globals.MRFrameWidget.comment="I am an abstract widget building a frame.\x0a\x0aI know how to remove and render myself on a page. Only one instance should rendered at a time.";
smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._remove();
$1=self._render();
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},globals.MRFrameWidget)})},
args: [],
source: "refresh\x0a\x09self remove; render",
messageSends: ["remove", "render"],
referencedClasses: []
}),
globals.MRFrameWidget);

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
var $1;
$1=_st($MRHeaderWidget())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"headerWidget",{},globals.MRAdminFrameWidget)})},
args: [],
source: "headerWidget\x0a\x09^ MRHeaderWidget new",
messageSends: ["new"],
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
_st(self._structureListWidget())._render();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRAdminFrameWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div\x0a\x09\x09class: 'admin';\x0a\x09\x09with: self headerWidget;\x0a\x09\x09with: self mainWidget.\x0a\x09self structureListWidget render",
messageSends: ["class:", "div", "with:", "headerWidget", "mainWidget", "render", "structureListWidget"],
referencedClasses: []
}),
globals.MRAdminFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "structureListWidget",
protocol: 'accessing',
fn: function (){
var self=this;
function $MRStructureListWidget(){return globals.MRStructureListWidget||(typeof MRStructureListWidget=="undefined"?nil:MRStructureListWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MRStructureListWidget())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"structureListWidget",{},globals.MRAdminFrameWidget)})},
args: [],
source: "structureListWidget\x0a\x09^ MRStructureListWidget new",
messageSends: ["new"],
referencedClasses: ["MRStructureListWidget"]
}),
globals.MRAdminFrameWidget);



smalltalk.addClass('MRLoginWidget', globals.MRFrameWidget, ['errorDiv', 'onLoginBlock', 'presenter'], 'Marina-Widgets');
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
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "presenter:",
protocol: 'accessing',
fn: function (aPresenter){
var self=this;
self["@presenter"]=aPresenter;
return self},
args: ["aPresenter"],
source: "presenter: aPresenter\x0a\x09presenter := aPresenter",
messageSends: [],
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
var $1,$3,$5,$7,$8,$6,$4,$2;
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
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
self._renderHeaderOn_(html);
return self._renderFormOn_(html);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
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
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-12 col-md-4 col-md-offset-4';\x0a\x09\x09\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'login'; \x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09self renderFormOn: html ] ] ] ]",
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderFormOn:"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._span();
$ctx2.sendIdx["span"]=1;
_st($1)._class_("logo");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("glyphicon glyphicon-tint");
return _st(html)._with_(" Marina");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.MRLoginWidget)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html h1 with: [\x0a\x09\x09html span \x0a\x09\x09\x09class: 'logo';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span class: 'glyphicon glyphicon-tint'.\x0a\x09\x09\x09\x09html with: ' Marina' ] ]",
messageSends: ["with:", "h1", "class:", "span"],
referencedClasses: []
}),
globals.MRLoginWidget);



smalltalk.addClass('MRMainFrameWidget', globals.MRFrameWidget, [], 'Marina-Widgets');
globals.MRMainFrameWidget.comment="I render myself in the '#main' div of the admin app, removing previously rendered widgets in this area.";
smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "icon\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "black";
},
args: [],
source: "iconColor\x0a\x09^ 'black'",
messageSends: [],
referencedClasses: []
}),
globals.MRMainFrameWidget);

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
var $1,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("main_frame");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderTitleOn_(html);
_st(_st(html)._div())._id_("notification");
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRMainFrameWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'main_frame'; \x0a\x09\x09with: [\x0a\x09\x09\x09self renderTitleOn: html.\x0a\x09\x09\x09html div id: 'notification'.\x0a\x09\x09\x09self renderContentOn: html ]",
messageSends: ["class:", "div", "with:", "renderTitleOn:", "id:", "renderContentOn:"],
referencedClasses: []
}),
globals.MRMainFrameWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h2())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._span();
_st($1)._class_(self._icon());
$2=_st($1)._style_("color: ".__comma(self._iconColor()));
$2;
return _st(html)._with_(self._title());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTitleOn:",{html:html},globals.MRMainFrameWidget)})},
args: ["html"],
source: "renderTitleOn: html\x0a\x09html h2 with: [\x0a\x09\x09html span \x0a\x09\x09\x09class: self icon;\x0a\x09\x09\x09style: 'color: ', self iconColor.\x0a\x09\x09html with: self title ]",
messageSends: ["with:", "h2", "class:", "span", "icon", "style:", ",", "iconColor", "title"],
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



smalltalk.addClass('MRPageEditorWidget', globals.MRMainFrameWidget, ['page', 'templates'], 'Marina-Widgets');
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
var form,titleInput,templateInput,contentsInput,publishedInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$10,$9,$8,$11,$12,$13,$15,$14,$16,$17,$18,$19,$20,$21;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
_st($1)._placeholder_("Title");
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
$6=_st(form)._selectInput();
_st($6)._options_(self._templateTitles());
$7=$6;
$10=self._page();
$ctx1.sendIdx["page"]=2;
$9=_st($10)._template();
$8=_st($9)._title();
_st($7)._selectedOption_($8);
_st($6)._label_("Template");
$ctx1.sendIdx["label:"]=2;
$11=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=2;
templateInput=$11;
$12=_st(form)._textareaInput();
_st($12)._label_("Contents");
$ctx1.sendIdx["label:"]=3;
$13=$12;
$15=self._page();
$ctx1.sendIdx["page"]=3;
$14=_st($15)._contents();
_st($13)._defaultValue_($14);
$16=_st($12)._yourself();
$ctx1.sendIdx["yourself"]=3;
contentsInput=$16;
$17=_st(form)._checkboxInput();
_st($17)._label_("Published");
_st($17)._checked_(_st(self._page())._published());
$18=_st($17)._yourself();
publishedInput=$18;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$19=_st(titleInput)._value();
$ctx2.sendIdx["value"]=1;
$20=_st(templateInput)._value();
$ctx2.sendIdx["value"]=2;
$21=_st(contentsInput)._value();
$ctx2.sendIdx["value"]=3;
return self._updatePageWithTitle_template_contents_published_($19,$20,$21,_st(publishedInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showStructureListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,titleInput:titleInput,templateInput:templateInput,contentsInput:contentsInput,publishedInput:publishedInput},globals.MRPageEditorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form titleInput templateInput contentsInput publishedInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09defaultValue: self page title;\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x0a\x09templateInput := form selectInput\x0a\x09\x09options: self templateTitles;\x0a\x09\x09selectedOption: self page template title;\x0a\x09\x09label: 'Template';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09contentsInput := form textareaInput\x0a\x09\x09label: 'Contents';\x0a\x09\x09defaultValue: self page contents;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09publishedInput := form checkboxInput\x0a\x09\x09label: 'Published';\x0a\x09\x09checked: self page published;\x0a\x09\x09yourself.\x0a\x0a\x09form submitAction: [\x0a\x09\x09self \x0a\x09\x09\x09updatePageWithTitle: titleInput value\x0a\x09\x09\x09template: templateInput value\x0a\x09\x09\x09contents: contentsInput value\x0a\x09\x09\x09published: publishedInput value ].\x0a\x0a\x09form cancelAction: [ self showStructureListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "defaultValue:", "title", "page", "label:", "yourself", "options:", "selectInput", "templateTitles", "selectedOption:", "template", "textareaInput", "contents", "checkboxInput", "checked:", "published", "submitAction:", "updatePageWithTitle:template:contents:published:", "value", "cancelAction:", "showStructureListWidget", "with:"],
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
$1=_st(self._templates())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._title();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"templateTitles",{},globals.MRPageEditorWidget)})},
args: [],
source: "templateTitles\x0a\x09^ self templates collect: [ :each | each title ]",
messageSends: ["collect:", "templates", "title"],
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
selector: "updatePageWithTitle:template:contents:published:",
protocol: 'actions',
fn: function (aTitle,aTemplateTitle,contents,aBoolean){
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
_st($1)._updateTitle_template_contents_published_(aTitle,template,contents,aBoolean);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showStructureListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updatePageWithTitle:template:contents:published:",{aTitle:aTitle,aTemplateTitle:aTemplateTitle,contents:contents,aBoolean:aBoolean,template:template},globals.MRPageEditorWidget)})},
args: ["aTitle", "aTemplateTitle", "contents", "aBoolean"],
source: "updatePageWithTitle: aTitle template: aTemplateTitle contents: contents published: aBoolean\x0a\x09| template |\x0a\x09\x0a\x09template := self templates detect: [ :each | \x0a\x09\x09each title = aTemplateTitle ].\x0a\x09\x09\x0a\x09[\x0a\x09\x09self page\x0a\x09\x09\x09updateTitle: aTitle\x0a\x09\x09\x09template: template\x0a\x09\x09\x09contents: contents\x0a\x09\x09\x09published: aBoolean;\x0a\x09\x09\x09then: [\x0a\x09\x09\x09\x09self showStructureListWidget ]\x0a\x09] onPromiseFailureDo: [ :ex | \x0a\x09\x09self notifyError: ex ]",
messageSends: ["detect:", "templates", "=", "title", "onPromiseFailureDo:", "updateTitle:template:contents:published:", "page", "then:", "showStructureListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRPageEditorWidget);



smalltalk.addClass('MRStructureCreatorWidget', globals.MRMainFrameWidget, ['directory', 'structureTitle', 'structureType'], 'Marina-Widgets');
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



smalltalk.addClass('MRStructureListWidget', globals.MRMainFrameWidget, ['directory', 'titleSpan', 'titleEditorSpan'], 'Marina-Widgets');
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
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$14,$15,$13;
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
_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(aStructure)._isPage();
if(smalltalk.assert($6)){
$7=_st(aStructure)._published();
if(smalltalk.assert($7)){
$8=_st(html)._span();
$ctx3.sendIdx["span"]=1;
_st($8)._class_("label label-success");
$ctx3.sendIdx["class:"]=1;
$9=_st($8)._with_("Published");
$ctx3.sendIdx["with:"]=5;
return $9;
} else {
$10=_st(html)._span();
_st($10)._class_("label label-warning");
$ctx3.sendIdx["class:"]=2;
$11=_st($10)._with_("draft");
$ctx3.sendIdx["with:"]=6;
return $11;
};
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$ctx2.sendIdx["with:"]=4;
$12=_st(html)._td();
_st($12)._class_("align-right");
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$14=_st(html)._a();
_st($14)._with_("Remove");
$15=_st($14)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeStructure_(aStructure);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,12)})}));
return $15;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,11)})}));
$ctx2.sendIdx["with:"]=7;
return $13;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderStructureRow:on:",{aStructure:aStructure,html:html},globals.MRStructureListWidget)})},
args: ["aStructure", "html"],
source: "renderStructureRow: aStructure on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: [\x0a\x09\x09\x09aStructure canBeEdited \x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09self renderStructureTitle: aStructure on: html ];\x0a\x09\x09\x09\x09\x09\x09onClick: [ self openStructure: aStructure ] ]\x0a\x09\x09\x09\x09ifFalse: [ self renderStructureTitle: aStructure on: html ] ].\x0a\x09\x09html td with: [\x0a\x09\x09\x09aStructure isPage ifTrue: [\x0a\x09\x09\x09\x09aStructure published \x0a\x09\x09\x09\x09\x09ifTrue: [ html span \x0a\x09\x09\x09\x09\x09\x09class: 'label label-success';\x0a\x09\x09\x09\x09\x09\x09with: 'Published' ]\x0a\x09\x09\x09\x09\x09ifFalse: [ html span\x0a\x09\x09\x09\x09\x09\x09class: 'label label-warning';\x0a\x09\x09\x09\x09\x09\x09with: 'draft' ] ] ].\x0a\x09\x09html td class: 'align-right'; with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Remove';\x0a\x09\x09\x09\x09onClick: [ self removeStructure: aStructure ] ] ]",
messageSends: ["with:", "tr", "td", "ifTrue:ifFalse:", "canBeEdited", "a", "renderStructureTitle:on:", "onClick:", "openStructure:", "ifTrue:", "isPage", "published", "class:", "span", "removeStructure:"],
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
var $1,$2;
$1=_st(html)._table();
_st($1)._class_("table table-striped");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return self._renderStructureRow_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderStructures:on:",{aCollection:aCollection,html:html},globals.MRStructureListWidget)})},
args: ["aCollection", "html"],
source: "renderStructures: aCollection on: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09aCollection do: [ :each |\x0a\x09\x09\x09\x09\x09self renderStructureRow: each on: html ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "do:", "renderStructureRow:on:"],
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



smalltalk.addClass('MRTemplateCreatorWidget', globals.MRMainFrameWidget, ['templates'], 'Marina-Widgets');
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



smalltalk.addClass('MRTemplateEditorWidget', globals.MRMainFrameWidget, ['template'], 'Marina-Widgets');
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
var form,titleInput,contentsInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$8;
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
_st($6)._defaultValue_(_st(self._template())._contents());
$7=_st($6)._yourself();
contentsInput=$7;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
$8=_st(titleInput)._value();
$ctx2.sendIdx["value"]=1;
return self._updateTemplateWithTitle_contents_($8,_st(contentsInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showTemplateListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,titleInput:titleInput,contentsInput:contentsInput},globals.MRTemplateEditorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form titleInput contentsInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09titleInput := form textInput\x0a\x09\x09placeholder: 'Title';\x0a\x09\x09defaultValue: self template title;\x0a\x09\x09label: 'Title';\x0a\x09\x09yourself.\x0a\x09\x0a\x09contentsInput := form textareaInput\x0a\x09\x09label: 'Contents';\x0a\x09\x09defaultValue: self template contents;\x0a\x09\x09yourself.\x0a\x0a\x09form submitAction: [\x0a\x09\x09self \x0a\x09\x09\x09updateTemplateWithTitle: titleInput value\x0a\x09\x09\x09contents: contentsInput value ].\x0a\x0a\x09form cancelAction: [ self showTemplateListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "defaultValue:", "title", "template", "label:", "yourself", "textareaInput", "contents", "submitAction:", "updateTemplateWithTitle:contents:", "value", "cancelAction:", "showTemplateListWidget", "with:"],
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
selector: "updateTemplateWithTitle:contents:",
protocol: 'actions',
fn: function (aTitle,contents){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._template();
_st($1)._updateTitle_contents_(aTitle,contents);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showTemplateListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateTemplateWithTitle:contents:",{aTitle:aTitle,contents:contents},globals.MRTemplateEditorWidget)})},
args: ["aTitle", "contents"],
source: "updateTemplateWithTitle: aTitle contents: contents\x0a\x09[\x0a\x09\x09self template\x0a\x09\x09\x09updateTitle: aTitle\x0a\x09\x09\x09contents: contents;\x0a\x09\x09\x09then: [\x0a\x09\x09\x09\x09self showTemplateListWidget ]\x0a\x09] onPromiseFailureDo: [ :ex | \x0a\x09\x09self notifyError: ex ]\x09\x09",
messageSends: ["onPromiseFailureDo:", "updateTitle:contents:", "template", "then:", "showTemplateListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRTemplateEditorWidget);



smalltalk.addClass('MRTemplateListWidget', globals.MRMainFrameWidget, [], 'Marina-Widgets');
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
var $1,$2,$3,$4,$6,$7,$5;
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
_st(_st(html)._span())._class_(_st(aTemplate)._icon());
$ctx4.sendIdx["class:"]=1;
return _st(html)._with_(_st(aTemplate)._title());
$ctx4.sendIdx["with:"]=4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._editTemplate_(aTemplate);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=1;
return $3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4=_st(html)._td();
_st($4)._class_("align-right");
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(html)._a();
_st($6)._with_("Remove");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeTemplate_(aTemplate);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=5;
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTemplateRow:on:",{aTemplate:aTemplate,html:html},globals.MRTemplateListWidget)})},
args: ["aTemplate", "html"],
source: "renderTemplateRow: aTemplate on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span class: aTemplate icon.\x0a\x09\x09\x09\x09\x09html with: aTemplate title ];\x0a\x09\x09\x09\x09onClick: [ self editTemplate: aTemplate ] ].\x0a\x09\x09html td class: 'align-right'; with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Remove';\x0a\x09\x09\x09\x09onClick: [ self removeTemplate: aTemplate ] ] ]",
messageSends: ["with:", "tr", "td", "a", "class:", "span", "icon", "title", "onClick:", "editTemplate:", "removeTemplate:"],
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
var $1,$2;
$1=_st(html)._table();
_st($1)._class_("table table-striped");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aCollection)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return self._renderTemplateRow_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTemplates:on:",{aCollection:aCollection,html:html},globals.MRTemplateListWidget)})},
args: ["aCollection", "html"],
source: "renderTemplates: aCollection on: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09aCollection do: [ :each |\x0a\x09\x09\x09\x09\x09self renderTemplateRow: each on: html ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "do:", "renderTemplateRow:on:"],
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



smalltalk.addClass('MRUploadWidget', globals.MRMainFrameWidget, ['fileInput', 'directory'], 'Marina-Widgets');
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



smalltalk.addClass('MRHeaderWidget', globals.MRWidget, [], 'Marina-Widgets');
globals.MRHeaderWidget.comment="I display the main header of the admin page.";
smalltalk.addMethod(
smalltalk.method({
selector: "editUserSettings",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "editUserSettings",
messageSends: [],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
protocol: 'actions',
fn: function (){
var self=this;
function $MRLoginDispatcher(){return globals.MRLoginDispatcher||(typeof MRLoginDispatcher=="undefined"?nil:MRLoginDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._adminPresenter())._logout())._then_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($MRLoginDispatcher())._start();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"logout",{},globals.MRHeaderWidget)})},
args: [],
source: "logout\x0a\x09self adminPresenter logout then: [ \x0a\x09\x09MRLoginDispatcher start ]",
messageSends: ["then:", "logout", "adminPresenter", "start"],
referencedClasses: ["MRLoginDispatcher"]
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
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
_st($3)._class_("container-fluid");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderToggleOn_(html);
return self._renderMenuOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html div\x0a\x09\x09class: 'navbar navbar-default';\x0a\x09\x09at: 'role' put: 'navigation';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'container-fluid'; \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderToggleOn: html.\x0a\x09\x09\x09\x09\x09self renderMenuOn: html ] ]",
messageSends: ["class:", "div", "at:put:", "with:", "renderToggleOn:", "renderMenuOn:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLeftItemsOn:",
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
return self._showStructureListWidget();
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
return self._showTemplateListWidget();
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
return self._showUserListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderLeftItemsOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderLeftItemsOn: html\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Pages';\x0a\x09\x09\x09onClick: [ self showStructureListWidget ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Templates';\x0a\x09\x09\x09onClick: [ self showTemplateListWidget ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'Users';\x0a\x09\x09\x09onClick: [ self showUserListWidget ] ]",
messageSends: ["with:", "li", "a", "onClick:", "showStructureListWidget", "showTemplateListWidget", "showUserListWidget"],
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
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("collapse navbar-collapse");
$ctx1.sendIdx["class:"]=1;
_st($1)._id_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._ul();
$ctx2.sendIdx["ul"]=1;
_st($3)._class_("nav navbar-nav");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderLeftItemsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._ul();
_st($5)._class_("nav navbar-nav navbar-right");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderRightItemsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderMenuOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderMenuOn: html\x0a\x09html div \x0a\x09\x09class: 'collapse navbar-collapse';\x0a\x09\x09id: 'menu';\x0a\x09\x09with: [\x0a\x09\x09\x09html ul \x0a\x09\x09\x09\x09class: 'nav navbar-nav';\x0a\x09\x09\x09\x09with: [ self renderLeftItemsOn: html ].\x0a\x09\x09\x09html ul\x0a\x09\x09\x09\x09class: 'nav navbar-nav navbar-right';\x0a\x09\x09\x09\x09with: [ self renderRightItemsOn: html ] ]",
messageSends: ["class:", "div", "id:", "with:", "ul", "renderLeftItemsOn:", "renderRightItemsOn:"],
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
_st($5)._class_("col-md-8 col-md-offset-2 col-xs-12");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderHeaderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'col-md-8 col-md-offset-2 col-xs-12';\x0a\x09\x09\x09\x09\x09\x09with: [ self renderHeaderOn: html ] ] ]",
messageSends: ["class:", "div", "with:", "renderHeaderOn:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderRightItemsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(html)._li();
$ctx1.sendIdx["li"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("glyphicon glyphicon-user");
return _st(html)._with_(" ".__comma(_st(_st(self._adminPresenter())._user())._fullName()));
$ctx3.sendIdx["with:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$3=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._editUserSettings();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=1;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
_st($4)._with_("logout");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._logout();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["with:"]=4;
return self}, function($ctx1) {$ctx1.fill(self,"renderRightItemsOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderRightItemsOn: html\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span class: 'glyphicon glyphicon-user'.\x0a\x09\x09\x09\x09html with: ' ', self adminPresenter user fullName ];\x0a\x09\x09\x09onClick: [ self editUserSettings ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'logout';\x0a\x09\x09\x09onClick: [ self logout ] ]",
messageSends: ["with:", "li", "a", "class:", "span", ",", "fullName", "user", "adminPresenter", "onClick:", "editUserSettings", "logout"],
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
var $1,$3,$5,$6,$7,$4,$8,$9,$2;
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
$7=_st(html)._span();
$ctx4.sendIdx["span"]=2;
return _st($7)._class_("icon-bar");
$ctx4.sendIdx["class:"]=4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$8=_st(html)._a();
_st($8)._class_("navbar-brand");
$ctx2.sendIdx["class:"]=5;
_st($8)._href_("#");
$9=_st($8)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_("glyphicon glyphicon-tint");
return _st(html)._with_(" Marina");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=4;
return $9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderToggleOn:",{html:html},globals.MRHeaderWidget)})},
args: ["html"],
source: "renderToggleOn: html\x0a\x09html div\x0a\x09\x09class: 'navbar-header';\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'navbar-toggle';\x0a\x09\x09\x09\x09at: 'data-toggle' put: 'collapse';\x0a\x09\x09\x09\x09at: 'data-target' put: 'menu';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span \x0a\x09\x09\x09\x09\x09\x09class: 'sr-only';\x0a\x09\x09\x09\x09\x09\x09with: 'Toggle Navigation'.\x0a\x09\x09\x09\x09\x093 timesRepeat: [ \x0a\x09\x09\x09\x09\x09\x09html span class: 'icon-bar' ] ].\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09class: 'navbar-brand';\x0a\x09\x09\x09\x09href: '#'; \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html span class: 'glyphicon glyphicon-tint'.\x0a\x09\x09\x09\x09\x09html with: ' Marina' ] ]",
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "span", "timesRepeat:", "a", "href:"],
referencedClasses: []
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showStructureListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRStructureListWidget(){return globals.MRStructureListWidget||(typeof MRStructureListWidget=="undefined"?nil:MRStructureListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRStructureListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showStructureListWidget",{},globals.MRHeaderWidget)})},
args: [],
source: "showStructureListWidget\x0a\x09MRStructureListWidget new render",
messageSends: ["render", "new"],
referencedClasses: ["MRStructureListWidget"]
}),
globals.MRHeaderWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showTemplateListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRTemplateListWidget(){return globals.MRTemplateListWidget||(typeof MRTemplateListWidget=="undefined"?nil:MRTemplateListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRTemplateListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showTemplateListWidget",{},globals.MRHeaderWidget)})},
args: [],
source: "showTemplateListWidget\x0a\x09MRTemplateListWidget new render",
messageSends: ["render", "new"],
referencedClasses: ["MRTemplateListWidget"]
}),
globals.MRHeaderWidget);



smalltalk.addClass('MRMainWidget', globals.MRWidget, ['contentsDiv'], 'Marina-Widgets');
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
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09contentsDiv := html div \x0a\x09\x09\x09\x09\x09\x09class: 'main col-md-8 col-md-offset-2 col-xs-12';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html div id: self mainAreaId ] ] ]",
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
