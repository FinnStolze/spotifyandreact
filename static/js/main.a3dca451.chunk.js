(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,n){e.exports=n(93)},93:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(23),o=n.n(i),c=n(11),s=n(43),u=n(45),l=n(7),p=n(100),d=n(99),h=n(14),m=n(15),f=n(17),b=n(16),v=n(18),y=n(98),g=n(10),k=n.n(g),E=n(21),x=n(22),O=n.n(x),j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(){n.props.loginUser()},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"renderButton",value:function(){return this.props.signedIn?r.a.createElement("button",{type:"button",className:"btn btn-danger"},"Logout"):r.a.createElement("button",{onClick:this.onLogin,type:"button",className:"btn btn-success"},"Login with Spotify")}},{key:"render",value:function(){return this.renderButton()}}]),t}(r.a.Component),w=Object(l.b)(function(e){return{signedIn:e.auth.signedIn}},{loginUser:function(){var e=new URL("https://accounts.spotify.com/authorize?");return e.searchParams.append("client_id","43c8bd59b2ec4dd0b807352b209b6636"),e.searchParams.append("response_type","token"),e.searchParams.append("redirect_uri","https://finnstolze.github.io/spotifyandreact"),e.searchParams.append("scope","user-modify-playback-state streaming user-read-birthdate user-read-email user-read-private user-read-private user-library-read"),window.location=e.href,{type:"LOGIN_USER"}}})(j),I=n(2),T=n(46),L=n(95),_=n(96),S=n(97),A=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(I.a)(Object(I.a)(n))),n.previous=n.previous.bind(Object(I.a)(Object(I.a)(n))),n.goToIndex=n.goToIndex.bind(Object(I.a)(Object(I.a)(n))),n.onExiting=n.onExiting.bind(Object(I.a)(Object(I.a)(n))),n.onExited=n.onExited.bind(Object(I.a)(Object(I.a)(n))),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.isSignedIn&&this.props.getAlbums(this.props.token)}},{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.items.map(function(t){return r.a.createElement(T.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},r.a.createElement("div",{className:"d-flex  flex-row justify-content-center",style:{height:"300px"}},r.a.createElement("img",{className:"h-100",src:t.src,alt:t.altText}),r.a.createElement("div",null),r.a.createElement("ul",{style:{overflowY:"scroll"},className:"list-group list-group-flush"},t.tracks.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e.name)})),r.a.createElement("div",null)))});return r.a.createElement(L.a,{className:"container",activeIndex:t,next:this.next,previous:this.previous},r.a.createElement(_.a,{items:this.props.items,activeIndex:t,onClickHandler:this.goToIndex}),n,r.a.createElement(S.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(S.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(a.Component),P=Object(l.b)(function(e,t){console.log(e);var n=e.albums.map(function(e){return{src:e.album.images[1].url,altText:"AlbumCover",caption:e.album.artists[0].name,tracks:e.album.tracks.items}});return{token:e.auth.token,isSignedIn:e.auth.signedIn,items:n}},{getAlbums:function(e){return function(){var t=Object(E.a)(k.a.mark(function t(n){var a,r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=O.a.create({baseURL:"https://api.spotify.com/v1",headers:{Authorization:"Bearer ".concat(e)}}),t.next=3,a.get("me/albums");case 3:r=t.sent,n({type:"GET_ALBUMS",payload:r.data.items});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(A),C=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onPlay=function(){n.props.playTrack(n.props.auth.token,n.props.uri)},n.onPause=function(){n.props.pauseTrack(n.props.auth.token,n.props.uri)},n.onActivate=function(){n.props.activateDevice(n.props.auth.token,n.props.uri)},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.auth.token;window.onSpotifyWebPlaybackSDKReady=function(){e.player=new window.Spotify.Player({name:"Finns Player",getOAuthToken:function(e){e(t)}}),e.player.addListener("initialization_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("authentication_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("account_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("playback_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("player_state_changed",function(e){console.log(e)}),e.player.addListener("ready",function(e){var t=e.device_id;console.log("Ready with Device ID",t)}),e.player.addListener("not_ready",function(e){var t=e.device_id;console.log("Device ID has gone offline",t)}),e.player.connect().then(function(e){e&&console.log("The Web Playback SDK successfully connected to Spotify!")})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onActivate}," Activate "),r.a.createElement("button",{onClick:this.onPlay}," Play "),r.a.createElement("button",{onClick:this.onPause}," Pause "))}}]),t}(r.a.Component),D=Object(l.b)(function(e){return{auth:e.auth,uri:"spotify:track:2J3XzDLjbXkny8qhr33zTh"}},{playTrack:function(e,t){return function(){var t=Object(E.a)(k.a.mark(function t(n){var a,r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=O.a.create({baseURL:"https://api.spotify.com/v1/me/player",headers:{authorization:"Bearer ".concat(e)}}),t.next=3,a.put("/play");case 3:r=t.sent,n({type:"PLAY_TRACK",payload:r.data});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},activateDevice:function(e,t){return function(){var t=Object(E.a)(k.a.mark(function t(n){var a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O()({method:"put",url:" \thttps://api.spotify.com/v1/me/player",headers:{authorization:"Bearer ".concat(e)},data:{device_ids:["8823f9501fd02a23671d4b6e3260d078e835ccde"],play:!1}});case 2:a=t.sent,n({type:"PLAY_TRACK",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},pauseTrack:function(e,t){return function(){var t=Object(E.a)(k.a.mark(function t(n){var a,r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=O.a.create({baseURL:"https://api.spotify.com/v1/me/player",headers:{authorization:"Bearer ".concat(e)}}),t.next=3,a.put("/pause");case 3:r=t.sent,n({type:"PLAY_TRACK",payload:r.data});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(C),N=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light text-dark"},r.a.createElement("nav",{className:"navbar navbar-white bg-dark"},r.a.createElement(y.a,{to:"/",className:"navbar-brand text-white"},"home"),r.a.createElement(w,null)),this.props.isSignedIn?r.a.createElement("div",null,r.a.createElement(P,null)," ",r.a.createElement("br",null),r.a.createElement(D,null)):r.a.createElement("div",null," "))}}]),t}(r.a.Component),R=Object(l.b)(function(e){return{isSignedIn:e.auth.signedIn}},{})(N),z=n(48),U=n.n(z)()({basename:"https://finnstolze.github.io/spotifyandreact"}),B=Object(l.b)(null,{receiveToken:function(e){return{type:"RECEIVED_TOKEN",payload:e}}})(function(e){var t=window.location.href.match(/#(?:access_token)=([\S\s]*?)&/)[1];return e.receiveToken(t),r.a.createElement("div",null,"Redirecting...")}),K=function(){return r.a.createElement(p.a,{history:U},r.a.createElement("div",null,r.a.createElement(d.a,{path:"/",exact:!0,component:R}),r.a.createElement(d.a,{path:"/redirectedpage",component:B})))},M=n(20),Y={token:null,signedIn:null},G=Object(c.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_TOKEN":return U.push("/"),Object(M.a)({},e,{token:t.payload,signedIn:!0});default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALBUMS":return t.payload;default:return e}}}),H=(n(92),Object(c.createStore)(G,Object(s.composeWithDevTools)(Object(c.applyMiddleware)(u.a))));o.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(K,null)),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a3dca451.chunk.js.map