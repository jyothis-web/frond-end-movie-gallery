(self.webpackChunkcart=self.webpackChunkcart||[]).push([[546],{1286:function(e,t,n){var r,a=n(6690).default,o=n(9728).default,l=n(6115).default,u=n(1655).default,i=n(6389).default,c=n(4704).default,s=Object.create,p=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var a,o=c(y(t));try{var l=function(){var o=a.value;m.call(e,o)||o===n||p(e,o,{get:function(){return t[o]},enumerable:!(r=f(t,o))||r.enumerable})};for(o.s();!(a=o.n()).done;)l()}catch(u){o.e(u)}finally{o.f()}}return e},v=function(e,t,n){return function(e,t,n){t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},b={};!function(e,t){for(var n in t)p(e,n,{get:t[n],enumerable:!0})}(b,{default:function(){return O}}),e.exports=(r=b,h(p({},"__esModule",{value:!0}),r));var k=function(e,t,n){return n=null!=e?s(d(e)):{},h(!t&&e&&e.__esModule?n:p(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),P=n(135),g=n(365),O=function(e){"use strict";u(n,e);var t=i(n);function n(){var e;return a(this,n),e=t.apply(this,arguments),v(l(e),"callPlayer",P.callPlayer),v(l(e),"duration",null),v(l(e),"currentTime",null),v(l(e),"secondsLoaded",null),v(l(e),"mute",(function(){e.callPlayer("mute")})),v(l(e),"unmute",(function(){e.callPlayer("unmute")})),v(l(e),"ref",(function(t){e.iframe=t})),e}return o(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,P.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.setLoop(t.props.loop),t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",t.props.onSeek),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var n=e.duration,r=e.seconds;t.duration=n,t.currentTime=r})),t.player.on("buffered",(function(e){var n=e.percent;t.duration&&(t.secondsLoaded=t.duration*n)})),t.props.muted&&t.player.mute())}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(g.MATCH_URL_STREAMABLE)[1];return k.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}]),n}(k.Component);v(O,"displayName","Streamable"),v(O,"canPlay",g.canPlay.streamable)}}]);
//# sourceMappingURL=reactPlayerStreamable.feec03e2.chunk.js.map