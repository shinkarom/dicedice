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
	//let langs = ['ab', 'ace', 'ady', 'af', 'ak', 'als', 'am', 'an', 'ang', 'ar', 'arc', 'arz', 'as', 'ast', 'atj', 'av', 'ay', 'az', 'azb', 'ba', 'bar', 'bat-smg', 'bcl', 'be', 'be-tarask', 'bg', 'bh', 'bi', 'bjn', 'bm', 'bn', 'bo', 'bpy', 'br', 'bs', 'bug', 'bxr', 'ca', 'cbk-zam', 'cdo', 'ce', 'ceb', 'ch', 'chr', 'chy', 'ckb', 'co', 'cr', 'crh', 'cs', 'csb', 'cu', 'cv', 'cy', 'da', 'de', 'din', 'diq', 'dsb', 'dty', 'dv', 'dz', 'ee', 'el', 'eml', 'en', 'eo', 'es', 'et', 'eu', 'ext', 'fa', 'ff', 'fi', 'fiu-vro', 'fj', 'fo', 'fr', 'frp', 'frr', 'fur', 'fy', 'ga', 'gag', 'gan', 'gd', 'gl', 'glk', 'gn', 'gom', 'gor', 'got', 'gu', 'gv', 'ha', 'hak', 'haw', 'he', 'hi', 'hif', 'hr', 'hsb', 'ht', 'hu', 'hy', 'ia', 'id', 'ie', 'ig', 'ik', 'ilo', 'inh', 'io', 'is', 'it', 'iu', 'ja', 'jam', 'jbo', 'jv', 'ka', 'kaa', 'kab', 'kbd', 'kbp', 'kg', 'ki', 'kk', 'kl', 'km', 'kn', 'ko', 'koi', 'krc', 'ks', 'ksh', 'ku', 'kv', 'kw', 'ky', 'la', 'lad', 'lb', 'lbe', 'lez', 'lfn', 'lg', 'li', 'lij', 'lmo', 'ln', 'lo', 'lrc', 'lt', 'ltg', 'lv', 'mai', 'map-bms', 'mdf', 'mg', 'mhr', 'mi', 'min', 'mk', 'ml', 'mn', 'mr', 'mrj', 'ms', 'mt', 'mwl', 'my', 'myv', 'mzn', 'na', 'nah', 'nap', 'nds', 'nds-nl', 'ne', 'new', 'nl', 'nn', 'no', 'nov', 'nrm', 'nso', 'nv', 'ny', 'oc', 'olo', 'om', 'or', 'os', 'pa', 'pag', 'pam', 'pap', 'pcd', 'pdc', 'pfl', 'pi', 'pih', 'pl', 'pms', 'pnb', 'pnt', 'ps', 'pt', 'qu', 'rm', 'rmy', 'rn', 'ro', 'roa-rup', 'roa-tara', 'ru', 'rue', 'rw', 'sa', 'sah', 'sc', 'scn', 'sco', 'sd', 'se', 'sg', 'sh', 'si', 'simple', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'srn', 'ss', 'st', 'stq', 'su', 'sv', 'sw', 'szl', 'ta', 'tcy', 'te', 'tet', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tpi', 'tr', 'ts', 'tt', 'tum', 'tw', 'ty', 'tyv', 'udm', 'ug', 'uk', 'ur', 'uz', 've', 'vec', 'vep', 'vi', 'vls', 'vo', 'wa', 'war', 'wo', 'wuu', 'xal', 'xh', 'xmf', 'yi', 'yo', 'za', 'zea', 'zh', 'zh-classical', 'zh-min-nan', 'zh-yue', 'zu']
	let tier1 = ['en','ceb','sv','de','fr','nl','ru','es','it','pl','war','vi','ja','zh','pt'];
	let tier2 = ['uk','fa','ar','sr','ca','no','fi','sh','id','hu','ko','cs','ro','ms','tr','eu','eo','hy','bg','da','he','sk','zh-min-nan','kk','min','ce','hr','lt','et','sl','be','el','gl','ur','nn','simple','az','uz','la','th','hi','ka','vo','ta','azb','cy'];
	let tier3 = ['ast','mk','tg','lv','mg','oc','tt','ky','bs','tl','sq','new','zh-yue','te','af','br','be-tarask','pms','bn','ml','lb','jv','ht','sco','mr','ga','sw','pnb','is','ba','cv','fy','my','su','nds','lmo','an','yo','ne','pa','gu','io','bar','scn','als','bpy','kn','ku','ckb','ia','qu','arz','mn','bat-smg','wuu','si','wa','gd','nap','yi','or','am','bug','cdo','map-bms','nsb','mai','fo','mzn','xmf','li','sah','ilo','sa','eml','vec','os','sd','mrj','mhr'];
	let tier4 = ['hif','ps','roa-tara','diq','hak','pam','bcl','zh-classical','frr','nso','szl','se','ace','mi','km','nah','rue','nds-nl','nv','vls','bh','gan','crh','sc','vep','bo','glk','co','so','tk','fiu-vro','myv','lrc','kv','csb','as','gv','udm','zea','ay','ie','pcd','sn','ug','nrm','stq','lez','kw','lad','mwi','gn','gom','rm','lij','ab','koi','mt','fur','frp','dsb','haw','lo','ang','ln','lfn','ext','dv','cbk-zam','dty','kab','ksh','gag','olo','pi','pag','pfl','av','ha','bxr','xal','krc','pap','gor','kaa','bjn','za','pdc','rw','tyv','to','kl','nov','jam','arc','kbd','tpi','kbp','tet','ig','ki','na','jbo','lbe','roa-rup','ty','mdf','kg','bi','wo','lg','srn','zu'];
	let tier5 = ['tcy','chr','ltg','sm','inh','om','xh','pih','cu','rmy','tw','bm','tn','atj','rn','chy','got','ts','tum','ak','st','sat','ch','ny','pnt','ss','fj','ady','iu','ee','ks','ve','ik','sg','ff','dz','ti','kr','din'];
	//let langs = getConcat([tier1,tier2,tier3,tier4,tier5]);
	let langs = getPush(tier1.concat(tier2).concat(tier3).concat(tier4).concat(tier5));
	console.log(langs.length)
	let l = langs.map(x=>wikiLink(x,'wikipedia'));
	return l
  }

  tionary () {
   // let langs = ['af', 'als', 'am', 'an', 'ang', 'ar', 'ast', 'ay', 'az', 'be', 'bg', 'bn', 'bo', 'br', 'bs', 'ca', 'chr', 'co', 'cs', 'csb', 'cy', 'da', 'de', 'dv', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'hr', 'hu', 'hy', 'ia', 'id', 'ie', 'ik', 'io', 'is', 'it', 'iu', 'ja', 'jbo', 'jv', 'ka', 'kk', 'kl', 'km', 'kn', 'ko', 'ks', 'ku', 'kw', 'ky', 'la', 'lb', 'li', 'ln', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'na', 'nah', 'nds', 'ne', 'nl', 'nn', 'no', 'oc', 'om', 'or', 'pa', 'pl', 'pnb', 'ps', 'pt', 'qu', 'ro', 'roa-rup', 'ru', 'rw', 'sa', 'scn', 'sd', 'sg', 'sh', 'si', 'simple', 'sk', 'sl', 'sm', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'tpi', 'tr', 'ts', 'tt', 'ug', 'uk', 'ur', 'uz', 'vi', 'vo', 'wa', 'wo', 'yi', 'za', 'zh' 'zh-min-nan', 'zu',]
   let tier1 = ['en','mg','fr'];
   let langs = getConcat([tier1]);
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
  wikimedia () {
    let items = ['https://commons.wikimedia.org/wiki/Special:Random', 'https://wikidata.org/wiki/Special:Random', 'https://species.wikimedia.org/wiki/Special:Random']
    return items
  }
  full () {
    let items = [...itemNames, 'wikimedia'].reduce((y,x)=>y.concat(this[x]()),[])
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
