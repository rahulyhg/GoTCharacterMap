webpackJsonp([0],{125:function(e,a,n){"use strict";function r(e){S.each(function(e){e.target=e.source=!1}),l(T,e),l(f,e),l(b,e),S.classed("target",function(e){return e.target}).classed("source",function(e){return e.source})}function l(e,a){e.classed("target",function(e){if(e.target===a)return e.source.source=!0}).classed("source",function(e){if(e.source===a)return e.target.target=!0}).filter(function(e){return e.target===a||e.source===a}).raise()}function t(e,a){e.classed("target",!1).classed("source",!1)}function d(e){t(f,e),t(T,e),t(b,e),S.classed("target",!1).classed("source",!1)}function i(e){function a(e,r){var l,t=n[e];return t||(t=n[e]=r||{name:e,children:[]},e.length&&(t.parent=a(e.substring(0,l=e.lastIndexOf("."))),t.parent.children.push(t),t.key=e.substring(l+1))),t}var n={};return e.forEach(function(e){a(e.name,e)}),y.hierarchy(n[""])}function s(e){var a={},n=[];return e.forEach(function(e){a[e.data.name]=e}),e.forEach(function(e){e.data.killed&&e.data.killed.forEach(function(r){n.push(a[e.data.name].path(a[r]))})}),n}function o(e){var a={},n=[];return e.forEach(function(e){a[e.data.name]=e}),e.forEach(function(e){e.data.parented&&e.data.parented.forEach(function(r){n.push(a[e.data.name].path(a[r]))})}),n}function k(e){var a={},n=[];return e.forEach(function(e){a[e.data.name]=e}),e.forEach(function(e){e.data.wed&&e.data.wed.forEach(function(r){n.push(a[e.data.name].path(a[r]))})}),n}Object.defineProperty(a,"__esModule",{value:!0});var y=n(91),h=(n.n(y),n(339)),m=(n.n(h),n(337)),w=(n.n(m),960),p=w/2,g=p-120,z=y.cluster().size([360,g]),c=y.radialLine().curve(y.curveBundle.beta(.85)).radius(function(e){return e.y}).angle(function(e){return e.x/180*Math.PI}),u=y.select("body").append("svg").attr("width",w).attr("height",w).append("g").attr("transform","translate("+p+","+p+")"),f=u.append("g").selectAll(".link.kill"),T=u.append("g").selectAll(".link.wed"),b=u.append("g").selectAll(".link.parented"),S=u.append("g").selectAll(".node"),M=i(h);z(M),f=f.data(s(M.leaves())).enter().append("path").each(function(e){e.source=e[0],e.target=e[e.length-1]}).attr("class","link kill").attr("d",c),T=T.data(k(M.leaves())).enter().append("path").each(function(e){e.source=e[0],e.target=e[e.length-1]}).attr("class","link wed").attr("d",c),b=b.data(o(M.leaves())).enter().append("path").each(function(e){e.source=e[0],e.target=e[e.length-1]}).attr("class","link parented").attr("d",c),S=S.data(M.leaves()).enter().append("text").attr("class","node").attr("dy","0.31em").attr("transform",function(e){return"rotate("+(e.x-90)+")translate("+(e.y+8)+",0)"+(e.x<180?"":"rotate(180)")}).attr("text-anchor",function(e){return e.x<180?"start":"end"}).text(function(e){return e.data.key}).on("mouseover",r).on("mouseout",d)},333:function(e,a,n){a=e.exports=n(334)(),a.push([e.i,'.node {\n  font: 300 10px "Helvetica Neue", Helvetica, Arial, sans-serif;\n  fill: #bbb;\n}\n.node:hover {\n  fill: #000;\n  font-weight: 600;\n}\n.link {\n  stroke: lightblue;\n  stroke-opacity: 0.4;\n  fill: none;\n  pointer-events: none;\n}\n.node--source {\n  fill: #2ca02c;\n}\n.link.source,\n.link.target {\n  stroke-opacity: 1;\n  stroke-width: 2px;\n}\n.link.target {\n  stroke-dasharray: 2px 2px;\n}\n.link.kill.source {\n  stroke: red;\n  stroke-dashoffset: 5px;\n}\n.link.kill.target {\n  stroke: red;\n}\n.link.wed.source {\n  stroke: blue;\n}\n.link.parented.source,\n.link.parented.target {\n  stroke: green;\n}\n',""])},337:function(e,a,n){var r=n(333);"string"==typeof r&&(r=[[e.i,r,""]]);n(336)(r,{});r.locals&&(e.exports=r.locals)},339:function(e,a){e.exports=[{name:"arryn.John Arryn",size:3e3,killed:[],wed:["tully.Lyssa Tully"],parented:["arryn.Robyn Arryn"]},{name:"arryn.Robyn Arryn",size:3e3,killed:[],wed:[],parented:[]},{name:"arryn.Hugh",size:3e3,killed:[],wed:[],parented:[]},{name:"arryn.Vardis Egen",size:3e3,killed:[],wed:[],parented:[]},{name:"astapor.Kraznys Mo Nakloz",size:3e3,killed:[],wed:[],parented:[]},{name:"astapor.Missandei",size:3e3,killed:[],wed:[],parented:[]},{name:"astapor.White Rat",size:3e3,killed:[],wed:[],parented:[]},{name:"astapor.Grey Worm",size:3e3,killed:["meereen.Belicho Paenymion","meereen.Razdal Mo Eraz"],wed:[],parented:[]},{name:"baelish.Petyr Baelish",size:3e3,killed:["tully.Lyssa Tully"],wed:["tully.Lyssa Tully"],parented:[]},{name:"baelish.(Soldiers)",size:3e3,killed:["baratheon.Dontos Hollard"],wed:[],parented:[]},{name:"baratheon.Steffon Baratheon",size:3e3,killed:[],wed:["estermont.Cassana Estermont"],parented:["baratheon.Robert Baratheon","baratheon.Stannis Baratheon","baratheon.Renly Baratheon"]},{name:"baratheon.Robert Baratheon",size:3e3,killed:["targaryen.Rhaegar Targaryen"],wed:["lannister.Cersei Lannister"],parented:["baratheon.Gendry","baratheon.Barra"]},{name:"baratheon.Stannis Baratheon",size:3e3,killed:["baratheon.Shireen Baratheon"],wed:["florent.Selyse Florent"],parented:["baratheon.Shireen Baratheon","baratheon.Petyr Baratheon","baratheon.Tommard Baratheon","baratheon.Edric Baratheon"]},{name:"baratheon.Renly Baratheon",size:3e3,killed:[],wed:["tyrell.Margaery Tyrell"],parented:[]},{name:"baratheon.Shireen Baratheon",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Dontos Hollard",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Brienne Tarth",size:3e3,killed:["baratheon.Stannis Baratheon"],wed:[],parented:[]},{name:"baratheon.Gendry",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Petyr Baratheon",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Tommard Baratheon",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Edric Baratheon",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Meryn Trant",size:3e3,killed:["braavos.Syrio Forel"],wed:[],parented:[]},{name:"baratheon.Maester Cressen",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Mandon Moore",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Barristan Selmy",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Ormund Baratheon",size:3e3,killed:[],wed:["targaryen.Rhaelle Targaryen"],parented:["baratheon.Steffon Baratheon"]},{name:"baratheon.Janos Slynt",size:3e3,killed:["baratheon.Barra"],wed:[],parented:[]},{name:"baratheon.Barra",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Grand Maester Pycelle",size:3e3,killed:[],wed:[],parented:[]},{name:"baratheon.Podrick Payne",size:3e3,killed:["baratheon.Mandon Moore"],wed:[],parented:[]},{name:"braavos.Jaqen H'ghar",size:3e3,killed:["clegane.The Tickler","lannister.Amory Lorch"],wed:[],parented:[]},{name:"braavos.Ghita",size:3e3,killed:[],wed:[],parented:[]},{name:"braavos.Syrio Forel",size:3e3,killed:[],wed:[],parented:[]},{name:"braavos.The Waif",size:3e3,killed:["braavos.Lady Crane"],wed:[],parented:[]},{name:"braavos.Lady Crane",size:3e3,killed:[],wed:[],parented:[]},{name:"brotherhoodwithoutbanners.Steve",size:3e3,killed:["smallfolk.Ray"],wed:[],parented:[]},{name:"brotherhoodwithoutbanners.Gatins",size:3e3,killed:["smallfolk.Ray"],wed:[],parented:[]},{name:"brotherhoodwithoutbanners.Lem Lemoncloak",size:3e3,killed:["smallfolk.Ray"],wed:[],parented:[]},{name:"bolton.Ramsay Bolton",size:3e3,killed:["wildling.Osha","giants.Wun Weg Wun Dar Wun","stark.Rickon Stark","greyjoy.Adrack Humble","smallfolk.Tansy","bolton.Roose Bolton","frey.Walda Frey"],wed:["stark.Sansa Stark"],parented:[]},{name:"bolton.Roose Bolton",size:3e3,killed:["stark.Robb Stark"],wed:["frey.Walda Frey"],parented:["bolton.Ramsay Bolton"]},{name:"bolton.Locke",size:3e3,killed:[],wed:[],parented:[]},{name:"bolton.Myranda",size:3e3,killed:[],wed:[],parented:[]},{name:"childrenoftheforest.The Three-Eyed Raven",size:3e3,killed:[],wed:[],parented:[]},{name:"childrenoftheforest.Leaf",size:3e3,killed:[],wed:[],parented:[]},{name:"clegane.Gregor Clegane",size:3e3,killed:["brotherhoodwithoutbanners.Steve","brotherhoodwithoutbanners.Gatins","brotherhoodwithoutbanners.Lem Lemoncloak","arryn.Hugh","martell.Oberyn Martell","martell.Elia Martell","targaryen.Aegon Targaryen","targaryen.Rhaenys Targaryen"],wed:[],parented:[]},{name:"clegane.Sandor Clegane",size:3e3,killed:["smallfolk.Mycah","light.Beric Dondarrion"],wed:[],parented:[]},{name:"clegane.The Tickler",size:3e3,killed:[],wed:[],parented:[]},{name:"direwolves.Grey Wind",size:3e3,killed:["lannister.Rennick"],wed:[],parented:[]},{name:"direwolves.Ghost",size:3e3,killed:["nightswatch.Rast"],wed:[],parented:[]},{name:"direwolves.Summer",size:3e3,killed:[],wed:[],parented:[]},{name:"direwolves.Shaggydog",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Khal Drogo",size:3e3,killed:["dothraki.Mago","targaryen.Viserys Targaryen"],wed:["targaryen.Danaerys Targaryen"],parented:[]},{name:"dothraki.Mago",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Qotho",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Rhaego",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Aggo",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Irri",size:3e3,killed:[],wed:[],parented:[]},{name:"dothraki.Khal Moro",size:3e3,killed:[],wed:[],parented:[]},{name:"dragons.Drogon",size:3e3,killed:["thirteen.Pyat Pree","tarly.Dickon Tarly","tarly.Randyll Tarly","smallfolk.Zalla","astapor.Kraznys Mo Nakloz"],wed:[],parented:[]},{name:"dragons.Rhaegal",size:3e3,killed:["thirteen.Pyat Pree"],wed:[],parented:[]},{name:"dragons.Viserion",size:3e3,killed:["thirteen.Pyat Pree"],wed:[],parented:[]},{name:"erenford.Joyeuse Erenford",size:3e3,killed:[],wed:[],parented:[]},{name:"estermont.Cassana Estermont",size:3e3,killed:[],wed:[],parented:["baratheon.Robert Baratheon","baratheon.Stannis Baratheon","baratheon.Renly Baratheon"]},{name:"florent.Axell Florent",size:3e3,killed:[],wed:[],parented:[]},{name:"florent.Selyse Florent",size:3e3,killed:[],wed:[],parented:["baratheon.Shireen Baratheon","baratheon.Petyr Baratheon","baratheon.Tommard Baratheon","baratheon.Edric Baratheon"]},{name:"florent.Melessa Florent",size:3e3,killed:[],wed:[],parented:["tarly.Samwell Tarly","tarly.Talla Tarly","tarly.Dickon Tarly"]},{name:"frey.Walder Frey",size:3e3,killed:[],wed:["erenford.Joyeuse Erenford"],parented:["frey.Rosalin Frey"]},{name:"frey.Rosalin Frey",size:3e3,killed:[],wed:[],parented:[]},{name:"frey.Walda Frey",size:3e3,killed:[],wed:[],parented:[]},{name:"frey.Lothar Frey",size:3e3,killed:["volantis.Talisa Maegyr"],wed:[],parented:[]},{name:"frey.Walder Rivers",size:3e3,killed:["tully.Catelyn Tully"],wed:[],parented:[]},{name:"frey.(Soldiers)",size:3e3,killed:["direwolves.Grey Wind"],wed:[],parented:[]},{name:"giants.Mag Mar Run Doh Weg",size:3e3,killed:["nightswatch.Grenn"],wed:[],parented:[]},{name:"giants.Wun Weg Wun Dar Wun",size:3e3,killed:[],wed:[],parented:[]},{name:"giants.Dongo",size:3e3,killed:[],wed:[],parented:[]},{name:"greyjoy.Balon Greyjoy",size:3e3,killed:[],wed:[],parented:["greyjoy.Yara Greyjoy","greyjoy.Theon Greyjoy"]},{name:"greyjoy.Yara Greyjoy",size:3e3,killed:[],wed:[],parented:[]},{name:"greyjoy.Theon Greyjoy",size:3e3,killed:["bolton.Myranda","smallfolk.Billy","smallfolk.Jack","wildling.Stiv","stark.Rodrik Cassel"],wed:[],parented:[]},{name:"greyjoy.Euron Greyjoy",size:3e3,killed:["sand.Nymeria Sand","sand.Obara Sand","greyjoy.Balon Greyjoy"],wed:[],parented:[]},{name:"greyjoy.Adrack Humble",size:3e3,killed:["greyjoy.Ralf Kenning"],wed:[],parented:[]},{name:"greyjoy.Ralf Kenning",size:3e3,killed:[],wed:[],parented:[]},{name:"greyjoy.Dagmer",size:3e3,killed:[],wed:[],parented:[]},{name:"greyjoy.Drennan",size:3e3,killed:[],wed:[],parented:[]},{name:"hightower.Alerie Hightower",size:3e3,killed:[],wed:[],parented:[]},{name:"hightower.Gerold Hightower",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Joffrey Baratheon",size:3e3,killed:["stark.Ros"],wed:["tyrell.Margaery Tyrell"],parented:[]},{name:"lannister.Myrcella Baratheon",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Tommen Baratheon",size:3e3,killed:[],wed:["tyrell.Margaery Tyrell"],parented:[]},{name:"lannister.Alton Lannister",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Cersei Lannister",size:3e3,killed:["sand.Ellaria Sand","sand.Tyene Sand","lannister.Lancel Lannister","tyrell.Margaery Tyrell","tyrell.Loras Tyrell","tyrell.Mace Tyrell","sparrow.The High Sparrow","lannister.Kevan Lannister"],wed:[],parented:["lannister.Joffrey Baratheon","lannister.Tommen Baratheon","lannister.Myrcella Baratheon"]},{name:"lannister.Jaime Lannister",size:3e3,killed:["stark.Torrhen Karstark","lannister.Alton Lannister","targaryen.Aerys Targaryen II"],wed:[],parented:["lannister.Joffrey Baratheon","lannister.Tommen Baratheon","lannister.Myrcella Baratheon"]},{name:"lannister.Joanna Lannister",size:3e3,killed:[],wed:[],parented:["lannister.Jaime Lannister","lannister.Cersei Lannister","lannister.Tyrion Lannister"]},{name:"lannister.Kevan Lannister",size:3e3,killed:[],wed:[],parented:["lannister.Lancel Lannister"]},{name:"lannister.Lancel Lannister",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Martyn Lannister",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Tyrion Lannister",size:3e3,killed:["lannister.Tywin Lannister","lannister.Shae"],wed:["stark.Sansa Stark"],parented:[]},{name:"lannister.Tywin Lannister",size:3e3,killed:[],wed:["lannister.Joanna Lannister"],parented:["lannister.Jaime Lannister","lannister.Cersei Lannister","lannister.Tyrion Lannister"]},{name:"lannister.Willem Lannister",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Amory Lorch",size:3e3,killed:["nightswatch.Yoren"],wed:[],parented:[]},{name:"lannister.Polliver",size:3e3,killed:["smallfolk.Lommy Greenhands"],wed:[],parented:[]},{name:"lannister.Qyburn",size:3e3,killed:["baratheon.Grand Maester Pycelle"],wed:[],parented:[]},{name:"lannister.Rennick",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Rorge",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.Shae",size:3e3,killed:[],wed:[],parented:[]},{name:"lannister.(Soldiers)",size:3e3,killed:["tully.Brynden Tully","stark.Septa Mordane","stark.Vayon Poole"],wed:[],parented:[]},{name:"lhazar.Mirri Maz Duur",size:3e3,killed:["dothraki.Rhaego"],wed:[],parented:[]},{name:"light.Melisandre",size:3e3,killed:["florent.Axell Florent","baratheon.Renly Baratheon","baratheon.Maester Cressen"],wed:[],parented:[]},{name:"light.Beric Dondarrion",size:3e3,killed:[],wed:[],parented:[]},{name:"lys.Doreah",size:3e3,killed:[],wed:[],parented:[]},{name:"martell.Areo Hotah",size:3e3,killed:[],wed:[],parented:[]},{name:"martell.Maester Caleotte",size:3e3,killed:[],wed:[],parented:[]},{name:"martell.Elia Martell",size:3e3,killed:[],wed:[],parented:[]},{name:"martell.Trystane Martell",size:3e3,killed:[],wed:[],parented:[]},{name:"martell.Doran Martell",size:3e3,killed:[],wed:["norvos.Mellario of Norvos"],parented:["martell.Trystane Martell"]},{name:"martell.Oberyn Martell",size:3e3,killed:["clegane.Gregor Clegane"],wed:["sand.Ellaria Sand"],parented:["sand.Obara Sand","sand.Nymeria Sand","sand.Tyene Sand"]},{name:"meereen.Oznak zo Pahl",size:3e3,killed:[],wed:[],parented:[]},{name:"meereen.Razdal Mo Eraz",size:3e3,killed:[],wed:[],parented:[]},{name:"meereen.Hizdahr Zo Loraq",size:3e3,killed:[],wed:[],parented:[]},{name:"meereen.Mossador",size:3e3,killed:[],wed:[],parented:[]},{name:"meereen.Belicho Paenymion",size:3e3,killed:[],wed:[],parented:[]},{name:"meereen.Sons of the Harpy",size:3e3,killed:["astapor.White Rat","meereen.Hizdahr Zo Loraq","baratheon.Barristan Selmy"],wed:[],parented:[]},{name:"mormont.Jeor Mormont",size:3e3,killed:[],wed:[],parented:["mormont.Jorah Mormont"]},{name:"mormont.Jorah Mormont",size:3e3,killed:["dothraki.Qotho"],wed:[],parented:[]},{name:"mormont.Maege Mormont",size:3e3,killed:[],wed:[],parented:["mormont.Lyanna Mormont"]},{name:"mormont.Lyanna Mormont",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Grenn",size:3e3,killed:["giants.Mag Mar Run Doh Weg"],wed:[],parented:[]},{name:"nightswatch.Alliser Thorne",size:3e3,killed:["stark.Jon Snow"],wed:[],parented:[]},{name:"nightswatch.Pypar",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Bowen Marsh",size:3e3,killed:["stark.Jon Snow"],wed:[],parented:[]},{name:"nightswatch.Othell Yarwyck",size:3e3,killed:["stark.Jon Snow"],wed:[],parented:[]},{name:"nightswatch.Gared",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Yoren",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Karl Tanner",size:3e3,killed:["wildling.Craster"],wed:[],parented:[]},{name:"nightswatch.Olly",size:3e3,killed:["stark.Jon Snow","wildling.Ygritte"],wed:[],parented:[]},{name:"nightswatch.Qhorin Halfhand",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Rast",size:3e3,killed:["mormont.Jeor Mormont"],wed:[],parented:[]},{name:"nightswatch.Waymar Royce",size:3e3,killed:[],wed:[],parented:[]},{name:"nightswatch.Will",size:3e3,killed:[],wed:[],parented:[]},{name:"norvos.Mellario of Norvos",size:3e3,killed:[],wed:[],parented:[]},{name:"payne.Ilyn Payne",size:3e3,killed:["stark.Eddard Stark"],wed:[],parented:[]},{name:"reed.Howland Reed",size:3e3,killed:[],wed:[],parented:["reed.Jojen Reed","reed.Meera Reed"]},{name:"reed.Jojen Reed",size:3e3,killed:[],wed:[],parented:[]},{name:"reed.Meera Reed",size:3e3,killed:["reed.Jojen Reed"],wed:[],parented:[]},{name:"redwyne.Olenna Redwyne",size:3e3,killed:["lannister.Joffrey Baratheon"],wed:[],parented:["tyrell.Mace Tyrell"]},{name:"sand.Ellaria Sand",size:3e3,killed:["lannister.Myrcella Baratheon","martell.Doran Martell"],wed:[],parented:["sand.Obara Sand","sand.Nymeria Sand","sand.Tyene Sand"]},{name:"sand.Obara Sand",size:3e3,killed:["martell.Trystane Martell"],wed:[],parented:[]},{name:"sand.Nymeria Sand",size:3e3,killed:[],wed:[],parented:[]},{name:"sand.Tyene Sand",size:3e3,killed:["martell.Maester Caleotte","martell.Areo Hotah"],wed:[],parented:[]},{name:"seaworth.Davos Seaworth",size:3e3,killed:[],wed:[],parented:["seaworth.Matthos Seaworth"]},{name:"seaworth.Matthos Seaworth",size:3e3,killed:[],wed:[],parented:[]},{name:"secondsons.Mero",size:3e3,killed:[],wed:[],parented:[]},{name:"secondsons.Daario Naharis",size:3e3,killed:["dothraki.Aggo","meereen.Mossador","meereen.Oznak zo Pahl","secondsons.Mero","secondsons.Prendahl na Ghezn"],wed:[],parented:[]},{name:"secondsons.Prendahl na Ghezn",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Lommy Greenhands",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Guymon",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Zalla",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Tansy",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Billy",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Jack",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Ray",size:3e3,killed:[],wed:[],parented:[]},{name:"smallfolk.Mycah",size:3e3,killed:[],wed:[],parented:[]},{name:"sparrow.The High Sparrow",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Rickard Stark",size:3e3,killed:[],wed:[],parented:["stark.Benjen Stark","stark.Eddard Stark","stark.Brandon Stark","stark.Lyanna Stark"]},{name:"stark.Lyanna Stark",size:3e3,killed:[],wed:["targaryen.Rhaegar Targaryen"],parented:["stark.Jon Snow"]},{name:"stark.Benjen Stark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Brandon Stark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Eddard Stark",size:3e3,killed:["targaryen.Arthur Dayne","hightower.Gerold Hightower"],wed:["tully.Catelyn Tully"],parented:["stark.Sansa Stark","stark.Arya Stark","stark.Brann Stark","stark.Rickon Stark","stark.Robb Stark"]},{name:"stark.Robb Stark",size:3e3,killed:["wildling.Wallen","stark.Rickard Karstark"],wed:["volantis.Talisa Maegyr"],parented:[]},{name:"stark.Arya Stark",size:3e3,killed:["frey.Walder Frey","frey.Walder Rivers","frey.Lothar Frey","braavos.The Waif","braavos.Ghita","lannister.Rorge","baratheon.Meryn Trant","lannister.Polliver"],wed:[],parented:[]},{name:"stark.Jon Snow",size:3e3,killed:["nightswatch.Othell Yarwyck","nightswatch.Olly","nightswatch.Bowen Marsh","nightswatch.Alliser Thorne","undead.White Walkers","baratheon.Janos Slynt","wildling.Mance Rayder","wildling.Styr","nightswatch.Qhorin Halfhand","wildling.Orell","nightswatch.Karl Tanner"],wed:[],parented:[]},{name:"stark.Sansa Stark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Rickon Stark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Brann Stark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Septa Mordane",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Vayon Poole",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Rodrik Cassel",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Maester Luwin",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Torrhen Karstark",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Rickard Karstark",size:3e3,killed:["lannister.Martyn Lannister","lannister.Willem Lannister"],wed:[],parented:[]},{name:"stark.Ros",size:3e3,killed:[],wed:[],parented:[]},{name:"stark.Hodor",size:3e3,killed:["bolton.Locke"],wed:[],parented:[]},{name:"stokeworth.Lollys Stokeworth",size:3e3,killed:[],wed:[],parented:[]},{name:"stokeworth.Falyse Stokeworth",size:3e3,killed:[],wed:[],parented:[]},{name:"stokeworth.Tanda Stokeworth",size:3e3,killed:[],wed:[],parented:["stokeworth.Lollys Stokeworth","stokeworth.Falyse Stokeworth"]},{name:"targaryen.Aeron Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Aemon Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Duncan Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Aegon Targaryen V",size:3e3,killed:[],wed:[],parented:["targaryen.Rhaelle Targaryen","targaryen.Jaehaerys Targaryen","targaryen.Duncan Targaryen"]},{name:"targaryen.Rhaelle Targaryen",size:3e3,killed:[],wed:[],parented:["baratheon.Steffon Baratheon"]},{name:"targaryen.Jaehaerys Targaryen",size:3e3,killed:[],wed:[],parented:["targaryen.Aerys Targaryen II","targaryen.Rhaella Targaryen"]},{name:"targaryen.Aerys Targaryen II",size:3e3,killed:["stark.Rickard Stark","stark.Brandon Stark"],wed:[],parented:["targaryen.Viserys Targaryen","targaryen.Danaerys Targaryen","targaryen.Rhaegar Targaryen"]},{name:"targaryen.Rhaella Targaryen",size:3e3,killed:[],wed:[],parented:["targaryen.Viserys Targaryen","targaryen.Danaerys Targaryen","targaryen.Rhaegar Targaryen"]},{name:"targaryen.Viserys Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Danaerys Targaryen",size:3e3,killed:["dothraki.Khal Moro","dothraki.Khal Drogo","lhazar.Mirri Maz Duur","lys.Doreah","thirteen.Xaro Xhoan Daxos"],wed:[],parented:[]},{name:"targaryen.Rhaegar Targaryen",size:3e3,killed:[],wed:["martell.Elia Martell","stark.Lyanna Stark"],parented:["stark.Jon Snow","targaryen.Aegon Targaryen","targaryen.Rhaenys Targaryen"]},{name:"targaryen.Aegon Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Rhaenys Targaryen",size:3e3,killed:[],wed:[],parented:[]},{name:"targaryen.Arthur Dayne",size:3e3,killed:[],wed:[],parented:[]},{name:"tarly.Randyll Tarly",size:3e3,killed:[],wed:["florent.Melessa Florent"],parented:["tarly.Samwell Tarly","tarly.Talla Tarly","tarly.Dickon Tarly"]},{name:"tarly.Samwell Tarly",size:3e3,killed:["undead.White Walkers"],wed:[],parented:[]},{name:"tarly.Talla Tarly",size:3e3,killed:[],wed:[],parented:[]},{name:"tarly.Dickon Tarly",size:3e3,killed:[],wed:[],parented:[]},{name:"thirteen.Xaro Xhoan Daxos",size:3e3,killed:[],wed:[],parented:[]},{name:"thirteen.Pyat Pree",size:3e3,killed:["thirteen.The Spice King","thirteen.The Copper King","thirteen.The Silk King"],wed:[],parented:[]},{name:"thirteen.The Spice King",size:3e3,killed:[],wed:[],parented:[]},{name:"thirteen.The Copper King",size:3e3,killed:[],wed:[],parented:[]},{name:"thirteen.The Silk King",size:3e3,killed:[],wed:[],parented:[]},{name:"tully.Hoster Tully",size:3e3,killed:[],wed:["whent.Minisa Whent"],parented:["tully.Catelyn Tully","tully.Lyssa Tully","tully.Edmure Tully"]},{name:"tully.Catelyn Tully",size:3e3,killed:["erenford.Joyeuse Erenford"],wed:[],parented:["stark.Sansa Stark","stark.Arya Stark","stark.Brann Stark","stark.Rickon Stark","stark.Robb Stark"]},{name:"tully.Lyssa Tully",size:3e3,killed:[],wed:[],parented:["arryn.Robyn Arryn"]},{name:"tully.Brynden Tully",size:3e3,killed:[],wed:[],parented:[]},{name:"tully.Edmure Tully",size:3e3,killed:[],wed:["frey.Rosalin Frey"],parented:[]},{name:"tyrell.Luthor Tyrell",size:3e3,killed:[],wed:["redwyne.Olenna Redwyne"],parented:["tyrell.Mace Tyrell"]},{name:"tyrell.Mace Tyrell",size:3e3,killed:[],wed:["hightower.Alerie Hightower"],parented:["tyrell.Margaery Tyrell","tyrell.Loras Tyrell"]},{name:"tyrell.Margaery Tyrell",size:3e3,killed:[],wed:[],parented:[]},{name:"tyrell.Loras Tyrell",size:3e3,killed:[],wed:[],parented:[]},{name:"umber.(Soldiers)",size:3e3,killed:["direwolves.Shaggydog"],wed:[],parented:[]},{name:"umber.John Umber",size:3e3,killed:[],wed:[],parented:[]},{name:"unaffiliated.Bronn",size:3e3,killed:["arryn.Vardis Egen","seaworth.Matthos Seaworth"],wed:[],parented:[]},{name:"undead.The Night King",size:3e3,killed:["dragons.Viserion","childrenoftheforest.The Three-Eyed Raven"],wed:[],parented:[]},{name:"undead.White Walkers",size:3e3,killed:["wildling.Magnar Loboda","nightswatch.Waymar Royce","nightswatch.Gared","nightswatch.Will"],wed:[],parented:[]},{name:"undead.Wights",size:3e3,killed:["childrenoftheforest.Leaf","direwolves.Summer","stark.Hodor","wildling.Karsi","reed.Jojen Reed"],wed:[],parented:[]},{name:"volantis.Talisa Maegyr",size:3e3,killed:[],wed:[],parented:[]},{name:"whent.Minisa Whent",size:3e3,killed:[],wed:[],parented:["tully.Catelyn Tully","tully.Lyssa Tully","tully.Edmure Tully"]},{name:"wildling.Ygritte",size:3e3,killed:["smallfolk.Guymon","nightswatch.Pypar"],wed:[],parented:[]},{name:"wildling.Magnar Loboda",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Karsi",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Styr",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Orell",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Craster",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Mance Rayder",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Tormund Giantsbane",size:3e3,killed:["umber.John Umber","wildling.Lord of Bones"],wed:[],parented:[]},{name:"wildling.Lord of Bones",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Stiv",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Wallen",size:3e3,killed:[],wed:[],parented:[]},{name:"wildling.Osha",size:3e3,killed:["stark.Maester Luwin","greyjoy.Drennan"],wed:[],parented:[]}]},340:function(e,a,n){n(126),e.exports=n(125)}},[340]);