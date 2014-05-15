define("marina/Marina-Widgets-Users", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "marina/Marina-Widgets-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Marina-Widgets-Users');
smalltalk.packages["Marina-Widgets-Users"].transport = {"type":"amd","amdNamespace":"marina"};

smalltalk.addClass('MRUserCreatorWidget', globals.MRMainFrameWidget, [], 'Marina-Widgets-Users');
smalltalk.addMethod(
smalltalk.method({
selector: "createUserEmail:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=self._root();
_st($1)._createUserEmail_(aString);
$2=_st($1)._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showUserListWidget();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._onPromiseFailureDo_((function(ex){
return smalltalk.withContext(function($ctx2) {
return self._notifyError_(ex);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createUserEmail:",{aString:aString},globals.MRUserCreatorWidget)})},
args: ["aString"],
source: "createUserEmail: aString\x0a\x09[ self root \x0a\x09\x09createUserEmail: aString;\x0a\x09\x09then: [ self showUserListWidget ] ]\x0a\x09\x09onPromiseFailureDo: [ :ex |\x0a\x09\x09\x09self notifyError: ex ]",
messageSends: ["onPromiseFailureDo:", "createUserEmail:", "root", "then:", "showUserListWidget", "notifyError:"],
referencedClasses: []
}),
globals.MRUserCreatorWidget);

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
globals.MRUserCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#079E37";
},
args: [],
source: "iconColor\x0a\x09^ '#079E37'",
messageSends: [],
referencedClasses: []
}),
globals.MRUserCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var form,emailInput;
function $MRBootstrapForm(){return globals.MRBootstrapForm||(typeof MRBootstrapForm=="undefined"?nil:MRBootstrapForm)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
form=_st($MRBootstrapForm())._new();
$1=_st(form)._textInput();
_st($1)._placeholder_("john@doe.com");
_st($1)._label_("Email Address");
$2=_st($1)._yourself();
emailInput=$2;
_st(form)._submitAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._createUserEmail_(_st(emailInput)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(form)._cancelAction_((function(){
return smalltalk.withContext(function($ctx2) {
return self._showUserListWidget();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._with_(form);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html,form:form,emailInput:emailInput},globals.MRUserCreatorWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09| form emailInput |\x0a\x09\x0a\x09form := MRBootstrapForm new.\x0a\x09\x0a\x09emailInput := form textInput\x0a\x09\x09placeholder: 'john@doe.com';\x0a\x09\x09label: 'Email Address';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09form submitAction: [\x0a\x09\x09self createUserEmail: emailInput value ].\x0a\x0a\x09form cancelAction: [ self showUserListWidget ].\x0a\x09\x0a\x09html with: form",
messageSends: ["new", "placeholder:", "textInput", "label:", "yourself", "submitAction:", "createUserEmail:", "value", "cancelAction:", "showUserListWidget", "with:"],
referencedClasses: ["MRBootstrapForm"]
}),
globals.MRUserCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "showUserListWidget",
protocol: 'actions',
fn: function (){
var self=this;
function $MRUserListWidget(){return globals.MRUserListWidget||(typeof MRUserListWidget=="undefined"?nil:MRUserListWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRUserListWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"showUserListWidget",{},globals.MRUserCreatorWidget)})},
args: [],
source: "showUserListWidget\x0a\x09MRUserListWidget new\x0a\x09\x09render",
messageSends: ["render", "new"],
referencedClasses: ["MRUserListWidget"]
}),
globals.MRUserCreatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "New user";
},
args: [],
source: "title\x0a\x09^ 'New user'",
messageSends: [],
referencedClasses: []
}),
globals.MRUserCreatorWidget);



smalltalk.addClass('MRUserListWidget', globals.MRMainFrameWidget, [], 'Marina-Widgets-Users');
globals.MRUserListWidget.comment="I display a list of templates.";
smalltalk.addMethod(
smalltalk.method({
selector: "addUser",
protocol: 'actions',
fn: function (){
var self=this;
function $MRUserCreatorWidget(){return globals.MRUserCreatorWidget||(typeof MRUserCreatorWidget=="undefined"?nil:MRUserCreatorWidget)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MRUserCreatorWidget())._new())._render();
return self}, function($ctx1) {$ctx1.fill(self,"addUser",{},globals.MRUserListWidget)})},
args: [],
source: "addUser\x0a\x09MRUserCreatorWidget new render",
messageSends: ["render", "new"],
referencedClasses: ["MRUserCreatorWidget"]
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return "glyphicon glyphicon-user";
},
args: [],
source: "icon\x0a\x09^ 'glyphicon glyphicon-user'",
messageSends: [],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "iconColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#079E37";
},
args: [],
source: "iconColor\x0a\x09^ '#079E37'",
messageSends: [],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "removeUser:",
protocol: 'actions',
fn: function (anUser){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Do you really want to remove ".__comma(_st(anUser)._email())).__comma("?");
$ctx1.sendIdx[","]=1;
self._confirm_ifTrue_($1,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anUser)._remove())._then_((function(){
return smalltalk.withContext(function($ctx3) {
return self._refresh();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeUser:",{anUser:anUser},globals.MRUserListWidget)})},
args: ["anUser"],
source: "removeUser: anUser\x0a\x09self \x0a\x09\x09confirm: 'Do you really want to remove ', anUser email, '?'\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09anUser remove then: [ \x0a\x09\x09\x09\x09self refresh ] ]",
messageSends: ["confirm:ifTrue:", ",", "email", "then:", "remove", "refresh"],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAddUserOn:",
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
_st($3)._with_("New User");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addUser();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderAddUserOn:",{html:html},globals.MRUserListWidget)})},
args: ["html"],
source: "renderAddUserOn: html\x0a\x09html div class: 'head'; with: [\x0a\x09\x09html button\x0a\x09\x09\x09class: 'btn btn-xs btn-default';\x0a\x09\x09\x09with: 'New User';\x0a\x09\x09\x09onClick: [ self addUser ] ]",
messageSends: ["class:", "div", "with:", "button", "onClick:", "addUser"],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._adminPresenter())._users())._then_((function(proxy){
return smalltalk.withContext(function($ctx2) {
return _st(_st(proxy)._contents())._then_((function(users){
return smalltalk.withContext(function($ctx3) {
self._renderAddUserOn_(html);
return self._renderUsers_on_(users,html);
}, function($ctx3) {$ctx3.fillBlock({users:users},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({proxy:proxy},$ctx1,1)})}));
$ctx1.sendIdx["then:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MRUserListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self adminPresenter users then: [ :proxy |\x0a\x09\x09proxy contents then: [ :users |\x0a\x09\x09\x09self renderAddUserOn: html.\x0a\x09\x09\x09self renderUsers: users on: html ] ]",
messageSends: ["then:", "users", "adminPresenter", "contents", "renderAddUserOn:", "renderUsers:on:"],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUserRow:on:",
protocol: 'rendering',
fn: function (anUser,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._span())._class_(_st(anUser)._icon());
$ctx3.sendIdx["class:"]=1;
return _st(html)._with_(_st(anUser)._email());
$ctx3.sendIdx["with:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$2=_st(html)._td();
_st($2)._class_("align-right");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._a();
_st($4)._with_("Remove");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeUser_(anUser);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderUserRow:on:",{anUser:anUser,html:html},globals.MRUserListWidget)})},
args: ["anUser", "html"],
source: "renderUserRow: anUser on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: [\x0a\x09\x09\x09html span class: anUser icon.\x0a\x09\x09\x09\x09\x09html with: anUser email ].\x0a\x09\x09html td class: 'align-right'; with: [\x0a\x09\x09\x09html a \x0a\x09\x09\x09\x09with: 'Remove';\x0a\x09\x09\x09\x09onClick: [ self removeUser: anUser ] ] ]",
messageSends: ["with:", "tr", "td", "class:", "span", "icon", "email", "a", "onClick:", "removeUser:"],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUsers:on:",
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
$3=_st(a)._email();
$ctx4.sendIdx["email"]=1;
return _st($3).__lt(_st(b)._email());
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,3)})})))._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return self._renderUserRow_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderUsers:on:",{aCollection:aCollection,html:html},globals.MRUserListWidget)})},
args: ["aCollection", "html"],
source: "renderUsers: aCollection on: html\x0a\x09html table \x0a\x09\x09class: 'table table-striped';\x0a\x09\x09with: [\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09(aCollection sorted: [ :a :b | a email < b email ])\x0a\x09\x09\x09\x09\x09do: [ :each |\x0a\x09\x09\x09\x09\x09self renderUserRow: each on: html ] ] ]",
messageSends: ["class:", "table", "with:", "tbody", "do:", "sorted:", "<", "email", "renderUserRow:on:"],
referencedClasses: []
}),
globals.MRUserListWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Users";
},
args: [],
source: "title\x0a\x09^ 'Users'",
messageSends: [],
referencedClasses: []
}),
globals.MRUserListWidget);


});
