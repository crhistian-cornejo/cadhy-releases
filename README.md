<div align="center">

<img src="https://raw.githubusercontent.com/crhistian-cornejo/cadhy-releases/main/assets/logo.svg" alt="CADHY Logo" width="120" height="120">

# CADHY

### Computer Aided Design for HYdraulics

**Professional BIM-oriented hydraulic engineering platform with parametric 3D modeling**

[![Release](https://img.shields.io/github/v/release/crhistian-cornejo/cadhy-releases?style=for-the-badge&logo=github&label=Latest&color=0891b2)](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/crhistian-cornejo/cadhy-releases/total?style=for-the-badge&logo=github&color=6366f1)](https://github.com/crhistian-cornejo/cadhy-releases/releases)
[![Build](https://img.shields.io/github/actions/workflow/status/crhistian-cornejo/CADHY/release-app.yml?style=for-the-badge&logo=github-actions&label=Build)](https://github.com/crhistian-cornejo/cadhy-releases/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-22c55e?style=for-the-badge&logo=apple)](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)

[**Download**](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest) ·
[**Documentation**](https://crhistian-cornejo.github.io/cadhy-releases/#/docs) ·
[**Website**](https://crhistian-cornejo.github.io/cadhy-releases/)

</div>

---

## Overview

**CADHY** is a next-generation hydraulic engineering platform that combines **parametric CAD modeling**, **BIM workflows**, and **computational hydraulics** in a single, unified environment. Built on industrial-grade technology, CADHY empowers civil and hydraulic engineers to design, analyze, and document water infrastructure with unprecedented precision.

## Architecture

CADHY is built on a modern, high-performance technology stack designed for professional engineering workflows:

| Layer | Technology | Description |
|-------|------------|-------------|
| **Geometry Kernel** | [OpenCASCADE](https://dev.opencascade.org/) (OCCT 7.9) | Industry-standard B-Rep solid modeling kernel used by FreeCAD, Gmsh, and major CAD systems |
| **Hydraulics Engine** | `cadhy-hydraulics` (Rust) | Native computational engine for open channel flow, pipe networks, and GVF analysis |
| **Backend** | Rust 2024 Edition | Memory-safe systems programming with zero-cost abstractions |
| **Frontend** | React 19 + Three.js | Hardware-accelerated 3D visualization with WebGL/WebGPU |
| **Framework** | Tauri v2 | Lightweight, secure cross-platform desktop runtime |
| **Precision** | 64-bit IEEE 754 | Double-precision floating point for engineering accuracy |

### Geometry Modeling

CADHY leverages **OpenCASCADE Technology (OCCT)** as its geometric modeling kernel, providing:

- **B-Rep Solid Modeling** - Boundary representation with NURBS surfaces
- **Boolean Operations** - Union, intersection, and difference of solid bodies
- **Parametric Constraints** - Dimension-driven geometry with persistent relationships
- **Topological Analysis** - Edge, face, and vertex traversal for mesh generation
- **STEP/IGES Export** - Industry-standard CAD interchange formats

```
┌─────────────────────────────────────────────────────────────────┐
│                      CADHY Architecture                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │  React 19   │  │  Three.js   │  │    AI Assistant         │  │
│  │  (UI Layer) │  │  (3D View)  │  │  (Natural Language)     │  │
│  └──────┬──────┘  └──────┬──────┘  └───────────┬─────────────┘  │
│         │                │                     │                │
│         └────────────────┼─────────────────────┘                │
│                          │                                      │
│                    ┌─────▼─────┐                                │
│                    │  Tauri v2 │                                │
│                    │   (IPC)   │                                │
│                    └─────┬─────┘                                │
│                          │                                      │
│  ┌───────────────────────┼───────────────────────────────────┐  │
│  │                 Rust Backend                              │  │
│  │  ┌─────────────────┐  ┌─────────────────┐                 │  │
│  │  │ cadhy-hydraulics│  │  OpenCASCADE    │                 │  │
│  │  │  - Manning Eq.  │  │  - B-Rep Kernel │                 │  │
│  │  │  - Hardy Cross  │  │  - Boolean Ops  │                 │  │
│  │  │  - GVF Profiles │  │  - STEP Export  │                 │  │
│  │  └─────────────────┘  └─────────────────┘                 │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Features

### Hydraulic Analysis

| Module | Capabilities |
|--------|-------------|
| **Open Channel Flow** | Trapezoidal, rectangular, circular, parabolic, and custom sections. Normal/critical depth, Froude number, specific energy diagrams |
| **Gradually Varied Flow** | M1, M2, S1, S2, S3 water surface profiles with Standard Step and Direct Step methods |
| **Pipe Networks** | Hardy-Cross iterative solver, demand allocation, pressure analysis, head loss calculations |
| **Hydraulic Structures** | Weirs, orifices, spillways, energy dissipators, chutes with stepped/baffled geometry |

### 3D Modeling & Visualization

- **Parametric Channel Geometry** - Real-time 3D generation from hydraulic parameters
- **Solid Body Generation** - B-Rep solids suitable for FEM meshing and CFD
- **Water Surface Rendering** - Dynamic visualization of flow profiles
- **Section Analysis** - Interactive cross-section views with annotations
- **Mesh Export** - STL, OBJ for downstream analysis

### BIM Integration

- **IFC Compatibility** - Planned support for buildingSMART standards
- **Parametric Components** - Reusable hydraulic structure families
- **Documentation** - Automated generation of plans, profiles, and schedules
- **Coordination** - Export to common CAD formats (DXF, STEP, IGES)

### AI-Powered Engineering

CADHY includes an integrated AI assistant that understands hydraulic engineering:

- Describe problems in natural language
- Get instant calculations and recommendations
- Auto-generate channel sections from requirements
- Validate designs against engineering standards

## Installation

### System Requirements

| Platform | Architecture | Minimum Requirements |
|----------|-------------|---------------------|
| **Windows** | x64 | Windows 10 (1903+), 8GB RAM, DirectX 11 GPU |
| **macOS** | ARM64 / Intel | macOS 11 Big Sur+, 8GB RAM, Metal-compatible GPU |
| **Linux** | x64 | Ubuntu 22.04 / Fedora 38+, 8GB RAM, Vulkan-compatible GPU |

### Download

<table>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/crhistian-cornejo/cadhy-releases/main/assets/windows.svg" width="48"><br>
<b>Windows</b><br>
<a href="https://github.com/crhistian-cornejo/cadhy-releases/releases/latest/download/CADHY_0.1.0_x64-setup.exe">
<img src="https://img.shields.io/badge/Download-.exe-0078D4?style=flat-square&logo=windows">
</a>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/crhistian-cornejo/cadhy-releases/main/assets/apple.svg" width="48"><br>
<b>macOS (Apple Silicon)</b><br>
<a href="https://github.com/crhistian-cornejo/cadhy-releases/releases/latest/download/CADHY_0.1.0_aarch64.dmg">
<img src="https://img.shields.io/badge/Download-.dmg-000000?style=flat-square&logo=apple">
</a>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/crhistian-cornejo/cadhy-releases/main/assets/linux.svg" width="48"><br>
<b>Linux</b><br>
<a href="https://github.com/crhistian-cornejo/cadhy-releases/releases/latest/download/CADHY_0.1.0_amd64.AppImage">
<img src="https://img.shields.io/badge/Download-.AppImage-FCC624?style=flat-square&logo=linux&logoColor=black">
</a>
</td>
</tr>
</table>

### Installation Instructions

<details>
<summary><b>Windows</b></summary>

1. Download `CADHY_x.x.x_x64-setup.exe`
2. Run the installer (SmartScreen may prompt - click "More info" → "Run anyway")
3. Follow the installation wizard
4. Launch CADHY from the Start Menu

</details>

<details>
<summary><b>macOS</b></summary>

1. Download `CADHY_x.x.x_aarch64.dmg` (Apple Silicon) or `CADHY_x.x.x_x64.dmg` (Intel)
2. Open the DMG file
3. Drag CADHY to the Applications folder
4. First launch: Right-click → "Open" (bypasses Gatekeeper for unsigned apps)
5. Subsequent launches work normally from Launchpad

**Note:** macOS builds are signed with a valid Apple Developer ID certificate.

</details>

<details>
<summary><b>Linux</b></summary>

```bash
# Download the AppImage
wget https://github.com/crhistian-cornejo/cadhy-releases/releases/latest/download/CADHY_0.1.0_amd64.AppImage

# Make executable
chmod +x CADHY_*.AppImage

# Run
./CADHY_*.AppImage
```

For desktop integration, use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).

</details>

## Automatic Updates

CADHY includes built-in automatic update functionality. When a new version is available:

1. A notification appears in the application
2. Click "Download & Install" to update
3. The application restarts with the new version

Updates are cryptographically signed to ensure authenticity.

## Documentation

- [Getting Started Guide](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/getting-started)
- [Open Channel Analysis](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/hydraulics/channels)
- [Pipe Network Design](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/hydraulics/pipes)
- [GVF Profile Analysis](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/hydraulics/gvf)
- [3D Modeling Guide](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/modeling)
- [AI Assistant](https://crhistian-cornejo.github.io/cadhy-releases/#/docs/ai-features)

## Roadmap

| Version | Status | Features |
|---------|--------|----------|
| **0.1.0** | Current | Open channels, GVF, basic 3D, AI assistant |
| **0.2.0** | Planned | Pipe networks, Hardy-Cross solver |
| **0.3.0** | Planned | Hydraulic structures, spillways, chutes |
| **0.4.0** | Planned | IFC export, BIM coordination |
| **1.0.0** | Future | Full production release |

## Support

- **Issues & Bugs**: [GitHub Issues](https://github.com/crhistian-cornejo/cadhy-releases/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/crhistian-cornejo/cadhy-releases/discussions)
- **Documentation**: [Online Docs](https://crhistian-cornejo.github.io/cadhy-releases/#/docs)

## License

CADHY is proprietary software. All rights reserved.

---

<div align="center">

**Built with OpenCASCADE, Rust, and React**

<sub>CADHY - Engineering software for the modern hydraulic professional</sub>

</div>
