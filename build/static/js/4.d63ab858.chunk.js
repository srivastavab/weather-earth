(this["webpackJsonpweather-earth"]=this["webpackJsonpweather-earth"]||[]).push([[4],{493:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/04.6e9e6e5f.svg"},521:function(e,t,a){},525:function(e,t,a){var n={"./01d.svg":526,"./01n.svg":527,"./02d.svg":528,"./02n.svg":529,"./04.svg":493,"./09d.svg":530,"./09n.svg":531,"./10.svg":532,"./11d.svg":533,"./11n.svg":534,"./13d.svg":535,"./13n.svg":536,"./50d.svg":537,"./50n.svg":538};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=525},526:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/01d.79682a30.svg"},527:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/01n.b187a9cb.svg"},528:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/02d.932758eb.svg"},529:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/02n.dcb94708.svg"},530:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/09d.4c17e50d.svg"},531:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/09n.9e51803d.svg"},532:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/10.909e7fe4.svg"},533:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/11d.404a9e45.svg"},534:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/11n.3f6be724.svg"},535:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/13d.1267b2f8.svg"},536:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/13n.5c4df207.svg"},537:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/50d.46e756e1.svg"},538:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/50n.c8a96bdf.svg"},567:function(e,t,a){"use strict";a.r(t),a.d(t,"WeatherPage",(function(){return fe}));var n=a(0),r=a.n(n),c=a(106),s=a(223),i=a(544),l=a(563),o=a(564),u=a(108),d=a(212);var m=a(499),v=a.n(m),p=a(546),f=a(481),g=a(500),b=a(545),h=a(543),E=a(482),y=a.n(E),k=function e(t){return Object(f.a)(this,e),this.interceptors=void 0,y.a.create(t)},w=a(518),N={returnRejectedPromiseOnError:!0,withCredentials:!0,timeout:3e4,baseURL:"https://api.openweathermap.org/data/2.5",paramsSerializer:function(e){return w.stringify(e,{indices:!1})}},j=new(function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).token=void 0,n.token="",n}return Object(g.a)(a,[{key:"getToken",value:function(){return"Bearer ".concat(this.token)}},{key:"setToken",value:function(e){this.token=e}},{key:"request",value:function(e){return y.a.request(e)}},{key:"get",value:function(e,t){return y.a.get(e,t)}},{key:"options",value:function(e,t){return y.a.options(e,t)}},{key:"delete",value:function(e,t){return y.a.delete(e,t)}},{key:"head",value:function(e,t){return y.a.head(e,t)}},{key:"post",value:function(e,t,a){return y.a.post(e,t,a)}},{key:"put",value:function(e,t,a){return y.a.put(e,t,a)}},{key:"patch",value:function(e,t,a){return y.a.patch(e,t,a)}},{key:"success",value:function(e){return console.log("Response: ",e.data),e.data}},{key:"error",value:function(e){throw e}}]),a}(k))(N),O="71aa5dfc45f1c52c5da96dd8e4061efd",x="metric",C=v.a.mark(T),L=v.a.mark(_),F=v.a.mark(z),S=function(e){var t=e.payload;return j.get("/weather?q=".concat(t,"&units=").concat(x,"&appid=").concat(O))},P=function(e){var t=e.payload;return j.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&appid=").concat(O))},W=function(e){var t=e.payload,a=t.lat,n=t.lon;return j.get("/weather?lat=".concat(a,"&lon=").concat(n,"&units=").concat(x,"&APPID=").concat(O))};function T(e){var t,a,n,r;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(p.b)(q.setLoading(!0));case 2:return c.prev=2,c.next=5,Object(p.a)(S,e);case 5:if(t=c.sent,!(a=t.data)){c.next=10;break}return c.next=10,Object(p.b)(q.setWeather(a));case 10:return c.next=12,Object(p.a)(P,e);case 12:if(n=c.sent,!(r=n.data)){c.next=17;break}return c.next=17,Object(p.b)(q.setWeatherForecast(r));case 17:c.next=22;break;case 19:c.prev=19,c.t0=c.catch(2),console.error(c.t0);case 22:return c.next=24,Object(p.b)(q.setLoading(!1));case 24:case"end":return c.stop()}}),C,null,[[2,19]])}function _(e){var t,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.b)(q.setLoading(!0));case 2:return n.prev=2,n.next=5,Object(p.a)(W,e);case 5:if(t=n.sent,!(a=t.data)||!a.name){n.next=12;break}return n.next=10,Object(p.b)(q.setLocation(a.name));case 10:return n.next=12,Object(p.b)(q.setWeather(a));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),console.error(n.t0);case 17:return n.next=19,Object(p.b)(q.setLoading(!1));case 19:case"end":return n.stop()}}),L,null,[[2,14]])}function z(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(q.setLocation.type,T);case 2:return e.next=4,Object(p.c)(q.setCoords.type,_);case 4:case"end":return e.stop()}}),F)}var D,U=z,I=(D={name:"weatherState",initialState:{location:"",weather:{},weatherForecast:[],isLoading:!1},reducers:{setLoading:function(e,t){e.isLoading=t.payload},setCoords:function(e,t){e.isLoading=t.payload.loading},setLocation:function(e,t){e.location=t.payload},setWeather:function(e,t){e.weather=t.payload},setWeatherForecast:function(e,t){e.weatherForecast.push(t.payload)}}},Object(u.b)(D)),q=I.actions,R=(I.reducer,function(){var e;return e={key:I.name,reducer:I.reducer},Object(d.b)(e),function(e){Object(d.c)(e)}({key:I.name,saga:U}),{actions:I.actions}}),B=a(62),A=function(e){var t;return null===(t=e.weatherState)||void 0===t?void 0:t.weather},M=function(e){var t;return null===(t=e.weatherState)||void 0===t?void 0:t.isLoading},G=(a(521),a.p+"static/media/inicial.da2f300f.svg"),H=a.p+"static/media/rain.48f72aa8.svg",J=a.p+"static/media/sun.a9155525.svg",Y=a.p+"static/media/snow.b716a713.svg",K=a.p+"static/media/thunder.b222c73b.svg",Q=a.p+"static/media/cloudy.d03e3e4e.svg",V=a(493),X=a.p+"static/media/day_bg.6e9c4f08.png",Z=a.p+"static/media/night_bg.6e524c98.jpg",$=a.p+"static/media/Thunderstorm.bfb12252.mp3",ee=a.p+"static/media/RainFalling.25678f41.mp3",te=a.p+"static/media/SpookyWind.2cb351d9.mp3",ae=a.p+"static/media/Snow.d6853264.mp3",ne=a.p+"static/media/BirdsInForest.59e69817.mp3",re=a.p+"static/media/Clouds.a7788224.mp3",ce=a(522),se=a.n(ce),ie=a(523),le=a.n(ie),oe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{playStatus:le.a.status.PLAYING,url:e.soundUrl,loop:!0,playFromPosition:300}),r.a.createElement("audio",{autoPlay:!0,loop:!0},r.a.createElement("source",{src:e.soundUrl,type:"audio/mp3"})))},ue=a(561),de=a(568),me=a(571),ve=Object(ue.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),pe=function(){var e,t,c=Object(n.useState)(""),u=Object(i.a)(c,2),d=u[0],m=u[1],v=Object(n.useState)({latitude:0,longitude:0}),p=Object(i.a)(v,2),f=p[0],g=p[1],b=Object(n.useState)(),h=Object(i.a)(b,2),E=h[0],y=h[1],k=R().actions,w=Object(B.d)(A),N=Object(B.d)(M),x=Object(B.c)(),C=function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;g(Object(s.a)(Object(s.a)({},f),{},{latitude:a,longitude:n})),x(k.setCoords({lat:a,lon:n,loading:!0}))}))};Object(n.useEffect)((function(){"geolocation"in navigator?C():console.log("Coordinates not available")}),[k,x]);var L,F;switch(w&&(null===w||void 0===w?void 0:w.weather)?null===w||void 0===w?void 0:w.weather[0].main:"Please choose your location or allow this website to access your location."){case"Clear":L=J,F=ne;break;case"Clouds":L=J,F=re;break;case"Haze":L=Q,F=te;break;case"Thunderstorm":L=K,F=$;break;case"Rain":case"Drizzle":L=H,F=ee;break;case"Snow":L=Y,F=ae;break;default:L=G,F=""}var S=a(525),P=S.keys().map((function(e){return S(e)})),W=V.default,T=w&&(null===w||void 0===w?void 0:w.weather)?null===w||void 0===w?void 0:w.weather[0].icon:"";switch(T){case"01d":W=P[0].default;break;case"01n":W=P[1].default;break;case"02d":W=P[2].default;break;case"02n":W=P[3].default;break;case"03d":W=P[4].default;break;case"09d":W=P[5].default;break;case"09n":W=P[6].default;break;case"10d":W=P[7].default;break;case"11d":W=P[8].default;break;case"11n":W=P[9].default;break;case"13d":W=P[10].default;break;case"13n":W=P[11].default;break;case"50d":W=P[12].default;break;case"50n":W=P[13].default}var _=X;switch(T.slice(2)){case"n":_=Z}var z,D=ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:_,alt:"Wallpaper",className:"img-background"})),r.a.createElement("div",{className:"main-grid"},r.a.createElement("div",{className:"app-name"},r.a.createElement("h3",{style:{color:"white"}},"Weather Earth")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"principal"},r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x(k.setLoading(!0)),x(k.setLocation(d))}},r.a.createElement("div",{className:"extras"},r.a.createElement("div",{className:"get-location",onClick:C},r.a.createElement("span",{className:"get-location-button"},"My Location"))),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{placeholder:"Search city...",type:"text",name:"city",value:d,onChange:function(e){m(e.currentTarget.value);var t="/find?q=".concat(e.currentTarget.value.trim(),"&type=like&sort=population&cnt=30&appid=").concat(O);j.get(t).then((function(e){y(e.data)}))},className:"cityInput",autoComplete:"off"}),r.a.createElement("div",{className:"search-results"},E&&E.list.map((function(e){var t=e.sys.country,a="https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/".concat(t.toLowerCase(),".png");return r.a.createElement("div",{key:e.coord.lat,className:"result-item",onClick:function(){return k.setCoords({lat:f.latitude,lon:f.longitude,loading:!0})}},r.a.createElement("img",{className:"result-flag",src:a,alt:"Flag"}),r.a.createElement("p",null,r.a.createElement("span",{className:"result-city"},e.name),", ",t))}))),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement(l.b,null))))),r.a.createElement("div",{className:"result"},r.a.createElement(oe,{soundUrl:F}),r.a.createElement("span",{className:"dateTime"},(null===w||void 0===w?void 0:w.main)?se()().format("ddd DD, h:mm A"):""),(null===w||void 0===w?void 0:w.main)?r.a.createElement("img",{src:W,alt:"Climate",className:"weather-icon"}):null,r.a.createElement("h1",{className:"temperature"},null===w||void 0===w||null===(e=w.main)||void 0===e?void 0:e.temp.toFixed(0),r.a.createElement("span",null,(null===w||void 0===w?void 0:w.main)?"\xbaC":"Pick a city to see weather data!")),r.a.createElement("span",{className:"description"},(z=String(w&&w.weather?null===w||void 0===w?void 0:w.weather[0].description:":("))[0].toUpperCase()+z.slice(1)),r.a.createElement("span",{className:"local"},"".concat(w&&w.name?"".concat(w.name,","):""," ").concat(w&&w.sys?null===w||void 0===w?void 0:w.sys.country:""),"\xa0\xa0",w&&w.sys&&"-"!==(null===w||void 0===w?void 0:w.sys.country)&&r.a.createElement("img",{src:"https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/".concat(null===w||void 0===w?void 0:w.sys.country.toLowerCase(),".png"),alt:"country"}))),r.a.createElement("div",{className:"other-results"},r.a.createElement("div",{className:"other"},"Temp ",r.a.createElement("br",null),r.a.createElement("span",null,w&&w.main&&(null===w||void 0===w?void 0:w.main.feels_like.toFixed(1))," ",w&&w.main?"\xbaC":"-")),r.a.createElement("div",{className:"other"},"Temp min ",r.a.createElement("br",null),r.a.createElement("span",null,w&&w.main&&(null===w||void 0===w?void 0:w.main.temp_min.toFixed(1))," ",w&&w.main?"\xbaC":"-")),r.a.createElement("div",{className:"other"},"Temp max ",r.a.createElement("br",null),r.a.createElement("span",null,w&&w.main&&(null===w||void 0===w?void 0:w.main.temp_max.toFixed(1))," ",w&&w.main?"\xbaC":"-")),r.a.createElement("div",{className:"other"},"Pressure ",r.a.createElement("br",null),r.a.createElement("span",null,w&&w.main&&(null===w||void 0===w?void 0:w.main.pressure),w&&w.main?" hPa":"-")))),r.a.createElement("div",{className:"secondary"},r.a.createElement("div",{className:"secondary-results"},r.a.createElement("div",{className:"other-secondary-results"},r.a.createElement("div",{className:"icon-secondary-results humidity"},r.a.createElement(l.a,null)),r.a.createElement("p",null,"Humidity ",r.a.createElement("br",null),null===w||void 0===w||null===(t=w.main)||void 0===t?void 0:t.humidity,w&&w.main?"%":" -")),r.a.createElement("div",{className:"other-secondary-results"},r.a.createElement("div",{className:"icon-secondary-results"},r.a.createElement(o.b,null)),r.a.createElement("p",null,"Wind ",r.a.createElement("br",null),w&&w.wind&&(null===w||void 0===w?void 0:w.wind.speed.toFixed(1))," ",w&&w.main?"m/s":" -")),r.a.createElement("div",{className:"other-secondary-results"},r.a.createElement("div",{className:"icon-secondary-results"},r.a.createElement(o.a,null)),r.a.createElement("p",null,"Clouds ",r.a.createElement("br",null),w&&w.clouds&&w.clouds.all,w&&w.main?"%":" -"))),r.a.createElement("div",{className:"landing-figure"},r.a.createElement("img",{src:L,alt:"Landing"})),"-"!==(null===w||void 0===w?void 0:w.name)&&r.a.createElement("div",{className:"go-maps"},r.a.createElement("a",{href:"https://www.google.com/maps/@".concat(w&&w.coord&&(null===w||void 0===w?void 0:w.coord.lat),",").concat(w&&w.coord&&w.coord.lon,",12z"),target:"_blank",rel:"noopener noreferrer"},"Google Maps"))),r.a.createElement(de.a,{className:D.backdrop,open:N},r.a.createElement(me.a,{color:"inherit"})))," ",r.a.createElement("div",{className:"credits"},"by\xa0",r.a.createElement("a",{href:"https://github.com/Srivastava295",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null,"Srivastava Bodakunti")))))," ")};function fe(){return n.createElement(n.Fragment,null,n.createElement(c.a,null,n.createElement("title",null,"Weather Earth"),n.createElement("meta",{name:"description",content:"Weather Earth"})),n.createElement(pe,null))}}}]);