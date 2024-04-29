import{u as p,j as A}from"./styled-components.browser.esm-BJwir-wm.js";import{r as s}from"./index-CsdIBAqE.js";const g=p.div`
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
`,u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgB7Y/NDYAgDIX5WYANjBs4gm4gYQBXcATdxAWAEXQVN2ABwDbxoMZIjB75LpC27/WVkMxn6FPTGNN573vGWKuUWl8ZoDiEMFFKXYzRwVvfmbCEeIDtJZTQZNFaF8kERzFsHLFmrRVwygxfcU1ySoCDVzEipXSc82ZPMpEnwKRK9AXJ/MsG5jRFUOq5K6EAAAAASUVORK5CYII=",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgB7YxLEQAQFEVfBBE0oKEIIoggiggiqOAu2LzxZ+nMnNWdc4k+zzHQdjYJA9Q0QMEEXSOO5UDQBH6yFfMTfxLzk6O4Im/izyIZhksPHBH4TqAAAAAASUVORK5CYII=",m=({selectList:n,placeholder:i="",onChange:a})=>{const[o,t]=s.useState(!1),[r,c]=s.useState(i),d=e=>{e.preventDefault(),t(!o)},l=e=>{a(e),c(e),t(!1)};return A.jsxs(g,{isOpen:o,selectedItem:r,children:[A.jsxs("button",{onClick:d,children:[A.jsx("div",{children:r}),A.jsx("img",{src:o?f:u,alt:"Toggle Dropdown"})]}),o&&A.jsx("ul",{children:n.map(e=>A.jsx("li",{onClick:()=>l(e),children:e},e))})]})};m.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{selectList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedValue"}],return:{name:"void"}}},description:""}}};export{m as D};
