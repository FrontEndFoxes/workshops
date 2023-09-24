(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{408:function(e,t,a){e.exports=a.p+"assets/img/nuxt-options.3a014ba5.png"},409:function(e,t,a){e.exports=a.p+"assets/img/nuxt-installed.b5559773.png"},410:function(e,t,a){e.exports=a.p+"assets/img/nuxt-structure.0f73aa86.png"},411:function(e,t,a){e.exports=a.p+"assets/img/nuxt-listening.452c6a52.png"},412:function(e,t,a){e.exports=a.p+"assets/img/nuxt-101-badge.9c23b1b4.png"},484:function(e,t,a){"use strict";a.r(t);var o=a(14),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"🔨-5-scaffold-a-nuxt-app-and-explore-its-architecture-advanced"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔨-5-scaffold-a-nuxt-app-and-explore-its-architecture-advanced"}},[e._v("#")]),e._v(" 🔨 5: Scaffold a Nuxt App and Explore Its Architecture (Advanced)")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("Project Goal")])]),e._v(" "),t("th",[e._v("Scaffold a Nuxt app and explore its architecture")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("What you’ll learn")])]),e._v(" "),t("td",[e._v("You will learn how to set up a Nuxt application and how to understand its architecture to build your own applications.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Tools you’ll need")])]),e._v(" "),t("td",[e._v("A modern browser like Chrome or Firefox. A text editor of your choice. Access to a terminal.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Time needed to complete")])]),e._v(" "),t("td",[e._v("30 minutes")])])])]),e._v(" "),t("h1",{attrs:{id:"nuxt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[e._v("#")]),e._v(" Nuxt")]),e._v(" "),t("p",[e._v("In very simple terms, "),t("em",[e._v("Nuxt.js")]),e._v(" is a framework that allows us to create Vue.js applications with preset configurations for "),t("em",[e._v("SPAs")]),e._v(" and "),t("em",[e._v("SSR")]),e._v(" ("),t("a",{attrs:{href:"https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Server Side Rendered"),t("OutboundLink")],1),e._v(") apps. In this nano you will learn how to set up a "),t("em",[e._v("Nuxt")]),e._v(" application in your local development environment. You'll also get a first glance at its structure and how to add your own pages and components.")]),e._v(" "),t("h2",{attrs:{id:"scaffolding-your-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaffolding-your-app"}},[e._v("#")]),e._v(" Scaffolding Your App")]),e._v(" "),t("p",[e._v("Our first step is to scaffold our Nuxt app. For this task we will be using the "),t("a",{attrs:{href:"https://github.com/nuxt/create-nuxt-app",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("create-nuxt-app")]),t("OutboundLink")],1),e._v(" tool that Nuxt.js provides for us.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),t("p",[e._v("We will be using "),t("code",[e._v("npm")]),e._v(" and "),t("code",[e._v("npx")]),e._v(" commands in this nano, if you don't already have Node and NPM installed in your computer, head over to "),t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nodejs.org"),t("OutboundLink")],1),e._v(" and download and install the package first.")]),e._v(" "),t("p",[e._v("If you have a preference for "),t("code",[e._v("yarn")]),e._v(" or would like to try it out, head to "),t("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yarnpkg.com"),t("OutboundLink")],1),e._v(" for installation instructions.")])]),e._v(" "),t("p",[e._v("Fire up your terminal of choice, and run the following command:\n"),t("code",[e._v("npx create-nuxt-app nuxt-nano")])]),e._v(" "),t("p",[e._v("The argument after "),t("code",[e._v("create-nuxt-app")]),e._v(", "),t("code",[e._v("nuxt-nano")]),e._v(", will be the name of our folder.")]),e._v(" "),t("p",[e._v("The tool will create for you a bunch of settings you can configure, so let's take a look.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Project name")]),e._v(" This simply sets the name of our project, and is your choice.")]),e._v(" "),t("li",[t("strong",[e._v("Project description")]),e._v(" A short description for your project.")]),e._v(" "),t("li",[t("strong",[e._v("Use a custom server framework")]),e._v(" If you choose one of these, Nuxt will use it for server-side code. You can choose "),t("code",[e._v("none")]),e._v(" for now, as this is beyond the scope of this nano.")]),e._v(" "),t("li",[t("strong",[e._v("Use a custom UI framework")]),e._v(" If you choose one here, it will be installed and plugged in to your project automagically! Let's however choose "),t("code",[e._v("none")]),e._v(" for this project.")]),e._v(" "),t("li",[t("strong",[e._v("Choose rendering mode")]),e._v(" "),t("code",[e._v("Universal")]),e._v(" will use both SSR and client side rendering, so this is great for SEO tracking. "),t("code",[e._v("SPA")]),e._v(" is the typical single page app with client side rendering. We pick "),t("code",[e._v("Universal")]),e._v(" in this case.")]),e._v(" "),t("li",[t("strong",[e._v("Use axios module")]),e._v(" Adds the popular HTTP library Axios to your project. Select "),t("code",[e._v("no")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("Use eslint")]),e._v(" Adds eslinting to your project. We're going to go with "),t("code",[e._v("no")]),e._v(" for this.")]),e._v(" "),t("li",[t("strong",[e._v("Use prettier")]),e._v(" This adds Prettier, a library that formats your code, to your project, but we're going to also say "),t("code",[e._v("no")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("Author name")]),e._v(" Time to sign your name!")]),e._v(" "),t("li",[t("strong",[e._v("Choose a package manager")]),e._v(" This allows you to use either "),t("em",[e._v("npm")]),e._v(" or "),t("em",[e._v("yarn")]),e._v(" as your package manager, we're using npm for this nano - but feel free to choose yarn if that's your preference.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(408),alt:"Nuxt options"}})]),e._v(" "),t("p",[e._v("Once you're done selecting all your options, "),t("code",[e._v("create-nuxt-app")]),e._v(" will wrap it up by installing the required libraries and creating the folders and files, and will end by welcoming you to your new app with some useful commands!")]),e._v(" "),t("p",[t("img",{attrs:{src:a(409),alt:"Nuxt installed"}})]),e._v(" "),t("h2",{attrs:{id:"exploring-the-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-structure"}},[e._v("#")]),e._v(" Exploring the structure")]),e._v(" "),t("p",[e._v("Fire up your text editor of choice (VSCode is a good choice), and open up the "),t("code",[e._v("nuxt-nano")]),e._v(" folder that the CLI "),t("em",[e._v("(Command Line Interface)")]),e._v(" just created for you.")]),e._v(" "),t("p",[e._v("You should see this structure on your file explorer:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(410),alt:"Nuxt structure"}})]),e._v(" "),t("p",[e._v("Let's take a closer look to the folders:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("assets")]),e._v(" This is a folder for placing images, css, and just about any media assets that you will need for your project.")]),e._v(" "),t("li",[t("strong",[e._v("components")]),e._v(" In here, you can place components like your "),t("code",[e._v("Header.vue")]),e._v(" or your "),t("code",[e._v("FoxyButton.vue")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("layouts")]),e._v(" Layouts are "),t("code",[e._v(".vue")]),e._v(" files that are used to provide a general structure for your page. For example, you may place a structure that includes your Header, Footer and a spot for your dynamic content. More on this later.")]),e._v(" "),t("li",[t("strong",[e._v("middleware")]),e._v(" Middleware are custom functions that allow us to plug-in functionality before rendering a page; it acts directly on the http "),t("em",[e._v("request")]),e._v(". Middleware is a HUGE subject worthy of its own workshop, but if you want to delve deeper into it, check out the "),t("a",{attrs:{href:"https://nuxtjs.org/guide/routing#middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("node_modules")]),e._v(" This holds your app's dependencies.")]),e._v(" "),t("li",[t("strong",[e._v("pages")]),e._v(" This is where we will put our actual pages and content. More on this later!")]),e._v(" "),t("li",[t("strong",[e._v("static")]),e._v(" This folder is used for placing assets that will never change, like the "),t("code",[e._v("favicon")]),e._v(" or the "),t("code",[e._v("robots.txt")]),e._v(". Everything you put in here will be mapped to "),t("code",[e._v("/")]),e._v(" so, if you make a folder inside called "),t("code",[e._v("stuff")]),e._v(" with a file "),t("code",[e._v("secret.txt")]),e._v(" you will access it through "),t("code",[e._v("<url>/stuff/secret.txt")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("store")]),e._v(" This folder is for placing your "),t("code",[e._v("store")]),e._v(" files in case you're using "),t("strong",[e._v("Vuex")]),e._v(". It's empty by default, but if you want to "),t("em",[e._v("activate")]),e._v(" it and use Vuex, add an index.js file and code away!")])]),e._v(" "),t("h2",{attrs:{id:"pages-in-depth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pages-in-depth"}},[e._v("#")]),e._v(" Pages in Depth")]),e._v(" "),t("p",[e._v("The pages folder is one of the most important folders in a "),t("em",[e._v("Nuxt")]),e._v(" app since it holds both our views and also our routes!")]),e._v(" "),t("p",[e._v("If you open it on your text editor, you will see that inside there is an "),t("code",[e._v("index.vue")]),e._v(" file with some basic HTML/CSS content inside of it. Let's go ahead and run the project.")]),e._v(" "),t("p",[e._v("Open up your terminal and "),t("code",[e._v("cd nuxt-nano")]),e._v(" into your app's folder. Once you're inside, go ahead and "),t("code",[e._v("npm run dev")]),e._v(" or "),t("code",[e._v("yarn dev")]),e._v(" to start up the compile process and start "),t("em",[e._v("serving")]),e._v(" the content into your browser.")]),e._v(" "),t("p",[e._v("The terminal will show you in what url/port it's going to serve your app. Usually it'll be [http://localhost:3000]. Go ahead and open the URL in your browser.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(411),alt:"Nuxt listening"}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("💡")]),e._v(" "),t("p",[e._v("If at any point you need to stop the server, you can "),t("code",[e._v("control + c")]),e._v(" to quit it.")])]),e._v(" "),t("p",[e._v("The folder structure in "),t("em",[e._v("Nuxt")]),e._v(" is important for determining your app's pages because it will be exactly mimicked as a route on your application. For example, go ahead and create an "),t("code",[e._v("about.vue")]),e._v(" file with some dummy content.")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("The About page"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("If you now head on your browser to "),t("code",[e._v("http://localhost:3000/about")]),e._v(", TADA~ The route has been automatically created and served from your Nuxt application.")]),e._v(" "),t("p",[e._v('There is another way to set up your routes, which provides for a "cleaner" stucture. It requires that instead of a component, you create a folder for each route with an '),t("code",[e._v("index.vue")]),e._v(" file inside for each route. (Think of single HTML files in a folder structure).")]),e._v(" "),t("p",[e._v("Create a "),t("code",[e._v("contact")]),e._v(" folder with an "),t("code",[e._v("index.vue")]),e._v(" file inside with dummy content.")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("The Contact page"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Now go ahead and navigate to "),t("code",[e._v("http://localhost:3000/contact")])]),e._v(" "),t("h3",{attrs:{id:"dynamic-routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-routes"}},[e._v("#")]),e._v(" Dynamic Routes")]),e._v(" "),t("p",[e._v("If you ever need to create a dynamic route, for example to pass data over the URL, there is a special syntax you need to use.")]),e._v(" "),t("p",[e._v("Say for example that you have a blog and want to have a route that allows you to fetch a post by its id. This would look something like "),t("code",[e._v("http://localhost:3000/posts/123")]),e._v(" where "),t("code",[e._v("123")]),e._v(" is the post id.")]),e._v(" "),t("p",[e._v("Creating a folder and an "),t("code",[e._v("index.vue")]),e._v(" file for each post is less than ideal, so there is a special way we can define this.")]),e._v(" "),t("p",[e._v("Under "),t("code",[e._v("pages")]),e._v(", create a folder "),t("code",[e._v("posts")]),e._v(", inside a folder named "),t("code",[e._v("_id")]),e._v(" and inside, you guessed it, an "),t("code",[e._v("index.vue")]),e._v(" file.")]),e._v(" "),t("p",[e._v("Now paste this code inside:")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Viewing post "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" $route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Check out "),t("code",[e._v("http://localhost:3000/posts/123")]),e._v(" in your browser, and you will see "),t("strong",[e._v("123")]),e._v(" displayed as the post ID for that page. If you look closely at the code, you will notice that you are retrieving the ID paramter through "),t("code",[e._v("$route.params")]),e._v(".")]),e._v(" "),t("p",[e._v("The actual "),t("strong",[e._v("NAME")]),e._v(" of this param is taken from the name of the folder that contains it, so in this case we named it "),t("code",[e._v("_id")]),e._v(" and our param is named "),t("code",[e._v("id")]),e._v("!")]),e._v(" "),t("h2",{attrs:{id:"layouts-in-depth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layouts-in-depth"}},[e._v("#")]),e._v(" Layouts in Depth")]),e._v(" "),t("p",[e._v('Layouts are a way to define a "global container" for your views. This is easily understood by example, so let\'s dive right in.')]),e._v(" "),t("p",[e._v("Go into the "),t("code",[e._v("layouts")]),e._v(" folder and open up "),t("code",[e._v("default.vue")]),e._v(".")]),e._v(" "),t("p",[e._v("You notice the "),t("code",[e._v("<nuxt></nuxt>")]),e._v(" element? This is where your views are actually being loaded. Place an "),t("em",[e._v("h1")]),e._v(" tag above it like so:")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello from "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("nuxt "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Now, navigate back to your browser and open up "),t("code",[e._v("http://localhost:3000")]),e._v(" or any of the routes you have created on this nano.")]),e._v(" "),t("p",[e._v("The template is now serving an "),t("code",[e._v("h1")]),e._v(" tag in all your routes! This example is obviously not ideal, but a great use case if setting up your "),t("code",[e._v("nav")]),e._v(" and "),t("code",[e._v("footer")]),e._v(" here.")]),e._v(" "),t("p",[e._v("If you ever want to have another template (for example one that doesn't have a navigation, or an entirely different layout), you can go ahead and create a new file inside the "),t("code",[e._v("layouts")]),e._v(" folder.")]),e._v(" "),t("p",[e._v("Every "),t("em",[e._v("top level")]),e._v(" file inside this folder will be a new layout. So for example, create an "),t("code",[e._v("example.vue")]),e._v(" file and set it up.")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello from Vue Vixens"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("nuxt "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("template"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Now, we need to tell our "),t("code",[e._v("page")]),e._v(" to use this layout. Open "),t("code",[e._v("index.vue")]),e._v(" inside the "),t("code",[e._v("pages")]),e._v(" folder and add a "),t("code",[e._v("layout")]),e._v(" param to the script.")]),e._v(" "),t("script",[e._v("\n    function copyText(event, node) {\n      // So we don't go anywhere\n      event.preventDefault();\n\n      const toCopy = node.parentElement.nextElementSibling.querySelector('code');\n      const el = document.createElement('textarea');\n      el.value = toCopy.innerText;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n    }\n  ")]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{attrs:{href:"#",onclick:"copyText(event, this)"}},[e._v("\n      Copy\n    ")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("layout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'example'")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Other code")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Go ahead and take a look at your home route now!")]),e._v(" "),t("h2",{attrs:{id:"conclusion-and-challenge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-and-challenge"}},[e._v("#")]),e._v(" Conclusion and Challenge")]),e._v(" "),t("p",[e._v("Nuxt is a framework with a ton of possibilities and intricacies. This nano barely scratches the surface but is a quick way to get you started developing SSR applications.")]),e._v(" "),t("p",[e._v("Your challenge, if you're up to it, is to create a completely new "),t("code",[e._v("layout")]),e._v(" and add some more pages that include two levels or more of nested dynamic paths params!")]),e._v(" "),t("h2",{attrs:{id:"badge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[e._v("#")]),e._v(" Badge")]),e._v(" "),t("p",[e._v("Congratulations! You have earned a badge!")]),e._v(" "),t("p",[t("img",{attrs:{src:a(412),alt:"Nuxt 101 badge"}})]),e._v(" "),t("h2",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[e._v("#")]),e._v(" Author")]),e._v(" "),t("p",[e._v("Made with ❤️ by Marina Mosti")])])}),[],!1,null,null,null);t.default=n.exports}}]);