"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[9969],{9969:function(e,n,t){t.r(n),t.d(n,{yacas:function(){return k}});var r=function(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),o="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",a=new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"),i=new RegExp(o),u=new RegExp(o+"?_"+o),c=new RegExp(o+"\\s*\\(");function l(e,n){var t;if('"'===(t=e.next()))return n.tokenize=s,n.tokenize(e,n);if("/"===t){if(e.eat("*"))return n.tokenize=p,n.tokenize(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var o=e.match(/^(\w+)\s*\(/,!1);null!==o&&r.hasOwnProperty(o[1])&&n.scopes.push("bodied");var l=f(n);if("bodied"===l&&"["===t&&n.scopes.pop(),"["!==t&&"{"!==t&&"("!==t||n.scopes.push(t),("["===(l=f(n))&&"]"===t||"{"===l&&"}"===t||"("===l&&")"===t)&&n.scopes.pop(),";"===t)for(;"bodied"===l;)n.scopes.pop(),l=f(n);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(a,!0,!1)?"number":e.match(u,!0,!1)?"variableName.special":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(c,!0,!1)?(e.backUp(1),"variableName.function"):e.match(i,!0,!1)?"variable":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function s(e,n){for(var t,r=!1,o=!1;null!=(t=e.next());){if('"'===t&&!o){r=!0;break}o=!o&&"\\"===t}return r&&!o&&(n.tokenize=l),"string"}function p(e,n){for(var t,r;null!=(r=e.next());){if("*"===t&&"/"===r){n.tokenize=l;break}t=r}return"comment"}function f(e){var n=null;return e.scopes.length>0&&(n=e.scopes[e.scopes.length-1]),n}var k={name:"yacas",startState:function(){return{tokenize:l,scopes:[]}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},indent:function(e,n,t){if(e.tokenize!==l&&null!==e.tokenize)return null;var r=0;return"]"!==n&&"];"!==n&&"}"!==n&&"};"!==n&&");"!==n||(r=-1),(e.scopes.length+r)*t.unit},languageData:{electricInput:/[{}\[\]()\;]/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);
//# sourceMappingURL=9969.58ac9a5c.chunk.js.map