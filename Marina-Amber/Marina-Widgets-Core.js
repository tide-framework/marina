define("marina/Marina-Widgets-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Marina-Widgets-Core');
smalltalk.packages["Marina-Widgets-Core"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRContext', globals.Object, ['adminPresenter'], 'Marina-Widgets-Core');
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


smalltalk.addClass('MRLoginDispatcher', globals.Object, ['presenter'], 'Marina-Widgets-Core');
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
selector: "informSessionError",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_("Your session has expired, you will be redirected.");
return self}, function($ctx1) {$ctx1.fill(self,"informSessionError",{},globals.MRLoginDispatcher)})},
args: [],
source: "informSessionError\x0a\x09window alert: 'Your session has expired, you will be redirected.'",
messageSends: ["alert:"],
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
function $MRMozillaPersonaLoginWidget(){return globals.MRMozillaPersonaLoginWidget||(typeof MRMozillaPersonaLoginWidget=="undefined"?nil:MRMozillaPersonaLoginWidget)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MRMozillaPersonaLoginWidget())._new();
_st($2)._presenter_(self._presenter());
$3=_st($2)._onLoginBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderAdminWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"loginWidget",{},globals.MRLoginDispatcher)})},
args: [],
source: "loginWidget\x0a\x09^ MRMozillaPersonaLoginWidget new\x0a\x09\x09presenter: self presenter;\x0a\x09\x09onLoginBlock: [ self renderAdminWidget ]",
messageSends: ["presenter:", "new", "presenter", "onLoginBlock:", "renderAdminWidget"],
referencedClasses: ["MRMozillaPersonaLoginWidget"]
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
function $TDSessionErrorHandler(){return globals.TDSessionErrorHandler||(typeof TDSessionErrorHandler=="undefined"?nil:TDSessionErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
_st($TDSessionErrorHandler())._onSessionError_((function(){
return smalltalk.withContext(function($ctx2) {
self._informSessionError();
return _st(_st(window)._location())._reload();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st("body"._asJQuery())._empty();
$2=self._presenter();
$ctx1.sendIdx["presenter"]=1;
$1=_st($2)._connect();
_st($1)._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._dispatchWithUser_(_st(self._presenter())._user());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MRLoginDispatcher)})},
args: [],
source: "start\x0a\x09TDSessionErrorHandler onSessionError: [\x0a\x09\x09self informSessionError.\x0a\x09\x09window location reload ].\x0a\x09'body' asJQuery empty.\x0a\x09self presenter connect then: [\x0a\x09\x09self dispatchWithUser: self presenter user ]",
messageSends: ["onSessionError:", "informSessionError", "reload", "location", "empty", "asJQuery", "then:", "connect", "presenter", "dispatchWithUser:", "user"],
referencedClasses: ["TDSessionErrorHandler"]
}),
globals.MRLoginDispatcher);


smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'initialization',
fn: function (){
var self=this;
function $TDClientProxy(){return globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._presenter_(_st($TDClientProxy())._on_("/marina"));
$2=_st($1)._start();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MRLoginDispatcher.klass)})},
args: [],
source: "start\x0a\x09self new\x0a\x09\x09presenter: (TDClientProxy on: '/marina');\x0a\x09\x09start",
messageSends: ["presenter:", "new", "on:", "start"],
referencedClasses: ["TDClientProxy"]
}),
globals.MRLoginDispatcher.klass);


smalltalk.addClass('MRWidget', globals.Widget, [], 'Marina-Widgets-Core');
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



smalltalk.addClass('MRFrameWidget', globals.MRWidget, ['wrapper'], 'Marina-Widgets-Core');
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



smalltalk.addClass('MRAdminFrameWidget', globals.MRFrameWidget, [], 'Marina-Widgets-Core');
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



smalltalk.addClass('MRMainFrameWidget', globals.MRFrameWidget, [], 'Marina-Widgets-Core');
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



smalltalk.addClass('MRHeaderWidget', globals.MRWidget, [], 'Marina-Widgets-Core');
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
_st(_st(navigator)._id())._logout();
$ctx1.sendIdx["logout"]=1;
_st(_st(self._adminPresenter())._logout())._then_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($MRLoginDispatcher())._start();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"logout",{},globals.MRHeaderWidget)})},
args: [],
source: "logout\x0a\x09navigator id logout.\x0a\x09self adminPresenter logout then: [ \x0a\x09\x09MRLoginDispatcher start ]",
messageSends: ["logout", "id", "then:", "adminPresenter", "start"],
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
return _st(html)._with_(" ".__comma(_st(_st(self._adminPresenter())._user())._email()));
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
source: "renderRightItemsOn: html\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html span class: 'glyphicon glyphicon-user'.\x0a\x09\x09\x09\x09html with: ' ', self adminPresenter user email ];\x0a\x09\x09\x09onClick: [ self editUserSettings ] ].\x0a\x09html li with: [ \x0a\x09\x09html a \x0a\x09\x09\x09with: 'logout';\x0a\x09\x09\x09onClick: [ self logout ] ]",
messageSends: ["with:", "li", "a", "class:", "span", ",", "email", "user", "adminPresenter", "onClick:", "editUserSettings", "logout"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "showUserListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRUserListWidget(){return globals.MRUserListWidget||(typeof MRUserListWidget=="undefined"?nil:MRUserListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRUserListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showUserListWidget",{},globals.MRHeaderWidget)})},
args: [],
source: "showUserListWidget\x0a\x09MRUserListWidget new render",
messageSends: ["render", "new"],
referencedClasses: ["MRUserListWidget"]
}),
globals.MRHeaderWidget);



smalltalk.addClass('MRMainWidget', globals.MRWidget, ['contentsDiv'], 'Marina-Widgets-Core');
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
