const _0x2e64c5=_0x6966;function _0x6966(_0x4d7ebd,_0x14aa19){const _0x478ee9=_0x478e();return _0x6966=function(_0x69668,_0x5c36dc){_0x69668=_0x69668-0x1e6;let _0x44ffa8=_0x478ee9[_0x69668];return _0x44ffa8;},_0x6966(_0x4d7ebd,_0x14aa19);}(function(_0x4ffc1b,_0x41fc5e){const _0x4ac845=_0x6966,_0x5d6954=_0x4ffc1b();while(!![]){try{const _0x5b9541=parseInt(_0x4ac845(0x1ec))/0x1+-parseInt(_0x4ac845(0x229))/0x2+-parseInt(_0x4ac845(0x200))/0x3+parseInt(_0x4ac845(0x1fe))/0x4+parseInt(_0x4ac845(0x1f3))/0x5+-parseInt(_0x4ac845(0x212))/0x6*(parseInt(_0x4ac845(0x206))/0x7)+-parseInt(_0x4ac845(0x1ef))/0x8*(-parseInt(_0x4ac845(0x1e9))/0x9);if(_0x5b9541===_0x41fc5e)break;else _0x5d6954['push'](_0x5d6954['shift']());}catch(_0x3582da){_0x5d6954['push'](_0x5d6954['shift']());}}}(_0x478e,0x1feb1));function _0x478e(){const _0x31a04c=['includes','Đang\x20phát:','connection','Tác\x20giả:\x20','update','27548CyLraO','tools','26739jYCuGk','setLabel','audioonly','Hãy\x20thêm\x20bài\x20hát','playing','connect','650377TgdPCX','Hiện\x20có\x20','defaultemb','Discord','user','destroy','createProgressBar','title','content','createQueue','search','displayAvatarURL','6qAFvNo','play','Hãy\x20phát\x20một\x20bản\x20nhạc','Hàng\x20chờ\x20trống!','author','tương\x20tác\x20bởi\x20','Không\x20có\x20bài\x20hát\x20nào\x20trong\x20hàng\x20chờ','❌\x20|\x20không\x20thể\x20phát\x20','guild','Citnut','addField','setStyle','Skip','List','allowedMentions','thumbnail','setTitle','NowPlay','setThumbnail','config','\x20bài\x20hát\x20đang\x20chờ','<link/text>','hãy\x20chọn','258248VhnLwI','Đã\x20tìm\x20thấy\x20bài\x20hát:','setFooter','member','setCustomId','prefix','tag','tracks','exports','9tINsTS','guildId','channel','141620yYiTsy','reply','Bạn\x20cần\x20ở\x20trong\x20kênh\x20thoại!','895248MFNPNa','skip','slice','player','506360YNUYAk','length','Bài\x20hát\x20tiếp\x20theo:\x0a','Hàng\x20chờ:','voice','PRIMARY'];_0x478e=function(){return _0x31a04c;};return _0x478e();}const {MessageActionRow,MessageButton}=citnut[_0x2e64c5(0x209)],allowedMentions=citnut[_0x2e64c5(0x220)],{defaultemb}=citnut,{Player}=require('discord-player'),player=new Player(bot,{'ytdlDownsloadOptions':{'filter':_0x2e64c5(0x202)}});bot[_0x2e64c5(0x1f2)]=player;const filter=[_0x2e64c5(0x21f),'Skip',_0x2e64c5(0x223)],row=new MessageActionRow()['addComponents'](new MessageButton()[_0x2e64c5(0x22d)]('NowPlay')[_0x2e64c5(0x201)]('now\x20play')[_0x2e64c5(0x21d)]('PRIMARY'),new MessageButton()[_0x2e64c5(0x22d)](_0x2e64c5(0x21f))[_0x2e64c5(0x201)](_0x2e64c5(0x21f))[_0x2e64c5(0x21d)](_0x2e64c5(0x1f8)),new MessageButton()[_0x2e64c5(0x22d)](_0x2e64c5(0x21e))[_0x2e64c5(0x201)]('Skip')[_0x2e64c5(0x21d)](_0x2e64c5(0x1f8))),isPlaying=(_0x4431a7,_0x258ddf,_0x766674)=>{const _0x5ac8fc=_0x2e64c5;if(!_0x4431a7||!_0x4431a7[_0x5ac8fc(0x204)])return _0x258ddf[_0x5ac8fc(0x1fd)]({'embeds':[defaultemb(_0x5ac8fc(0x214))[_0x5ac8fc(0x222)]('Không\x20có\x20bản\x20nhạc\x20nào\x20đang\x20phát')[_0x5ac8fc(0x22b)]({'text':'tương\x20tác\x20bởi\x20'+_0x258ddf[_0x5ac8fc(0x20a)][_0x5ac8fc(0x1e6)],'iconURL':_0x766674})]});};module[_0x2e64c5(0x1e8)]={'command':[_0x2e64c5(0x213)],'author':_0x2e64c5(0x21b),'description':'music\x20:()','guide':_0x2e64c5(0x227),'allowListening':!![],'allowInteraction':!![],async 'interaction'(_0x9def6a){const _0x117b35=_0x2e64c5;let {customId:_0x58b2c1}=_0x9def6a;if(!_0x9def6a[_0x117b35(0x1ea)]||!filter[_0x117b35(0x1f9)](_0x58b2c1))return;const {get:_0x150477,write:_0x51d2a5}=citnut[_0x117b35(0x1ff)]['db'];let {id:_0x5c1681}=_0x9def6a[_0x117b35(0x20a)],_0x5e1668=_0x9def6a[_0x117b35(0x20a)][_0x117b35(0x211)]({'size':0x400,'dynamic':!![]}),_0x4d6f3b=player['getQueue'](_0x9def6a[_0x117b35(0x1ea)]);switch(_0x58b2c1){case _0x117b35(0x223):if(isPlaying(_0x4d6f3b,_0x9def6a,_0x5e1668))return;const _0x41b5a9=_0x4d6f3b['nowPlaying'](),_0x46e6bd=_0x4d6f3b[_0x117b35(0x20c)]();_0x9def6a[_0x117b35(0x1fd)]({'embeds':[defaultemb(_0x41b5a9[_0x117b35(0x20d)]+'\x0a\x0a'+_0x46e6bd)['setTitle'](_0x117b35(0x1fa))[_0x117b35(0x22b)]({'text':_0x117b35(0x217)+_0x9def6a[_0x117b35(0x20a)][_0x117b35(0x1e6)],'iconURL':_0x5e1668})],'components':[row]});break;case'List':if(isPlaying(_0x4d6f3b,_0x9def6a,_0x5e1668))return;if(!_0x4d6f3b[_0x117b35(0x1e7)][0x0])return _0x9def6a[_0x117b35(0x1fd)]({'embeds':[defaultemb(_0x117b35(0x203))['setTitle'](_0x117b35(0x215))[_0x117b35(0x22b)]({'text':'tương\x20tác\x20bởi\x20'+_0x9def6a[_0x117b35(0x20a)][_0x117b35(0x1e6)],'iconURL':_0x5e1668})],'components':[row]});if(_0x4d6f3b['tracks'][_0x117b35(0x1f4)]===0x1)return _0x9def6a['update']({'embeds':[defaultemb(_0x117b35(0x1fc)+_0x4d6f3b[_0x117b35(0x1e7)][0x0][_0x117b35(0x216)])['setTitle'](_0x4d6f3b[_0x117b35(0x1e7)][0x0]['title'])[_0x117b35(0x224)](_0x4d6f3b[_0x117b35(0x1e7)][0x0][_0x117b35(0x221)])[_0x117b35(0x22b)]({'text':_0x117b35(0x217)+_0x9def6a['user'][_0x117b35(0x1e6)],'iconURL':_0x5e1668})],'components':[row]});let _0x174e72=defaultemb(_0x117b35(0x207)+_0x4d6f3b[_0x117b35(0x1e7)][_0x117b35(0x1f4)]+_0x117b35(0x226))[_0x117b35(0x222)](_0x117b35(0x1f6))[_0x117b35(0x22b)]({'text':_0x117b35(0x217)+_0x9def6a[_0x117b35(0x20a)][_0x117b35(0x1e6)],'iconURL':_0x5e1668});for(let _0xdfbc39 of _0x4d6f3b[_0x117b35(0x1e7)]){_0x174e72[_0x117b35(0x21c)](_0x117b35(0x1fc)+_0xdfbc39[_0x117b35(0x216)],'>\x20'+_0xdfbc39[_0x117b35(0x20d)],!![]);}await _0x9def6a[_0x117b35(0x1fd)]({'embeds':[_0x174e72],'components':[row]});break;case _0x117b35(0x21e):if(isPlaying(_0x4d6f3b,_0x9def6a,_0x5e1668))return;_0x4d6f3b[_0x117b35(0x1f0)](),_0x9def6a['update']({'embeds':[defaultemb(_0x4d6f3b['tracks'][0x0]?_0x117b35(0x1f5)+_0x4d6f3b[_0x117b35(0x1e7)][0x0][_0x117b35(0x20d)]:_0x117b35(0x218))['setTitle']('Đã\x20bỏ\x20qua\x20bài\x20hát\x20hiện\x20tại')['setFooter']({'text':'tương\x20tác\x20bởi\x20'+_0x9def6a[_0x117b35(0x20a)][_0x117b35(0x1e6)],'iconURL':_0x5e1668})],'components':[row]});break;default:break;}},async 'listen'(_0x475858,_0x48cd0a){},async 'call'(_0x49b07f,_0x186a15){const _0x1f36ef=_0x2e64c5;if(!_0x49b07f[_0x1f36ef(0x21a)])return _0x49b07f[_0x1f36ef(0x1ed)]({'embeds':[defaultemb('bạn\x20không\x20thể\x20sử\x20dụng\x20chức\x20năng\x20này\x20tại\x20đây!')],'allowedMentions':allowedMentions});let _0x49d057=_0x49b07f[_0x1f36ef(0x20e)][_0x1f36ef(0x1f1)](citnut[_0x1f36ef(0x225)][_0x1f36ef(0x22e)]['length']+0x5);if(!_0x49d057)return _0x49b07f[_0x1f36ef(0x1ed)]({'embeds':[citnut[_0x1f36ef(0x208)](_0x1f36ef(0x228))],'allowedMentions':allowedMentions,'components':[row]});const _0x1f5937=player[_0x1f36ef(0x20f)](_0x49b07f[_0x1f36ef(0x21a)],{'metadata':{'channel':_0x49b07f[_0x1f36ef(0x1eb)]}});try{if(!_0x1f5937[_0x1f36ef(0x1fb)])await _0x1f5937[_0x1f36ef(0x205)](_0x49b07f[_0x1f36ef(0x22c)][_0x1f36ef(0x1f7)][_0x1f36ef(0x1eb)]);}catch{return _0x1f5937[_0x1f36ef(0x20b)](),await _0x49b07f['reply']({'content':_0x1f36ef(0x1ee),'ephemeral':!![]});}const _0x42df5b=await player[_0x1f36ef(0x210)](_0x49d057,{'requestedBy':_0x49b07f[_0x1f36ef(0x20a)]})['then'](_0x3a3f81=>_0x3a3f81[_0x1f36ef(0x1e7)][0x0]);if(!_0x42df5b)return _0x49b07f[_0x1f36ef(0x1ed)]({'content':_0x1f36ef(0x219)+_0x49d057,'allowedMentions':allowedMentions});_0x1f5937[_0x1f36ef(0x213)](_0x42df5b),_0x49b07f['reply']({'embeds':[defaultemb(_0x42df5b[_0x1f36ef(0x20d)])[_0x1f36ef(0x222)](_0x1f36ef(0x22a))[_0x1f36ef(0x224)](_0x42df5b[_0x1f36ef(0x221)])],'components':[row]});}};