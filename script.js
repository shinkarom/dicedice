Array.prototype.random = function(){
	return this[Math.floor(Math.random()*this.length)];
}

function coin(){
	return Math.random()>0.5;
}

let itemNames = ['wikipedia','wiktionary','wikiquotes','wikinews','wikibooks','wikivoyages','reddit','wikisources','wikiversity'];

function reddit(){
	let items = ['','random','new','top/?sort=top&t=all'];
	return 'https://reddit.com/r/random/'+items.random();
}

function wikipedia(){
	let langs = ['ace','af','ak','als','an','roa-rup','frp','ast','atj','gn','ay','az','bjn','gor','id','ms','bm','zh-min-nan','map-bms','jv','min','su','bug','bcl','bi','bar','bs','br','ca','ceb','cs','ch','cbk-zam','ny','sn','tum','co','cy','da','pdc','de','nv','dsb','na','et','eml','ang','en','es','eo','ext','eu','ee','to','hif','fo','fr','fy','ff','fur','ga','gv','sm','gag','gd','gl','ki','ha','haw','hsb','hr','io','ig','ilo','ia','ie','ik','xh','zu','is','it','kbp','kl','pam','csb','kw','rw','rn','kg','sw','ht','ku','lad','ltg','la','lv','lb','lt','lij','li','ln','lfn','olo','jbo','lg','lmo','hu','mg','mt','mi','cdo','mwl','fj','nah','nap','nl','nds-nl','cr','frr','pih','no','nrm','nov','nn','uz','oc','om','pfl','pag','pap','jam','pcd','pms','nds','pl','pt','kaa','crh','ty','ksh','ro','rmy','rm','qu','se','sg','sc','sco','stq','nso','st','tn','sq','scn','simple','ss','sk','sl','szl','so','srn','sh','fi','sv','tl','kab','roa-tara','tet','din','vi','tpi','chy','ve','tr','tk','tw','za','vec','vep','vo','fiu-vro','wa','vls','war','wo','ts','yo','diq','zea','bat-smg','el','pnt','av','ady','kbd','ab','ba','be','тарашкевіца','be-tarask','bxr','bg','inh','os','kv','krc','ky','mrj','kk','lbe','lez','mk','mdf','mn','ce','mhr','koi','rue','ru','sah','cu','sr','tt','tg','tyv','udm','uk','xal','cv','myv','hy','xmf','ka','got','yi','he','ur','ar','ps','sd','pnb','fa','glk','mzn','arz','azb','lrc','ug','ckb','arc','dv','ks','new','ne','pi','bh','dty','gom','mai','mr','sa','hi','as','bpy','bn','pa','gu','or','ta','te','kn','tcy','ml','si','th','my','dz','bo','lo','km','iu','chr','ti','am','ko','zh','zh-classical','wuu','hak','ja','zh-yue','gan'];
	
	return `https://${langs.random()}.wikipedia.org/wiki/Special:Random`;
}

function wiktionary(){
	let langs = ['ang','af','als','an','roa-rup','ast','gn','ay','az','id','ms','zh-min-nan','jv','su','bs','br','ca','cs','co','cy','da','de','na','et','en','es','eo','eu','fo','fr','fy','ga','gv','sm','gd','gl','ha','hr','io','ia','ie','ik','zu','is','it','kl','csb','kw','rw','sw','ku','la','lv','lb','lt','li','ln','jbo','hu','mg','mt','mi','fj','nah','nl','no','nn','oc','om','uz','nds','pl','pt','ro','qu','sg','st','tn','sq','scn','simple','ss','sk','sl','so','sh','fi','sv','tl','vi','tpi','tr','tk','za','vo','wa','wo','ts','el','be','bg','ky','kk','mk','mn','ru','sr','tt','tg','uk','hy','ka','yi','he','ur','ar','ps','pnb','sd','fa','ug','dv','ks','ne','mr','sa','hi','bn','pa','gu','or','ta','te','kn','ml','si','th','my','bo','lo','km','iu','chr','ti','am','ko','ja','zh'];
	return `https://${langs.random()}.wiktionary.org/wiki/Special:Random`;
}

function wikinews(){
	let langs = ['als','bs','ca','cs','de','el','en','es','fa','fr','it','hu','nl','no','nds','pl','pt','ro','sq','fi','sv','tr','bg','ru','sr','uk','he','ar','sd','ta','th','ko','ja','zh'];
	return `https://${langs.random()}.wikinews.org/wiki/Special:Random`;
}

function wikibooks(){
	let langs = ['af','als','az','id','ms','bs','cs','cy','da','de','et','en','es','eo','eu','fr','fy','gl','hr','ia','is','it','ku','la','lt','mg','nl','Bokmål','no','oc','pl','pt','ro','sq','sk','sl','fi','sv','tl','vi','tr','vo','el','ba','bg','be','kk','ky','mk','ru','sr','tt','tg','uk','cv','hy','ka','he','ar','fa','ur','bn','hi','mr','sa','ml','si','pa','ta','te','km','ne','th','ko','ja','zh'];
	return `https://${langs.random()}.wikibooks.org/wiki/Special:Random`;
}

function wikivoyages(){
	let langs = ['de','en','es','fr','it','nl','pl','pt','fi','sv','ro','el','ru','uk','vi','he','fa','ps','bn','hi','zh'];
	return `https://${langs.random()}.wikivoyage.org/wiki/Special:Random`;
}

function wikiquotes(){
	let langs = ['af','als','id','bs','ca','cs','cy','da','de','en','es','eo','eu','fr','hr','is','it','ku','la','lb','lt','hu','nl','no','pl','pt','ro','sk','sl','fi','sv','tr','el','be','bg','ru','sah','sr','uk','hy','ka','he','ar','fa','ur','gu','mr','ta','th','ko','ja','zh',''];
	
	return `https://${langs.random()}.wikiquote.org/wiki/Special:Random`;
}

function wikisources(){
	let langs = ['als','id','bs','br','ca','cs','cy','da','de','en','es','eu','fr','frr','gl','hr','hy','is','it','la','lt','li','nl','or','pms','pl','pt','ro','sk','sl','fi','sv','vi','tr','el','ru','sr','uk','he','yi','ar','fa','bn','pa','ml','th','ko','ja','zh'];
	let lang = coin()?langs.random():'';
	let dot = lang==''?'':'.';
	return `https://${lang}${dot}wikisource.org/wiki/Special:Random`;
}

function wikiversity(){
	let langs = ['cs','de','en','es','fr','it','ko','pt','sl','fi','sv','el','ru','ar','hi','ja','zh','beta'];
	return `https://${langs.random()}.wikiversity.org/wiki/Special:Random`;
}

function wikimedia(){
	let items = ['https://commons.wikimedia.org/wiki/Special:Random','https://wikidata.org/wiki/Special:Random','https://species.wikimedia.org/wiki/Special:Random'];
	return items.random();
}

function anything(){
	return this[itemNames.random()]();
}

function openLink(elem){
	window.open(this[elem](),'_blank');
}

function bodyLoad(){
	let thisNames = [...itemNames,'anything'];	
	thisNames.map((elem)=>document.getElementById(elem).addEventListener('click',(e)=>{openLink(elem);e.preventDefault();}));
	thisNames.map((elem)=>document.getElementById(elem).href=this[elem]());
}