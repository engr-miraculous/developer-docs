(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{277:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jumblr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jumblr","aria-hidden":"true"}},[e._v("#")]),e._v(" Jumblr")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("At this time, all zero-knowledge transaction and Jumblr functionality on the main KMD chain is disabled.")]),e._v(" "),a("p",[e._v("Other Smart Chains in the Komodo ecosystem offer zero-knowledge transaction functionality. However, no Smart Chain currently offers Jumblr, and therefore this documentation is currently deprecated.")]),e._v(" "),a("p",[e._v("Please check with the developers of your desired Smart Chain to learn more.")])]),e._v(" "),a("p",[e._v("The following RPC calls interact with the "),a("code",[e._v("komodod")]),e._v(" software, and are made available through the "),a("code",[e._v("komodo-cli")]),e._v(" software.")]),e._v(" "),a("h2",{attrs:{id:"basic-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Instructions")]),e._v(" "),a("ul",[a("li",[e._v("Install Komodo following the "),a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html#linux"}},[e._v("installation guides")]),e._v(" and change into the "),a("code",[e._v("komodod")]),e._v(" subdirectory using:")],1)]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/komodo/src\n")])])]),a("ul",[a("li",[e._v("Start the daemon:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodod "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Designate a KMD address with at least 10.024 KMD funds:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_deposit KMD_address\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("The jumblr process continues until there are less than ~ 10.024 KMD in the deposit address.")])]),e._v(" "),a("ul",[a("li",[e._v("Designate a destination address for your funds. This should be a transparent address that you are keeping secret:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("komodo-cli jumblr_secret destination_KMD_address\n")])])]),a("ul",[a("li",[e._v("Leave your node running until the balance in your first address reaches below 10.024 KMD and the destination address receives the correct amount.")])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[e._v("Jumblr is created to be resistant against time-based analysis. Because of this, Jumblr is purposefully designed not to be fast. You will need to leave your node running for several hours for the process to finish.")])]),e._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" 📌 Examples")]),e._v(" "),a("p",[e._v("Designate your deposit address.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])]),a("p",[e._v("Designate your secret destination address.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_secret RS46GZ5iTkt2exdauQG3JJ8fdnZNJUvAc1\n")])])]),a("h2",{attrs:{id:"jumblr-deposit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-deposit","aria-hidden":"true"}},[e._v("#")]),e._v(" jumblr_deposit")]),e._v(" "),a("p",[a("strong",[e._v('jumblr_deposit "depositaddress"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("jubmlr_deposit")]),e._v(" method indicates the address from which Jumblr should withdraw funds. There should be at least 10.024 KMD in this address. Jumblr will withdraw funds in increments of 10, 100, or 7770 KMD.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("While shielded z_address technology is available on all KMD-based Smart Chains, the Jumblr engine and methods are only available on the KMD mainnet.")])]),e._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v('"depositaddress"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the address from which Jumblr will withdraw funds")])])])]),e._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h4",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 📌 Examples")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"jumblr-pause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-pause","aria-hidden":"true"}},[e._v("#")]),e._v(" jumblr_pause")]),e._v(" "),a("p",[a("strong",[e._v("jumblr_pause")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("jumblr_pause")]),e._v(" method instructs Jumblr to temporarily pause the privacy-shielding process.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("See also "),a("b",[e._v("jumblr_resume")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h4",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 📌 Examples")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_pause\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"jumblr-resume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-resume","aria-hidden":"true"}},[e._v("#")]),e._v(" jumblr_resume")]),e._v(" "),a("p",[a("strong",[e._v("jumblr_resume")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("jumblr_resume")]),e._v(" method instructs Jumblr to resume the privacy-shielding process.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("See also "),a("b",[e._v("jumblr_pause")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h4",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4","aria-hidden":"true"}},[e._v("#")]),e._v(" 📌 Examples")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumblr_resume\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"jumblr-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-secret","aria-hidden":"true"}},[e._v("#")]),e._v(" jumblr_secret")]),e._v(" "),a("p",[a("strong",[e._v('jumblr_secret "secretaddress"')])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("jumblr_secret")]),e._v(" method indicates to Jumblr the final t destination address. This should be a separate t address that has no connection to the "),a("code",[e._v("wallet.dat")]),e._v(" file of your "),a("code",[e._v("jumblr_deposit")]),e._v(" address. Ideally, you should only access the final "),a("code",[e._v("jumblr_secret")]),e._v(" address via a separate node, and with other layers of privacy (VPN, Tor, etc.).")]),e._v(" "),a("h3",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v('"secretaddress"')]),e._v(" "),a("td",[e._v("(string, required)")]),e._v(" "),a("td",[e._v("the destination transparent address")])])])]),e._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("(none)")]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h4",{attrs:{id:"examples-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-5","aria-hidden":"true"}},[e._v("#")]),e._v(" 📌 Examples")]),e._v(" "),a("p",[e._v("Command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodo-cli jumbr_secret "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RCpMUZwxc3pWsgip5aj3Sy1cKkh86P3Tns"')]),e._v("\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])],1)},[],!1,null,null,null);t.default=r.exports}}]);