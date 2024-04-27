import{u as s,j as r}from"./styled-components.browser.esm-BJwir-wm.js";import"./index-CsdIBAqE.js";const or={BC카드:"#f04651",신한카드:"#0046FF",카카오뱅크:"#FFE600",현대카드:"#000000",우리카드:"#007BC8",롯데카드:"#ED1C24",하나카드:"#009490",국민카드:"#6A6056"},pr=s.div`
  width: 100%;
  height: 238px;
`,mr=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4px;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${e=>e.cardCompany?or[e.cardCompany]:"#333333"};
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
  margin-top: 77px;
  margin-bottom: 29px;
`,ur=s.div`
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
`,lr=s.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
`,Cr=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #0000001a;
  border-radius: 3px;

  img {
    width: 60%;
  }
`,xr=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: #ffffff;
  margin: 0 17px;

  div {
    height: 20px;
  }
`,Ar=s.div`
  position: relative;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
  margin-top: 77px;
  margin-bottom: 29px;
  background: #d5d5d5;
`,gr=s.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 24px;
  margin-top: 84px;
  padding: 0 16px;
  background: #cbba64;
  color: #ffffff;
  text-align: right;
  line-height: 24px;
`,Nr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAiCAYAAAAUAipQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPbSURBVHgBxZnNbtNAEMf/u/5Iw5cSuIAEIkggAQI1IE6cwhMUiSMSTZ+gvAHhCShHTm0P3Nsrl5oLFy4tBzihpgIJxEcT0QrSxPYy45A0SZ3abkf0J7Vx7Mnaf8/O7O6swiFoYOJi77iI1gYEMC/Rb1M9xIHbVGkN14FCAfZkAF2lH1XoVCnGbNUAdXq8pS10li8Bzf3aNPMo+BYmwxBVJLSpFZacEMtqZv82eyQKY0GnYM+S6WP6KyADBmbBQqdWxPCbZ0FtjVkyoDaRqU1iwXVQS/LmvsJ+wJ0igznEv8mUGHrDZu4M/Kf8zV/EVGCwgOyCBmnSk8/lpvF0nMFYYT/hPOt6SQbqTkunXrTrJgfRNnMGM3HdM1YYiZqnS1UIcvyuD/dGiM5t+jIBMTj+SNytUXF61PCfp6oQJH/HR+5yCNUCnHd0wocY5JlSW2GF43bw/JAwEjUr2f2YiasB8tfD3QfZppuuQ5ryjsKTwRP9rviFlLtwRW+pjxsUHnRir3GXNIdJH3H306g4j/A6Ou6ddOA8gTB5GvXGYb+HOEEYZduISBh7SwnHFXuL42ocHG/qO0TheNuh4SS6P//7397qYX2GOKY76HeFkbcqEMY+axJtdAOiGZLh6R5nSP0NThmHmlnsxSqGsE4kC2O0cHdkOhpT2oG6CGH0ifS2nP7FMShrCu8yhLFPp/MWo/5AHNJU0vKjCT2sm14YknNMZkhUQWddiqRBuThyOCvWIYxp48jR3fWSLOF26oW56Ey/R7Ti1rBWIUywmV5YmCGDpsUorJLHWmsQxm+kF2ZOQhwTYk1TPaJpoDwIYmiB5H9NFmcm5HMyd8P8DLxoSmVRTQLCtD5YiTbyA000pfL4MxJWRHsZwtmx/UknZsfgEsThChZ/9tdj9Bg1CPP77XivBRfIY3mIwhW1XlmuL6yIzqJ0rO18tGJjjWMrFPYWx5ZjdstxQzUPC1TrEe6S229sGteGz/k36UFsiJJzUBmsVA0Jo/p7nbrkfclBmwfrrRWnH2/+NfkUrxSqo5XhPeU36pJrNGjfgqDnAhrXfr1ymsEV1MNzkKTJotxpLI5e0HHWXc/pe4IxV7c3Uemcxz06FpnpcEwpC5U4UUziKNqAM02lzhoOtMrmLq3mNI49L6LZ797tRUxTbaJ2sDa7dXs3xPP9dl5Sz31YoKEtJNpBqSTZUg3FIztvVNAoLJBePbUZbSEltAmP5oBekqAB+2w0aJvMR6tsI5gMoUvd+YPiHRWampmNDizvHHXlDE1G20pUjSsrjUltUCKhBcVTPYUm7Z1xUvBomlTP0uZf3cFFhkPxfLAAAAAASUVORK5CYII=",fr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAATCAYAAAAu2nXoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATbSURBVHgBlVhdbttGEJ5ZklIct6gC1Hb7VOWhQGK3sHqCKCeIb2D1Bs5bazmwilrpa3OCKCeIcoLIJ6iMxI7RvjBP9U+Kqg9B7Ejc6QwpUtzl6icfIHC5u7Pzs/NHYeXOb9XAo3swA5r04J+TvRfT1l1nUAThu9PdQ9faUOve4M3eW+OMaqtSXgq2CakGCDUErBDQAAhDXu7DyOte/PnTkZM/0wbLpQf2/OXx7rP8uw9X1wPvM+9tRPhAAW7xXNUmUoiwcre9c/mm+cTFrKT0PgI08nPaI3k/5LVtXmvl124Q3edHpuzqenufWeyI3Kxkti8es+I83IIgkvNuO/nf9F8iUM2eX/m2fXT5V7OfKTsIWwN+9sa/h19992udSD21lVaJME5lWaS6NRVeHu/FVkWkOuQUEFxdRbEAciOxoIlCM0EEfdf8l98/voea3PQ+iEdldMpeP3v9qHcdDH8QgY0FhKoIZ+9fufN4W9bycxqomyM0BCFmPjYwlJd9vlGcq2hMR/FlFKCi2IOcQDSNoFybBv3WgA/v2PP+jdJmgZmnG4V9Gn6X58p6W5gZBuI47MmzUhPD4Y4pHQwQ9f3z4ybK7/r98Ja8s4E6HulCvEo+YK9owDRYhvSn7dMe9jxNFm1sqcM8M95ZB1OZzt9p8tG4CR7ZR8du5UdiOHONNPTOTx710ncrxAqQfGBNyf7MuBw8NfHG1JOcNysYeR+PxsQZbLeQxGTTsVtlGRCVxKuFj+jMqAkB1St3D76BBWEnRSR4aO/Je+NUZcWV2dZ983Csp+OxC21ZZOHZ6eRm7MQjpSTNjk5jcrkpKwxX1w+ezlPakSvCs5NmB2ZckJp1ILthF0xpsiQVQFw7jXjkxNRKx0lMmsoiqMx4sTHRLEkTAbGRKN3ehymwc0WWY6xEtrCykY+FdB8EQTUmVBPFxgiH70dZ45HEpAmiJDmlOH/dfMJCtmAK2DNaqxsHf9hVIMkVEy8TeESdhIhC44zcvpnKvnu1K8nIcAso0abUNrvcSJZNE0HMfFSsfUrrQ3vu4qT5CyiScAjBARa2Fiz5xg0XcwX2sqRol6icN852Yxcxu6artnnauiEsNBpZM2Hj/NXeCy41tzVgAxxKo4JGKrCr3GjQnXR8XRoVDFq+6cft6icrKy1lsbblLDvB1GZiGqSXxUhJK1lIXEtL/hcyHucKMGWCxtrGwUv5lYf+cyiokNTbucoiKfsDoGrvyVtWEMeU5ebMMYQFcHb6s3Pfhw+j/+TpyBWQxG/+V0Cs7NSmIs98baNtFGsLWR+coqyiTbsfzrd7a+vt52zFio6gQ6DC0VVchuKayMo0HLxC8Yo4V2iqwqcCk3o/V9lYUICuXcBT5MvN5PBivMJo0nkl61hRnjwJvOVgwmkGDy+iHcuGclgIbqmrE3ZY+Zrr9mLKEhxO60G5D+45pguZOG0mxi3mNC9x8W5dnuw9S0JDG02MtKYXx80fXXTsjf9CzkNGCurzExRjWBp2nYLk+2ADdtxgLx35AS3WDvJHgdawE5cmcLem3B52Z5wQWu+1hW5Wup01/ngnNGPJc3wZyQ0Q6VZ+LgKdlRyp3VxGbpU+9+oQKWk8uJRglS03kHaSy0wfQR/Jp2b+DNJsMGU2DBcz/j1hl2hR7vNSczX4H/4mDn51miMwAAAAAElFTkSuQmCC",Er=s.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  div {
    width: 34px;
  }
`,hr="•",d={MASTERCARD:{NAME:"MasterCard",MIN_NUMBER:51,MAX_NUMBER:55},VISA:{NAME:"Visa",MIN_NUMBER:40,MAX_NUMBER:49}},cr=({cardNumbers:e})=>r.jsx(Er,{children:e.map((a,n)=>{const i=a!==""&&!Number.isNaN(a),E=i?hr.repeat(a.toString().length):null;return r.jsx("div",{children:n>1?E:i&&a},n)})});cr.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const dr=({month:e,year:a})=>r.jsxs("div",{children:[e!==""&&r.jsxs("span",{children:[e,"/"]}),a!==""&&r.jsx("span",{children:a})]});dr.__docgenInfo={description:"",methods:[],displayName:"CardExpiration",props:{month:{required:!0,tsType:{name:"string"},description:""},year:{required:!0,tsType:{name:"string"},description:""}}};const tr=({isCardFlipped:e,cvc:a,userName:n,cardExpiration:i,cardCompany:E,cardNumbers:B})=>{const v=(()=>{const c=Math.floor(Number(B[0])/100);let h="";return c>=d.MASTERCARD.MIN_NUMBER&&c<=d.MASTERCARD.MAX_NUMBER?h=Nr:c>=d.VISA.MIN_NUMBER&&c<=d.VISA.MAX_NUMBER&&(h=fr),h})();return r.jsx(pr,{children:e?r.jsx(Ar,{children:r.jsx(gr,{children:a})}):r.jsxs(mr,{cardCompany:E,children:[r.jsxs(ur,{children:[r.jsx(lr,{}),v&&r.jsx(Cr,{children:r.jsx("img",{src:v,alt:"카드 브랜드 이미지"})})]}),r.jsxs(xr,{children:[r.jsx(cr,{cardNumbers:B}),r.jsx(dr,{month:i[0],year:i[1]}),r.jsx("div",{children:n&&n})]})]})})};tr.__docgenInfo={description:"",methods:[],displayName:"CardPreview",props:{isCardFlipped:{required:!0,tsType:{name:"boolean"},description:""},cvc:{required:!0,tsType:{name:"string"},description:""},userName:{required:!0,tsType:{name:"string"},description:""},cardExpiration:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},cardCompany:{required:!0,tsType:{name:"union",raw:'"" | "BC카드" | "신한카드" | "카카오뱅크" | "현대카드" | "우리카드" | "롯데카드" | "하나카드" | "국민카드"',elements:[{name:"literal",value:'""'},{name:"literal",value:'"BC카드"'},{name:"literal",value:'"신한카드"'},{name:"literal",value:'"카카오뱅크"'},{name:"literal",value:'"현대카드"'},{name:"literal",value:'"우리카드"'},{name:"literal",value:'"롯데카드"'},{name:"literal",value:'"하나카드"'},{name:"literal",value:'"국민카드"'}]},description:""},cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const br={title:"Components/CardPreview",component:tr,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{isCardFlipped:!1,cvc:"123",userName:"John Doe",cardExpiration:["12","23"],cardCompany:"",cardNumbers:["1234","5678","9012","3456"]}},o={args:{isCardFlipped:!1,cvc:"123",userName:"MasterCard User",cardExpiration:["12","23"],cardCompany:"",cardNumbers:["5234","5678","9012","3456"]}},p={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"",cardNumbers:["4532","5678","9012","3456"]}},m={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"BC카드",cardNumbers:["4532","5678","9012","3456"]}},u={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"신한카드",cardNumbers:["4532","5678","9012","3456"]}},l={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"카카오뱅크",cardNumbers:["4532","5678","9012","3456"]}},C={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"현대카드",cardNumbers:["4532","5678","9012","3456"]}},x={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"우리카드",cardNumbers:["4532","5678","9012","3456"]}},A={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"롯데카드",cardNumbers:["4532","5678","9012","3456"]}},g={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"하나카드",cardNumbers:["4532","5678","9012","3456"]}},N={args:{isCardFlipped:!1,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"국민카드",cardNumbers:["4532","5678","9012","3456"]}},f={args:{isCardFlipped:!0,cvc:"123",userName:"Visa User",cardExpiration:["12","23"],cardCompany:"국민카드",cardNumbers:["4532","5678","9012","3456"]}};var y,b,U;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "John Doe",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["1234", "5678", "9012", "3456"]
  }
}`,...(U=(b=t.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var M,S,w;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "MasterCard User",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["5234", "5678", "9012", "3456"]
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var F,I,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var R,T,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "BC카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var j,H,k;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "신한카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var G,P,Y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "카카오뱅크",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(Y=(P=l.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var J,X,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "현대카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(Q=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var q,Z,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "우리카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(O=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:O.source}}};var W,K,L;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "롯데카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(L=(K=A.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var z,_,$;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "하나카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var rr,er,ar;N.parameters={...N.parameters,docs:{...(rr=N.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "국민카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(ar=(er=N.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var sr,nr,ir;f.parameters={...f.parameters,docs:{...(sr=f.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    isCardFlipped: true,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "국민카드",
    cardNumbers: ["4532", "5678", "9012", "3456"]
  }
}`,...(ir=(nr=f.parameters)==null?void 0:nr.docs)==null?void 0:ir.source}}};const Ur=["Default","MasterCard","Visa","BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드","BackCard"];export{m as BC카드,f as BackCard,t as Default,o as MasterCard,p as Visa,Ur as __namedExportsOrder,br as default,N as 국민카드,A as 롯데카드,u as 신한카드,x as 우리카드,l as 카카오뱅크,g as 하나카드,C as 현대카드};
