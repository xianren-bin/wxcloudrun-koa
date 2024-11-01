var A={exports:{}};(function(k,p){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,l,f){var u=i("../lib/oop"),h=i("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};u.inherits(d,h),l.JsonHighlightRules=d}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,l,f){var u=i("../range").Range,h=function(){};(function(){this.checkOutdent=function(d,s){return/^\s+$/.test(d)?/^\s*\}/.test(s):!1},this.autoOutdent=function(d,s){var e=d.getLine(s),a=e.match(/^(\s*\})/);if(!a)return 0;var t=a[1].length,o=d.findMatchingBracket({row:s,column:t});if(!o||o.row==s)return 0;var n=this.$getIndent(d.getLine(o.row));d.replace(new u(s,0,s,t-1),n)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(h.prototype),l.MatchingBraceOutdent=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,l,f){var u=i("../../lib/oop"),h=i("../../range").Range,d=i("./fold_mode").FoldMode,s=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(s,d),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,a,t){var o=e.getLine(t);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var n=this._getFoldWidgetBase(e,a,t);return!n&&this.startRegionRe.test(o)?"start":n},this.getFoldWidgetRange=function(e,a,t,o){var n=e.getLine(t);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,t);var c=n.match(this.foldingStartMarker);if(c){var r=c.index;if(c[1])return this.openingBracketBlock(e,c[1],t,r);var g=e.getCommentFoldRange(t,r+c[0].length,1);return g&&!g.isMultiLine()&&(o?g=this.getSectionRange(e,t):a!="all"&&(g=null)),g}if(a!=="markbegin"){var c=n.match(this.foldingStopMarker);if(c){var r=c.index+c[0].length;return c[1]?this.closingBracketBlock(e,c[1],t,r):e.getCommentFoldRange(t,r,-1)}}},this.getSectionRange=function(e,a){var t=e.getLine(a),o=t.search(/\S/),n=a,r=t.length;a=a+1;for(var g=a,c=e.getLength();++a<c;){t=e.getLine(a);var _=t.search(/\S/);if(_!==-1){if(o>_)break;var m=this.getFoldWidgetRange(e,"all",a);if(m){if(m.start.row<=n)break;if(m.isMultiLine())a=m.end.row;else if(o==_)break}g=a}}return new h(n,r,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,a,t){for(var o=a.search(/\s*$/),n=e.getLength(),r=t,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++t<n;){a=e.getLine(t);var _=g.exec(a);if(_&&(_[1]?c--:c++,!c))break}var m=t;if(m>r)return new h(r,o,m,a.length)}}).call(s.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(i,l,f){var u=i("../lib/oop"),h=i("./text").Mode,d=i("./json_highlight_rules").JsonHighlightRules,s=i("./matching_brace_outdent").MatchingBraceOutdent,e=i("./folding/cstyle").FoldMode,a=i("../worker/worker_client").WorkerClient,t=function(){this.HighlightRules=d,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};u.inherits(t,h),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(o,n,r){var g=this.$getIndent(n);if(o=="start"){var c=n.match(/^.*[\{\(\[]\s*$/);c&&(g+=r)}return g},this.checkOutdent=function(o,n,r){return this.$outdent.checkOutdent(n,r)},this.autoOutdent=function(o,n,r){this.$outdent.autoOutdent(n,r)},this.createWorker=function(o){var n=new a(["ace"],"ace/mode/json_worker","JsonWorker");return n.attachToDocument(o.getDocument()),n.on("annotate",function(r){o.setAnnotations(r.data)}),n.on("terminate",function(){o.clearAnnotations()}),n},this.$id="ace/mode/json"}).call(t.prototype),l.Mode=t}),function(){ace.require(["ace/mode/json"],function(i){k&&(k.exports=i)})}()})(A);var v={exports:{}};(function(k,p){ace.define("ace/theme/clouds_midnight-css",["require","exports","module"],function(i,l,f){f.exports=`.ace-clouds-midnight .ace_gutter {
  background: #232323;
  color: #929292
}

.ace-clouds-midnight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-clouds-midnight {
  background-color: #191919;
  color: #929292
}

.ace-clouds-midnight .ace_cursor {
  color: #7DA5DC
}

.ace-clouds-midnight .ace_marker-layer .ace_selection {
  background: #000000
}

.ace-clouds-midnight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #191919;
}

.ace-clouds-midnight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-clouds-midnight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF
}

.ace-clouds-midnight .ace_marker-layer .ace_active-line {
  background: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_gutter-active-line {
  background-color: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_marker-layer .ace_selected-word {
  border: 1px solid #000000
}

.ace-clouds-midnight .ace_invisible {
  color: #666
}

.ace-clouds-midnight .ace_keyword,
.ace-clouds-midnight .ace_meta,
.ace-clouds-midnight .ace_support.ace_constant.ace_property-value {
  color: #927C5D
}

.ace-clouds-midnight .ace_keyword.ace_operator {
  color: #4B4B4B
}

.ace-clouds-midnight .ace_keyword.ace_other.ace_unit {
  color: #366F1A
}

.ace-clouds-midnight .ace_constant.ace_language {
  color: #39946A
}

.ace-clouds-midnight .ace_constant.ace_numeric {
  color: #46A609
}

.ace-clouds-midnight .ace_constant.ace_character.ace_entity {
  color: #A165AC
}

.ace-clouds-midnight .ace_invalid {
  color: #FFFFFF;
  background-color: #E92E2E
}

.ace-clouds-midnight .ace_fold {
  background-color: #927C5D;
  border-color: #929292
}

.ace-clouds-midnight .ace_storage,
.ace-clouds-midnight .ace_support.ace_class,
.ace-clouds-midnight .ace_support.ace_function,
.ace-clouds-midnight .ace_support.ace_other,
.ace-clouds-midnight .ace_support.ace_type {
  color: #E92E2E
}

.ace-clouds-midnight .ace_string {
  color: #5D90CD
}

.ace-clouds-midnight .ace_comment {
  color: #3C403B
}

.ace-clouds-midnight .ace_entity.ace_name.ace_tag,
.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {
  color: #606060
}

.ace-clouds-midnight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y
}

.ace-clouds-midnight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/clouds_midnight",["require","exports","module","ace/theme/clouds_midnight-css","ace/lib/dom"],function(i,l,f){l.isDark=!0,l.cssClass="ace-clouds-midnight",l.cssText=i("./clouds_midnight-css");var u=i("../lib/dom");u.importCssString(l.cssText,l.cssClass,!1)}),function(){ace.require(["ace/theme/clouds_midnight"],function(i){k&&(k.exports=i)})}()})(v);
