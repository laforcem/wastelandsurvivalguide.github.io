"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[6758],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=d(o),c=a,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9427:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const i={},r="xEdit: The Method",l={unversionedId:"themethod",id:"themethod",title:"xEdit: The Method",description:"Some images still need to be re-added to this page. Next guide update will resolve this.",source:"@site/docs/themethod.md",sourceDirName:".",slug:"/themethod",permalink:"/docs/themethod",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"xEdit: The Basics",permalink:"/docs/xedit"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Objective and logic",id:"objective-and-logic",level:2},{value:"First ModGroup",id:"first-modgroup",level:2},{value:"Tags",id:"tags",level:3},{value:"<strong>ModGrouping your own mods</strong>",id:"modgrouping-your-own-mods",level:2},{value:"<strong>Example</strong>",id:"example",level:3}],h={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xedit-the-method"},"xEdit: The Method"),(0,a.kt)("admonition",{title:"Temporary Migration Issue",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Some images still need to be re-added to this page. Next guide update will resolve this.\nApologies for the inconvenience.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mod Organizer 2"),": Preferably the Alpha 3 of version 2.4.5, which you can download in the release channel of the ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/6GKR9jZ"},"MO2 Discord server"),". Vortex is simply too slow and the way it handles load order just makes The Method a pain. In case you don't want to use the MO2 Alpha, keep in mind that plugins in your LO that are written in bold text (meaning they are ESM) will often have to be pushed manually for them to appear in their correct position, which is always above non-ESM plugins. This version also fixes the bug with the loadorder.txt file being reset to alphabetical order randomly. Basic knowledge of the tool is required since going into specific steps for everything would make this guide too long."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"xEdit and knowing how to use it"),": You can find the absolute latest version in the ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/5t8RnNQ"},"xEdit Discord server"),". 4.0.4 on Nexus is fine for New Vegas. If you get crashes with this version then roll back to 4.0.3. To use The Method effectively you also need to know how plugins are structured and how you use xEdit to patch mods together or make other changes. A basic guide is available ",(0,a.kt)("a",{parentName:"li",href:"xedit"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"Plenty of ",(0,a.kt)("strong",{parentName:"li"},"time"),".")),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,"The 2 basic terms you will need to know for The Method are these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VQSC: Command line argument you can use on xEdit to skip reference loading (which speeds up loading but will not allow you to view or jump to references) and directly load a conflict filter on all plugins enabled in your load order."),(0,a.kt)("li",{parentName:"ul"},"ModGrouping: Feature of xEdit that consists in logic statements that hide conflicts you have already checked, allowing you to isolate new conflicts for the next mod you enable, these statements are contained in the .modgroups file xEdit will create when you go through this process.")),(0,a.kt)("h2",{id:"objective-and-logic"},"Objective and logic"),(0,a.kt)("p",null,"In order to make sure that all conflicts between your plugins are intended and/or harmless, you need to check conflicts with xEdit after each mod gets enabled. At every run you can choose how to patch the plugins involved and at the end you will ModGroup the remaining conflicts between the mod and the patches against the mods you have above. At the end you will have a fully patched load order and every conflict that doesn't need intervention will be hidden, leaving room for additions and ease of patching."),(0,a.kt)("h2",{id:"first-modgroup"},"First ModGroup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'After you get working install of the latest TTW, you will need to add xEdit to your MO2 list of executables with the argument -FNV. Then add it again but with -FNV -VQSC (You only need "-FNV" if your xEdit executable is not named FNVEdit.exe). The first one is for general use and the 2nd is for quick conflict checking, which we will soon need.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The first ModGroup you will need to make is for the base game plugins conflicting between eachother and with TTW/YUPTTW."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Load up xEdit with VQSC."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Since the mod is obviously intended to edit the base game plugins, nothing needs patching here.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Now create a ModGroup for all these plugins by highlighting them (CTRL+A), right-clicking and then selecting the "Create ModGroup" option.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When asked to include the current CRC32s, always click ",(0,a.kt)("strong",{parentName:"p"},"Yes"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In this menu you can name your ModGroup and assign tags to each plugin involved (Explained below). The fastest way to name it would be to select the mod you just enabled (In this case TTW) and then pressing CTRL+N")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then you can store the ModGroup in TaleOfTwoWastelands.esm or YUPTTW.esm. Storing it just means that whenever that plugin is loaded then the statement will be used.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ModGroup you just created will appear in the ",(0,a.kt)("strong",{parentName:"p"},"Overwrite")," folder in MO2, simply take that file and drag it to the corresponding mod, which is Tale Of Two Wastelands in this case."))),(0,a.kt)("p",null,"Remember that this method of selecting every plugin on the left and then ModGrouping should only be used for your base content, which is always present and all of its conflicts are safe to ignore (these conflicts are between your main patch mod and also between all of the game's original plugins). Another example where you would do this is on New Vegas but without TTW, where the YUP mod should be ModGrouped with all of the game DLCs and main plugin above it."),(0,a.kt)("h3",{id:"tags"},"Tags"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional"),": What the name says, having this plugin disabled will not invalidate the ModGroup, so the remaining conflicts will still be hidden correctly. (This is used when dealing with patches for other mods for example, since having those combinations may not be permanent)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Target"),": Any conflicting override between this plugin and other sources below will be hidden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source"),": Any conflicting override between this plugin and other targets above will be hidden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Forbidden"),": If this module is loaded, the ModGroup is invalid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ignore LO"),": If this is not selected, the module must be loaded in the same order as listed in this ModGroup. There are two values for this column:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Always: The load order of the module does not matter at all"),(0,a.kt)("li",{parentName:"ul"},"In Block: all consecutive modules with this flag form a Block. Any module above the block must be loaded before any module in the block. Any module after the block must be loaded after any module in the block. The modules inside the block can load in any order.")))),(0,a.kt)("h2",{id:"modgrouping-your-own-mods"},(0,a.kt)("strong",{parentName:"h2"},"ModGrouping your own mods")),(0,a.kt)("p",null,"Right after TTW, enable your next mod in MO2 and if multiple plugins or patches are present, then make sure those are loaded and placed below the main plugin.\nIn short, the process from this point on is this: (Detailed instructions and example below)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable a mod and launch xEdit with the VQSC argument."),(0,a.kt)("li",{parentName:"ol"},"Once loaded, you will see all conflicts caused by it. Check the records involved and patch where necessary."),(0,a.kt)("li",{parentName:"ol"},"Once patched, reload the filter or reload xEdit, then ModGroup the remaining conflicts into a ModGroup file made for that mod."),(0,a.kt)("li",{parentName:"ol"},"Take the ModGroup file you created and drag it from overwrite to the corresponding mod."),(0,a.kt)("li",{parentName:"ol"},"Repeat for the next mod going down your load order.")),(0,a.kt)("h3",{id:"example"},(0,a.kt)("strong",{parentName:"h3"},"Example")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'I will use the "(Benny Humbles You) and Steals Your Stuff" mod as example for the next ModGroup.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Since there is a TTW patch available, i enable that on top of the main mod plugin, then i load up VQSC.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Here you can see that the remaining conflicts are only between the main mod plugin and TTW, but since i already have a patch taking care of this, then it means that the remaining conflict is already taken care of and you can safely hide it via ModGroup.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expand any of the record in either plugin, then once it is open, right-click the top right of the plugin name to create a new ModGroup for that specific combination of plugins conflicting as shown in the record you opened.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now name your new ModGroup just like before, but since this one is more specific, i suggest you start creating your own naming scheme for combinations or you just use mine, which is the name of the main plugin from the mod you just enabled + the name of the plugin you are ModGrouping against, as shown in the picture.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now that the ModGroup is done, you can check if it's working by closing and opening xEdit with VQSC again or by right-clicking on the xEdit tree-view while it is still open and removing the applied filter, then right-clicking anywhere on the tree-view and applying a filter for conflicts. If no conflicts are showing then you hid the previous ones correctly and you can keep ModGrouping your mods"))))}p.isMDXComponent=!0}}]);