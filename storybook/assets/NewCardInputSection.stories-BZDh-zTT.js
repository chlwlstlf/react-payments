import{j as e}from"./jsx-runtime-BnIj46N_.js";import{I as s}from"./Input-Cju5DitC.js";import{u as r}from"./styled-components.browser.esm-BDDUX98t.js";import"./index-CsdIBAqE.js";const j=r.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,A=r.h1`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  color: #000000;
`,I=r.p`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: #8b95a1;
`,L=r.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,S=r.label`
  font-size: 12px;
`,N=r.div`
  display: flex;
  gap: 10px;
`,Y=r.div`
  height: 20px;
  line-height: 20px;
  font-size: 9.5px;
  color: #ff3d3d;
`,B=({mainText:i,subText:u,label:y,errorMessage:l,children:D})=>e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx(A,{children:i}),e.jsx(I,{children:u})]}),e.jsxs(L,{children:[e.jsx(S,{children:y}),e.jsx(N,{children:D}),e.jsx(Y,{children:l&&l.find(M=>M!=="")})]})]});B.__docgenInfo={description:"",methods:[],displayName:"NewCardInputSection",props:{mainText:{required:!0,tsType:{name:"string"},description:""},subText:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},errorMessage:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const q={title:"Components/NewCardInputSection",component:B,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{label:"Label",mainText:"Main Text",subText:"Sub Text",errorMessage:["","","",""],children:[e.jsx(s,{maxLength:2,placeholder:"Enter text..."},"key")]}},a={args:{label:"카드 번호",mainText:"결제할 카드 번호를 입력해 주세요",subText:"본인 명의의 카드만 결제 가능합니다.",errorMessage:["Error message 1","Error message 2","Error message 3","Error message 4"],children:Array.from({length:4}).map((i,u)=>e.jsx(s,{maxLength:4,placeholder:"1234"},u))}},n={args:{label:"유효 기간",mainText:"카드 유효기간을 입력해 주세요",subText:"월/년도(MMYY)를 순서대로 입력해 주세요.",errorMessage:["Error message 1","Error message 2"],children:[e.jsx(s,{maxLength:2,placeholder:"MM"},"month"),e.jsx(s,{maxLength:2,placeholder:"YY"},"year")]}},o={args:{label:"소유자 이름",mainText:"카드 소유자 이름을 입력해 주세요",subText:"",errorMessage:["Error message 1"],children:[e.jsx(s,{maxLength:2,placeholder:"John Doe"},"month")]}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Label",
    mainText: "Main Text",
    subText: "Sub Text",
    errorMessage: ["", "", "", ""],
    children: [<Input key="key" maxLength={2} placeholder="Enter text..." />]
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,C,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "카드 번호",
    mainText: "결제할 카드 번호를 입력해 주세요",
    subText: "본인 명의의 카드만 결제 가능합니다.",
    errorMessage: ["Error message 1", "Error message 2", "Error message 3", "Error message 4"],
    children: Array.from({
      length: 4
    }).map((_, index) => <Input key={index} maxLength={4} placeholder="1234" />)
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "유효 기간",
    mainText: "카드 유효기간을 입력해 주세요",
    subText: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    errorMessage: ["Error message 1", "Error message 2"],
    children: [<Input key="month" maxLength={2} placeholder="MM" />, <Input key="year" maxLength={2} placeholder="YY" />]
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,T,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "소유자 이름",
    mainText: "카드 소유자 이름을 입력해 주세요",
    subText: "",
    errorMessage: ["Error message 1"],
    children: [<Input key="month" maxLength={2} placeholder="John Doe" />]
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const z=["Default","CardNumbers","CardExpiration","UserName"];export{n as CardExpiration,a as CardNumbers,t as Default,o as UserName,z as __namedExportsOrder,q as default};
