(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{426:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r={sidebar_position:1},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Disclaimer",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/baf-wallet-docs/docs/intro",editUrl:"https://github.com/bafnetwork/baf-wallet-v2/tree/main/docs/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Contributing",permalink:"/baf-wallet-docs/docs/contributing"}},l=[{value:"Disclaimer",id:"disclaimer",children:[]},{value:"Problem",id:"problem",children:[{value:"A single library to build any application on any blockchain",id:"a-single-library-to-build-any-application-on-any-blockchain",children:[]},{value:"Can use any key storage / management system",id:"can-use-any-key-storage--management-system",children:[]},{value:"Is very transparent and easy to use",id:"is-very-transparent-and-easy-to-use",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]}],h={toc:l};function p(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"This project is in early stages of development. ",(0,o.kt)("strong",{parentName:"p"},"Do not use it on any mainnet with real assets"),"."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"antimaximalism")," is yet another library for interacting with blockchains. The way it differentiates itself is by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A single library to build any application on any blockchain, layer 2 solution, or decentralized network"),(0,o.kt)("li",{parentName:"ul"},"Can use any key storage / management system"),(0,o.kt)("li",{parentName:"ul"},"It is very transparent and easy to use")),(0,o.kt)("p",null,"Each of these address a specific problem with Dapp development today - let's break each of these points down."),(0,o.kt)("h3",{id:"a-single-library-to-build-any-application-on-any-blockchain"},"A single library to build any application on any blockchain"),(0,o.kt)("p",null,"Pretty self explanatory. But really, what problem does this solve? Well, literally every blockchain, layer 2 solution, or more generally any decentralized network has its own SDK. And boy are there a lot of them. For every new chain crypto devs want to use, they have to learn to use a different SDK which has its own types, interfaces, idiosyncracies, etc. An example makes this more clear:"),(0,o.kt)("p",null,"Take Aaron (pronounced ay-ay-ron, in an exaggerated low voice with a low-to-high tone on the 'ron' part just like our boy Carlos says \"hey hey heyyyyyyyy\"), our favorite Jacksonville-based ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/FloridaMan/"},"Florida Man")," who recently started writing dapps because lambo, and he's still figuring how to not shoot themselves in the foot with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),". He's working on a revolutionary flash-quantum NFT repo market that uses a tetris duel for price discovery. He wants to use a state channel for the tetris duel."),(0,o.kt)("p",null,"When opening the state channel, he wants to to verify that whoever's on other side of the state channel actually controls they pubkey they claim to. He started by making the necessary on-chain transactions to set up the state channel, but, having read some medium articles about peer-to-peer networking, he realizes he needs to somehow exchange peer-to-peer communication information like IP addresses, even though the user may be sitting behind a NAT and it won't work anyways. Regardless, when they exchange IP addresses, they need to also exchange signatures - this way users can be sure the random fuck they're engaging in mortal tetris combat with actually owns the NFT in question."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Web3")," doesn't allow them to directly get the user's public key. Instead, it gives them an opaque interface through which they can sign messages or transactions. With ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),", Aaron can just get the public key from an account. But at the same time, on ",(0,o.kt)("inlineCode",{parentName:"p"},"Near"),", the user doesn't just have one keypair - they have one for every function call on every smart contract. Sure maybe it requires some work for Aaron to figure out which one he needs to use to verify the signature. But still, he can just get the public key from ",(0,o.kt)("inlineCode",{parentName:"p"},"near-api-js"),"'s. Unfortunately, ethereum is where all of the NFT power users are, so he's starts building his project with ",(0,o.kt)("inlineCode",{parentName:"p"},"web3"),". Unfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"web3")," affords no such convenience. He's gotta manually parse the signature's bytes into ",(0,o.kt)("inlineCode",{parentName:"p"},"v, r, s")," values, concatenate the IP address and nonce, hash it with the right sha3 hash function, and then stick it into ",(0,o.kt)("inlineCode",{parentName:"p"},"ecrecover")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereumjs-util")," to get the public key. But this actually doesn't work because if the signature was made with the wrong public key, it will give the wrong public key. So rather than do the simple thing he learned after a hard 3 months hitting the books and working through Dan Boneh's Cryptography class on Coursera - that is, just verify the fucking signature - he's actually gotta get the ethereum address of the NFT owner, do everything I just mentioned ",(0,o.kt)("em",{parentName:"p"},"and")," get an address from the public key and check if that address owns the NFT. He considers switching to ",(0,o.kt)("inlineCode",{parentName:"p"},"ethers")," because it has a method that, at first glance, does this. Unfortunately, it opaquely inserts the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\x19ETHEREUM SIGNED ADDRESS: ")," prefix in the message you're trying to verify, assuming the signature was created by ",(0,o.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API"},(0,o.kt)("inlineCode",{parentName:"a"},"eth_sign")),", while, in fact, the state channel library he's using to get the API address and create those signatures doesn't do that because it's chain agnostic. So he's gotta do all of that shit himself and find all of the little mistakes he inevitably makes in the process. And all that was before he realizes the keys used by the state channel library are on a different elliptic curve from ethereum's keys, so now he's gotta either find another production-ready state channel library (unlikely) or find some extra fucked way of associating ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519")," keys from ",(0,o.kt)("inlineCode",{parentName:"p"},"secp256k1")," keys with a server and a database, which means now he's gotta set up and manage that infra and become a captive customer of AWS. All of this just to verify a fucking signature. Not to mention the fact that this system he's set up makes it really hard to add support for other blockchains. What if he wants to grace the Polkadot ecosystem with his awesome flash-quantum NFT repo market for gamers? Well now there's another SDK. It has virtually no docs, so he has to go spelunking in the source code to see what it actually does. Luckily it gives him a way to directly verify a signature - great!. Wait, nevermind, it uses schnorr signatures.."),(0,o.kt)("p",null,"In summary, he spent 3 weeks trying to verify a signature instead of creating a dope ass tetris battle because almost every library seems to know what its users are going to do with it. If that was the case, they might as well just write their application for them. In other words, almost ever\ud83c\udf08y library for dapp developers tries to force you to write your app in a specific way, on a specific blockchain. That is, they are maximalist - even if the people who wrote it aren't cultists who say \"","[CHAIN__NAME]",' is the lord thy chain. Thou shalt have no other chains before me", they still probably roll their eyes at developers who write applications for a shitcoin like ',"[chain that isn't CHAIN_NAME]",". He could have built his entire application by now if this wasn't the case. Things would be much better if he could use whatever state channel library he wants with whatever layer 1 he wants with whatever off-chain storage he wants, and just write apps as, you know, someone who write code, not as a \ud83d\udd25",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Bitcoin Developer")),"\ud83d\udd25\u2122, \u2728",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Ethereum Developer")),"\u2728\u2122, or \ud83c\udf08",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"[","INSERT_CHAIN_NAME_HERE","]"," Developer")),"\ud83c\udf08."),(0,o.kt)("h3",{id:"can-use-any-key-storage--management-system"},"Can use any key storage / management system"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"is-very-transparent-and-easy-to-use"},"Is very transparent and easy to use"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"These are the steps to get a working instance running locally"),(0,o.kt)("p",null,"Prerequisites: have ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"near-cli")," installed."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm i")," in the root of this repo"),(0,o.kt)("li",{parentName:"ol"},"If you're using the API, DM Lev or Sebastien to get the development client secret"),(0,o.kt)("li",{parentName:"ol"},"make a copy of ",(0,o.kt)("inlineCode",{parentName:"li"},".env.example")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"apps/api/src/environments")," and rename it ",(0,o.kt)("inlineCode",{parentName:"li"},".env.dev")),(0,o.kt)("li",{parentName:"ol"},"populate all of the fields in ",(0,o.kt)("inlineCode",{parentName:"li"},".env.dev")," with non-example values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For near keys, find your key json file (any will do really, generate a new one if you like) - typically they are found in a ",(0,o.kt)("inlineCode",{parentName:"li"},".near-credentials/default")," directory, which is typically located in ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME")," if you installed ",(0,o.kt)("inlineCode",{parentName:"li"},"near-cli")," globally. Then use the hex part of the private key in that file, excluding the ",(0,o.kt)("inlineCode",{parentName:"li"},'"ed25519:"'),". This must correspond to the account ID given for ",(0,o.kt)("inlineCode",{parentName:"li"},"NEAR_MASTER_ACCOUNT_ID"),"."),(0,o.kt)("li",{parentName:"ul"},"For the ",(0,o.kt)("inlineCode",{parentName:"li"},"DISCORD_CLIENT_ID"),", use ",(0,o.kt)("inlineCode",{parentName:"li"},'"821890148198776874"')," (quotes are important)"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"TORUS_VERIFIER_NAME"),", use ",(0,o.kt)("inlineCode",{parentName:"li"},"baf wallet-discord-testnet")),(0,o.kt)("li",{parentName:"ul"},"For the client-secret, you will need to ask Lev or Sebastien. We still have yet to set up a painless way to manage these environment variables so that everyone can use their own Discord OAuth endpoint.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"repeat steps 3-4 for ",(0,o.kt)("inlineCode",{parentName:"li"},"libs/baf-contract/env")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npx nx serve+api frontend"),".")),(0,o.kt)("p",null,"For more information about the project, it's code structure / philosophy, it's various libraries and applications, and how to contribute, see the relevant section on the sidebar."))}p.isMDXComponent=!0}}]);