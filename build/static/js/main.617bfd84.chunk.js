(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(n,e,t){n.exports=t.p+"static/media/logo_circle.0f79ce44.png"},28:function(n,e,t){n.exports=t(40)},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(20),i=t.n(l),o=t(13),c=t(2),m=t(4),u=t(5),f="#FFFFF0",s="#FDE1B1",d="#B1B2FB";function h(){var n=Object(m.a)(["\n    display: flex;\n    justify-content:flex-start;\n    align-items:center;\n    /* background-color: ","; */\n    padding:2rem;\n    img {\n      width:80px;\n      height:80px;\n    }\n    h1 {\n      font-size:6rem;\n      margin-left:3rem;\n    }\n    "," {\n      background-color: lightgreen;\n      padding: 1rem;\n      h1 {\n        font-size:3rem;\n        color: #FFF;\n        margin-left:0;\n        flex: 1;\n        text-align: center;\n\n      }\n      img {\n        width:50px;\n        height:50px;\n        margin: 0.5rem 1.5rem;\n      }\n    }\n  "]);return h=function(){return n},n}var p=u.b.header(h(),f,"@media (max-width:600px)"),E=t(24),g=t.n(E),b=function(){return r.a.createElement(p,{className:"header item"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"site_logo"})),r.a.createElement("h1",null,"Knob's Portfolio"))};function x(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    background-color: ",";\n    border-radius: 20px;\n    padding: 1rem;\n    margin: 1rem;\n    /* \u3053\u3053\u306eMargin\u306fLayout\u30670\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3068\u304d\u4e0a\u66f8\u304d\u3067\u304d\u306a\u3044 */\n    "," {\n      width: 100%;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      border-radius: 0px;\n      padding: 0;\n      margin: 0;\n    }\n  "]);return x=function(){return n},n}var w=u.b.div(x(),s,"@media (max-width:600px)"),v=t(25);function y(){var n=Object(m.a)(["\n  width: 100%;\n    ul {\n      display: flex;\n      flex-direction: column;\n      align-items:flex-start;\n      padding:10px;\n      h2 {\n        width: 100%;\n        font-size:2.8rem;\n        text-align:center;\n        padding:0 1rem 1.5rem 1rem;\n      }\n      li {\n        width: 100%;\n      }\n      a {\n        margin:10px 0;\n        display: flex;\n        align-items:center;\n        font-size:2.4rem;\n        .icon {\n          font-size:3.5rem;\n          margin: 0 1rem;\n        }\n        &:hover {\n          color: ",";\n          text-decoration: underline;\n          transition-duration:0.3s;\n        }\n      }\n      .active {\n        color: ",";\n        font-weight: bold;        \n        filter: drop-shadow(1.5px 1.5px 0.5px rgba(0,0,0,0.6));\n      }\n\n    }\n    "," {\n      ul {\n        height: 55px;\n        background-color: palegreen;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0;\n        h2 {\n          display: none;\n        }\n        .icon {\n          font-size:4rem;\n          margin:0 ;\n        }\n        span {\n          display: none;\n        }\n        li {\n          margin: 0;\n          a {\n            display: flex;\n            justify-content:center;\n            align-items:center;\n          }\n          &:active {\n           background-color: green;\n           opacity: 0.2;\n          }\n        }\n      }\n    }\n"]);return y=function(){return n},n}var N=u.b.div(y(),f,f,"@media (max-width:600px)"),O=t(52),k=t(53),j=t(54),z=t(55),C=t(56),F=[{title:"HOME",icon:r.a.createElement(O.a,{className:"icon"}),path:""},{title:"ABOUT",icon:r.a.createElement(k.a,{className:"icon"}),path:"about"},{title:"WORK",icon:r.a.createElement(j.a,{className:"icon"}),path:"work"},{title:"CONTACT",icon:r.a.createElement(z.a,{className:"icon"}),path:"contact"}],T=(C.a,C.a,C.a,C.a,function(){var n=Object(a.useState)(0),e=Object(v.a)(n,2),t=e[0],l=e[1];return r.a.createElement(N,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("h2",null,"\u2015 ",r.a.createElement("strong",null,"MENU")," \u2015"),F.map((function(n,e){var a="/".concat(n.path);return r.a.createElement("li",{className:t===e?"active":""},r.a.createElement(o.b,{to:a,onClick:function(){!function(n){l(n)}(e)}},n.icon,r.a.createElement("span",null,n.title)))})))))}),M=function(){return r.a.createElement(w,{className:"left item"},r.a.createElement(T,null))};function A(){var n=Object(m.a)(["\n    padding: 2rem;\n    h1 {\n      font-family: 'Arial Black';\n      font-size: 3.2rem;\n      margin: 1rem 0;\n    }\n    section {\n      margin: 1rem;\n      h2 {\n        font-family: 'Arial';\n        font-weight: bold;\n        width: 100%;\n        font-size: 2.4rem;\n        border-bottom: 1px solid #ccc;\n      }\n      p {\n        font-size: 1.6rem;\n        /* \u3053\u308c\u304c\u4f55px\u306a\u306e\u304b\u8b0e\uff0810px\u3067\u306f\u306a\u3044\uff09 */\n        padding: 0.5rem;\n      }\n    }\n\n    /* \n      CONTACT PAGE \n    */\n    .sns_list {\n      h2 {\n        font-size: 2.4rem;\n      }\n      li {\n        font-size: 2rem;\n        margin: 1.2rem;\n        &:hover {\n          color: ",";\n          ::before {\n            content: '\uff0a';\n            color:",";\n          }\n        }\n\n      }\n\n    }\n"]);return A=function(){return n},n}var B=u.b.main(A(),d,s),P=function(n){var e=n.children;return r.a.createElement(B,{className:"main item"},e)};function R(){var n=Object(m.a)(["\n    display: flex;\n    justify-content:center;\n    align-items:center;\n    background-color: ",";\n    padding:1rem 0;\n    small {\n      font-size:2rem;\n    }\n  "]);return R=function(){return n},n}var S=u.b.footer(R(),d),I=function(){return r.a.createElement(S,{className:"footer item"},r.a.createElement("small",null,"Copyright 2020 @ Knob"))};t(39);function _(){var n=Object(m.a)(['\n  html {\n    /* selector\u304cbody\u3060\u3068rem\u306e\u6319\u52d5\u304c\u304a\u304b\u3057\u3044 */\n    font-family: "Hiragino Maru Gothic ProN";\n    /* font-family: Arial Black; */\n    /* font-size:62.5%; */\n    /* \u3053\u308c\u3067,\u30c7\u30d5\u30a9\u306710px */\n    /* \u306a\u3089\u3053\u308c\u3067\u3088\u304f\u306d\uff1f */\n    font-size:10px;\n  }\n']);return _=function(){return n},n}var G=Object(u.a)(_());function D(){var n=Object(m.a)(['\n    display:grid;\n    grid-template:\n    "... ...... ...... ...... ...... ...... ..." 0\n    "... header header header header header ..." auto\n    "... ...... ...... ...... ...... ...... ..." 0\n    "... left   ...... main   main   main   ..." auto\n    "... ...... ...... ...... ...... ...... ..." 0\n    "... footer footer footer footer footer ..." auto\n    "... ...... ...... ...... ...... ...... ..." 0 /\n     0   250px   0     auto   auto    auto  0;\n\n    \n\n    .item {\n      /* margin:0; */\n    }\n\n    .header {\n      grid-area: header;\n    }\n    .main {\n      grid-area: main;\n    }\n    .left {\n      grid-area:left;\n    }\n    .footer {\n      grid-area: footer;\n    }\n    ','{\n          grid-template:\n          "...... ...... ...... ...... ......" 0\n          "header header header header header" auto\n          "...... ...... ...... ...... ......" 0\n          "main   main   main   main   main  " auto\n          "...... ...... ...... ...... ......" 0\n          "footer footer footer footer footer" auto\n          "left   left   left   left   left  " auto\n          "...... ...... ...... ...... ......" 0 /\n           0      auto   0      auto   auto;\n          .footer {\n            margin-bottom: 55px;\n          }\n        }\n  ']);return D=function(){return n},n}var H=u.b.div(D(),"@media (max-width:600px)"),K=function(n){var e=n.children;return r.a.createElement(H,null,r.a.createElement(G,null),r.a.createElement(b,null),r.a.createElement(M,null),r.a.createElement(P,{children:e}),r.a.createElement(I,null))};function L(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",null)),r.a.createElement("section",null,r.a.createElement("h2",null,"DESCRIPTION"),r.a.createElement("p",null,"\u3053\u3053\u306f,\u50d5\u306e\u4f5c\u308b\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059.\u4eca\u306f,\u7d14\u6b63\u306eReact\u3067\u4f5c\u3063\u3066\u3044\u307e\u3059.\u81ea\u8eab\u3068\u3068\u3082\u306b\u6210\u9577\u3057\u307e\u3059.\u307e\u305f,\u81ea\u5df1\u7d39\u4ecb\u7528\u306e\u30b5\u30a4\u30c8\u3068\u3057\u3066\u3082\u904b\u7528\u3057\u3066\u3044\u307e\u3059.\u3086\u3063\u304f\u308a\u3057\u3066\u3044\u3063\u3066\u304f\u3060\u3055\u3044\uff01")),r.a.createElement("section",null,r.a.createElement("h2",null),r.a.createElement("p",null,"\u3053\u3053\u306f,\u50d5\u306e\u4f5c\u308b\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059.\u4eca\u306f,\u7d14\u6b63\u306eReact\u3067\u4f5c\u3063\u3066\u3044\u307e\u3059.\u81ea\u8eab\u3068\u3068\u3082\u306b\u6210\u9577\u3057\u307e\u3059.\u307e\u305f,\u81ea\u5df1\u7d39\u4ecb\u7528\u306e\u30b5\u30a4\u30c8\u3068\u3057\u3066\u3082\u904b\u7528\u3057\u3066\u3044\u307e\u3059.\u3086\u3063\u304f\u308a\u3057\u3066\u3044\u3063\u3066\u304f\u3060\u3055\u3044\uff01")))}function U(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("section",null,r.a.createElement("h2",null,"CONTEXT"),r.a.createElement("p",null,"\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.")),r.a.createElement("section",null,r.a.createElement("h2",null,"CONCEPT"),r.a.createElement("p",null,"\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.")),r.a.createElement("section",null,r.a.createElement("h2",null,"COMMIT"),r.a.createElement("p",null,"\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.\u6c7a\u3081\u3066\u306f\u3053\u308c\u3067\u3057\u305f.")))}function J(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Work"),r.a.createElement("p",null,"\u4ed5\u4e8b\u306e\u307b\u3069\u3093\u3069\u306f,PC,iPad,iPhone\u3067\u884c\u3063\u3066\u304a\u308a\u307e\u3059."))}function X(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Contact"),r.a.createElement("ul",{className:"sns_list"},r.a.createElement("h2",null,"SNS"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/Knob_nbr41to"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://lin.ee/iTzRHQR"},"OfficialLINE")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/channel/UCMbCS3ynaSuLJGMX512v-lQ"},"nobmath")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/channel/UCRu_dGDzDp1Xh8j8N7IZm1w"},"Vlog")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://note.com/nbr41"},"note")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/nbr41to"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/knob/"},"Linkdin"))))}function Q(){return r.a.createElement(o.a,null,r.a.createElement(K,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:L}),r.a.createElement(c.a,{exact:!0,path:"/about",component:U}),r.a.createElement(c.a,{exact:!0,path:"/work",component:J}),r.a.createElement(c.a,{exact:!0,path:"/contact",component:X}))))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.617bfd84.chunk.js.map