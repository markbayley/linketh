(this.webpackJsonpchainlink_betting_game=this.webpackJsonpchainlink_betting_game||[]).push([[0],{185:function(e,t,n){e.exports=n.p+"static/media/loading.e9291ead.gif"},186:function(e,t,n){e.exports=n.p+"static/media/inblocklogo.f8f729e2.png"},188:function(e,t,n){e.exports=n(459)},206:function(e,t){},215:function(e,t){},233:function(e,t){},235:function(e,t){},252:function(e,t){},253:function(e,t){},255:function(e,t){},256:function(e,t){},324:function(e,t){},326:function(e,t){},335:function(e,t){},337:function(e,t){},362:function(e,t){},364:function(e,t){},370:function(e,t){},371:function(e,t){},373:function(e,t){},385:function(e,t){},388:function(e,t){},393:function(e,t){},404:function(e,t){},407:function(e,t){},459:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(184),o=n.n(r),s=(n(193),n(14)),l=n.n(s),u=n(60),c=n(185),m=n.n(c),p=n(48),d=n.n(p);n(62);class b extends a.Component{render(){return i.a.createElement("div",{className:"container-fluid mt-5 col-lg"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("main",{role:"main",className:"col-lg-12 text-center text-white"},i.a.createElement("div",{className:"content mr-auto ml-auto"},i.a.createElement("div",{id:"content",className:"mt-3"},i.a.createElement("div",{className:"card mb-4 bg-dark border-danger"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",null,i.a.createElement("a",{href:"http://www.dappuniversity.com/bootcamp",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:m.a,width:"425",alt:"logo"}))),"\xa0",i.a.createElement("p",null),i.a.createElement("div",{className:"input-group mb-4"},i.a.createElement("input",{id:"disabledInput",type:"text",className:"form-control form-control-md",placeholder:"Connecting... please wait...",disabled:!0}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("div",{className:"input-group-text"},i.a.createElement("img",{src:d.a,height:"20",alt:""}),"\xa0",i.a.createElement("b",null,"ETH")))),i.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-lg",onClick:e=>{}},"Low"),"\xa0\xa0\xa0",i.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-lg",onClick:e=>{}},"High")),i.a.createElement("div",null,this.props.balance?i.a.createElement("div",{className:"float-right"},i.a.createElement("b",null,"MaxBet:")," ",Number(window.web3.utils.fromWei(this.props.maxBet.toString())).toFixed(5)," ",i.a.createElement("b",null,"ETH"),i.a.createElement("br",null),i.a.createElement("b",null,"Balance:")," ",Number(window.web3.utils.fromWei(this.props.balance.toString())).toFixed(5)," ",i.a.createElement("b",null,"ETH\xa0")):i.a.createElement("div",{id:"loader",className:"spinner-border float-right",role:"status"}))))))))}}var y=b,h=n(186),w=n.n(h);class f extends a.Component{render(){return i.a.createElement("nav",{className:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},i.a.createElement("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0",href:"http://www.inblockdesign.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:w.a,height:"32",alt:"logo"}),"InblockDesign"),this.props.account?i.a.createElement("li",{className:"nav-item text-nowrap d-none d-sm-none d-sm-block"},i.a.createElement("a",{className:"text-white",href:"https://rinkeby.etherscan.io/address/"+this.props.account,target:"_blank",rel:"noopener noreferrer"},this.props.account),"\xa0"):i.a.createElement("div",{id:"loader",className:"spinner-border text-light",role:"status"}))}}var g=f;class E extends a.Component{render(){return i.a.createElement("div",{className:"container-fluid mt-5 col-m-4"},i.a.createElement("div",{className:"col-lg"},i.a.createElement("main",{role:"main",className:"col-lg-12 text-center text-white"},i.a.createElement("div",{className:"content mr-auto ml-auto"},i.a.createElement("div",{id:"content",className:"mt-3"},i.a.createElement("div",{className:"card mb-4 bg-dark border-info"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",null,i.a.createElement("a",{href:"http://www.inblockdesign.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:d.a,width:"225",alt:"logo"}))),"\xa0",i.a.createElement("p",null),i.a.createElement("div",{className:"input-group mb-4"},i.a.createElement("input",{type:"number",step:"0.01",className:"form-control form-control-md",placeholder:"Enter an amount of ETH here...",onChange:e=>this.props.onChange(e.target.value),required:!0}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("div",{className:"input-group-text"},i.a.createElement("img",{src:d.a,height:"20",alt:""}),"\xa0",i.a.createElement("b",null,"ETH")))),i.a.createElement("button",{type:"submit",className:"btn btn-outline-info btn-lg",onClick:e=>{if(e.preventDefault(),new RegExp("^[0-9]*.?[0-9]+$").test(this.props.amount)){var t=this.props.amount.toString();this.props.makeBet(0,window.web3.utils.toWei(t))}else window.alert("Please type positive interger or float numbers")}},"Low"),"\xa0\xa0\xa0",i.a.createElement("button",{type:"submit",className:"btn btn-outline-info btn-lg",onClick:e=>{if(e.preventDefault(),new RegExp("^[0-9]*.?[0-9]+$").test(this.props.amount)){var t=this.props.amount.toString();this.props.makeBet(1,window.web3.utils.toWei(t))}else window.alert("Please type positive interger or float number")}},"High")),i.a.createElement("div",null,this.props.balance?i.a.createElement("div",{className:""},i.a.createElement("b",null,"MaxBet:")," ",Number(window.web3.utils.fromWei(this.props.maxBet.toString())).toFixed(5)," ",i.a.createElement("b",null,"ETH"),i.a.createElement("br",null),i.a.createElement("b",null,"Balance:")," ",Number(window.web3.utils.fromWei(this.props.balance.toString())).toFixed(5)," ",i.a.createElement("b",null,"ETH\xa0")):i.a.createElement("div",{id:"loader",className:"spinner-border",role:"status"}))))))))}}var v=E,x=n(95),k=n.n(x);class T extends a.Component{componentWillMount(){var e=this;return Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadWeb3();case 2:return t.next=4,e.loadBlockchainData();case 4:case"end":return t.stop()}}),t)})))()}loadBlockchainData(){var e=this;return Object(u.a)(l.a.mark((function t(){var n,a,i,r,o,s,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.web3,t.next=3,n.eth.net.getId();case 3:return 4!==t.sent&&window.alert("Please switch network to the Rinkeby and refresh the page"),a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Received",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bet",type:"uint256"},{indexed:!1,internalType:"uint256",name:"randomSeed",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"winAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"randomResult",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Result",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"admin",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"admin",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"bet",type:"uint256"},{internalType:"uint256",name:"seed",type:"uint256"}],name:"game",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[],name:"gameId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"games",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"bet",type:"uint256"},{internalType:"uint256",name:"seed",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address payable",name:"player",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastGameId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"randomResult",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"requestId",type:"bytes32"},{internalType:"uint256",name:"randomness",type:"uint256"}],name:"rawFulfillRandomness",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"_keyHash",type:"bytes32"},{internalType:"uint256",name:"_fee",type:"uint256"},{internalType:"uint256",name:"_seed",type:"uint256"}],name:"requestRandomness",outputs:[{internalType:"bytes32",name:"requestId",type:"bytes32"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"random",type:"uint256"}],name:"verdict",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawEther",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawLink",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],i="0x7173EEc923A2652f4C76F56c09f0c4f575Bc9Cf8",r=new n.eth.Contract(a,i),e.setState({contract:r}),t.next=11,n.eth.getAccounts();case 11:return o=t.sent,e.setState({account:o[0]}),t.next=15,n.eth.getBalance(e.state.account);case 15:return s=t.sent,e.setState({balance:s}),t.next=19,n.eth.getBalance(i);case 19:u=t.sent,e.setState({maxBet:u});case 21:case"end":return t.stop()}}),t)})))()}loadWeb3(){return Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return window.web3=new k.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:e.next=7;break;case 6:window.web3?window.web3=new k.a(window.web3.currentProvider):window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");case 7:case"end":return e.stop()}}),e)})))()}makeBet(e,t){var n=Math.floor(Math.random()*Math.floor(1e9));this.state.contract.methods.game(e,n).send({from:this.state.account,value:t}).on("transactionHash",e=>{this.setState({loading:!0}),this.state.contract.events.Result({},(e,t)=>{"0"===t.returnValues.winAmount?window.alert("lose :("):window.alert("WIN!"),this.setState({loading:!1}),window.location.reload()})}).on("error",e=>{window.alert("Error")})}onChange(e){this.setState({amount:e})}constructor(e){super(e),this.state={account:null,amount:null,balance:null,contract:null,event:null,loading:!1,maxBet:0},this.makeBet=this.makeBet.bind(this),this.setState=this.setState.bind(this),this.onChange=this.onChange.bind(this)}render(){return i.a.createElement("div",null,i.a.createElement(g,{account:this.state.account}),"\xa0",this.state.loading?i.a.createElement(y,{balance:this.state.balance,maxBet:this.state.maxBet}):i.a.createElement(v,{amount:this.state.amount,balance:this.state.balance,makeBet:this.makeBet,onChange:this.onChange,maxBet:this.state.maxBet,loading:this.state.loading}))}}var N=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},48:function(e,t,n){e.exports=n.p+"static/media/eth.cd488de3.png"},62:function(e,t,n){}},[[188,1,2]]]);
//# sourceMappingURL=main.707c9e76.chunk.js.map