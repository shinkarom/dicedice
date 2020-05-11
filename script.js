function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function wikiLink(lang,resource){
	return `https://${lang}${lang===''?'':'.'}${resource}.org/wiki/Special:Random`
}

let linkLists = {}

let LinkGenerator = class {
  wikipedia () {
	const wikiList = ['en','ceb','sv','de','fr','nl','ru','es','it','pl','war','vi','ja','zh','pt','uk','fa','ar','sr','ca','no','fi','sh','id','hu','ko','cs','ro','ms','tr','eu','eo','hy','bg','da','he','sk','zh-min-nan','kk','min','ce','hr','lt','et','sl','be','el','gl','ur','nn','simple','az','uz','la','th','hi','ka','vo','ta','azb','cy','ast','mk','tg','lv','mg','oc','tt','ky','bs','tl','sq','new','zh-yue','te','af','br','be-tarask','pms','bn','ml','lb','jv','ht','sco','mr','ga','sw','pnb','is','ba','cv','fy','my','su','nds','lmo','an','yo','ne','pa','gu','io','bar','scn','als','bpy','kn','ku','ckb','ia','qu','arz','mn','bat-smg','wuu','si','wa','gd','nap','yi','or','am','bug','cdo','map-bms','nsb','mai','fo','mzn','xmf','li','sah','ilo','sa','eml','vec','os','sd','mrj','mhr','hif','ps','roa-tara','diq','hak','pam','bcl','zh-classical','frr','nso','szl','se','ace','mi','km','nah','rue','nds-nl','nv','vls','bh','gan','crh','sc','vep','bo','glk','co','so','tk','fiu-vro','myv','lrc','kv','csb','as','gv','udm','zea','ay','ie','pcd','sn','ug','nrm','stq','lez','kw','lad','mwi','gn','gom','rm','lij','ab','koi','mt','fur','frp','dsb','haw','lo','ang','ln','lfn','ext','dv','cbk-zam','dty','kab','ksh','gag','olo','pi','pag','pfl','av','ha','bxr','xal','krc','pap','gor','kaa','bjn','za','pdc','rw','tyv','to','kl','nov','jam','arc','kbd','tpi','kbp','tet','ig','ki','na','jbo','lbe','roa-rup','ty','mdf','kg','bi','wo','lg','srn','zu','tcy','chr','ltg','sm','inh','om','xh','pih','cu','rmy','tw','bm','tn','atj','rn','chy','got','ts','tum','ak','st','sat','ch','ny','pnt','ss','fj','ady','iu','ee','ks','ve','ik','sg','ff','dz','ti','din'];  
	let langs = wikiList ;
	let l = langs.map(x=>wikiLink(x,'wikipedia'));
	return l
  }

  wiktionary () {
   const dictList = ['en','mg','fr','sh','es','zh','ru','de','lt','nl','sv','pl','ku','el','it','ta','fi','tr','hu','ko','io','kn','ca','pt','vi','hy','chr','sr','hi','ja','ro','no','th','ml','id','et','uz','li','my','or','te','fa','eo','cs','ar','jv','eu','az','gl','da','lo','br','uk','oc','hr','fj','tg','bg','ps','simple','cy','vo','is','wa','zh-min-nan','sk','scn','ast','la','he','af','tl','sw','fy','ky','nn','co','lv','pnb','mn','ka','sl','sq','nds','nah','lb','bs','sa','kk','tk','km','sm','mk','hsb','bn','be','pa','ms','ga','ur','an','wo','vec','ang','tt','sd','gn','mr','so','csb','ug','gd','mt','st','roa-rup','si','ia','ie','kl','mi','ay','jbo','fo','ln','zu','na','gu','gv','kw','rw','ts','ne','om','qu','ss','su','ha','iu','am','dv','za','tpi','ik','yi','ti','sg','tn','ks','as','mo','pi'];
   let langs = dictList;
	let l = langs.map(x=>wikiLink(x,'wiktionary'))
	return l
  }
  wikinews () {
    const newsList = ['sr','en','fr','ru','de','pt','pl','es','it','zh','ar','cs','ca','nl','el','ta','sv','uk','fa','ro','tr','ja','sq','li','no','eo','hu','ko','fi','bs','he','bg','th','sd'];
	let langs = newsList;
	let l = langs.map(x=>wikiLink(x,'wikinews'))
	return l
  }
  wikibooks () {
	const booksList = ['en','hu','de','fr','pt','ja','it','nl','es','pl','th','he','id','fi','sq','fa','zh','ca','ru','az','vi','da','ko','sv','gl','sr','cs','hr','ba','no','ar','tr','ta','sa','sk','uk','is','ro','eo','hi','bn','simple','mk','bg','ka','ms','lt','tt','li','el','ur','sl','km','ang','tl','kk','et','be','ml','oc','lv','ia','ne','hy','eu','pa','la','cv','tg','fy','ie','ku','bs','cy','te','af','zh-min-nan','mr','mg','ky','sw','als','ast','uz','co','qu','got','za','nah','su','vo','kn','wa','na','zu','nds','ps','xh'];
	let langs = booksList;
	let l = langs.map(x=>wikiLink(x,'wikibooks'))
	return l
  }
  wikivoyage () {
	const voyageList = ['en','de','fa','it','fr','pl','ru','nl','pt','zh','es','he','fi','vi','sv','el','ro','uk','bn','ps','hi'];
	let langs = voyageList;
	let l = langs.map(x=>wikiLink(x,'wikibooks'))
	return l
  }
  wikiquote () {
	const quoteList = ['en','it','pl','ru','cs','fa','de','pt','es','uk','sk','fr','bs','he','fi','tr','ca','sl','lt','th','bg','eo','zh','hy','hr','el','nn','id','az','ar','su','hu','li','sv','ko','nl','ja','et','la','simple','gu','sr','gl','ur','te','ta','cy','be','no','ml','vi','kn','ku','sah','eu','ro','hi','ka','da','sa','is','sq','mr','br','af','uz','ast','ang','lb','zh-min-nan','am','co','wo','ky','kk','ga'];
    let langs = quoteList;
	let l = langs.map(x=>wikiLink(x,'wikiquote'))
	return l
  }
  wikisource () {
	const sourceList = ['en','pl','ru','de','fr','zh','he','it','es','','ar','cs','pt','fa','hu','gu','ml','ko','sv','bn','sr','sa','sl','te','uk','el','ro','fi','hy','ja','vi','th','az','ta','ca','br','kh','nl','hr','la','is','no','vec','eo','tr','et','be','mk','da','pms','yi','id','bg','li','mr','as','or','bs','gl','sah','lt','sk','eu','pa','cy','zh-min-nan','ht','fo','ang'];
	let langs = sourceList;
	let l = langs.map(x=>wikiLink(x,'wikisource'))
	return l
  }
  wikiversity () {
	const versityList = ['de','en','fr','beta','ru','it','cs','pt','es','ar','zh','sv','fi','sl','el','hi','ko','ja'];
    let langs = versityList;
	let l = langs.map(x=>wikiLink(x,'wikiversity'))
	return l
  }
  wikicommons () {
    return [wikiLink('','commons.wikimedia')];
  }
  goodreads () {
	 return ["https://www.goodreads.com/book/random"];
  }
  full () {
	let fullList = ['wikipedia','wiktionary','wikiquote','wikinews','wikisource','wikibooks','wikiversity','wikivoyage','wikicommons','goodreads']
    let item = this[randomItem(fullList)]();
    return item
  }
}

function openLink (elem) {
   window.open(randomItem(linkLists[elem]), '_blank')
}

function redoLinkLists(){
	let itemNames = ['wikipedia','wiktionary','wikiquote','wikinews','wikisource','wikibooks','wikiversity','wikivoyage','wikicommons','goodreads']
	itemNames.forEach((e)=>{
		linkLists[e]=LinkGenerator.prototype[e]();
	});
  itemNames.map((elem) => {
	  document.getElementById(elem).addEventListener('click', (e) => {
		  openLink(elem)
		  e.preventDefault()
		  })
  })
}

function bodyLoad () {
	redoLinkLists()
  document.getElementById('full').addEventListener('click',(e)=>{
	window.open(randomItem(LinkGenerator.prototype.full()), '_blank')
	e.preventDefault();
  });
}
