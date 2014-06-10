define("marina/Marina-Widgets-Login", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "marina/Marina-Widgets-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets-Login');
smalltalk.packages["Marina-Widgets-Login"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRAbstractLoginWidget', globals.MRFrameWidget, ['errorDiv', 'onLoginBlock', 'presenter'], 'Marina-Widgets-Login');
smalltalk.addMethod(
smalltalk.method({
selector: "onLogin:",
protocol: 'actions',
fn: function (anUser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $receiver;
if(($receiver = anUser) == null || $receiver.isNil){
anUser;
} else {
self._remove();
_st(self._onLoginBlock())._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"onLogin:",{anUser:anUser},globals.MRAbstractLoginWidget)})},
args: ["anUser"],
source: "onLogin: anUser\x0a\x09anUser ifNotNil: [\x0a\x09\x09self remove.\x0a\x09\x09self onLoginBlock value ]",
messageSends: ["ifNotNil:", "remove", "value", "onLoginBlock"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "onLoginBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onLoginBlock"];
if(($receiver = $2) == null || $receiver.isNil){
$1=(function(){
});
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onLoginBlock",{},globals.MRAbstractLoginWidget)})},
args: [],
source: "onLoginBlock\x0a\x09^ onLoginBlock ifNil: [ [] ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

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
globals.MRAbstractLoginWidget);

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
return self}, function($ctx1) {$ctx1.fill(self,"onLoginError:",{anError:anError},globals.MRAbstractLoginWidget)})},
args: ["anError"],
source: "onLoginError: anError\x0a\x09errorDiv asJQuery empty.\x0a\x09[ :html | \x0a\x09\x09html p \x0a\x09\x09\x09class: 'bg-danger';\x0a\x09\x09\x09with: anError messageText ] appendToJQuery: errorDiv asJQuery",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "class:", "p", "with:", "messageText"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

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
globals.MRAbstractLoginWidget);

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
globals.MRAbstractLoginWidget);

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
self._renderErrorOn_(html);
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
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRAbstractLoginWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div \x0a\x09\x09class: 'container-fluid';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'row';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'col-xs-12 col-md-4 col-md-offset-4';\x0a\x09\x09\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'login'; \x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderHeaderOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderErrorOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderFormOn: html ] ] ] ]",
messageSends: ["class:", "div", "with:", "renderHeaderOn:", "renderErrorOn:", "renderFormOn:"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderErrorOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@errorDiv"]=_st(_st(html)._div())._class_("login-errors");
return self}, function($ctx1) {$ctx1.fill(self,"renderErrorOn:",{html:html},globals.MRAbstractLoginWidget)})},
args: ["html"],
source: "renderErrorOn: html\x0a\x09errorDiv := html div class: 'login-errors'.",
messageSends: ["class:", "div"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html},globals.MRAbstractLoginWidget)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);

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
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.MRAbstractLoginWidget)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html h1 with: [\x0a\x09\x09html span \x0a\x09\x09\x09class: 'logo';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span class: 'glyphicon glyphicon-tint'.\x0a\x09\x09\x09\x09html with: ' Marina' ] ]",
messageSends: ["with:", "h1", "class:", "span"],
referencedClasses: []
}),
globals.MRAbstractLoginWidget);



smalltalk.addClass('MRMozillaPersonaLoginWidget', globals.MRAbstractLoginWidget, [], 'Marina-Widgets-Login');
smalltalk.addMethod(
smalltalk.method({
selector: "login:",
protocol: 'actions',
fn: function (assertion){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._presenter();
$ctx2.sendIdx["presenter"]=1;
_st($1)._validateMozillaPersonaAssertion_(assertion);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._onLogin_(_st(self._presenter())._user());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(failure){
return smalltalk.withContext(function($ctx2) {
return self._onLoginError_(failure);
}, function($ctx2) {$ctx2.fillBlock({failure:failure},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"login:",{assertion:assertion},globals.MRMozillaPersonaLoginWidget)})},
args: ["assertion"],
source: "login: assertion\x0a\x09[ self presenter\x0a\x09\x09validateMozillaPersonaAssertion: assertion;\x0a\x09\x09then: [ self onLogin: self presenter user ]\x0a\x09] onPromiseFailureDo: [ :failure | \x0a\x09\x09self onLoginError: failure ]",
messageSends: ["onPromiseFailureDo:", "validateMozillaPersonaAssertion:", "presenter", "then:", "onLogin:", "user", "onLoginError:"],
referencedClasses: []
}),
globals.MRMozillaPersonaLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "loginWithPersona",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(navigator)._id())._request();
return self}, function($ctx1) {$ctx1.fill(self,"loginWithPersona",{},globals.MRMozillaPersonaLoginWidget)})},
args: [],
source: "loginWithPersona\x0a\x09navigator id request",
messageSends: ["request", "id"],
referencedClasses: []
}),
globals.MRMozillaPersonaLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "logout",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "logout\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.MRMozillaPersonaLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
self._setupPersona();
_st(_st(html)._form())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("form-group");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
_st($3)._class_("btn btn-default persona_login");
_st($3)._type_("submit");
$4=_st($3)._onClick_((function(e){
return smalltalk.withContext(function($ctx4) {
_st(e)._preventDefault();
return self._loginWithPersona();
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html},globals.MRMozillaPersonaLoginWidget)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09self setupPersona.\x0a\x09html form with: [\x0a\x09\x09html div \x0a\x09\x09\x09class: 'form-group';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09class: 'btn btn-default persona_login';\x0a\x09\x09\x09\x09\x09type: 'submit';\x0a\x09\x09\x09\x09\x09onClick: [ :e | \x0a\x09\x09\x09\x09\x09\x09e preventDefault.\x0a\x09\x09\x09\x09\x09\x09self loginWithPersona ] ] ]",
messageSends: ["setupPersona", "with:", "form", "class:", "div", "button", "type:", "onClick:", "preventDefault", "loginWithPersona"],
referencedClasses: []
}),
globals.MRMozillaPersonaLoginWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupPersona",
protocol: 'setup',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(navigator)._id();
$ctx1.sendIdx["id"]=1;
_st($1)._logout();
$ctx1.sendIdx["logout"]=1;
_st(_st(navigator)._id())._watch_(globals.HashedCollection._newFromPairs_(["loggedInUser",false,"onlogin",(function(assertion){
return smalltalk.withContext(function($ctx2) {
return self._login_(assertion);
}, function($ctx2) {$ctx2.fillBlock({assertion:assertion},$ctx1,1)})}),"onlogout",(function(){
return smalltalk.withContext(function($ctx2) {
return self._logout();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"setupPersona",{},globals.MRMozillaPersonaLoginWidget)})},
args: [],
source: "setupPersona\x0a\x09navigator id logout.\x0a\x09navigator id watch: #{\x0a\x09\x09'loggedInUser' -> false.\x0a\x09\x09'onlogin' -> [ :assertion | self login: assertion ].\x0a\x09\x09'onlogout' -> [ self logout ]\x0a\x09}",
messageSends: ["logout", "id", "watch:", "login:"],
referencedClasses: []
}),
globals.MRMozillaPersonaLoginWidget);


});
