import{j as e}from"./index-C4AMbjA1.js";import{u as i}from"./index-D9I9vzkg.js";const a={title:"Installation",description:"Install CADHY on your system"},c=[{depth:1,url:"#installation",title:e.jsx(e.Fragment,{children:"Installation"})},{depth:2,url:"#system-requirements",title:e.jsx(e.Fragment,{children:"System Requirements"})},{depth:2,url:"#windows",title:e.jsx(e.Fragment,{children:"Windows"})},{depth:2,url:"#macos",title:e.jsx(e.Fragment,{children:"macOS"})},{depth:3,url:"#apple-silicon-m1m2m3",title:e.jsx(e.Fragment,{children:"Apple Silicon (M1/M2/M3)"})},{depth:2,url:"#linux",title:e.jsx(e.Fragment,{children:"Linux"})},{depth:3,url:"#debianubuntu",title:e.jsx(e.Fragment,{children:"Debian/Ubuntu"})},{depth:3,url:"#appimage-universal",title:e.jsx(e.Fragment,{children:"AppImage (Universal)"})},{depth:2,url:"#verify-installation",title:e.jsx(e.Fragment,{children:"Verify Installation"})},{depth:2,url:"#next-steps",title:e.jsx(e.Fragment,{children:"Next Steps"})}];function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"CADHY is available for Windows, macOS, and Linux. Follow the instructions below for your operating system."}),`
`,e.jsx(n.h2,{id:"system-requirements",children:"System Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OS"}),": Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RAM"}),": 4 GB minimum, 8 GB recommended"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storage"}),": 500 MB free space"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Display"}),": 1280x720 minimum resolution"]}),`
`]}),`
`,e.jsx(n.h2,{id:"windows",children:"Windows"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Download the latest ",e.jsx(n.code,{children:".msi"})," installer from the ",e.jsx(n.a,{href:"https://github.com/cadhy-software/cadhy/releases",children:"releases page"})]}),`
`,e.jsx(n.li,{children:"Run the installer and follow the prompts"}),`
`,e.jsx(n.li,{children:"CADHY will be available in your Start menu"}),`
`]}),`
`,e.jsx(n.h2,{id:"macos",children:"macOS"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Download the latest ",e.jsx(n.code,{children:".dmg"})," file from the ",e.jsx(n.a,{href:"https://github.com/cadhy-software/cadhy/releases",children:"releases page"})]}),`
`,e.jsx(n.li,{children:"Open the DMG and drag CADHY to your Applications folder"}),`
`,e.jsx(n.li,{children:'On first launch, you may need to right-click and select "Open" to bypass Gatekeeper'}),`
`]}),`
`,e.jsx(n.h3,{id:"apple-silicon-m1m2m3",children:"Apple Silicon (M1/M2/M3)"}),`
`,e.jsx(n.p,{children:"CADHY runs natively on Apple Silicon. No Rosetta 2 required."}),`
`,e.jsx(n.h2,{id:"linux",children:"Linux"}),`
`,e.jsx(n.h3,{id:"debianubuntu",children:"Debian/Ubuntu"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Download the .deb package"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#B392F0"},children:"wget"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" https://github.com/cadhy-software/cadhy/releases/latest/download/cadhy_0.1.0_amd64.deb"})]}),`
`,e.jsx(n.span,{className:"line"}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Install"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#B392F0"},children:"sudo"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" dpkg"}),e.jsx(n.span,{style:{color:"#79B8FF"},children:" -i"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" cadhy_0.1.0_amd64.deb"})]})]})})}),`
`,e.jsx(n.h3,{id:"appimage-universal",children:"AppImage (Universal)"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Download the AppImage"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#B392F0"},children:"wget"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" https://github.com/cadhy-software/cadhy/releases/latest/download/CADHY-0.1.0.AppImage"})]}),`
`,e.jsx(n.span,{className:"line"}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Make executable"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#B392F0"},children:"chmod"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" +x"}),e.jsx(n.span,{style:{color:"#9ECBFF"},children:" CADHY-0.1.0.AppImage"})]}),`
`,e.jsx(n.span,{className:"line"}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Run"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#B392F0"},children:"./CADHY-0.1.0.AppImage"})})]})})}),`
`,e.jsx(n.h2,{id:"verify-installation",children:"Verify Installation"}),`
`,e.jsxs(n.p,{children:["After installation, launch CADHY and check the version in ",e.jsx(n.strong,{children:"Help → About"}),". You should see:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Version: 0.1.0"}),`
`,e.jsx(n.li,{children:"Rust Backend: Connected"}),`
`,e.jsx(n.li,{children:"AI Services: Ready (requires API key configuration)"}),`
`]}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next Steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/getting-started/quick-start",children:"Quick Start Guide"})," - Create your first analysis"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/docs/ai-features/quick-start",children:"Configure AI"})," - Set up AI assistance"]}),`
`]})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{d as default,a as frontmatter,c as toc};
//# sourceMappingURL=installation-CDFQLJpH.js.map
