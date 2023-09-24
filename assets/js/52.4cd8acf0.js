(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{310:function(e,n,t){e.exports=t.p+"assets/img/petshop_chapter3.f1a4212c.jpg"},437:function(e,n,t){"use strict";t.r(n);var s=t(14),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"📋-kapitel-3-anbindung-einer-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#📋-kapitel-3-anbindung-einer-api"}},[e._v("#")]),e._v(" 📋 Kapitel 3: Anbindung einer API")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[e._v("Ziel")])]),e._v(" "),n("th",[e._v("Lerne, wie API-Aufrufe funktionieren und wie sie in einer Webapp genutzt werden können.")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[e._v("Was du lernen wirst")])]),e._v(" "),n("td",[e._v("Verwendung der "),n("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DogCEO API"),n("OutboundLink")],1),e._v(" zum dynamischen Laden von Hundebildern anstelle von Dummy-Daten.")])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Was du dafür benötigst")])]),e._v(" "),n("td",[e._v("Einen modernen Browser, z.B. Google Chrome. Einen Account bei CodeSandbox.io. Falls du nicht mehr weißt, wo du warst, kannst du die Basis für dieses Kapitel von "),n("a",{attrs:{href:"https://github.com/FrontEndFoxes/projects/tree/main/chapter-2-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),n("OutboundLink")],1),e._v(" importieren. Wie das geht, steht im "),n("RouterLink",{attrs:{to:"/de/workshops/vue/full-day/appendix_1.html"}},[e._v("Anhang 1")])],1)]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Dauer")])]),e._v(" "),n("td",[e._v("1 Stunde")])])])]),e._v(" "),n("h2",{attrs:{id:"anleitung"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anleitung"}},[e._v("#")]),e._v(" Anleitung")]),e._v(" "),n("p",[e._v("Falls du das Projekt von vorn beginnen musst, klone "),n("a",{attrs:{href:"https://github.com/FrontEndFoxes/projects/tree/main/chapter-1-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("dieses Projekt"),n("OutboundLink")],1),e._v(" in Code Sandbox, nachdem du dich eingeloggt hast. Dafür klickst du auf den Link "),n("strong",[e._v("Import form Github")]),e._v(" unten links auf der Hauptseite und fügst die URL des Repositories in das Feld. Du kannst ebenfalls mit dem Projekt fortfahren, dass du in "),n("RouterLink",{attrs:{to:"/de/workshops/vue/full-day/ch2.html"}},[e._v("Kapitel 2")]),e._v(" erstellt hast.")],1),e._v(" "),n("p",[e._v("Bisher haben wir Hundebilder über eine statische JSON-Datei, die wir in eine Komponente importiert haben, angezeigt. Für Demozwecke ist das sehr nützlich. In produktiven Anwendungen werden meistens Echtdaten genutzt, die entweder von internen Datenquellen oder einer API geliefert werden. Wir werden eine externe API dafür nutzen.")]),e._v(" "),n("p",[e._v("Um eine API anzufragen, benötigen wir eine weitere Bibliothek namens "),n("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("axios"),n("OutboundLink")],1),e._v(". Axios arbeitet mit Promises (=Versprechen) und funktioniert sowohl im Browser als auch in Node.js-Umgebungen.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),n("p",[e._v("Zu Beginn hat Vue einen eigenen Weg für API-Aufrufe mit .ajax genutzt. Dies wurde jedoch verworfen, da die Axios-Bibliothek sehr gut funktioniert und als zusätzliches Paket geladen werden kann, sofern es gebraucht wird. Mehr Informationen zu dieser Veränderung kannst du "),n("a",{attrs:{href:"https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),n("OutboundLink")],1),e._v(" nachlesen.")])]),e._v(" "),n("h2",{attrs:{id:"axios-hinzufugen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#axios-hinzufugen"}},[e._v("#")]),e._v(" Axios hinzufügen")]),e._v(" "),n("p",[e._v("Zuerst musst du Axios den Projekt-Abhängigkeiten hinzufügen. Dafür klicke in Code Sandbox auf den Reiter "),n("code",[e._v("Explorer")]),e._v(" -> "),n("code",[e._v("Dependencies")]),e._v(" -> "),n("code",[e._v("Add Dependency")]),e._v(" und suche nach "),n("code",[e._v("axios")]),e._v(". Wenn du es installiert hast, wirst du sehen, dass es zu deiner "),n("code",[e._v("package.json")]),e._v(" hinzugefügt wurde.")]),e._v(" "),n("p",[e._v("Importiere Axios in der Komponenten, in der der API-Aufruf gemacht werden soll - "),n("code",[e._v("views/Pets.vue")]),e._v(". Kopiere folgende Zeile in den "),n("code",[e._v("<script>")]),e._v("-Block dieser Komponente:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" axios "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'axios'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Alle Aufrufe werde die gleiche Basis-URL mit verschiedenen Endpunkten nutzen. Konfiguriere direkt unter allen Imports, dem Axios-Import und möglichen anderen, die Basis-URL:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("baseURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://dog.ceo/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Mit dieser Zeile haben wir Axios so konfiguriert, dass jeder API-Aufruf mit der URL "),n("code",[e._v("https://dog.ceo/api")]),e._v(" beginnen wird. Jetzt können wir den ersten API-Aufruf machen.")]),e._v(" "),n("h2",{attrs:{id:"api-aufrufen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-aufrufen"}},[e._v("#")]),e._v(" API aufrufen")]),e._v(" "),n("p",[e._v("Wir ersetzen das erste statische Bild mit einem zufälligen Husky-Bild von der Dog CEO API. Zuerst müssen wir den Endpunkt dafür herausfinden. Wir müssen "),n("code",[e._v("/breed/husky/images/random")]),e._v(" als Endpunkt hinzufügen, das steht in der "),n("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dokumentation"),n("OutboundLink")],1),e._v(" der API (der "),n("code",[e._v("api")]),e._v(" Teil ist bereits in der Base-URL, die wir durch das Setzen von "),n("code",[e._v("axios.defaults.baseURL")]),e._v(" konfigurierten).")]),e._v(" "),n("p",[e._v("Wir möchten das alte Bild durch ein neues ersetzen, wenn die Komponente geladen wird. Dafür implementieren wir einen "),n("code",[e._v("created()")]),e._v("-Anker (=hook) direkt nach "),n("code",[e._v("data()")]),e._v(".")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("created")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),n("p",[e._v("Beachte, dass du nach dem "),n("code",[e._v("data")]),e._v("-Objekt ein Komma setzen musst, bevor du den "),n("code",[e._v("created()")]),e._v("-Hook hinzufügst.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),n("p",[e._v("Das ist der erste Hook unserer App! Hooks sind sehr nützlich, wenn du bestimmte Code-Blöcke besser kontrollieren musst. Mehr Informationen zu Hooks kannst du "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),n("OutboundLink")],1),e._v(" finden.")])]),e._v(" "),n("p",[e._v("In dem neuen Hook werden wir nun die API aufrufen. Für eine GET-Anfrage (=request) muss "),n("code",[e._v("axios.get")]),e._v(" genutzt werden. Das Ergebnis wird ein JavaScript-Promise sein (=Versprechen), in dem wir Maßnahmen (=callbacks) für einen erfolgreichen (=success) oder fehlerhaften (=failure) Aufruf implementieren müssen. Für den Moment geben wir das Ergebnis in der Konsole aus. Kopiere den folgenden Code, ein Axios Cide Snippet, zwischen die geschweiften Klammern von "),n("code",[e._v("created(){}")]),e._v(":")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("axios\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/breed/husky/images/random'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("Sieh dir in der Browseransicht von Code Sandbox die Seite an und wechsel auf die Pets-Seite. In der Konsole solltest du eine Ausgabe sehen. Untersuche das Objekt indem du auf den kleinen Pfeil an der linken Seite klickst. Suche das "),n("code",[e._v("data")]),e._v("-Feld. Hier siehst du (hoffentlich) den Status "),n("code",[e._v("success")]),e._v(" und eine Nachricht (=message) mit einer URL zu einem Bild. Du kannst dir diese URL kopieren und in einem neuen Browserfenster aufrufen, es sollte dir ein Bild von einem Husky anzeigen.")]),e._v(" "),n("h2",{attrs:{id:"die-api-nutzen-1-statischen-inhalt-ersetzen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#die-api-nutzen-1-statischen-inhalt-ersetzen"}},[e._v("#")]),e._v(" Die API nutzen 1 - Statischen Inhalt ersetzen")]),e._v(" "),n("p",[e._v("Wir wollen das Husky-Bild durch ein neues ersetzen. Zuerst müssen wir in der Liste der Hunde einen Husky finden. Dafür nutzen wir die "),n("code",[e._v("Array.find")]),e._v("-Methode. Es durchsucht die "),n("code",[e._v("dogs")]),e._v("-Liste, die wir bereits von "),n("code",[e._v("data/dogs.js")]),e._v(" in die Komponente laden, bis es ein Element findet, dass die angegebene Bedingung erfüllt. In unserem Fall soll die Art ("),n("code",[e._v("breed")]),e._v(") dem Wert "),n("code",[e._v("husky")]),e._v(" entsprechen. Ersetze die Zeile mit "),n("code",[e._v("console.log()")]),e._v(" im "),n("code",[e._v("then")]),e._v("-Abschnitt des Axios-Aufrufs mit diesen Zeilen:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" husky "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dogs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("dog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" dog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("breed "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'husky'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("husky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("Ok. Wir haben einen Husky gefunden. Das erkennst du in der Ausgabe in der Konsole. Du siehst diesen Hund auch auf der Pets-Seite, er heißt 'Max'. Jetzt wollen wir ihm das neue Bild von der API zuweisen. Füge diese Zeile unter die letzten zwei Zeilen ein:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("husky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("img "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Du solltest jetzt sehen, wie sich das Bild von 'Max' ändert.")]),e._v(" "),n("h2",{attrs:{id:"die-api-nutzen-2-zufallige-bilder-anzeigen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#die-api-nutzen-2-zufallige-bilder-anzeigen"}},[e._v("#")]),e._v(" Die API nutzen 2 - Zufällige Bilder anzeigen")]),e._v(" "),n("p",[e._v("Jetzt wollen wir allen Hunden in der Liste ein Bild von der API zuweisen. Als erstes benötigen wir wieder den korrekten Endpunkt für jede Hundeart. Erinnerst du dich, wie wir den Endpunkt "),n("code",[e._v("/breed/husky/images/random")]),e._v(" für die Art "),n("code",[e._v("husky")]),e._v(" aufgerufen haben? Lass' uns eine Liste von Links erstellen, in dem jeder Link spezifisch für eine Art ist. Wir werden eine Liste mit allen Endpunkten für alle Arten erstellen. Dafür nutzen wie die"),n("code",[e._v("map")]),e._v("-Methode.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),n("p",[e._v("Die "),n("code",[e._v("map()")]),e._v("-Methode erzeugt eine neue Liste. Die Elemente dieser Liste entstehen aus den Elementen der ersten Liste, die durch eine Funktion verändert werden.")])]),e._v(" "),n("p",[e._v("Überschreibe den Code in "),n("code",[e._v("created()")]),e._v("..."),n("code",[e._v(".then")]),e._v(", um die neue Liste zu bestimmen:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" linksArray "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dogs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("dog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/breed/'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" dog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("breed "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/images/random'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Wir nehmen die Art von jedem Hund in der Liste und fügen sie in den Endpunkt ein. (Zuvor haben wir den gleichen Endpunkt genutzt, nur mit "),n("code",[e._v("husky")]),e._v(", statt dem wechselnden Wert der Hundeart.)")]),e._v(" "),n("p",[e._v("Jetzt müssen wir die API für jeden Endpunkt der neuen Liste anfragen. Axios hat dafür Hilfsfunktionen namens "),n("code",[e._v("axios.all")]),e._v(" und "),n("code",[e._v("axios.spread")]),e._v(". Der ersten übergeben wir die Liste mit den API-Anfragen und es gibt uns eine Liste mit den Antworten von der API zurück. Diese Liste teilen wir mit "),n("code",[e._v("axios.spread")]),e._v(" auf, um die neuen Bilder den Hunden zuzuweisen.\nUm alle API-Anfragen der Liste abzuarbeiten, nutzen wir wieder die "),n("code",[e._v("map")]),e._v("-Methode und werden mit jedem Wert der Liste einen API-Aufruf "),n("code",[e._v("axios.get")]),e._v(" machen.\nKopiere den folgenden Code (Zeilen 5-12) dafür direkt unter die Definition des "),n("code",[e._v("linksArray")]),e._v("s.")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("created")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" linksArray "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dogs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("dog")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/breed/"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" dog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("breed "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/images/random"')]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("linksArray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("link")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n     axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("spread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dogs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("dog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n         dog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("img "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),n("p",[e._v("Was passiert hier? Die "),n("code",[e._v("forEach()")]),e._v("-Methode wendet eine Funktion auf jedes Element in der Liste an. Sie iteriert über die statische Liste unserer Hunde und ersetzt das fest definierte Bild durch das zufällige Bild von der API. Das passiert nachdem wir alle Bilder von der API bekommen haben.")])]),e._v(" "),n("p",[e._v("Jetzt werden bei jedem Aufruf der "),n("code",[e._v("Pets")]),e._v("-Komponente neue Bilder geladen. (Das kannst du sehen, in dem du die Seite aktualisierst oder zwischen der "),n("code",[e._v("pets")]),e._v(" und der "),n("code",[e._v("home")]),e._v("-Seite hin und her wechselst.) Die Namen und Arten der Hunde werden immer noch von den statischen Daten aus "),n("code",[e._v("dogs.json")]),e._v(" genommen, deshalb verändern sich diese nicht.")]),e._v(" "),n("p",[e._v("Ein Problem gibt es noch: Wenn wir die Seite aufrufen, sehen wir für einen kurzen Moment noch die alten Bilder. Dafür setzen wir alle Bilder zurück bevor wir die API nach neuen Bildern fragen.\nKopiere diesen Teil an die erste Stelle in den "),n("code",[e._v("created()")]),e._v("-Hook:")]),e._v(" "),n("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dogs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("dog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tdog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("img "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("strong",[e._v("Jetzt sehen wir zunächst keine Bilder bevor die neuen Bilder von der API geladen werden. Es geht voran!")])]),e._v(" "),n("h1",{attrs:{id:"ergebnise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ergebnise"}},[e._v("#")]),e._v(" Ergebnise")]),e._v(" "),n("p",[n("img",{attrs:{src:t(310),alt:"chapter 3 result"}})])])}),[],!1,null,null,null);n.default=a.exports}}]);