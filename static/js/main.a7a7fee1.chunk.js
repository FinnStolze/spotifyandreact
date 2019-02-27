(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(15),s=n(38),u=n(40),l=n(4),p=n(6),d=n(7),m=n(9),h=n(8),f=n(10),b=n(12),v=n.n(b),y=n(20),x=n(18),k=n.n(x),g=function(e){return{type:"CHANGE_INDEX",payload:{albumIndex:e,trackIndex:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}},E=function(e,t,n){return function(){var a=Object(y.a)(v.a.mark(function a(r){var c,o;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=t[n].uri,a.next=3,k()({method:"put",baseURL:"https://api.spotify.com/v1/me/player/play?",params:{device_id:"8823f9501fd02a23671d4b6e3260d078e835ccde"},headers:{authorization:"Bearer ".concat(e)},data:{uris:[c],offset:{position:0}}});case 3:return a.next=5,k()({method:"get",url:" \thttps://api.spotify.com/v1/me/player",headers:{authorization:"Bearer ".concat(e)}});case 5:o=a.sent,r({type:"PLAY_TRACK",payload:o.data.item});case 7:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},I=function(e,t){return function(){var t=Object(y.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=k.a.create({baseURL:"https://api.spotify.com/v1/me/player",headers:{authorization:"Bearer ".concat(e)}}),t.next=3,a.put("/pause");case 3:n({type:"PAUSE_TRACK"});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(){n.props.loginUser()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderButton",value:function(){return this.props.signedIn?r.a.createElement("button",{type:"button",className:"btn btn-danger"},"Logout"):r.a.createElement("button",{onClick:this.onLogin,type:"button",className:"btn btn-success"},"Login with Spotify")}},{key:"render",value:function(){return this.renderButton()}}]),t}(r.a.Component),j=Object(l.b)(function(e){return{signedIn:e.auth.signedIn}},{loginUser:function(){var e=new URL("https://accounts.spotify.com/authorize?");return e.searchParams.append("client_id","43c8bd59b2ec4dd0b807352b209b6636"),e.searchParams.append("response_type","token"),e.searchParams.append("redirect_uri","https://finnstolze.github.io/spotifyandreact"),e.searchParams.append("scope","user-modify-playback-state streaming user-read-playback-state"),window.location=e.href,{type:"LOGIN_USER"}}})(O),T=n(41),w=n(84),N=n(85),A=function(e){var t=e.track,n=e.trackIndex,a=e.onSelectTrack,c=e.textColor;return r.a.createElement("li",{onClick:function(){return a(n)},className:"list-group-item bg-dark ".concat(c),style:{cursor:"pointer"}},t.name)},C=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSelectTrack=function(e){n.props.changeIndex(n.props.albumIndex,e)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-group list-group-flush"},this.props.tracks.map(function(t,n){return r.a.createElement(A,{onSelectTrack:e.onSelectTrack,trackIndex:n,track:t,key:t.uri,textColor:n===e.props.trackIndex?"text-muted":"text-light"})}))}}]),t}(r.a.Component),_=Object(l.b)(function(e){return{token:e.auth.token,albumIndex:e.index.albumIndex,trackIndex:e.index.trackIndex}},{changeIndex:g})(C),S=function(e){var t=e.coverSource,n=e.coverAltText;return r.a.createElement("img",{className:"p-1",src:t,alt:n})},R=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onPlay=function(){n.props.playTrack(n.props.token,n.props.activeAlbum,n.props.index.trackIndex)},n.onPause=function(){n.props.pauseTrack(n.props.token)},n.onNext=function(){n.props.nextTrack(n.props.index.trackIndex,n.props.activeAlbum,n.props.token)},n.onPrev=function(){n.props.prevTrack(n.props.index.trackIndex,n.props.activeAlbum,n.props.token)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){console.log(e),e.index.albumIndex===this.props.index.albumIndex&&e.index.trackIndex===this.props.index.albumIndex||this.props.playTrack(this.props.token,this.props.activeAlbum,this.props.index.trackIndex)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Album Index: ",this.props.index.albumIndex),r.a.createElement("div",null,"Track Index: ",this.props.index.trackIndex),r.a.createElement("button",{onClick:this.onPlay,className:"btn btn-success m-2"},"Play"),r.a.createElement("button",{onClick:this.onPause,className:"btn btn-danger m-2"},"||"),r.a.createElement("button",{onClick:this.onPrev,className:"btn btn-info m-2"},"prev"),r.a.createElement("button",{onClick:this.onNext,className:"btn btn-info m-2"},"next"))}}]),t}(r.a.Component),L=Object(l.b)(function(e){var t=e.albums[e.index.albumIndex].album.tracks.items;return{token:e.auth.token,activeAlbum:t,index:e.index}},{playTrack:E,pauseTrack:I,nextTrack:function(e,t,n){return function(){var a=Object(y.a)(v.a.mark(function a(r){var c,o;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=e===t.length-1?0:e+1,o=t[e].uri,a.next=4,k()({method:"put",baseURL:"https://api.spotify.com/v1/me/player/play?",params:{device_id:"8823f9501fd02a23671d4b6e3260d078e835ccde"},headers:{authorization:"Bearer ".concat(n)},data:{uris:[o],offset:{position:0}}});case 4:r({type:"NEXT_TRACK",payload:c});case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},prevTrack:function(e,t,n){return function(){var a=Object(y.a)(v.a.mark(function a(r){var c,o;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=0===e?t.length-1:e-1,o=t[e].uri,a.next=4,k()({method:"put",baseURL:"https://api.spotify.com/v1/me/player/play?",params:{device_id:"8823f9501fd02a23671d4b6e3260d078e835ccde"},headers:{authorization:"Bearer ".concat(n)},data:{uris:[o],offset:{position:0}}});case 4:r({type:"PREV_TRACK",payload:c});case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}})(R),P=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0},n.onExiting=function(){n.animating=!0},n.onExited=function(){n.animating=!1},n.next=function(){if(!n.animating){var e=n.state.activeIndex===n.props.albums.length-1?0:n.state.activeIndex+1;n.setState({activeIndex:e}),n.props.changeIndex(n.state.activeIndex)}},n.previous=function(){if(!n.animating){var e=0===n.state.activeIndex?n.props.albums.length-1:n.state.activeIndex-1;n.setState({activeIndex:e}),n.props.changeIndex(n.state.activeIndex)}},n.goToIndex=function(e){n.animating||n.setState({activeIndex:e})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.isSignedIn&&this.props.getAlbums(this.props.token)}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.albums.map(function(t){return r.a.createElement(T.a,{key:t.src,onExiting:e.onExiting,onExited:e.onExited},r.a.createElement("div",{className:"row justify-content-center",style:{height:500}},r.a.createElement("div",{className:"col-md-4 .offset-md-4 w-100"},r.a.createElement("div",{className:"card bg-dark shadow-lg rounded"},r.a.createElement(S,{className:"card-img-top",coverSource:t.src,coverAltText:t.altText}),r.a.createElement("div",{className:"card-body h-100 text-light"},r.a.createElement("h5",{className:"card-title"}," ",t.info.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.info.artists[0].name),r.a.createElement("p",{className:"card-text"}),r.a.createElement(L,null)))),r.a.createElement("div",{className:"col-md-4 h-100"},r.a.createElement("div",{className:"card bg-dark shadow-lg rounded"},r.a.createElement("div",{className:"card-body",style:{height:500,overflowY:"scroll"}},r.a.createElement(_,{tracks:t.tracks}))))))});return r.a.createElement(w.a,{className:"container",activeIndex:t,next:this.next,previous:this.previous,interval:!1},n,r.a.createElement(N.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(N.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(a.Component),U=Object(l.b)(function(e,t){var n=e.albums.map(function(e){return{src:e.album.images[1].url,altText:"AlbumCover",caption:e.album.artists[0].name,tracks:e.album.tracks.items,info:e.album}});return{token:e.auth.token,isSignedIn:e.auth.signedIn,albums:n}},{getAlbums:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(n){var a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=k.a.create({baseURL:"https://api.spotify.com/v1",headers:{Authorization:"Bearer ".concat(e)}}),t.next=3,a.get("me/albums");case 3:r=t.sent,n({type:"GET_ALBUMS",payload:r.data.items});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},playTrack:E,pauseTrack:I,changeIndex:g})(P),D=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.auth.token;window.onSpotifyWebPlaybackSDKReady=function(){e.player=new window.Spotify.Player({name:"Finns Player",getOAuthToken:function(e){e(t)}}),e.player.addListener("initialization_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("authentication_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("account_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("playback_error",function(e){var t=e.message;console.error(t)}),e.player.addListener("player_state_changed",function(e){console.log(e)}),e.player.addListener("ready",function(e){var t=e.device_id;console.log("Ready with Device ID",t)}),e.player.addListener("not_ready",function(e){var t=e.device_id;console.log("Device ID has gone offline",t)}),e.player.connect().then(function(e){e&&console.log("The Web Playback SDK successfully connected to Spotify!")})}}},{key:"render",value:function(){return null}}]),t}(r.a.Component),K=Object(l.b)(function(e){return{auth:e.auth}},{})(D),B=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href;if(e.includes("#")){var t=e.match(/#(?:access_token)=([\S\s]*?)&/)[1];this.props.receiveToken(t)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light text-dark"},r.a.createElement("nav",{className:"navbar navbar-white bg-dark shadow-lg rounded"},r.a.createElement("div",{className:"navbar-brand text-white"},"AlbumCarousel"),r.a.createElement(j,null)),this.props.isSignedIn?r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-center p-3"}),r.a.createElement(U,null)," ",r.a.createElement("br",null),r.a.createElement(K,null),r.a.createElement("footer",{className:"footer p-1 bg-dark shadow-lg rounded text-light text-right text-muted m-1"},"Created by Finn Stolze")):r.a.createElement("div",null," "))}}]),t}(r.a.Component),z=Object(l.b)(function(e){return{isSignedIn:e.auth.signedIn}},{receiveToken:function(e){return{type:"RECEIVED_TOKEN",payload:e}}})(B),G=function(){return r.a.createElement("div",null,r.a.createElement(z,null))},M=n(11),H={token:null,signedIn:null},V={currentTracks:[],position:0},X={trackIndex:0,albumIndex:0},W=Object(i.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_TOKEN":return Object(M.a)({},e,{token:t.payload,signedIn:!0});default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALBUMS":return t.payload;default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENT_TRACK":return Object(M.a)({},e,{currentTrack:t.payload});case"CURRENT_ALBUM_TRACKS":return Object(M.a)({},e,{currentTracks:t.payload});case"CHANGE_POSITION":return Object(M.a)({},e,{position:t.payload});default:return e}},index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_INDEX":return t.payload;case"NEXT_TRACK":case"PREV_TRACK":return Object(M.a)({},e,{trackIndex:t.payload});default:return e}}}),F=(n(80),Object(i.createStore)(W,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))));o.a.render(r.a.createElement(l.a,{store:F},r.a.createElement(G,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a7a7fee1.chunk.js.map