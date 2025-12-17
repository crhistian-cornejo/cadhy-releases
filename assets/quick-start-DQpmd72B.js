import{j as e}from"./index-DhgnRxfH.js";import{u as i}from"./index-D66f83QC.js";const c={title:"Quick Start",description:"Create your first hydraulic analysis"},h=[{depth:1,url:"#quick-start",title:e.jsx(e.Fragment,{children:"Quick Start"})},{depth:2,url:"#step-1-create-a-new-project",title:e.jsx(e.Fragment,{children:"Step 1: Create a New Project"})},{depth:2,url:"#step-2-define-the-channel-section",title:e.jsx(e.Fragment,{children:"Step 2: Define the Channel Section"})},{depth:2,url:"#step-3-set-flow-conditions",title:e.jsx(e.Fragment,{children:"Step 3: Set Flow Conditions"})},{depth:2,url:"#step-4-review-results",title:e.jsx(e.Fragment,{children:"Step 4: Review Results"})},{depth:2,url:"#step-5-try-the-ai-assistant",title:e.jsx(e.Fragment,{children:"Step 5: Try the AI Assistant"})},{depth:2,url:"#step-6-save-your-project",title:e.jsx(e.Fragment,{children:"Step 6: Save Your Project"})},{depth:2,url:"#whats-next",title:e.jsx(e.Fragment,{children:"What's Next?"})}];function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.p,{children:"Get started with CADHY in 5 minutes. This guide walks you through creating your first open channel analysis."}),`
`,e.jsx(n.h2,{id:"step-1-create-a-new-project",children:"Step 1: Create a New Project"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Launch CADHY"}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"New Project"})," on the welcome screen"]}),`
`,e.jsx(n.li,{children:'Enter a project name (e.g., "My First Channel")'}),`
`,e.jsx(n.li,{children:"Choose a save location"}),`
`,e.jsxs(n.li,{children:["Select the ",e.jsx(n.strong,{children:"Open Channel"})," template"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Create"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-2-define-the-channel-section",children:"Step 2: Define the Channel Section"}),`
`,e.jsx(n.p,{children:"In the modeller view, you'll see a default trapezoidal channel. Let's modify it:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Click on the channel in the 3D view to select it"}),`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.strong,{children:"Properties"})," panel, set:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bottom width (b): ",e.jsx(n.code,{children:"4.0 m"})]}),`
`,e.jsxs(n.li,{children:["Side slope (z): ",e.jsx(n.code,{children:"2:1"})," (2 horizontal to 1 vertical)"]}),`
`,e.jsxs(n.li,{children:["Manning's n: ",e.jsx(n.code,{children:"0.013"})," (concrete-lined)"]}),`
`,e.jsxs(n.li,{children:["Bed slope (S): ",e.jsx(n.code,{children:"0.001"})," (1 in 1000)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-3-set-flow-conditions",children:"Step 3: Set Flow Conditions"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open the ",e.jsx(n.strong,{children:"Analysis"})," panel"]}),`
`,e.jsxs(n.li,{children:["Set the discharge: ",e.jsx(n.code,{children:"Q = 5.0 m³/s"})]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Calculate Normal Depth"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-4-review-results",children:"Step 4: Review Results"}),`
`,e.jsx(n.p,{children:"The results panel will show:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Normal Depth (yn)"}),e.jsx(n.td,{children:"1.24 m"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Flow Area (A)"}),e.jsx(n.td,{children:"6.50 m²"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Wetted Perimeter (P)"}),e.jsx(n.td,{children:"9.55 m"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Hydraulic Radius (R)"}),e.jsx(n.td,{children:"0.68 m"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Velocity (V)"}),e.jsx(n.td,{children:"0.77 m/s"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Froude Number (Fr)"}),e.jsx(n.td,{children:"0.22"})]})]})]}),`
`,e.jsxs(n.p,{children:["The flow is ",e.jsx(n.strong,{children:"subcritical"})," (Fr < 1)."]}),`
`,e.jsx(n.h2,{id:"step-5-try-the-ai-assistant",children:"Step 5: Try the AI Assistant"}),`
`,e.jsxs(n.p,{children:["Click the ",e.jsx(n.strong,{children:"AI Chat"})," button and ask:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:'"What if I increase the discharge to 10 m³/s? Will the channel still work?"'}),`
`]}),`
`,e.jsx(n.p,{children:"The AI will analyze the new conditions and provide recommendations."}),`
`,e.jsx(n.h2,{id:"step-6-save-your-project",children:"Step 6: Save Your Project"}),`
`,e.jsxs(n.p,{children:["Press ",e.jsx(n.code,{children:"Cmd+S"})," (macOS) or ",e.jsx(n.code,{children:"Ctrl+S"})," (Windows/Linux) to save."]}),`
`,e.jsx(n.h2,{id:"whats-next",children:"What's Next?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Learn about ",e.jsx(n.a,{href:"/docs/user-guide/channels",children:"different channel sections"})]}),`
`,e.jsxs(n.li,{children:["Explore ",e.jsx(n.a,{href:"/docs/hydraulics/gvf",children:"GVF analysis"})," for backwater curves"]}),`
`,e.jsxs(n.li,{children:["Set up ",e.jsx(n.a,{href:"/docs/ai-features/quick-start",children:"AI integration"})," for enhanced assistance"]}),`
`]})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default,c as frontmatter,h as toc};
//# sourceMappingURL=quick-start-DQpmd72B.js.map
