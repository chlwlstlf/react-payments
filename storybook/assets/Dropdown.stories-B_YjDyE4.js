import{f as g}from"./index-2ywIqtt-.js";import{u as B,j as a}from"./styled-components.browser.esm-BJwir-wm.js";import{r as s}from"./index-CsdIBAqE.js";const f=B.div`
  position: relative;
  width: 100%;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    outline: none;
    border: 1px solid ${n=>n.isOpen?"#000000":"#acacac"};
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    color: ${n=>n.selectedItem!=="카드사를 선택해주세요"?"#000000":"#acacac"};
  }

  ul {
    position: absolute;
    top: 110%;
    left: 0;
    width: 99%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #acacac;
    border-radius: 5px;
    background-color: #fff;
    z-index: 1;
  }

  li {
    padding: 8px;
    cursor: pointer;
  }

  li:hover {
    background-color: #f5f5f5;
  }
`,E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgB7Y/NDYAgDIX5WYANjBs4gm4gYQBXcATdxAWAEXQVN2ABwDbxoMZIjB75LpC27/WVkMxn6FPTGNN573vGWKuUWl8ZoDiEMFFKXYzRwVvfmbCEeIDtJZTQZNFaF8kERzFsHLFmrRVwygxfcU1ySoCDVzEipXSc82ZPMpEnwKRK9AXJ/MsG5jRFUOq5K6EAAAAASUVORK5CYII=",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgB7YxLEQAQFEVfBBE0oKEIIoggiggiqOAu2LzxZ+nMnNWdc4k+zzHQdjYJA9Q0QMEEXSOO5UDQBH6yFfMTfxLzk6O4Im/izyIZhksPHBH4TqAAAAAASUVORK5CYII=",c=({selectList:n,onChange:d})=>{const[t,r]=s.useState(!1),[A,p]=s.useState("카드사를 선택해주세요"),m=e=>{e.preventDefault(),r(!t)},C=e=>{d(e),p(e),r(!1)};return a.jsxs(f,{isOpen:t,selectedItem:A,children:[a.jsxs("button",{onClick:m,children:[a.jsx("div",{children:A}),a.jsx("img",{src:t?x:E})]}),t&&a.jsx("ul",{children:n.map(e=>a.jsx("li",{onClick:()=>C(e),children:e},e))})]})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{selectList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedValue: CardCompany) => void",signature:{arguments:[{type:{name:"union",raw:'"" | "BC카드" | "신한카드" | "카카오뱅크" | "현대카드" | "우리카드" | "롯데카드" | "하나카드" | "국민카드"',elements:[{name:"literal",value:'""'},{name:"literal",value:'"BC카드"'},{name:"literal",value:'"신한카드"'},{name:"literal",value:'"카카오뱅크"'},{name:"literal",value:'"현대카드"'},{name:"literal",value:'"우리카드"'},{name:"literal",value:'"롯데카드"'},{name:"literal",value:'"하나카드"'},{name:"literal",value:'"국민카드"'}]},name:"selectedValue"}],return:{name:"void"}}},description:""}}};const h={title:"Components/Dropdown",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{onChange:g()}},o={args:{selectList:["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"],onChange:n=>console.log(n)}};var l,i,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    selectList: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
    onChange: (selectedValue: CardCompany) => console.log(selectedValue)
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,h as default};
