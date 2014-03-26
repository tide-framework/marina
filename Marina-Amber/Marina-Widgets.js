define("marina/Marina-Widgets", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets');
smalltalk.packages["Marina-Widgets"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRLoginWidget', globals.Widget, ['root'], 'Marina-Widgets');
smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.MRLoginWidget)})},
args: [],
source: "render\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("Login");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MRLoginWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html h1: 'Login'",
messageSends: ["h1:"],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
globals.MRLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTDProxy){
var self=this;
self["@root"]=aTDProxy;
return self},
args: ["aTDProxy"],
source: "root: aTDProxy\x0a\x09root := aTDProxy",
messageSends: [],
referencedClasses: []
}),
globals.MRLoginWidget);



smalltalk.addClass('MRRootDispatcher', globals.Object, ['root'], 'Marina-Widgets');
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
anUser;
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchWithUser:",{anUser:anUser},globals.MRRootDispatcher)})},
args: ["anUser"],
source: "dispatchWithUser: anUser\x0a\x09anUser ifNil: [ self login ]",
messageSends: ["ifNil:", "login"],
referencedClasses: []
}),
globals.MRRootDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "login",
protocol: 'actions',
fn: function (){
var self=this;
function $MRLoginWidget(){return globals.MRLoginWidget||(typeof MRLoginWidget=="undefined"?nil:MRLoginWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MRLoginWidget())._new();
_st($1)._root_(self._root());
$2=_st($1)._render();
return self}, function($ctx1) {$ctx1.fill(self,"login",{},globals.MRRootDispatcher)})},
args: [],
source: "login\x0a\x09MRLoginWidget new\x0a\x09\x09root: self root;\x0a\x09\x09render",
messageSends: ["root:", "new", "root", "render"],
referencedClasses: ["MRLoginWidget"]
}),
globals.MRRootDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;
},
args: [],
source: "root\x0a\x09^ root",
messageSends: [],
referencedClasses: []
}),
globals.MRRootDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
protocol: 'accessing',
fn: function (aTDProxy){
var self=this;
self["@root"]=aTDProxy;
return self},
args: ["aTDProxy"],
source: "root: aTDProxy\x0a\x09root := aTDProxy",
messageSends: [],
referencedClasses: []
}),
globals.MRRootDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._root();
$ctx1.sendIdx["root"]=1;
$1=_st($2)._connect();
_st($1)._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._dispatchWithUser_(_st(self._root())._user());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MRRootDispatcher)})},
args: [],
source: "start\x0a\x09self root connect then: [\x0a\x09\x09self dispatchWithUser: self root user ]",
messageSends: ["then:", "connect", "root", "dispatchWithUser:", "user"],
referencedClasses: []
}),
globals.MRRootDispatcher);


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
_st($1)._root_(_st($TDProxy())._on_("/_root"));
$2=_st($1)._start();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MRRootDispatcher.klass)})},
args: [],
source: "initialize\x0a\x09self new\x0a\x09\x09root: (TDProxy on: '/_root');\x0a\x09\x09start",
messageSends: ["root:", "new", "on:", "start"],
referencedClasses: ["TDProxy"]
}),
globals.MRRootDispatcher.klass);

});
