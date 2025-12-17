<div align="center">

# CADHY

### Computer Aided Design for Hydraulics

**Professional hydraulic engineering software built with Rust and React**

[![Release](https://img.shields.io/github/v/release/crhistian-cornejo/cadhy-releases?style=for-the-badge&logo=github&label=Latest)](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/crhistian-cornejo/cadhy-releases/total?style=for-the-badge&logo=github)](https://github.com/crhistian-cornejo/cadhy-releases/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=for-the-badge&logo=windows)]()
[![License](https://img.shields.io/badge/license-Proprietary-red?style=for-the-badge)]()

[**Download**](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest) |
[**Documentation**](https://crhistian-cornejo.github.io/cadhy-releases/docs) |
[**Landing Page**](https://crhistian-cornejo.github.io/cadhy-releases/)

</div>

---

## Features

- **Open Channel Flow Analysis** - Trapezoidal, rectangular, circular, and custom channel sections with Manning equation and GVF profiles
- **Pipe Network Design** - Design and analyze pressurized pipe systems with Hardy Cross method
- **AI Assistant** - Describe hydraulic problems in natural language and get calculations
- **3D Visualization** - Real-time 3D environment with Three.js for channel geometry
- **Professional Reports** - Export to PDF, CSV, and CAD formats (DXF)

## System Requirements

| Platform | Architecture | Requirements |
|----------|-------------|--------------|
| Windows | x64 | Windows 10 or later |
| macOS | ARM64 / Intel | macOS 11 Big Sur or later |
| Linux | x64 | Ubuntu 22.04 or equivalent |

## Installation

### Windows
1. Download `CADHY_x.x.x_x64-setup.exe` from [Releases](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)
2. Run the installer
3. Launch CADHY from Start Menu

### macOS
1. Download `CADHY_x.x.x_aarch64.dmg` (Apple Silicon) or `CADHY_x.x.x_x64.dmg` (Intel) from [Releases](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)
2. Open the DMG file
3. Drag CADHY to Applications folder
4. On first launch, right-click and select "Open" to bypass Gatekeeper

### Linux
1. Download `CADHY_x.x.x_amd64.AppImage` from [Releases](https://github.com/crhistian-cornejo/cadhy-releases/releases/latest)
2. Make it executable: `chmod +x CADHY_*.AppImage`
3. Run: `./CADHY_*.AppImage`

## Tech Stack

| Component | Technology |
|-----------|------------|
| Engine | cadhy-hydraulics (Rust) |
| Backend | Rust 2024 Edition |
| Frontend | React 19 + Three.js |
| Framework | Tauri v2 |
| Precision | 64-bit floating point |

## Automatic Updates

CADHY includes automatic update checking. When a new version is available, you'll be notified within the application and can update with a single click.

## Support

For issues, feature requests, or questions, please [open an issue](https://github.com/crhistian-cornejo/cadhy-releases/issues).

---

<div align="center">

Made with Rust + React

</div>
