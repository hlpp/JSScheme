﻿(function(s){
"use strict";

s.EnvironmentFrame = function(map, baseEnv) {
	this.map = map;
	this.baseEnv = baseEnv;
}

s.addGlobalPrimProc = function(name, func, minArgs, maxArgs) {
	s.globalEnvironment.map[name] = s.makePrimitiveProcedure(name, func, minArgs, maxArgs);
}

s.addGlobalObject = function(name, obj) {
	s.globalEnvironment.map[name] = obj;
}

s.globalEnvironment = new s.EnvironmentFrame({}, null);

s.initBasicEnv = function() {
	s.initBool();
	s.initSymbol();
	s.initNumber();
	s.initChar();
	s.initString();
	s.initList();
	s.initVector();
	s.initMyObject();
	s.initFun();
	s.initRead();
	s.initPrint();
	s.initEval();
	s.addGlobalPrimProc("interaction-environment", interactionEnvironment, 0);
}

s.makeNamespace = function(env) {
	return new s.Object(10, env);
}

function isNamespace(args) {
	return s.getBoolean(s.car(args).isNamespace());
}

function interactionEnvironment() {
	return s.makeNamespace(s.globalEnvironment);
}

})(scheme);