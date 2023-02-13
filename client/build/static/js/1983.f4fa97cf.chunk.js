"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[1983],{1983:function(e,t,n){n.r(t),n.d(t,{Cassandra:function(){return F},MSSQL:function(){return K},MariaSQL:function(){return Y},MySQL:function(){return A},PLSQL:function(){return H},PostgreSQL:function(){return E},SQLDialect:function(){return J},SQLite:function(){return M},StandardSQL:function(){return $},keywordCompletion:function(){return L},keywordCompletionSource:function(){return R},schemaCompletion:function(){return D},schemaCompletionSource:function(){return V},sql:function(){return I}});var r=n(5671),a=n(3144),i=n(7762),o=n(1450),s=n(4200),l=n(3242),c=n(7102);function u(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function d(e,t,n){for(var r=!1;;){if(e.next<0)return;if(e.next==t&&!r)return void e.advance();r=n&&!r&&92==e.next,e.advance()}}function m(e,t){for(;95==e.next||u(e.next);)null!=t&&(t+=String.fromCharCode(e.next)),e.advance();return t}function p(e,t){for(;48==e.next||49==e.next;)e.advance();t&&e.next==t&&e.advance()}function f(e,t){for(;;){if(46==e.next){if(t)break;t=!0}else if(e.next<48||e.next>57)break;e.advance()}if(69==e.next||101==e.next)for(e.advance(),43!=e.next&&45!=e.next||e.advance();e.next>=48&&e.next<=57;)e.advance()}function g(e){for(;!(e.next<0||10==e.next);)e.advance()}function h(e,t){for(var n=0;n<t.length;n++)if(t.charCodeAt(n)==e)return!0;return!1}var v=" \t\r\n";function _(e,t,n){var r=Object.create(null);r.true=r.false=5,r.null=r.unknown=6;var a,o=(0,i.Z)(e.split(" "));try{for(o.s();!(a=o.n()).done;){var s=a.value;s&&(r[s]=20)}}catch(f){o.e(f)}finally{o.f()}var l,c=(0,i.Z)(t.split(" "));try{for(c.s();!(l=c.n()).done;){var u=l.value;u&&(r[u]=21)}}catch(f){c.e(f)}finally{c.f()}var d,m=(0,i.Z)((n||"").split(" "));try{for(m.s();!(d=m.n()).done;){var p=d.value;p&&(r[p]=24)}}catch(f){m.e(f)}finally{m.f()}return r}var b="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",y="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",k={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:_(y,b)};function O(e){return new l.Jq((function(t){var n,r,a=t.next;if(t.advance(),h(a,v)){for(;h(t.next,v);)t.advance();t.acceptToken(36)}else if(36==a&&36==t.next&&e.doubleDollarQuotedStrings)!function(e){for(;;){if(e.next<0||e.peek(1)<0)return;if(36==e.next&&36==e.peek(1))return void e.advance(2);e.advance()}}(t),t.acceptToken(3);else if(39==a||34==a&&e.doubleQuotedStrings)d(t,a,e.backslashEscapes),t.acceptToken(3);else if(35==a&&e.hashComments||47==a&&47==t.next&&e.slashComments)g(t),t.acceptToken(1);else if(45!=a||45!=t.next||e.spaceAfterDashes&&32!=t.peek(1))if(47==a&&42==t.next){t.advance();for(var i=-1,o=1;!(t.next<0);)if(t.advance(),42==i&&47==t.next){if(!--o){t.advance();break}i=-1}else 47==i&&42==t.next?(o++,i=-1):i=t.next;t.acceptToken(2)}else if(101!=a&&69!=a||39!=t.next)if(110!=a&&78!=a||39!=t.next||!e.charSetCasts)if(95==a&&e.charSetCasts)for(var s=0;;s++){if(39==t.next&&s>1){t.advance(),d(t,39,e.backslashEscapes),t.acceptToken(3);break}if(!u(t.next))break;t.advance()}else if(40==a)t.acceptToken(7);else if(41==a)t.acceptToken(8);else if(123==a)t.acceptToken(9);else if(125==a)t.acceptToken(10);else if(91==a)t.acceptToken(11);else if(93==a)t.acceptToken(12);else if(59==a)t.acceptToken(13);else if(e.unquotedBitLiterals&&48==a&&98==t.next)t.advance(),p(t),t.acceptToken(22);else if(98!=a&&66!=a||39!=t.next&&34!=t.next){if(48==a&&(120==t.next||88==t.next)||(120==a||88==a)&&39==t.next){var l=39==t.next;for(t.advance();(r=t.next)>=48&&r<=57||r>=97&&r<=102||r>=65&&r<=70;)t.advance();l&&39==t.next&&t.advance(),t.acceptToken(4)}else if(46==a&&t.next>=48&&t.next<=57)f(t,!0),t.acceptToken(4);else if(46==a)t.acceptToken(14);else if(a>=48&&a<=57)f(t,!1),t.acceptToken(4);else if(h(a,e.operatorChars)){for(;h(t.next,e.operatorChars);)t.advance();t.acceptToken(15)}else if(h(a,e.specialVar))t.next==a&&t.advance(),function(e){if(39==e.next||34==e.next||96==e.next){var t=e.next;e.advance(),d(e,t,!1)}else m(e)}(t),t.acceptToken(17);else if(h(a,e.identifierQuotes))d(t,a,!1),t.acceptToken(19);else if(58==a||44==a)t.acceptToken(16);else if(u(a)){var c=m(t,String.fromCharCode(a));t.acceptToken(46==t.next?18:null!==(n=e.words[c.toLowerCase()])&&void 0!==n?n:18)}}else{var _=t.next;t.advance(),e.treatBitsAsBytes?(d(t,_,e.backslashEscapes),t.acceptToken(23)):(p(t,_),t.acceptToken(22))}else t.advance(),d(t,39,e.backslashEscapes),t.acceptToken(3);else t.advance(),d(t,39,!0);else g(t),t.acceptToken(1)}))}var x=O(k),w=l.WQ.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"\u26a0 LineComment BlockComment String Number Bool Null ( ) [ ] { } ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,x],topRules:{Script:[0,25]},tokenPrec:0});function Q(e){for(var t=e.cursor().moveTo(e.from,-1);/Comment/.test(t.name);)t.moveTo(t.from,-1);return t.node}function C(e,t){var n=e.sliceString(t.from,t.to),r=/^([`'"])(.*)\1$/.exec(n);return r?r[2]:n}function S(e){return e&&("Identifier"==e.name||"QuotedIdentifier"==e.name)}function q(e,t){if("CompositeIdentifier"==t.name){for(var n=[],r=t.firstChild;r;r=r.nextSibling)S(r)&&n.push(C(e,r));return n}return[C(e,t)]}function P(e,t){for(var n=[];;){if(!t||"."!=t.name)return n;var r=Q(t);if(!S(r))return n;n.unshift(C(e,r)),t=Q(r)}}function T(e,t){var n=(0,o.qz)(e).resolveInner(t,-1),r=function(e,t){for(var n,r=t;!n;r=r.parent){if(!r)return null;"Statement"==r.name&&(n=r)}for(var a=null,i=n.firstChild,o=!1,s=null;i;i=i.nextSibling){var l="Keyword"==i.name?e.sliceString(i.from,i.to).toLowerCase():null,c=null;if(o)if("as"==l&&s&&S(i.nextSibling))c=C(e,i.nextSibling);else{if(l&&U.has(l))break;s&&S(i)&&(c=C(e,i))}else o="from"==l;c&&(a||(a=Object.create(null)),a[c]=q(e,s)),s=/Identifier$/.test(i.name)?i:null}return a}(e.doc,n);return"Identifier"==n.name||"QuotedIdentifier"==n.name||"Keyword"==n.name?{from:n.from,quoted:"QuotedIdentifier"==n.name?e.doc.sliceString(n.from,n.from+1):null,parents:P(e.doc,Q(n)),aliases:r}:"."==n.name?{from:t,quoted:null,parents:P(e.doc,n),aliases:r}:{from:t,quoted:null,parents:[],empty:!0,aliases:r}}var U=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));var z=/^\w*$/,X=/^[`'"]?\w*[`'"]?$/,Z=function(){function e(){(0,r.Z)(this,e),this.list=[],this.children=void 0}return(0,a.Z)(e,[{key:"child",value:function(t){var n=this.children||(this.children=Object.create(null));return n[t]||(n[t]=new e)}},{key:"childCompletions",value:function(e){return this.children?Object.keys(this.children).filter((function(e){return e})).map((function(t){return{label:t,type:e}})):[]}}]),e}();function B(e,t){var n=Object.keys(e).map((function(n){return{label:t?n.toUpperCase():n,type:21==e[n]?"type":20==e[n]?"keyword":"variable",boost:-1}}));return(0,c.eC)(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],(0,c.Mb)(n))}var j=w.configure({props:[o.uj.add({Statement:(0,o.tC)()}),o.x0.add({Statement:function(e){return{from:e.firstChild.to,to:e.to}},BlockComment:function(e){return{from:e.from+2,to:e.to-2}}}),(0,s.Gv)({Keyword:s.pJ.keyword,Type:s.pJ.typeName,Builtin:s.pJ.standard(s.pJ.name),Bits:s.pJ.number,Bytes:s.pJ.string,Bool:s.pJ.bool,Null:s.pJ.null,Number:s.pJ.number,String:s.pJ.string,Identifier:s.pJ.name,QuotedIdentifier:s.pJ.special(s.pJ.string),SpecialVar:s.pJ.special(s.pJ.name),LineComment:s.pJ.lineComment,BlockComment:s.pJ.blockComment,Operator:s.pJ.operator,"Semi Punctuation":s.pJ.punctuation,"( )":s.pJ.paren,"{ }":s.pJ.brace,"[ ]":s.pJ.squareBracket})]}),J=function(){function e(t,n){(0,r.Z)(this,e),this.dialect=t,this.language=n}return(0,a.Z)(e,[{key:"extension",get:function(){return this.language.extension}}],[{key:"define",value:function(t){var n=function(e,t,n,r){var a={};for(var i in k)a[i]=(e.hasOwnProperty(i)?e:k)[i];return t&&(a.words=_(t,n||"",r)),a}(t,t.keywords,t.types,t.builtin);return new e(n,o.qp.define({name:"sql",parser:j.configure({tokenizers:[{from:x,to:O(n)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}}))}}]),e}();function R(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return B(e.dialect.words,t)}function L(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.language.data.of({autocomplete:R(e,t)})}function V(e){return e.schema?function(e,t,n,r){var a=new Z,o=a.child(r||"");for(var s in e){var l=s.indexOf(".");(l>-1?a.child(s.slice(0,l)):o).child(l>-1?s.slice(l+1):s).list=e[s].map((function(e){return"string"==typeof e?{label:e,type:"property"}:e}))}for(var c in o.list=(t||o.childCompletions("type")).concat(n?o.child(n).list:[]),a.children){var u=a.child(c);u.list.length||(u.list=u.childCompletions("type"))}return a.list=o.list.concat(a.childCompletions("type")),function(e){var t=T(e.state,e.pos),r=t.parents,s=t.from,l=t.quoted,c=t.empty,u=t.aliases;if(c&&!e.explicit)return null;u&&1==r.length&&(r=u[r[0]]||r);var d,m=a,p=(0,i.Z)(r);try{for(p.s();!(d=p.n()).done;){for(var f=d.value;!m.children||!m.children[f];)if(m==a)m=o;else{if(m!=o||!n)return null;m=m.child(n)}m=m.child(f)}}catch(b){p.e(b)}finally{p.f()}var g,h,v=l&&e.state.sliceDoc(e.pos,e.pos+1)==l,_=m.list;return m==a&&u&&(_=_.concat(Object.keys(u).map((function(e){return{label:e,type:"constant"}})))),{from:s,to:v?e.pos+1:void 0,options:(g=l,h=_,g?h.map((function(e){return Object.assign(Object.assign({},e),{label:g+e.label+g,apply:void 0})})):h),validFor:l?X:z}}}(e.schema,e.tables,e.defaultTable,e.defaultSchema):function(){return null}}function D(e){return e.schema?(e.dialect||$).language.data.of({autocomplete:V(e)}):[]}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dialect||$;return new o.ri(t.language,[D(e),L(t,!!e.upperCaseKeywords)])}var $=J.define({}),E=J.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:y+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:b+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),W="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",N=b+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",G="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",A=J.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:y+"group_concat "+W,types:N,builtin:G}),Y=J.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:y+"always generated groupby_concat hard persistent shutdown soft virtual "+W,types:N,builtin:G}),K=J.define({keywords:y+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:b+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),M=J.define({keywords:y+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:b+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),F=J.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:b+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),H=J.define({keywords:y+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:b+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0})}}]);
//# sourceMappingURL=1983.f4fa97cf.chunk.js.map