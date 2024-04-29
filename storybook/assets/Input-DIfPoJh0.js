import{u as s,j as p}from"./styled-components.browser.esm-BJwir-wm.js";const i=s.input`
  width: 100%;
  height: 16px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #acacac;

  &:focus {
    border: 1px solid ${r=>r.isError?"#FF3D3D":"#000000"};
  }

  &::placeholder {
    color: #acacac;
  }

  ${r=>r.isError&&`
    border-color: #FF3D3D;
  `}
`,t=({isError:r,ref:o,...e})=>p.jsx(i,{isError:r,ref:o,...e});t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!1,tsType:{name:"boolean"},description:""}}};export{t as I};
