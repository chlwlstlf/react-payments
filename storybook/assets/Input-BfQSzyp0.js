import{j as o}from"./jsx-runtime-BnIj46N_.js";import{u as s}from"./styled-components.browser.esm-BDDUX98t.js";const i=s.input`
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
`,p=({isError:r,...e})=>o.jsx(o.Fragment,{children:o.jsx(i,{isError:r,...e})});p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!1,tsType:{name:"boolean"},description:""}}};export{p as I};
