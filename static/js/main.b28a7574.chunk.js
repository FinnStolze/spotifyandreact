(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(82)},73:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=n(15),s=n(37),u=n(39),l=n(4),p=n(6),d=n(7),m=n(9),f=n(8),b=n(10),h=n(11),v=n.n(h),x=n(19),y=n(40),k=n.n(y),g=function(e){return k.a.create({baseURL:"https://api.spotify.com/v1",headers:{Authorization:"Bearer ".concat(e)}})},E=function(e){return{type:"CHANGE_INDEX",payload:{albumIndex:e,trackIndex:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}},I=function(e,t,n,a){return function(){var r=Object(x.a)(v.a.mark(function r(c){var o,i,s;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=t[n].uri,i="me/player/play?&device_id=".concat(a),s={uris:[o],offset:{position:0}},r.next=5,g(e).put(i,s);case 5:c({type:"PLAY_TRACK"});case 6:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()},O=function(e,t){return function(){var t=Object(x.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"me/player/pause",t.next=3,g(e).put("me/player/pause");case 3:n({type:"PAUSE_TRACK"});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},j=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(){n.props.loginUser()},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderButton",value:function(){return this.props.signedIn?r.a.createElement("button",{type:"button",className:"btn btn-danger"},"Logout"):r.a.createElement("button",{onClick:this.onLogin,type:"button",className:"btn btn-success"},"Login with Spotify")}},{key:"render",value:function(){return this.renderButton()}}]),t}(r.a.Component),w=Object(l.b)(function(e){return{signedIn:e.auth.signedIn}},{loginUser:function(){var e=new URL("https://accounts.spotify.com/authorize?");return e.searchParams.append("client_id","43c8bd59b2ec4dd0b807352b209b6636"),e.searchParams.append("response_type","token"),e.searchParams.append("redirect_uri","http://finnstolze.github.io/spotifyandreact"),e.searchParams.append("scope","user-modify-playback-state streaming user-read-playback-state"),window.location=e.href,{type:"LOGIN_USER"}}})(j),T=n(41),_=n(84),N=n(85),C=function(e){var t=e.track,n=e.trackIndex,a=e.onSelectTrack,c=e.textColor;return r.a.createElement("li",{onClick:function(){return a(n)},className:"list-group-item bg-dark ".concat(c),style:{cursor:"pointer"}},t.name)},A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onSelectTrack=function(e){n.props.changeIndex(n.props.albumIndex,e)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group list-group-flush"},this.props.tracks.map(function(t,n){return r.a.createElement(C,{onSelectTrack:e.onSelectTrack,trackIndex:n,track:t,key:t.uri,textColor:n===e.props.trackIndex?"text-muted":"text-light"})}))}}]),t}(r.a.Component),S=Object(l.b)(function(e){return{token:e.auth.token,albumIndex:e.index.albumIndex,trackIndex:e.index.trackIndex}},{changeIndex:E})(A),D=function(e){var t=e.coverSource,n=e.coverAltText;return r.a.createElement("img",{className:"p-1",src:t,alt:n})},P=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onPlay=function(){n.props.playTrack(n.props.token,n.props.activeAlbum,n.props.index.trackIndex,n.props.device_id)},n.onPause=function(){n.props.pauseTrack(n.props.token)},n.onNext=function(){n.props.nextTrack(n.props.index.trackIndex,n.props.activeAlbum,n.props.token,n.props.device_id)},n.onPrev=function(){n.props.prevTrack(n.props.index.trackIndex,n.props.activeAlbum,n.props.token,n.props.device_id)},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){e.index.albumIndex===this.props.index.albumIndex&&e.index.trackIndex===this.props.index.albumIndex||this.props.playTrack(this.props.token,this.props.activeAlbum,this.props.index.trackIndex,this.props.device_id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Album Index: ",this.props.index.albumIndex),r.a.createElement("div",null,"Track Index: ",this.props.index.trackIndex),r.a.createElement("button",{onClick:this.onPlay,className:"btn btn-success m-2"},"Play"),r.a.createElement("button",{onClick:this.onPause,className:"btn btn-danger m-2"},"||"),r.a.createElement("button",{onClick:this.onPrev,className:"btn btn-info m-2"},"prev"),r.a.createElement("button",{onClick:this.onNext,className:"btn btn-info m-2"},"next"))}}]),t}(r.a.Component),L=Object(l.b)(function(e){var t=e.albums[e.index.albumIndex].album.tracks.items;return{token:e.auth.token,activeAlbum:t,index:e.index,device_id:e.auth.device_id}},{playTrack:I,pauseTrack:O,nextTrack:function(e,t,n,a){return function(){var r=Object(x.a)(v.a.mark(function r(c){var o,i,s,u;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=e===t.length-1?0:e+1,i=t[e].uri,s="me/player/play?&device_id=".concat(a),u={uris:[i],offset:{position:0}},r.next=6,g(n).put(s,u);case 6:c({type:"NEXT_TRACK",payload:o});case 7:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()},prevTrack:function(e,t,n,a){return function(){var r=Object(x.a)(v.a.mark(function r(c){var o,i,s,u;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=0===e?t.length-1:e-1,i=t[e].uri,s="me/player/play?&device_id=".concat(a),u={uris:[i],offset:{position:0}},r.next=6,g(n).put(s,u);case 6:c({type:"PREV_TRACK",payload:o});case 7:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()}})(P),R=(n(73),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0},n.onExiting=function(){n.animating=!0},n.onExited=function(){n.animating=!1},n.next=function(){if(!n.animating){var e=n.state.activeIndex===n.props.albums.length-1?0:n.state.activeIndex+1;n.setState({activeIndex:e}),n.props.changeIndex(n.state.activeIndex)}},n.previous=function(){if(!n.animating){var e=0===n.state.activeIndex?n.props.albums.length-1:n.state.activeIndex-1;n.setState({activeIndex:e}),n.props.changeIndex(n.state.activeIndex)}},n.goToIndex=function(e){n.animating||n.setState({activeIndex:e})},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.isSignedIn&&this.props.getAlbums(this.props.token)}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.albums.map(function(t){return r.a.createElement(T.a,{key:t.src,onExiting:e.onExiting,onExited:e.onExited},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-4 .offset-md-4"},r.a.createElement("div",{className:"card bg-dark shadow-lg rounded"},r.a.createElement(D,{className:"card-img-top",coverSource:t.src,coverAltText:t.altText}),r.a.createElement("div",{className:"card-body text-light"},r.a.createElement("h5",{className:"card-title"}," ",t.info.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.info.artists[0].name),r.a.createElement("p",{className:"card-text"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(L,null))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card bg-dark shadow-lg rounded"},r.a.createElement("div",{className:"card-body",style:{height:500,overflowY:"scroll"}},r.a.createElement(S,{tracks:t.tracks}))))))});return r.a.createElement("div",null,r.a.createElement("style",null,".carousel-control-prev-icon,\n.carousel-control-next-icon {\n  height: 100px;\n  width: 100px;\n  outline: black;\n  background-size: 100%, 100%;\n  background-image: none;\n}\n\n.carousel-control-next-icon:after\n{\n  content: '>';\n  font-size: 55px;\n  color: black;\n}\n\n.carousel-control-prev-icon:after {\n  content: '<';\n  font-size: 55px;\n  color: black;\n}"),r.a.createElement(_.a,{className:"container",activeIndex:t,next:this.next,previous:this.previous,interval:!1},n,r.a.createElement(N.a,{fill:"%23fff",direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(N.a,{direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(a.Component)),K=Object(l.b)(function(e,t){var n=e.albums.map(function(e){return{src:e.album.images[1].url,altText:"AlbumCover",caption:e.album.artists[0].name,tracks:e.album.tracks.items,info:e.album}});return{token:e.auth.token,isSignedIn:e.auth.signedIn,albums:n}},{getAlbums:function(e){return function(){var t=Object(x.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e).get("me/albums");case 2:a=t.sent,n({type:"GET_ALBUMS",payload:a.data.items});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},playTrack:I,pauseTrack:O,changeIndex:E})(R),U=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.auth.token;this.props.getDeviceIds(this.props.auth.token),window.onSpotifyWebPlaybackSDKReady=function(){e.player=new window.Spotify.Player({name:"Album Carousel",getOAuthToken:function(e){e(t)}}),e.player.addListener("initialization_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("authentication_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("account_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("playback_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("player_state_changed",function(e){console.log(e)}),e.player.addListener("ready",function(t){var n=t.device_id;console.log("Ready with Device ID",n),e.props.getDeviceIds(n)}),e.player.addListener("not_ready",function(e){var t=e.device_id;console.log("Device ID has gone offline",t)}),e.player.connect().then(function(e){e&&console.log("The Web Playback SDK successfully connected to Spotify!")})}}},{key:"render",value:function(){return null}}]),t}(r.a.Component),z=Object(l.b)(function(e){return{auth:e.auth}},{getDeviceIds:function(e){return{type:"GET_DEVICE_IDS",payload:e}}})(U),G=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href;if(e.includes("#")){var t=e.match(/#(?:access_token)=([\S\s]*?)&/)[1];this.props.receiveToken(t)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light text-dark"},r.a.createElement("nav",{className:"navbar navbar-white bg-dark shadow-lg rounded"},r.a.createElement("div",{className:"navbar-brand text-white"},"AlbumCarousel"),r.a.createElement(w,null)),this.props.isSignedIn?r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-center p-3"}),r.a.createElement(K,null)," ",r.a.createElement("br",null),r.a.createElement(z,null),r.a.createElement("footer",{className:"footer p-1 bg-dark shadow-lg rounded text-light text-right text-muted m-1"},"Created by Finn Stolze")):r.a.createElement("div",null," "))}}]),t}(r.a.Component),M=Object(l.b)(function(e){return{isSignedIn:e.auth.signedIn}},{receiveToken:function(e){return{type:"RECEIVED_TOKEN",payload:e}}})(G),V=function(){return r.a.createElement("div",null,r.a.createElement(M,null))},B=n(14),H={token:null,signedIn:null,device_id:""},X={trackIndex:0,albumIndex:0},W=Object(i.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_TOKEN":return Object(B.a)({},e,{token:t.payload,signedIn:!0});case"GET_DEVICE_IDS":return Object(B.a)({},e,{device_id:t.payload});default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALBUMS":return t.payload;default:return e}},index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_INDEX":return t.payload;case"NEXT_TRACK":case"PREV_TRACK":return Object(B.a)({},e,{trackIndex:t.payload});default:return e}}}),J=(n(81),Object(i.createStore)(W,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))));o.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(V,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b28a7574.chunk.js.map