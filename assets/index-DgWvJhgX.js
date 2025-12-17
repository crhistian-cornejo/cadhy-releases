import{j as n}from"./index-DhgnRxfH.js";import{u as r}from"./index-D66f83QC.js";const t={title:"Hydraulic Analysis",description:"Hydraulic calculation methods overview"},d=[{depth:1,url:"#hydraulic-analysis",title:n.jsx(n.Fragment,{children:"Hydraulic Analysis"})},{depth:2,url:"#calculation-methods",title:n.jsx(n.Fragment,{children:"Calculation Methods"})},{depth:3,url:"#mannings-equation",title:n.jsx(n.Fragment,{children:"Manning's Equation"})},{depth:3,url:"#critical-flow",title:n.jsx(n.Fragment,{children:"Critical Flow"})},{depth:2,url:"#analysis-types",title:n.jsx(n.Fragment,{children:"Analysis Types"})},{depth:2,url:"#channel-sections",title:n.jsx(n.Fragment,{children:"Channel Sections"})},{depth:2,url:"#froude-number-classification",title:n.jsx(n.Fragment,{children:"Froude Number Classification"})},{depth:2,url:"#next-steps",title:n.jsx(n.Fragment,{children:"Next Steps"})}];function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"hydraulic-analysis",children:"Hydraulic Analysis"}),`
`,n.jsx(e.p,{children:"CADHY provides comprehensive tools for hydraulic analysis, from basic uniform flow calculations to complex gradually varied flow profiles."}),`
`,n.jsx(e.h2,{id:"calculation-methods",children:"Calculation Methods"}),`
`,n.jsx(e.h3,{id:"mannings-equation",children:"Manning's Equation"}),`
`,n.jsx(e.p,{children:"The foundation of open channel flow calculations:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Q = (1/n) × A × R^(2/3) × S^(1/2)
`})}),`
`,n.jsx(e.p,{children:"Where:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Q = discharge (m³/s)"}),`
`,n.jsx(e.li,{children:"n = Manning's roughness coefficient"}),`
`,n.jsx(e.li,{children:"A = flow area (m²)"}),`
`,n.jsx(e.li,{children:"R = hydraulic radius (m)"}),`
`,n.jsx(e.li,{children:"S = bed slope"}),`
`]}),`
`,n.jsx(e.h3,{id:"critical-flow",children:"Critical Flow"}),`
`,n.jsx(e.p,{children:"For any channel section, there's a critical depth where specific energy is minimum:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Fr = V / √(gD) = 1
`})}),`
`,n.jsx(e.p,{children:"Where D is the hydraulic depth (A/T) and T is the top width."}),`
`,n.jsx(e.h2,{id:"analysis-types",children:"Analysis Types"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.a,{href:"/docs/hydraulics/channels",children:"Normal Depth"})}),n.jsx(e.td,{children:"Uniform flow depth for given Q and S"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.a,{href:"/docs/hydraulics/critical-flow",children:"Critical Depth"})}),n.jsx(e.td,{children:"Depth where Fr = 1"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.a,{href:"/docs/hydraulics/gvf",children:"GVF Profiles"})}),n.jsx(e.td,{children:"Water surface profiles (M1, M2, S1, etc.)"})]})]})]}),`
`,n.jsx(e.h2,{id:"channel-sections",children:"Channel Sections"}),`
`,n.jsx(e.p,{children:"CADHY supports various channel cross-sections:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Trapezoidal"})," - Most common for constructed channels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Rectangular"})," - Special case (z = 0)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Triangular"})," - V-shaped ditches"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Circular"})," - Pipes and culverts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Parabolic"})," - Natural channels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom"})," - User-defined geometry"]}),`
`]}),`
`,n.jsx(e.h2,{id:"froude-number-classification",children:"Froude Number Classification"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Froude Number"}),n.jsx(e.th,{children:"Flow Regime"}),n.jsx(e.th,{children:"Characteristics"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Fr < 1"}),n.jsx(e.td,{children:"Subcritical"}),n.jsx(e.td,{children:"Tranquil, controlled by downstream"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Fr = 1"}),n.jsx(e.td,{children:"Critical"}),n.jsx(e.td,{children:"Transition point"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Fr > 1"}),n.jsx(e.td,{children:"Supercritical"}),n.jsx(e.td,{children:"Rapid, controlled by upstream"})]})]})]}),`
`,n.jsx(e.h2,{id:"next-steps",children:"Next Steps"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/docs/hydraulics/channels",children:"Open Channel Design"})," - Detailed channel analysis"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/docs/hydraulics/gvf",children:"GVF Analysis"})," - Water surface profiles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/docs/hydraulics/critical-flow",children:"Critical Flow"})," - Critical conditions"]}),`
`]})]})}function h(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{h as default,t as frontmatter,d as toc};
//# sourceMappingURL=index-DgWvJhgX.js.map
