"use strict";(self.webpackChunksite_gruppo_natura_lentiai=self.webpackChunksite_gruppo_natura_lentiai||[]).push([[331],{4190:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(8032),a=i(7294),r=i(9991),o=i(5086);const l=o.default.div.withConfig({displayName:"styled__ImgWrapper",componentId:"sc-1gkdh7f-0"})(["text-align:center;"," "," "," ",""],(e=>{let{$maxWidth:t}=e;return t?`max-width: ${t}px;`:""}),(e=>{let{$maxHeight:t}=e;return t?`max-width: ${t}px;`:""}),(e=>{let{$minWidth:t}=e;return t?`min-width: ${t}px;`:""}),(e=>{let{$minHeight:t}=e;return t?`min-width: ${t}px;`:""})),c=(0,o.default)(r.P3).withConfig({displayName:"styled__ImageDescription",componentId:"sc-1gkdh7f-1"})(["white-space:break-spaces;"]);var s=e=>{let{title:t,description:i,alt:o,image:s,copyright:d,minHeight:p,minWidth:m,maxHeight:u,maxWidth:g,noDescription:h,noCopyright:f}=e;return a.createElement(l,{$maxHeight:u,$maxWidth:g,$minHeight:p,$minWidth:m},a.createElement(r.H3,{dangerouslySetInnerHTML:{__html:t}}),a.createElement(n.G,{image:s,alt:o,style:{borderRadius:"8px",marginTop:4}}),f?null:d?a.createElement(r.P4,null,"Foto di ",d):a.createElement(r.P4,null,"Autore sconosciuto"),!h&&a.createElement(c,{style:{maxWidth:s.width},dangerouslySetInnerHTML:{__html:i}}))}},2401:function(e,t,i){i.d(t,{Z:function(){return y}});var n=i(5785),a=i(7294),r=i(9991),o=i(4190),l=i(5086),c=i(8916);const s=l.default.div.withConfig({displayName:"styled__MainWrapper",componentId:"sc-1yiv2gq-0"})(["display:flex;flex-direction:column;gap:20px;padding:32px;justify-content:center;@media (min-width:","px){display:none;}@media (max-width:","px){padding:24px;}@media (max-width:","px){padding:16px;}"],c.dT.bigtablet+1,c.dT.tablet,c.dT.mobile),d=l.default.div.withConfig({displayName:"styled__ImageWrapper",componentId:"sc-1yiv2gq-1"})(["display:flex;gap:40px;flex-wrap:wrap;justify-content:center;"]),p=l.default.div.withConfig({displayName:"styled__TwoWrapperMobile",componentId:"sc-1yiv2gq-2"})(["@media (min-width:","px){display:none;}min-height:100px;"],c.dT.bigtablet+1),m=((0,l.default)(r.P2).withConfig({displayName:"styled__ContinueReading",componentId:"sc-1yiv2gq-3"})(["color:",";"],c.O9.green.green700),l.default.div.withConfig({displayName:"styled__TextWrapper",componentId:"sc-1yiv2gq-4"})(["position:relative;overflow:hidden;max-height:",";transition:max-height 0.8s ease-in-out;"],(e=>{let{$isExpanded:t}=e;return t?"2000px":"4.5em"}))),u=l.default.div.withConfig({displayName:"styled__TextContainer",componentId:"sc-1yiv2gq-5"})(["position:relative;"]),g=l.default.div.withConfig({displayName:"styled__FadeOut",componentId:"sc-1yiv2gq-6"})([""," position:absolute;bottom:0;left:0;right:0;height:2em;background:linear-gradient(to bottom,transparent,",");pointer-events:none;opacity:",";transition:opacity 0.8s ease-in-out;"],(e=>{let{$isShort:t}=e;return t&&"display:none;"}),c.O9.green.green500,(e=>{let{$isExpanded:t}=e;return t?0:1})),h=l.default.div.withConfig({displayName:"styled__ReadMoreWrapper",componentId:"sc-1yiv2gq-7"})([""," cursor:pointer;position:absolute;top:2.3em;z-index:10;justify-self:anchor-center;"," h3{color:",";opacity:0;animation:fadeIn 1s ease-in-out forwards;animation-delay:0.5s;}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}"],(e=>{let{$isShort:t}=e;return t&&"display:none;"}),(e=>{let{$isExpanded:t}=e;return t&&"position: unset;"}),c.O9.green.green950),f=(e,t,i)=>(l,c)=>{const s=c.toString();switch(l.type){case"image":return((e,t,i)=>{const n=e.content.map((e=>t.find((t=>t.fileName===e))));return a.createElement(d,{key:i},n.map(((t,i)=>t?t.image&&a.createElement(o.Z,{key:i,title:t.title,description:t.description,alt:t.alt||t.description,image:t.image,copyright:t.copyright,minHeight:e.minHeight,minWidth:e.minWidth,maxHeight:e.maxHeight,maxWidth:e.maxWidth,noDescription:e.noDescription,noCopyright:e.noCopyright}):a.createElement(r.H2,{key:`img-${i}`},"Image not found"))))})(l,e,s);case"text":return((e,t,i,n)=>{const o=e.content.join(" <br /> ");if(!o)return a.createElement(r.H2,{key:t},"Text not found");const l=t===n,c=()=>{i(t===n?"":t)},s=o.length<320,{font:d,position:p}=e;switch(e.size){case"h1":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H1,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h2":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H2,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h3":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H3,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h4":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H4,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h5":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H5,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h6":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H6,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"h7":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.H7,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"p1":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.P1,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"p2":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.P2,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"p3":return a.createElement(a.Fragment,null,a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.P3,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più"))));case"p4":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.P4,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"p5":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.P5,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));case"note":return a.createElement(m,{$isExpanded:l,key:t},a.createElement(u,{onClick:c},a.createElement(r.oA,{$textAlign:p,$font:d,dangerouslySetInnerHTML:{__html:o}})),a.createElement(g,{$isExpanded:l,$isShort:s}),a.createElement(h,{$isExpanded:l,$isShort:s,onClick:c},a.createElement(r.H3,{key:l?"chiudi":"leggi-di-piu"},l?"Chiudi":"Leggi di più")));default:return a.createElement(r.H2,{key:t},"Text size not found")}})(l,s,t,i);case"two-columns":{const r=l,[o,c]=r.content,d=[].concat((0,n.Z)(o),(0,n.Z)(c)).filter((e=>{let{type:t}=e;return"text"===t})),m=[].concat((0,n.Z)(o),(0,n.Z)(c)).filter((e=>{let{type:t}=e;return"image"===t}));return a.createElement(p,{key:s},[].concat((0,n.Z)(m),(0,n.Z)(d)).map(((n,a)=>f(e,t,i)(n,`two-cols-seq-${s}-${a}`))))}default:return a.createElement(r.H1,{key:s},"Content type Not Found")}};var y=e=>{let{pageData:t,images:i}=e;const{0:n,1:r}=(0,a.useState)("");return a.createElement(s,null,t.map(f(i,r,n)))}},4953:function(e,t,i){i.d(t,{Z:function(){return g}});var n=i(7294),a=i(4190),r=i(5086),o=i(8916);const l=r.default.div.withConfig({displayName:"styled__MainWrapper",componentId:"sc-114nfr7-0"})(["display:flex;flex-direction:column;gap:20px;padding:32px;justify-content:center;@media (max-width:","px){display:none;}"],o.dT.bigtablet),c=r.default.div.withConfig({displayName:"styled__ImageWrapper",componentId:"sc-114nfr7-1"})(["display:flex;gap:40px;flex-wrap:wrap;justify-content:center;"]),s=r.default.div.withConfig({displayName:"styled__TwoColsWrapper",componentId:"sc-114nfr7-2"})(["display:flex;flex-direction:row;@media (max-width:","){display:none;}"],o.eq.bigtablet),d=r.default.div.withConfig({displayName:"styled__LeftTwoColsWrapper",componentId:"sc-114nfr7-3"})(["flex:1;padding:16px;align-content:center;justify-items:center;"]),p=r.default.div.withConfig({displayName:"styled__RightTwoColsWrapper",componentId:"sc-114nfr7-4"})(["flex:1;padding:16px;align-content:center;justify-items:center;"]);var m=i(9991);const u=e=>(t,i)=>{const r=i.toString();switch(t.type){case"image":const i=t.content.map((t=>e.find((e=>e.fileName===t))));return n.createElement(c,{key:r},i.map(((e,i)=>e?e.image&&n.createElement(a.Z,{key:i,title:e.title,description:e.description,alt:e.alt||e.description,image:e.image,copyright:e.copyright,minHeight:t.minHeight,minWidth:t.minWidth,maxHeight:t.maxHeight,maxWidth:t.maxWidth,noDescription:t.noDescription,noCopyright:t.noCopyright}):n.createElement(m.H2,{key:`img-${i}`},"Image not found"))));case"text":const o=t,l=o.content.join(" <br /> ");if(!l)return n.createElement(m.H2,{key:r},"Text not found");const{font:g,position:h}=o;switch(o.size){case"h1":return n.createElement(m.H1,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h2":return n.createElement(m.H2,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h3":return n.createElement(m.H3,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h4":return n.createElement(m.H4,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h5":return n.createElement(m.H5,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h6":return n.createElement(m.H6,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"h7":return n.createElement(m.H7,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"p1":return n.createElement(m.P1,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"p2":return n.createElement(m.P2,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"p3":return n.createElement(m.P3,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"p4":return n.createElement(m.P4,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"p5":return n.createElement(m.P5,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});case"note":return n.createElement(m.oA,{key:r,$textAlign:h,$font:g,dangerouslySetInnerHTML:{__html:l}});default:return n.createElement(m.H2,{key:r},"Text size not found")}case"two-columns":{const i=t,[a,o]=i.content;return n.createElement(s,{key:r},n.createElement(d,null,a.map(((t,i)=>u(e)(t,`two-cols-left-${i}`)))),n.createElement(p,null,o.map(((t,i)=>u(e)(t,`two-cols-right-${i}`)))))}default:return n.createElement(m.H1,{key:r},"Content type Not Found")}};var g=e=>{let{pageData:t,images:i}=e;return n.createElement(l,null,t.map(u(i)))}},6271:function(e,t,i){i.r(t),i.d(t,{Head:function(){return m},default:function(){return p}});var n=i(1883),a=i(8032),r=i(7294),o=JSON.parse('{"A":[{"type":"text","content":["Un po\' di storia..."],"size":"h1","font":"Caveat"},{"type":"text","content":["La frazione di Bardies, attualmente, conta circa 200 abitanti e difficilmente attira l’attenzione di chi percorre la provinciale della Sinistra Piave. In realtà, nel passato, il borgo in questione costituiva una realtà economica di tutto rispetto: la sua posizione rappresentava, infatti, una cerniera naturale fra il torrente Rimonta e l’asta del Piave. Per secoli l\'affluente in questione ha costituito uno scivolo naturale per far defluire il legname tagliato sulle sue rive, come ben ricordato dal toponimo “stua”: località posta nella Valle dei Boschi che indicava gli invasi artificiali che venivano realizzati per facilitare la fluitazione dei tronchi nei corsi d\'acqua di montagna."],"size":"p1"},{"type":"image","content":["CatastoAsburgo1818-1829.jpg"]},{"type":"text","content":["A sottolineare la vitalità e l’importanza del borgo in questione appaiono anche gli edifici che segnalano la presenza di due chiese. A questo proposito non possiamo far passare sotto silenzio l’esistenza di un piccolo gioiello artistico, l’unico dei due luoghi di culto arrivato sino a noi: la chiesetta dedicata a Sant’Antonio Abate, completamente ricoperta di affreschi. Se la nostra attenzione si concentra poi sul territorio circostante troviamo che, sulla strada che prosegue verso Mel e a poche centinaia di metri sopra l’abitato di Bardies, vi sono i resti di un ponte di ottima fattura che attraversa il torrente Forada. Difficile è risultato finora dargli un’attribuzione cronologica precisa: chi lo vuole romano, chi bizantino e chi medioevale."],"size":"p1"},{"type":"text","content":["Si ringrazia Angelo Zampol D\'Ortia per le informazioni e per il testo."],"font":"Caveat","size":"p2"},{"type":"image","content":["Bardies00.jpg","Bardies01.jpg"]},{"type":"text","content":["La Chiesa di Sant’Antonio Abate si trova nella frazione di Bardies, nel comune di Borgo Valbelluna, in provincia di Belluno. Questo luogo di culto, documentato sin dal 1515, è situato in una posizione suggestiva, all’ingresso del percorso naturalistico dei Laghetti della Rimonta, integrandosi perfettamente nel contesto paesaggistico circostante.","L’edificio è particolarmente noto per il suo ciclo di affreschi, che costituisce uno degli esempi più significativi di arte sacra del XVI secolo nel territorio bellunese. Gli affreschi narrano episodi della vita di Sant’Antonio Abate e sono suddivisi in diciotto riquadri. Questo straordinario lavoro è stato realizzato dai fratelli Giovanni e Marco da Mel tra il 1520 e il 1530, con possibili contributi di Cesare Vecellio, come indicato dalla sigla \\"C.V.P.\\" presente su uno dei riquadri.","La chiesa rappresenta un patrimonio artistico e storico di grande valore, testimoniando la ricchezza culturale della zona e il ruolo centrale che l’arte sacra ha avuto nello sviluppo del territorio.","Nel caso in cui si voglia visitare, invitiamo a spingere la porta che molte volte è lasciata socchiusa per proteggere dalle intemperie l\'ambiente interno e le opere d\'arte ivi contenute."],"size":"p1"},{"type":"image","content":["bardies-chiesa-00.png","bardies-chiesa-01.png"]},{"type":"text","content":["L’Antico Ponte Romano sul Torrente Forada, situato a Borgo Valbelluna (BL), è considerato di epoca romana, sebbene alcuni studiosi lo ritengano tardoantico o addirittura “bizantino”. Questo ponte, dalla struttura eccezionale, sembra collegarsi al vicino Castello di Zumelle e alla viabilità verso il valico del Praderadego, un percorso che alcuni identificano con la via Claudia Augusta, ma che più probabilmente era una scorciatoia utilizzata dagli antichi zattieri del Piave. In epoca tardoantica, tale percorso sarebbe stato trasformato in una semplice mulattiera, forse riutilizzata dai Bizantini nel VI secolo d.C. per garantire un collegamento sicuro tra Treviso e le fortificazioni di Mel, Feltre e Arten. A supporto di questa ipotesi vi sono ritrovamenti di monete e oggetti d’argento bizantini in queste aree, attribuibili all’epoca di Giustiniano I.","L’elevata qualità costruttiva del ponte e le somiglianze con altre opere del VI secolo suggeriscono un’origine bizantina, sebbene siano necessarie ulteriori verifiche archeologiche. Il ponte potrebbe far parte di un sistema infrastrutturale più ampio, destinato a consolidare la presenza bizantina nella regione. Il contesto storico e i ritrovamenti suggeriscono che la sua funzione fosse sia strategica che viaria, testimoniando l’importanza del controllo dei percorsi alpini e delle comunicazioni tra le diverse roccaforti.","Questo ponte si inserisce nella più ampia rete di attraversamenti lungo la via Claudia Augusta, che collegava Altino al Danubio attraverso ponti, guadi e traghetti. Tali infrastrutture non solo permettevano di superare le asperità delle Alpi, ma rispondevano anche alla necessità di collegare territori locali e interregionali. Inoltre, il ponte rappresentava un segno tangibile della magnificenza di Roma e della sua capacità di integrare i territori conquistati, conferendo utilità, decoro e prestigio alla viabilità imperiale."],"size":"p1"},{"type":"text","content":["Informazioni tratte dagli Atti del Convegno Via Claudia Augusta \\"Un’arteria alle origini dell’Europa: ipotesi, problemi, prospettive\\" - Feltre, 24–25 settembre 1999 (Vittorio Galliazzo)"],"font":"Caveat","size":"p2"},{"type":"image","content":["ponte_00.jpg","ponte_01.jpeg"]}]}'),l=i(8397),c=i(4953),s=i(9991),d=i(2401);var p=()=>{const e=(0,n.useStaticQuery)("761993660"),t=o.A;if(!t)return r.createElement(l.Z,null,r.createElement(s.H1,null,"Contenuto non trovato!"));const i=e.allImageMetadataJson.nodes,p=e.allFile.nodes,m=i.map((e=>{const t=p.find((t=>t.base===e.fileName));return{...e,image:t?(0,a.c)(t.childImageSharp):null}}));return r.createElement(l.Z,null,r.createElement(c.Z,{pageData:t,images:m}),r.createElement(d.Z,{pageData:t,images:m}))};const m=()=>r.createElement("title",null,"Gruppo Natura Lentiai - Laghetti della Rimonta")}}]);
//# sourceMappingURL=component---src-pages-laghetti-storia-tsx-16a4c4d221e8019bd26d.js.map