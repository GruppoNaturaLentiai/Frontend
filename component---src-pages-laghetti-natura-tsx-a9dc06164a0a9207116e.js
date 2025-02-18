"use strict";(self.webpackChunksite_gruppo_natura_lentiai=self.webpackChunksite_gruppo_natura_lentiai||[]).push([[777],{4190:function(e,a,t){t.d(a,{Z:function(){return s}});var i=t(8032),n=t(7294),o=t(9991),r=t(5086);const l=r.default.div.withConfig({displayName:"styled__ImgWrapper",componentId:"sc-1gkdh7f-0"})(["text-align:center;"," "," "," ",""],(e=>{let{$maxWidth:a}=e;return a?`max-width: ${a}px;`:""}),(e=>{let{$maxHeight:a}=e;return a?`max-width: ${a}px;`:""}),(e=>{let{$minWidth:a}=e;return a?`min-width: ${a}px;`:""}),(e=>{let{$minHeight:a}=e;return a?`min-width: ${a}px;`:""})),c=(0,r.default)(o.P3).withConfig({displayName:"styled__ImageDescription",componentId:"sc-1gkdh7f-1"})(["white-space:break-spaces;"]);var s=e=>{let{title:a,description:t,alt:r,image:s,copyright:d,minHeight:p,minWidth:m,maxHeight:u,maxWidth:g,noDescription:h,noCopyright:f}=e;return n.createElement(l,{$maxHeight:u,$maxWidth:g,$minHeight:p,$minWidth:m},a&&n.createElement(o.H3,{dangerouslySetInnerHTML:{__html:a}}),n.createElement(i.G,{image:s,alt:r,style:{borderRadius:"8px",marginTop:4}}),f?null:d?n.createElement(o.P4,null,"Foto di ",d):n.createElement(o.P4,null,"Autore sconosciuto"),!h&&n.createElement(c,{style:{maxWidth:s.width},dangerouslySetInnerHTML:{__html:t}}))}},2401:function(e,a,t){t.d(a,{Z:function(){return y}});var i=t(5785),n=t(7294),o=t(9991),r=t(4190),l=t(5086),c=t(8916);const s=l.default.div.withConfig({displayName:"styled__MainWrapper",componentId:"sc-1yiv2gq-0"})(["display:flex;flex-direction:column;gap:20px;padding:32px;justify-content:center;@media (min-width:","px){display:none;}@media (max-width:","px){padding:24px;}@media (max-width:","px){padding:16px;}"],c.dT.bigtablet+1,c.dT.tablet,c.dT.mobile),d=l.default.div.withConfig({displayName:"styled__ImageWrapper",componentId:"sc-1yiv2gq-1"})(["display:flex;gap:40px;flex-wrap:wrap;justify-content:center;"]),p=l.default.div.withConfig({displayName:"styled__TwoWrapperMobile",componentId:"sc-1yiv2gq-2"})(["@media (min-width:","px){display:none;}min-height:100px;"],c.dT.bigtablet+1),m=((0,l.default)(o.P2).withConfig({displayName:"styled__ContinueReading",componentId:"sc-1yiv2gq-3"})(["color:",";"],c.O9.green.green700),l.default.div.withConfig({displayName:"styled__TextWrapper",componentId:"sc-1yiv2gq-4"})(["position:relative;overflow:hidden;max-height:",";@media (max-width:","px){max-height:",";}transition:max-height 0.8s ease-in-out;"],(e=>{let{$isExpanded:a}=e;return a?"2000px":"4.5em"}),c.dT.mobile,(e=>{let{$isExpanded:a}=e;return a?"2000px":"6em"}))),u=l.default.div.withConfig({displayName:"styled__TextContainer",componentId:"sc-1yiv2gq-5"})(["position:relative;"]),g=l.default.div.withConfig({displayName:"styled__FadeOut",componentId:"sc-1yiv2gq-6"})([""," position:absolute;bottom:0;left:0;right:0;height:2em;background:linear-gradient(to bottom,transparent,",");pointer-events:none;opacity:",";transition:opacity 0.8s ease-in-out;"],(e=>{let{$isShort:a}=e;return a&&"display:none;"}),c.O9.green.green500,(e=>{let{$isExpanded:a}=e;return a?0:1})),h=l.default.div.withConfig({displayName:"styled__ReadMoreWrapper",componentId:"sc-1yiv2gq-7"})([""," cursor:pointer;position:absolute;top:2.3em;z-index:10;justify-self:anchor-center;"," h3{color:",";opacity:0;animation:fadeIn 1s ease-in-out forwards;animation-delay:0.5s;}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@media (min-width:","px){top:2em;}@media (max-width:","px){top:4.2em;}"],(e=>{let{$isShort:a}=e;return a&&"display:none;"}),(e=>{let{$isExpanded:a}=e;return a&&"position: unset;"}),c.O9.green.green950,c.dT.tablet+1,c.dT.mobile),f=(e,a,t,i)=>{const r=e.content.join(" <br /> ");if(!r)return n.createElement(o.H2,{key:a},"Text not found");const l=a===i,c=()=>{t(a===i?"":a)},s=r.length<=135,{font:d,position:p,collapsible:f}=e,v=((e,a,t)=>i=>{const r={$textAlign:t,$font:a,dangerouslySetInnerHTML:{__html:i}};switch(e){case"h1":return n.createElement(o.H1,r);case"h2":return n.createElement(o.H2,r);case"h3":return n.createElement(o.H3,r);case"h4":return n.createElement(o.H4,r);case"h5":return n.createElement(o.H5,r);case"h6":return n.createElement(o.H6,r);case"h7":return n.createElement(o.H7,r);case"p1":case"p4":case"p5":return n.createElement(o.P1,r);case"p2":return n.createElement(o.P2,r);case"p3":return n.createElement(o.P3,r);case"note":return n.createElement(o.oA,r);default:return n.createElement(o.H2,null,"Text size not found")}})(e.size,d,p);return!1===f?n.createElement(n.Fragment,{key:a},v(r)):n.createElement(m,{$isExpanded:l,key:a},n.createElement(u,{onClick:c},v(r)),n.createElement(g,{$isExpanded:l,$isShort:s}),n.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},n.createElement(o.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")))},v=(e,a,t)=>(l,c)=>{const s=c.toString();switch(l.type){case"image":return((e,a,t)=>{const i=e.content.map((e=>a.find((a=>a.fileName===e))));return n.createElement(d,{key:t},i.map(((a,t)=>a?a.image&&n.createElement(r.Z,{key:t,title:a.title,description:a.description,alt:a.alt||a.description,image:a.image,copyright:a.copyright,minHeight:e.minHeight,minWidth:e.minWidth,maxHeight:e.maxHeight,maxWidth:e.maxWidth,noDescription:e.noDescription,noCopyright:e.noCopyright}):n.createElement(o.H2,{key:`img-${t}`},"Image not found"))))})(l,e,s);case"text":return f(l,s,a,t);case"two-columns":{const o=l,[r,c]=o.content;return n.createElement(p,{key:s},[].concat((0,i.Z)(r),(0,i.Z)(c)).map(((i,n)=>v(e,a,t)(i,`two-cols-seq-${s}-${n}`))))}default:return n.createElement(o.H1,{key:s},"Content type Not Found")}};var y=e=>{let{pageData:a,images:t}=e;const{0:i,1:o}=(0,n.useState)("");return n.createElement(s,null,a.map(v(t,o,i)))}},4953:function(e,a,t){t.d(a,{Z:function(){return g}});var i=t(7294),n=t(4190),o=t(5086),r=t(8916);const l=o.default.div.withConfig({displayName:"styled__MainWrapper",componentId:"sc-114nfr7-0"})(["display:flex;flex-direction:column;gap:20px;padding:32px;justify-content:center;@media (max-width:","px){display:none;}"],r.dT.bigtablet),c=o.default.div.withConfig({displayName:"styled__ImageWrapper",componentId:"sc-114nfr7-1"})(["display:flex;gap:40px;flex-wrap:wrap;justify-content:center;"]),s=o.default.div.withConfig({displayName:"styled__TwoColsWrapper",componentId:"sc-114nfr7-2"})(["display:flex;@media (max-width:","){display:none;}&:nth-child(odd){flex-direction:row;}&:nth-child(even){flex-direction:row-reverse;}"],r.eq.bigtablet),d=o.default.div.withConfig({displayName:"styled__LeftTwoColsWrapper",componentId:"sc-114nfr7-3"})(["flex:1;padding:16px;align-content:center;justify-items:center;"]),p=o.default.div.withConfig({displayName:"styled__RightTwoColsWrapper",componentId:"sc-114nfr7-4"})(["flex:1;padding:16px;align-content:center;justify-items:center;"]);var m=t(9991);const u=e=>(a,t)=>{const o=t.toString();switch(a.type){case"image":const t=a.content.map((a=>e.find((e=>e.fileName===a))));return i.createElement(c,{key:o},t.map(((e,t)=>e?e.image&&i.createElement(n.Z,{key:t,title:e.title,description:e.description,alt:e.alt||e.description,image:e.image,copyright:e.copyright,minHeight:a.minHeight,minWidth:a.minWidth,maxHeight:a.maxHeight,maxWidth:a.maxWidth,noDescription:a.noDescription,noCopyright:a.noCopyright}):i.createElement(m.H2,{key:`img-${t}`},"Image not found"))));case"text":const r=a,l=r.content.join(" <br /> ");if(!l)return i.createElement(m.H2,{key:o},"Text not found");const{font:g,position:h,size:f}=r,v=((e,a,t)=>n=>{const o={$textAlign:t,$font:a,dangerouslySetInnerHTML:{__html:n}};switch(e){case"h1":return i.createElement(m.H1,o);case"h2":return i.createElement(m.H2,o);case"h3":return i.createElement(m.H3,o);case"h4":return i.createElement(m.H4,o);case"h5":return i.createElement(m.H5,o);case"h6":return i.createElement(m.H6,o);case"h7":return i.createElement(m.H7,o);case"p1":case"p4":case"p5":return i.createElement(m.P1,o);case"p2":return i.createElement(m.P2,o);case"p3":return i.createElement(m.P3,o);case"note":return i.createElement(m.oA,o);default:return i.createElement(m.H2,null,"Text size not found")}})(f,g,h);return i.createElement(i.Fragment,null,v(l));case"two-columns":{const t=a,[n,r]=t.content;return i.createElement(s,{key:o},i.createElement(d,null,n.map(((a,t)=>u(e)(a,`two-cols-left-${t}`)))),i.createElement(p,null,r.map(((a,t)=>u(e)(a,`two-cols-right-${t}`)))))}default:return i.createElement(m.H1,{key:o},"Content type Not Found")}};var g=e=>{let{pageData:a,images:t}=e;return i.createElement(l,null,a.map(u(t)))}},7028:function(e,a,t){t.r(a),t.d(a,{Head:function(){return m},default:function(){return p}});var i=t(1883),n=t(8032),o=t(7294),r=JSON.parse('{"C":[{"type":"text","content":["La valle del torrente Rimonta – Aspetti naturalistici"],"size":"h1","font":"Caveat"},{"type":"text","content":["PREMESSA"],"size":"h2","font":"Caveat"},{"type":"text","content":["Osservando i monti che circondano il paese di Lentiai dalla destra del fiume Piave, essi appaiono come colline tranquille, coperte di boschi e praterie. A differenza delle Dolomiti, non presentano aspre pareti rocciose o strapiombi, ma ricordano i dolci pendii degli Appennini, con lunghe valli ricoperte da estese faggete.","Questa impressione iniziale si rivela però ingannevole. Basta avvicinarsi, camminare lungo un torrente o addentrarsi nella fitta foresta per scoprire una sorprendente varietà di morfologie, habitat e ambienti. Ogni angolo di queste montagne nasconde una ricchezza naturale inaspettata.","bacino idrografico del torrente è vasto: a ovest raggiunge il Monte Garda (1332 m), mentre a sud il crinale oltre i 1500 m separa la provincia di Belluno da quella di Treviso, includendo cime come il Monte Mariech e il Monte Prendol. A est, il bacino tocca il Col di Varnada (1285 m) e il Monte Boz (1236 m).","Il torrente prende il nome di \\"Rimonta\\" solo dopo aver ricevuto le acque provenienti dalla Val Pissador, abitata fino agli anni ’60 del Novecento, e dalla Val dei Serrai. A completare il suo corso, si aggiunge dalla destra idrografica il contributo del torrente che scende dalla Val Fontane."],"size":"p1"},{"type":"image","content":["rimonta-bacino.png"]},{"type":"text","content":["I BOSCHI"],"size":"h2","font":"Caveat"},{"type":"text","content":["Il paesaggio vegetale della zona montana è dominato dalle faggete, che si estendono senza interruzioni lungo le valli profonde. Questi boschi, tradizionalmente sfruttati, oggi ospitano bellissime fustaie, come quelle presenti nella Foresta Demaniale Regionale della Sinistra Piave. Questa area protetta, gestita dalla regione, copre circa 1550 ettari nei comuni di Borgo Valbelluna, Valdobbiadene e Belluno.","La gestione forestale di questi territori ha radici antiche, tramandate sia nella memoria degli anziani che nella toponomastica. Un esempio significativo è La Stua, località che ricorda le ingegnose fluitazioni di legname del passato. Questi sbarramenti (“stue”) venivano costruiti in punti morfologicamente favorevoli, scelti con grande competenza, anche se spesso inconsapevole, dai nostri predecessori. La Stua rimane uno dei pochi luoghi adatti per attraversare il torrente.","Nelle aree più periferiche della valle, il paesaggio forestale cambia. Qui prevalgono boschi di carpino nero e orniello (orno-ostrieti), ma si trovano anche aceri-frassineti, aceri-tiglieti e altre combinazioni boschive.","Le foreste indisturbate della valle del Torrente Rimonta ospitano una fauna straordinariamente ricca. Tra gli uccelli si contano rapaci diurni come il Falco pecchiaiolo, l’Astore e lo Sparviere, rapaci notturni come l’Allocco, il Gufo comune e la Civetta capogrosso, oltre a picchi (nero e rosso maggiore) e passeriformi come Scricciolo, Pettirosso, Tordo bottaccio e Ciuffolotto. Tra i mammiferi si trovano Scoiattolo, Ghiro, Volpe, Tasso, Faina, Martora, Cinghiale, Capriolo e il Cervo. Inoltre, il Lupo è recentemente ricomparso in queste valli."],"size":"p1"},{"type":"text","content":["GLI AMBIENTI AGRARI"],"size":"h2","font":"Caveat"},{"type":"text","content":["I crinali delle montagne sono caratterizzati da prati e pascoli di grande valore floristico e paesaggistico, come quelli della dorsale Monte Artent – Monte Garda, noti per le spettacolari fioriture di narcisi. Questi ambienti ospitano anche pozze d’alpeggio, fondamentali per la biodiversità erpetologica, con specie come il Tritone alpestre, il Tritone crestato italiano, l’Ululone dal ventre giallo, il Rospo comune, la Rana temporaria, la Rana verde e la Natrice dal collare. Tra gli uccelli che sorvolano queste aree spiccano l’Aquila reale e il Gheppio.","Il bacino del Torrente Rimonta è stato storicamente caratterizzato da una diffusa presenza di insediamenti rurali, con casere e piccoli borghi. Un esempio significativo è la località Portico, dove una strada attraversa interamente un fabbricato. Oggi, molti di questi insediamenti sono abbandonati, e la vegetazione arbustiva (principalmente nocciolo) e arborea (carpino bianco, acero di monte, frassino maggiore) ha riconquistato gli spazi un tempo coltivati o dedicati a prati falciati.","Il paesaggio agrario tradizionale, fatta eccezione per i pascoli montani, è in gran parte scomparso. Tuttavia, in alcune aree si trovano ancora esempi ben conservati, come Cordellon, che rappresenta un avamposto pittoresco di questo patrimonio.","Gli ambienti agrari, sia gestiti che abbandonati, ospitano una fauna variegata. Tra i rettili si trovano l’Orbettino, il Ramarro occidentale, la Lucertola muraiola, il Colubro liscio, il Biacco nero, il Saettone comune e la Vipera comune. Tra gli uccelli vi sono il Picchio verde, il Codirosso comune, il Merlo, il Pigliamosche, il Codibugnolo, la Cinciarella, la Cinciallegra e il Picchio muratore. Tra i mammiferi si annoverano il Riccio occidentale, la Lepre comune, il Topo selvatico dal dorso striato, la Volpe, il Tasso, la Faina e il Capriolo."],"size":"p1"},{"type":"two-columns","content":[[{"type":"image","content":["rimonta-pettirosso.png"]}],[{"type":"image","content":["rimonta-cervo.png"]}]]},{"type":"text","content":["IL TORRENTE"],"size":"h2","font":"Caveat"},{"type":"two-columns","content":[[{"type":"image","content":["rimonta-canyon.png"],"maxHeight":350}],[{"type":"text","content":["Nonostante per gran parte del suo corso il Torrente Rimonta sia privo d’acqua, esso rappresenta un ambiente di straordinario interesse naturalistico. Formazioni geologiche uniche, come il grande blocco di basalto trasportato dai ghiacciai del Piave, l’azione erosiva dell’acqua e l’assenza di urbanizzazione creano paesaggi spettacolari e incontaminati.","Poco a valle di La Stua, dopo le casere Ceccati, si trova la cascata della Pisòta, con due salti d’acqua spettacolari. Raggiungibile attraverso un sentiero esposto, questa cascata, alta circa 40 metri, si getta in una profonda marmitta smeraldina, offrendo uno spettacolo naturale di rara bellezza.","Il torrente prosegue attraversando strette forre con pareti alte fino a 50 metri, spesso separate da meno di un metro. Questi ambienti, accessibili solo agli appassionati di canyoning, si trasformano in inverno in scenari ancora più suggestivi, con cascate di ghiaccio che accentuano il fascino selvaggio del luogo.","Oltre le forre, il torrente raggiunge il borgo di Cordellon, un tempo vivace con oltre 200 abitanti, scuole, una parrocchia e un negozio. Oggi, il borgo ospita circa dieci persone e un locale, “Ai Gir”, dove si possono gustare piatti della tradizione locale.","Proseguendo verso valle, il torrente riceve le acque della Val d’Arc e attraversa forre minori. Qui si trovano le briglie costruite dopo la Seconda Guerra Mondiale per contenere l’erosione, che però hanno favorito l’infiltrazione dell’acqua nel substrato ghiaioso. In località La Scala e Va, restano tracce di antiche opere idrauliche, come mulini e un acquedotto incompiuto.","Le acque cristalline del torrente ospitano una fauna ricca e diversificata. Ululoni dal ventre giallo, Scazzoni e Trote fario popolano le pozze, mentre Rospi comuni, Rane montane e Salamandre pezzate vi si riproducono in primavera. Ballerine gialle e Merli acquaioli vivono e nidificano lungo il corso d’acqua, accompagnati dai canti primaverili di Scriccioli, Pettirossi, Capinere e Merli provenienti dai boschi circostanti."],"size":"p1"}]]},{"type":"text","content":["IL BIOTOPO DEI LAGHETTI DELLA RIMONTA"],"size":"h2","font":"Caveat"},{"type":"text","content":["A valle di La Scala, il torrente attraversa ancora ambienti di forra caratterizzati da rocce stillicidiose coperte di felci, incise nella scaglia rossa, e prosegue verso Bardies, dove confluisce nel Piave. Qui si trova il noto biotopo dei Laghetti della Rimonta, alimentato dalle acque del torrente Forada e da risorgive del Piave.","Quest’area naturale, situata alla confluenza del Rimonta con il Piave, è composta da due depressioni limose trattenute da depositi alluvionali, ed è stata riconosciuta come oasi venatoria dalla Provincia di Belluno (circa 100 ettari). È inclusa nel SIC IT3230088 “Fiume Piave dai Maserot alle grave di Pederobba” della Rete Natura 2000, a testimonianza del suo valore naturalistico. Un percorso attrezzato, arricchito da opere d\'arte\', permette di visitare il biotopo.","Le risorgive che alimentano oggi i Laghetti della Rimonta un tempo confluivano, insieme alle acque del Rimonta, in una roggia usata per alimentare gli opifici della località “Molin novo” di Cesana a Lentiai. Ancora oggi, nella piana di Lentiai, è visibile parte del percorso della roggia.","Il tratto finale del torrente appare spesso asciutto, con un letto ghiaioso che in passato era mantenuto pulito dall’alternanza di magre e piene naturali. Oggi, a causa di cambiamenti climatici e squilibri ambientali, questi processi sembrano compromessi, alterando l’equilibrio ecologico del torrente."],"size":"p1"},{"type":"text","content":["Michele Cassol"],"size":"h2","font":"Cedarville Cursive","position":"right"},{"type":"text","content":["<i>Si ringraziano Orfeo Dal Piva, Riccardo Deon e Stefano Vendrami per le informazioni fornite</i>"],"size":"p2","collapsible":false},{"type":"image","content":["rimonta-panorama.jpg"]}]}'),l=t(8397),c=t(4953),s=t(9991),d=t(2401);var p=()=>{const e=(0,i.useStaticQuery)("2502100455"),a=r.C;if(!a)return o.createElement(l.Z,null,o.createElement(s.H1,null,"Contenuto non trovato!"));const t=e.allImageMetadataJson.nodes,p=e.allFile.nodes,m=t.map((e=>{const a=p.find((a=>a.base===e.fileName));return{...e,image:a?(0,n.c)(a.childImageSharp):null}}));return o.createElement(l.Z,null,o.createElement(c.Z,{pageData:a,images:m}),o.createElement(d.Z,{pageData:a,images:m}))};const m=()=>o.createElement("title",null,"Laghetti della Rimonta - Natura")}}]);
//# sourceMappingURL=component---src-pages-laghetti-natura-tsx-a9dc06164a0a9207116e.js.map