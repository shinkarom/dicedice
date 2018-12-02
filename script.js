Array.prototype.random = function(){
	return this[Math.floor(Math.random()*this.length)];
}

function redditAnything(){
	let items = ['random','random/random'];
	return 'https://reddit.com/r/'+items.random();
}

function wikipediaAnything(){
	let wikipediaLangs = ['ace','af','ak','als','an','roa-rup','frp','ast','atj','gn','ay','az','bjn','gor','id','ms','bm','zh-min-nan','map-bms','jv','min','su','bug','bcl','bi','bar','bs','br','ca','ceb','cs','ch','cbk-zam','ny','sn','tum','co','cy','da','pdc','de','nv','dsb','na','et','eml','a','g','en','es','eo','ext','eu','ee','to','hif','fo','fr','fy','ff','fur','ga','gv','sm','g','g','gd','gl','ki','ha','haw','hsb','hr','io','ig','ilo','ia','ie','ik','xh','zu','is','it','kbp','kl','pam','csb','kw','rw','rn','kg','sw','ht','ku','lad','ltg','la','lv','lb','lt','lij','li','ln','lfn','olo','jbo','lg','lmo','hu','mg','mt','mi','cdo','mwl','fj','nah','nap','nl','nds-nl','cr','frr','pih','no','nrm','nov','nn','uz','oc','om','pfl','pag','pap','jam','pcd','pms','nds','pl','pt','kaa','crh','ty','ksh','ro','rmy','rm','qu','se','sg','sc','sco','stq','nso','st','tn','sq','scn','simple','ss','sk','sl','szl','so','srn','sh','fi','sv','tl','kab','roa-tara','tet','din','vi','tpi','chy','ve','tr','tk','tw','za','vec','vep','vo','fiu-vro','wa','vls','war','wo','ts','yo','diq','zea','bat-smg','el','pnt','av','ady','kbd','ab','ba','be','be-tarask','bxr','bg','inh','os','kv','krc','ky','mrj','kk','lbe','lez','mk','mdf','mn','ce','mhr','koi','rue','ru','sah','cu','sr','tt','tg','tyv','udm','uk','xal','cv','myv','hy','xmf','ka','got','yi','he','ur','ar','ps','sd','pnb','fa','glk','mzn','arz','azb','lrc','ug','ckb','arc','dv','ks','new','ne','pi','bh','dty','g','m','mai','mr','sa','hi','as','bpy','bn','pa','gu','or','ta','te','kn','tcy','ml','si','th','my','dz','bo','lo','km','iu','chr','ti','am','ko','zh','zh-classical','wuu','hak','ja','zh-yue','gan'];
	
	return `https://${wikipediaLangs.random()}.wikipedia.org/wiki/Special:Random`;
}

function wikimediaAnything(){
	let items = ['https://en.wiktionary.org/wiki/Special:Random','https://en.wikiquote.org/wiki/Special:Random','https://en.wikinews.org/wiki/Special:Random','https://en.wikisource.org/wiki/Special:Random','https://wikisource.org/wiki/Special:Random','https://en.wikibooks.org/wiki/Special:Random','https://en.wikiversity.org/wiki/Special:Random','https://en.wikivoyage.org/wiki/Special:Random','https://commons.wikimedia.org/wiki/Special:Random','https://wikidata.org/wiki/Special:Random','https://species.wikimedia.org/wiki/Special:Random'];
	return items.random();
}

function anythingClick(){
	let items = [redditAnything, wikimediaAnything,wikipediaAnything];
	window.open(items.random()(),'_blank');
}

function bodyLoad(){
	document.getElementById('anything').addEventListener('click',anythingClick);
}