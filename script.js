function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getConcat(arr){
	let res = [];
	if(arr.length==0) return [];
	else for(let i = 0;i<arr.length;i++){
		for(let j = 1;j<=arr.length-i;j++){
			res = res.concat(arr[i]);
		} 
	}
	return res;
}

function getPush(arr){
	let res = [];
	if(arr.length==0) return [];
	else for(let i = 0;i<arr.length;i++){
		for(let j = 1;j<=arr.length-i;j++){
			res.push(arr[i]);			
		} 
	}
	return res;
}

function wikiLink(lang,resource){
	return `https://${lang}${lang===''?'':'.'}${resource}.org/wiki/Special:Random`
}

let itemNames = ['pedia', 'tionary', 'quotes', 'news', 'books', 'voyage', 'source', 'versity']

let LinkGenerator = class {
  pedia () {
	let tier1 = ['en','ceb','sv','de','fr','nl','ru','es','it','pl','war','vi','ja','zh','pt'];
	let tier2 = ['uk','fa','ar','sr','ca','no','fi','sh','id','hu','ko','cs','ro','ms','tr','eu','eo','hy','bg','da','he','sk','zh-min-nan','kk','min','ce','hr','lt','et','sl','be','el','gl','ur','nn','simple','az','uz','la','th','hi','ka','vo','ta','azb','cy'];
	let tier3 = ['ast','mk','tg','lv','mg','oc','tt','ky','bs','tl','sq','new','zh-yue','te','af','br','be-tarask','pms','bn','ml','lb','jv','ht','sco','mr','ga','sw','pnb','is','ba','cv','fy','my','su','nds','lmo','an','yo','ne','pa','gu','io','bar','scn','als','bpy','kn','ku','ckb','ia','qu','arz','mn','bat-smg','wuu','si','wa','gd','nap','yi','or','am','bug','cdo','map-bms','nsb','mai','fo','mzn','xmf','li','sah','ilo','sa','eml','vec','os','sd','mrj','mhr'];
	let tier4 = ['hif','ps','roa-tara','diq','hak','pam','bcl','zh-classical','frr','nso','szl','se','ace','mi','km','nah','rue','nds-nl','nv','vls','bh','gan','crh','sc','vep','bo','glk','co','so','tk','fiu-vro','myv','lrc','kv','csb','as','gv','udm','zea','ay','ie','pcd','sn','ug','nrm','stq','lez','kw','lad','mwi','gn','gom','rm','lij','ab','koi','mt','fur','frp','dsb','haw','lo','ang','ln','lfn','ext','dv','cbk-zam','dty','kab','ksh','gag','olo','pi','pag','pfl','av','ha','bxr','xal','krc','pap','gor','kaa','bjn','za','pdc','rw','tyv','to','kl','nov','jam','arc','kbd','tpi','kbp','tet','ig','ki','na','jbo','lbe','roa-rup','ty','mdf','kg','bi','wo','lg','srn','zu'];
	let tier5 = ['tcy','chr','ltg','sm','inh','om','xh','pih','cu','rmy','tw','bm','tn','atj','rn','chy','got','ts','tum','ak','st','sat','ch','ny','pnt','ss','fj','ady','iu','ee','ks','ve','ik','sg','ff','dz','ti','din'];
	let langs = getConcat([tier1,tier2,tier3,tier4,tier5]);
	let l = langs.map(x=>wikiLink(x,'wikipedia'));
	return l
  }

  tionary () {
   let tier1 = ['en','mg','fr'];
   let tier2 = ['sh','es','zh','ru','de','lt','nl','sv','pl','ku','el','it','ta','fi','tr','hu','ko','io','kn','ca','pt','vi','hy','chr','sr','hi','ja','ro','no','th','ml','id','et','uz','li','my','or','te'];
   let tier3 = ['fa','eo','cs','ar','jv','eu','az','gl','da','lo','br','uk','oc','hr','fj','tg','bg','ps','simple','cy','vo','is','wa','zh-min-nan','sk','scn','ast','la','he','af','tl','sw','fy','ky','nn'];
   let tier4 = ['co','lv','pnb','mn','ka','sl','sq','nds','nah','lb','bs','sa','kk','tk','km','sm','mk','hsb','bn','be','pa','ms','ga','ur','an','wo','vec','ang','tt','sd','gn','mr','so','csb','ug','gd','mt','st','roa-rup','si','ia','ie','kl','mi','ay'];
   let tier6 = ['ks','as','mo','pi'];
   let tier5 = ['jbo','fo','ln','zu','na','gu','gv','kw','rw','ts','ne','om','qu','ss','su','ha','iu','am','dv','za','tpi','ik','yi','ti','sg','tn'];
   let langs = getConcat([tier1,tier2,tier3,tier4,tier5,tier6]);
	let l = langs.map(x=>wikiLink(x,'wiktionary'))
	return l
  }
  news () {
    let langs = ['als', 'bs', 'ca', 'cs', 'de', 'el', 'en', 'es', 'fa', 'fr', 'it', 'hu', 'nl', 'no', 'nds', 'pl', 'pt', 'ro', 'sq', 'fi', 'sv', 'tr', 'bg', 'ru', 'sr', 'uk', 'he', 'ar', 'sd', 'ta', 'th', 'ko', 'ja', 'zh'].map(x=>wikiLink(x,'wikinews'))
	return langs
  }
  books () {
    let langs = ['af', 'als', 'az', 'id', 'ms', 'bs', 'cs', 'cy', 'da', 'de', 'et', 'en', 'es', 'eo', 'eu', 'fr', 'fy', 'gl', 'hr', 'ia', 'is', 'it', 'ku', 'la', 'lt', 'mg', 'nl', 'no', 'oc', 'pl', 'pt', 'ro', 'sq', 'sk', 'sl', 'fi', 'sv', 'tl', 'vi', 'tr', 'vo', 'el', 'ba', 'bg', 'be', 'kk', 'ky', 'mk', 'ru', 'sr', 'tt', 'tg', 'uk', 'cv', 'hy', 'ka', 'he', 'ar', 'fa', 'ur', 'bn', 'hi', 'mr', 'sa', 'ml', 'si', 'pa', 'ta', 'te', 'km', 'ne', 'th', 'ko', 'ja', 'zh'].map(x=>wikiLink(x,'wikibooks'))
	return langs
  }
  voyage () {
    let langs = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'fi', 'sv', 'ro', 'el', 'ru', 'uk', 'vi', 'he', 'fa', 'ps', 'bn', 'hi', 'zh'].map(x=>wikiLink(x,'wikivoyage'))
	return langs
  }
  quotes () {
    let langs = ['af', 'als', 'id', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'en', 'es', 'eo', 'eu', 'fr', 'hr', 'is', 'it', 'ku', 'la', 'lb', 'lt', 'hu', 'nl', 'no', 'pl', 'pt', 'ro', 'sk', 'sl', 'fi', 'sv', 'tr', 'el', 'be', 'bg', 'ru', 'sah', 'sr', 'uk', 'hy', 'ka', 'he', 'ar', 'fa', 'ur', 'gu', 'mr', 'ta', 'th', 'ko', 'ja', 'zh', ''].map(x=>wikiLink(x,'wikiquote'))
	return langs
  }
  source () {
	return [wikiLink('','wikisource')]
  }
  versity () {
    let langs = ['cs', 'de', 'en', 'es', 'fr', 'it', 'ko', 'pt', 'sl', 'fi', 'sv', 'el', 'ru', 'ar', 'hi', 'ja', 'zh', 'beta'].map(x=>wikiLink(x,'wikiversity'))
	return langs
  }
  commons () {
    return [wikiLink('','commons.wikimedia')];
  }
  data(){
	  return [wikiLink('','wikidata')];
  }
  species(){
	  return [wikiLink('','wikispecies')];
  }
  full () {
    let items = this[randomItem([...itemNames, 'commons','data','species'])]();
    return items
  }
}

function openLink (elem) {
  window.open(randomItem(LinkGenerator.prototype[elem]()), '_blank')
}

function bodyLoad () {
  [...itemNames, 'full'].map((elem) => {
	  document.getElementById(elem).addEventListener('click', (e) => {
		  openLink(elem)
		  e.preventDefault()
		  })
  })
}
