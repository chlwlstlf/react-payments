import{u as s,j as e}from"./styled-components.browser.esm-BJwir-wm.js";import{I as r}from"./Input-DIfPoJh0.js";import{D as q}from"./Dropdown-Crf94nDW.js";import"./index-CsdIBAqE.js";const v=s.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,z=s.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  color: #000000;
`,J=s.p`
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: #8b95a1;
`,P=s.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,R=s.label`
  font-size: 12px;
`,U=s.div`
  display: flex;
  gap: 10px;
`,$=s.div`
  height: 20px;
  line-height: 20px;
  font-size: 9.5px;
  color: #ff3d3d;
`,N=({mainText:u,subText:i,label:k,errorMessage:V,children:Y})=>e.jsxs(v,{children:[e.jsxs("div",{children:[e.jsx(z,{children:u}),e.jsx(J,{children:i})]}),e.jsxs(P,{children:[e.jsx(R,{children:k}),e.jsx(U,{children:Y}),e.jsx($,{children:V.find(_=>_!=="")})]})]});N.__docgenInfo={description:"",methods:[],displayName:"NewCardInputSection",props:{mainText:{required:!0,tsType:{name:"string"},description:""},subText:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},errorMessage:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const K={title:"Components/NewCardInputSection",component:N,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{label:"Label",mainText:"Main Text",subText:"Sub Text",errorMessage:["","","",""],children:[e.jsx(r,{maxLength:2,placeholder:"Enter text..."},"key")]}},n={args:{mainText:"비밀번호를 입력해 주세요",subText:"앞의 2자리를 입력해주세요",label:"카드 번호",errorMessage:["Error message 1"],children:[e.jsx(r,{type:"password",maxLength:2,placeholder:""},"password")]}},t={args:{mainText:"CVC 번호를 입력해 주세요",subText:"",label:"CVC",errorMessage:["Error message 1"],children:[e.jsx(r,{maxLength:3,placeholder:"숫자 3자리"},"cvc")]}},o={args:{mainText:"카드 소유자 이름을 입력해 주세요",subText:"",label:"소유자 이름",errorMessage:["Error message 1"],children:[e.jsx(r,{maxLength:2,placeholder:"John Doe"},"userName")]}},C={args:{mainText:"카드 유효기간을 입력해 주세요",subText:"월/년도(MMYY)를 순서대로 입력해 주세요.",label:"유효 기간",errorMessage:["Error message 1","Error message 2"],children:[e.jsx(r,{maxLength:2,placeholder:"MM"},"month"),e.jsx(r,{maxLength:2,placeholder:"YY"},"year")]}},l={args:{mainText:"카드사를 선택해 주세요",subText:"현재 국내 카드사만 가능합니다.",label:"",errorMessage:[""],children:[e.jsx(q,{selectList:["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"],onChange:u=>console.log(`카드사: ${u}`)})]}},c={args:{mainText:"결제할 카드 번호를 입력해 주세요",subText:"본인 명의의 카드만 결제 가능합니다.",label:"카드 번호",errorMessage:["Error message 1","Error message 2","Error message 3","Error message 4"],children:Array.from({length:4}).map((u,i)=>e.jsx(r,{maxLength:4,placeholder:"1234"},i))}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Label",
    mainText: "Main Text",
    subText: "Sub Text",
    errorMessage: ["", "", "", ""],
    children: [<Input key="key" maxLength={2} placeholder="Enter text..." />]
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,g,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mainText: "비밀번호를 입력해 주세요",
    subText: "앞의 2자리를 입력해주세요",
    label: "카드 번호",
    errorMessage: ["Error message 1"],
    children: [<Input key="password" type="password" maxLength={2} placeholder="" />]
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,D,E;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    mainText: "CVC 번호를 입력해 주세요",
    subText: "",
    label: "CVC",
    errorMessage: ["Error message 1"],
    children: [<Input key="cvc" maxLength={3} placeholder="숫자 3자리" />]
  }
}`,...(E=(D=t.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var T,b,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    mainText: "카드 소유자 이름을 입력해 주세요",
    subText: "",
    label: "소유자 이름",
    errorMessage: ["Error message 1"],
    children: [<Input key="userName" maxLength={2} placeholder="John Doe" />]
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,M,A;C.parameters={...C.parameters,docs:{...(f=C.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mainText: "카드 유효기간을 입력해 주세요",
    subText: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    label: "유효 기간",
    errorMessage: ["Error message 1", "Error message 2"],
    children: [<Input key="month" maxLength={2} placeholder="MM" />, <Input key="year" maxLength={2} placeholder="YY" />]
  }
}`,...(A=(M=C.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,j,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    mainText: "카드사를 선택해 주세요",
    subText: "현재 국내 카드사만 가능합니다.",
    label: "",
    errorMessage: [""],
    children: [<Dropdown selectList={["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"]} onChange={selectedValue => console.log(\`카드사: \${selectedValue}\`)} />]
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,S,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mainText: "결제할 카드 번호를 입력해 주세요",
    subText: "본인 명의의 카드만 결제 가능합니다.",
    label: "카드 번호",
    errorMessage: ["Error message 1", "Error message 2", "Error message 3", "Error message 4"],
    children: Array.from({
      length: 4
    }).map((_, index) => <Input key={index} maxLength={4} placeholder="1234" />)
  }
}`,...(F=(S=c.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Q=["Default","Password","CVC","UserName","CardExpiration","CardCompany","CardNumbers"];export{t as CVC,l as CardCompany,C as CardExpiration,c as CardNumbers,a as Default,n as Password,o as UserName,Q as __namedExportsOrder,K as default};
