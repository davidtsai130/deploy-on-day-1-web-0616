if (self.CavalryLogger) { CavalryLogger.start_js(["cNca2"]); }

__d('ErrorSignal',['AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','SessionName','ScriptPath','SiteData','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m){if(l&&l==='beacon_error'){c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();return;}else if(l&&l==='async_error'){var n=JSON.parse(m),o=n.err_code,p=n.path;if(o in {'1004':1,'12029':1,'12031':1,'12152':1}&&p.indexOf('scribe_endpoint.php')==-1){new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:m}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);return;}}if(l==='javascript_error')c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();}function i(l,m){m=m||{};m.svn_rev=c('SiteData').revision;m.push_phase=c('SiteData').push_phase;m.script_path=c('ScriptPath').getScriptPath();var n=(c('SessionName').getName()||'-')+'/-';h('javascript_error',JSON.stringify({c:l,a:n,m:m}));}function j(){var l='beacon_error',m=(c('SessionName').getName()||'-')+'/-',n={};n.error=l;n.svn_rev=c('SiteData').revision;n.push_phase=c('SiteData').push_phase;n.script_path=c('ScriptPath').getScriptPath();n.extra={message:l,type:'info'};h(l,JSON.stringify({c:l,a:m,m:n}));}var k={sendBeaconErrorSignal:j,sendErrorSignal:h,logJSError:i};f.exports=k;b.ErrorSignal=k;},null);