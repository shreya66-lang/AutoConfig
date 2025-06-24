// const pcs = [
//   {
//     name: "Intel i7-13700K",
//     cores: "4",
//     threads: "8",
//     cache: "12MB",
//     ram: "32GB, 4DIMM Base, Expandable up to 128GB",
//     raid: "Supports RAID 0",
//     graphics: "4 GB, Lag-Free",
//     graphicsOutput: "DisplayPort Multi display monitor",
//     os: "Windows Server 2022 STD OEM Pack or latest",
//     hardDisk: "3X1.2TB SSD + 1X1.2TB Hot Spare",
//     ethernet: "Six nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
//     power: "Latest generation Hot Redundant Swappable",
//     dvd: "In-built 16x DVD Writer",
//     monitor: "27'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
//     keyboard: "High end Wired Keyboard",
//     mouse: "Wired Optical Mouse",
//     io: "USB 3.2 or higher, 1 no. Audio line-out, Display Ports, Ethernet Ports"
//   },
//   {
//     name: "Intel i9-13900K",
//     cores: "8",
//     threads: "18",
//     cache: "24MB",
//     ram: "64GB, 4DIMM Base, Expandable up to 256GB",
//     raid: "Supports RAID 1",
//     graphics: "8 GB, Lag-Free",
//     graphicsOutput: "HDMI Multi display monitor",
//     os: "Windows Server 2019 STD OEM Pack or latest",
//     hardDisk: "2X1.2TB SSD + 1X1.2TB Hot Spare",
//     ethernet: "Four nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
//     power: "Dual Latest generation Hot Redundant Swappable",
//     dvd: "In-built 24x DVD Writer",
//     monitor: "24'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
//     keyboard: "Mechanical Wired Keyboard",
//     mouse: "Wired Laser Mouse",
//     io: "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports"
//   },
//   {
//     name: "Intel Xeon Silver 4410Y",
//     cores: "12",
//     threads: "20",
//     cache: "30MB",
//     ram: "128GB, 8DIMM Base, Expandable up to 512GB",
//     raid: "Supports RAID 5",
//     graphics: "16 GB, Lag-Free",
//     graphicsOutput: "USB-C Multi display monitor",
//     os: "Windows Server 2016 STD OEM Pack or latest",
//     hardDisk: "4X1.2TB SSD + 1X1.2TB Hot Spare",
//     ethernet: "Eight nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
//     power: "Triple Latest generation Hot Redundant Swappable",
//     dvd: "In-built 8x DVD Writer",
//     monitor: "32'', min Resolution: 4K 3840 x 2160, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
//     keyboard: "Ergonomic Wired Keyboard",
//     mouse: "Wired Ergonomic Mouse",
//     io: "USB 3.2 or higher, 1 no. Audio line-out, HDMI Port, Ethernet Ports"
//   },
//   {
//     name: "Intel Xeon Gold 6430",
//     cores: "12",
//     threads: "24",
//     cache: "36MB",
//     ram: "256GB, 8DIMM Base, Expandable up to 1TB",
//     raid: "Supports RAID 10",
//     graphics: "24 GB, Lag-Free",
//     graphicsOutput: "Thunderbolt Multi display monitor",
//     os: "Linux (Ubuntu Server) or latest",
//     hardDisk: "3X2TB HDD + 1X2TB Hot Spare",
//     ethernet: "Two nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
//     power: "Quad Latest generation Hot Redundant Swappable",
//     dvd: "In-built Blu-ray Writer",
//     monitor: "27'', min Resolution: QHD 2560 x 1440, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
//     keyboard: "Compact Wired Keyboard",
//     mouse: "Wired Mechanical Mouse",
//     io: "USB 3.2 or higher, 4 no. Audio line-out, Display Ports, Ethernet Ports"
//   },
//   {
//     name: "Intel Xeon Platinum 8490H",
//     cores: "14",
//     threads: "24",
//     cache: "30MB",
//     ram: "512GB, 8DIMM Base, Expandable up to 2TB",
//     raid: "Supports RAID 6",
//     graphics: "32 GB, Lag-Free",
//     graphicsOutput: "VGA Multi display monitor",
//     os: "Linux (CentOS) or latest",
//     hardDisk: "2X2TB HDD + 1X2TB Hot Spare",
//     ethernet: "Ten nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
//     power: "Latest generation Hot Redundant Swappable (1+1 configuration)",
//     dvd: "In-built 16x DVD Writer (Dual Layer)",
//     monitor: "22'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
//     keyboard: "Multimedia Wired Keyboard",
//     mouse: "Wired Gaming Mouse",
//     io: "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports, VGA Port"
//   }
// ];

// // Switch options for dropdowns
// const switchOptions = {
//   numberOfPorts: [
//     "2-Port KVM Switch",
//     "4-Port KVM Switch",
//     "8-Port / 16-Port / 32-Port",
//     "Multi-User KVM Switch"
//   ],
//   connectivityType: [
//     "CATx (Ethernet-based KVM)",
//     "Fiber Optic KVM",
//     "IP-Based KVM (KVM-over-IP)",
//     "USB-Based KVM"
//   ],
//   videoSupport: [
//     "HDMI KVM Switch",
//     "DisplayPort KVM Switch",
//     "VGA/DVI KVM Switch",
//     "Multi-Monitor KVM"
//   ],
//   switchingMethods: [
//     "Hotkey Switching",
//     "Push Button Switching",
//     "On-Screen Display (OSD) Menu",
//     "Auto-Scanning",
//     "Remote Control (IP/Web-based UI)"
//   ],
//   peripheralSupport: [
//     "USB 2.0 / 3.0 Ports",
//     "Audio Passthrough (Mic/Speakers)",
//     "RS232 / Serial Control"
//   ],
//   powerOptions: [
//     "Powered via USB",
//     "External Power Adapter",
//     "PoE (Power over Ethernet) Support"
//   ],
//   securityFeatures: [
//     "Encryption (AES-128, AES-256)",
//     "User Authentication & Access Control",
//     "Smart Card / Biometric Authentication"
//   ],
//   useCases: [
//     "Data Centers",
//     "Office & Workstations",
//     "Broadcast & Media Production",
//     "Industrial & Automation",
//     "Gaming & Streaming"
//   ]
// };

// PC Configuration Data

// PC Configuration Data
// PC Configuration Data
// PC Configuration Data
// PC Configuration Data
// PC Configuration Data
const pcs = [
  {
    name: "Intel i7-13700K",
    cores: ["16"],
    threads: ["24"],
    cache: ["30MB"],
    ram: [
      "32GB, 4DIMM Base, Expandable up to 128GB",
      "64GB, 4DIMM Base, Expandable up to 128GB"
    ],
    raid: [
      "Supports RAID 0",
      "Supports RAID 1"
    ],
    graphics: [
      "4 GB, Lag-Free",
      "6 GB, Lag-Free"
    ],
    graphicsOutput: [
      "DisplayPort Multi display monitor",
      "HDMI Multi display monitor"
    ],
    os: [
      "Windows Server 2022 STD OEM Pack or latest",
      "Windows 11 Pro"
    ],
    hardDisk: [
      "3X1.2TB SSD + 1X1.2TB Hot Spare",
      "2X1TB SSD + 2X1TB HDD"
    ],
    ethernet: [
      "Four nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Six nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Latest generation Hot Redundant Swappable",
      "Dual Latest generation Hot Redundant Swappable"
    ],
    dvd: [
      "In-built 16x DVD Writer",
      "None"
    ],
    monitor: [
      "27'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "24'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "High end Wired Keyboard",
      "Mechanical Wired Keyboard"
    ],
    mouse: [
      "Wired Optical Mouse",
      "Wired Laser Mouse"
    ],
    io: [
      "USB 3.2 or higher, 1 no. Audio line-out, Display Ports, Ethernet Ports",
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports"
    ]
  },
  {
    name: "Intel i9-13900K",
    cores: ["24"],
    threads: ["32"],
    cache: ["36MB"],
    ram: [
      "64GB, 4DIMM Base, Expandable up to 256GB",
      "128GB, 8DIMM Base"
    ],
    raid: [
      "Supports RAID 1",
      "Supports RAID 5"
    ],
    graphics: [
      "8 GB, Lag-Free",
      "10 GB, Lag-Free"
    ],
    graphicsOutput: [
      "HDMI Multi display monitor",
      "DisplayPort Multi display monitor"
    ],
    os: [
      "Windows Server 2019 STD OEM Pack or latest",
      "Windows 10 Pro"
    ],
    hardDisk: [
      "2X1.2TB SSD + 1X1.2TB Hot Spare",
      "3X2TB HDD"
    ],
    ethernet: [
      "Four nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Six nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Dual Latest generation Hot Redundant Swappable",
      "Triple Latest generation Hot Redundant Swappable"
    ],
    dvd: [
      "In-built 24x DVD Writer",
      "None"
    ],
    monitor: [
      "24'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "27'', min Resolution: QHD 2560 x 1440, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "Mechanical Wired Keyboard",
      "Ergonomic Wired Keyboard"
    ],
    mouse: [
      "Wired Laser Mouse",
      "Wired Ergonomic Mouse"
    ],
    io: [
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports",
      "USB 3.2 or higher, 1 no. Audio line-out, HDMI Port, Ethernet Ports"
    ]
  },
  {
    name: "Intel Xeon Silver 4410Y",
    cores: ["12"],
    threads: ["24"],
    cache: ["30MB"],
    ram: [
      "128GB, 8DIMM Base, Expandable up to 512GB",
      "256GB, 8DIMM Base"
    ],
    raid: [
      "Supports RAID 5",
      "Supports RAID 6"
    ],
    graphics: [
      "16 GB, Lag-Free",
      "24 GB, Lag-Free"
    ],
    graphicsOutput: [
      "USB-C Multi display monitor",
      "HDMI Multi display monitor"
    ],
    os: [
      "Windows Server 2016 STD OEM Pack or latest",
      "Linux Ubuntu Server"
    ],
    hardDisk: [
      "4X1.2TB SSD + 1X1.2TB Hot Spare",
      "6X2TB HDD"
    ],
    ethernet: [
      "Eight nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Ten nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Triple Latest generation Hot Redundant Swappable",
      "Quad Latest generation Hot Redundant Swappable"
    ],
    dvd: [
      "In-built 8x DVD Writer",
      "None"
    ],
    monitor: [
      "32'', min Resolution: 4K 3840 x 2160, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "27'', min Resolution: QHD 2560 x 1440, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "Ergonomic Wired Keyboard",
      "Compact Wired Keyboard"
    ],
    mouse: [
      "Wired Ergonomic Mouse",
      "Wired Mechanical Mouse"
    ],
    io: [
      "USB 3.2 or higher, 1 no. Audio line-out, HDMI Port, Ethernet Ports",
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports"
    ]
  },
  {
    name: "Intel Xeon Gold 6430",
    cores: ["32"],
    threads: ["64"],
    cache: ["60MB"],
    ram: [
      "256GB, 8DIMM Base, Expandable up to 1TB",
      "512GB, 8DIMM Base"
    ],
    raid: [
      "Supports RAID 10",
      "Supports RAID 5"
    ],
    graphics: [
      "24 GB, Lag-Free",
      "32 GB, Lag-Free"
    ],
    graphicsOutput: [
      "Thunderbolt Multi display monitor",
      "USB-C Multi display monitor"
    ],
    os: [
      "Linux (Ubuntu Server) or latest",
      "Windows Server 2022 STD OEM Pack or latest"
    ],
    hardDisk: [
      "3X2TB HDD + 1X2TB Hot Spare",
      "4X1TB SSD"
    ],
    ethernet: [
      "Four nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Eight nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Quad Latest generation Hot Redundant Swappable",
      "Triple Latest generation Hot Redundant Swappable"
    ],
    dvd: [
      "In-built Blu-ray Writer",
      "None"
    ],
    monitor: [
      "27'', min Resolution: QHD 2560 x 1440, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "32'', min Resolution: 4K 3840 x 2160, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "Compact Wired Keyboard",
      "Multimedia Wired Keyboard"
    ],
    mouse: [
      "Wired Mechanical Mouse",
      "Wired Gaming Mouse"
    ],
    io: [
      "USB 3.2 or higher, 4 no. Audio line-out, Display Ports, Ethernet Ports",
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports, VGA Port"
    ]
  },
  {
    name: "Intel Xeon Platinum 8490H",
    cores: ["60"],
    threads: ["120"],
    cache: ["112.5MB"],
    ram: [
      "512GB, 8DIMM Base, Expandable up to 2TB",
      "1TB, 8DIMM Base"
    ],
    raid: [
      "Supports RAID 6",
      "Supports RAID 10"
    ],
    graphics: [
      "32 GB, Lag-Free",
      "48 GB, Lag-Free"
    ],
    graphicsOutput: [
      "VGA Multi display monitor",
      "HDMI Multi display monitor"
    ],
    os: [
      "Linux (CentOS) or latest",
      "Windows Server 2022 STD OEM Pack or latest"
    ],
    hardDisk: [
      "2X2TB HDD + 1X2TB Hot Spare",
      "4X2TB SSD"
    ],
    ethernet: [
      "Ten nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Twelve nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Latest generation Hot Redundant Swappable (1+1 configuration)",
      "Dual Latest generation Hot Redundant Swappable"
    ],
    dvd: [
      "In-built 16x DVD Writer (Dual Layer)",
      "None"
    ],
    monitor: [
      "22'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "27'', min Resolution: QHD 2560 x 1440, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "Multimedia Wired Keyboard",
      "Ergonomic Wired Keyboard"
    ],
    mouse: [
      "Wired Gaming Mouse",
      "Wired Ergonomic Mouse"
    ],
    io: [
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports, VGA Port",
      "USB 3.2 or higher, 4 no. Audio line-out, Display Ports, Ethernet Ports"
    ]
  },
  {
    name: "Intel Xeon Gold 5318Y",
    cores: ["16"],
    threads: ["32"],
    cache: ["45MB"],
    ram: [
      "1TB, 8DIMM Base, Expandable up to 4TB",
      "512GB, 8DIMM Base"
    ],
    raid: [
      "Supports RAID 5",
      "Supports RAID 6"
    ],
    graphics: [
      "16 GB, Lag-Free",
      "24 GB, Lag-Free"
    ],
    graphicsOutput: [
      "Mini DisplayPort Multi display monitor",
      "HDMI Multi display monitor"
    ],
    os: [
      "Red Hat Enterprise Linux (RHEL) or latest",
      "Windows Server 2022 STD OEM Pack or latest"
    ],
    hardDisk: [
      "4X2TB HDD + 1X2TB Hot Spare",
      "3X1TB SSD"
    ],
    ethernet: [
      "Sixteen nos. Giga-bit ethernet port, teaming capable & Wake on LAN support",
      "Eight nos. Giga-bit ethernet port, teaming capable & Wake on LAN support"
    ],
    power: [
      "Dual Hot Redundant Swappable",
      "Triple Hot Redundant Swappable"
    ],
    dvd: [
      "None",
      "In-built 16x DVD Writer"
    ],
    monitor: [
      "27'', min Resolution: FHD 1920 x 1080, LED-backlit LCD/TFT, having HDMI/DP port and USB Port",
      "32'', min Resolution: 4K 3840 x 2160, LED-backlit LCD/TFT, having HDMI/DP port and USB Port"
    ],
    keyboard: [
      "Ergonomic Wired Keyboard",
      "Compact Wired Keyboard"
    ],
    mouse: [
      "Wired Optical Mouse",
      "Wired Mechanical Mouse"
    ],
    io: [
      "USB 3.2 or higher, 1 no. Audio line-out, Display Ports, Ethernet Ports, Serial Ports",
      "USB 3.2 or higher, 2 no. Audio line-out, Display Ports, Ethernet Ports"
    ]
  }
];

// Aggregate all possible options for PC configuration fields
const allCores = [...new Set(pcs.flatMap(pc => pc.cores))].sort((a, b) => parseInt(a) - parseInt(b));
const allThreads = [...new Set(pcs.flatMap(pc => pc.threads))].sort((a, b) => parseInt(a) - parseInt(b));
const allCache = [...new Set(pcs.flatMap(pc => pc.cache))].sort((a, b) => parseFloat(a) - parseFloat(b));
const allRAM = [...new Set(pcs.flatMap(pc => pc.ram))];
const allRAID = [...new Set(pcs.flatMap(pc => pc.raid))];
const allGraphics = [...new Set(pcs.flatMap(pc => pc.graphics))].sort((a, b) => parseInt(a) - parseInt(b));
const allGraphicsOutput = [...new Set(pcs.flatMap(pc => pc.graphicsOutput))];
const allOS = [...new Set(pcs.flatMap(pc => pc.os))];
const allHardDisk = [...new Set(pcs.flatMap(pc => pc.hardDisk))];
const allEthernet = [...new Set(pcs.flatMap(pc => pc.ethernet))];
const allPower = [...new Set(pcs.flatMap(pc => pc.power))];
const allDVD = [...new Set(pcs.flatMap(pc => pc.dvd))];
const allMonitor = [...new Set(pcs.flatMap(pc => pc.monitor))];
const allKeyboard = [...new Set(pcs.flatMap(pc => pc.keyboard))];
const allMouse = [...new Set(pcs.flatMap(pc => pc.mouse))];
const allIO = [...new Set(pcs.flatMap(pc => pc.io))];

/* Monitor-related options */
const allMonitorSizes = [
  "10\" – 13\"",
  "14\" – 16\"",
  "17\"",
  "19\" – 20\"",
  "21.5\"",
  "23\" – 24\"",
  "25\" – 27\"",
  "28\" – 32\"",
  "34\" – 35\" (Ultrawide)",
  "38\" – 40\" (UltraWide / Curved)",
  "43\" – 49\" (Super UltraWide / Dual QHD)",
  "50\" – 55\"",
  "65\" – 85\" (Professional/Conference Use)"
];

const allPortTypes = [
  "HDMI 1.4",
  "HDMI 2.0",
  "HDMI 2.1",
  "DisplayPort 1.2",
  "DisplayPort 1.4",
  "DisplayPort 2.0",
  "Mini DisplayPort",
  "USB-C / Thunderbolt 3",
  "USB-C / Thunderbolt 4",
  "DVI-D (Digital)",
  "DVI-A (Analog)",
  "DVI-I (Integrated)",
  "VGA",
  "BNC",
  "3.5mm Audio Jack",
  "SPDIF / Optical Audio (TOSLINK)",
  "USB Type-A (USB Hub)",
  "USB Type-B (Upstream Port)",
  "USB Type-C (Data/Video/Power)",
  "AC Power Input (C13/C14 IEC Connector)",
  "DC Power Jack",
  "Component Video (RGB RCA connectors)",
  "Composite Video (Yellow RCA connector)",
  "S-Video",
  "SCART",
  "FireWire (IEEE 1394)",
  "Serial Port (RS-232)"
];

const allResolutions = [
  "QVGA 320 × 240",
  "VGA 640 × 480",
  "SVGA 800 × 600",
  "XGA 1024 × 768",
  "SXGA 1280 × 1024",
  "WXGA 1280 × 800",
  "WXGA 1366 × 768",
  "HD (720p) 1280 × 720",
  "HD+ 1600 × 900",
  "Full HD (1080p) 1920 × 1080",
  "WUXGA 1920 × 1200",
  "2K (DCI 2K) 2048 × 1080",
  "QHD / WQHD 2560 × 1440",
  "UWQHD (Ultra-Wide QHD) 3440 × 1440",
  "4K UHD 3840 × 2160",
  "DCI 4K 4096 × 2160",
  "UW4K (Ultra-Wide 4K) 5120 × 2160",
  "5K 5120 × 2880",
  "UW5K 5120 × 1440",
  "6K 6016 × 3384",
  "8K UHD 7680 × 4320",
  "10K",
  "12K",
  "16K",
  "UltraWide FHD 2560 × 1080 (21:9)",
  "UltraWide QHD 3440 × 1440 (21:9)",
  "UltraWide WQHD+ 3840 × 1600 (24:10)",
  "Super UltraWide 4K 5120 × 2160 (32:9)",
  "Dual QHD 5120 × 1440 (32:9)"
];

const allIPRatings = [
  "None / Office Use",
  "IP20",
  "IP54",
  "IP65",
  "IP66",
  "IP67",
  "IP68"
];

const allResponseTimes = [
  "0.5ms",
  "1ms",
  "2ms",
  "4ms",
  "5ms",
  "8ms",
  "10ms",
  "12ms",
  "16ms",
  "25ms"
];

// Switch Configuration Data
const switchTypes = [
  "Unmanaged Switch",
  "Managed Switch",
  "Smart Managed Switch",
  "Industrial Ethernet Switch",
  "Layer 2 Switch",
  "Layer 3 Switch",
  "PoE Switch (Power over Ethernet)",
  "PoE+ Switch",
  "Fiber Switch",
  "Modular Switch"
];
const numberOfPortsOptions = [
  "4 Port",
  "5 Port",
  "8 Port",
  "10 Port",
  "12 Port",
  "16 Port",
  "24 Port",
  "28 Port",
  "32 Port",
  "48 Port",
  "52 Port",
  "96 Port"
];
const portTypes = [
  "RJ45 (Ethernet)",
  "SFP (Small Form-factor Pluggable – Fiber)",
  "SFP+",
  "QSFP / QSFP+",
  "Combo Ports (RJ45/SFP)",
  "Fiber SC/LC"
];
const dataTransferSpeeds = [
  "10 Mbps",
  "100 Mbps (Fast Ethernet)",
  "1 Gbps (Gigabit Ethernet)",
  "2.5 Gbps",
  "5 Gbps",
  "10 Gbps",
  "25 Gbps",
  "40 Gbps",
  "100 Gbps"
];
const poeSupportOptions = [
  "No PoE",
  "PoE",
  "PoE+",
  "PoE++ (UPOE)",
  "PoE with Budget (e.g., 65W, 120W, 370W, 740W)"
];
const mountingTypes = [
  "Desktop",
  "Rack Mount",
  "DIN Rail Mount",
  "Wall Mount",
  "Panel Mount"
];
const switchingCapacities = [
  "1 Gbps",
  "4 Gbps",
  "10 Gbps",
  "20 Gbps",
  "56 Gbps",
  "100 Gbps",
  "320 Gbps",
  "1 Tbps+"
];
const powerSupplyTypes = [
  "Internal Power Supply",
  "External Power Adapter",
  "Redundant Power Supply",
  "Dual Power Inputs (DC/AC)"
];

// Switch Utility Options
const networkManagementOptions = [
  "VLAN",
  "SNMP",
  "Port Mirroring",
  "Web GUI",
  "CLI"
];
const securityFeaturesOptions = [
  "MAC Filtering",
  "DHCP Snooping",
  "802.1X Auth",
  "ACLs"
];
const diagnosticsMonitoringOptions = [
  "Cable Diagnostics",
  "Ping",
  "Syslog",
  "sFlow/NetFlow"
];

// Server Configuration Data
const serverTypes = [
  "Tower Server",
  "Rack Server",
  "Blade Server",
  "Hyper-Converged Server",
  "Industrial Server"
];
const processorOptions = [
  "Intel Xeon Silver / Gold / Platinum",
  "AMD EPYC",
  "Intel Core i7 / i9 (for light workloads)"
];
const ramCapacityOptions = [
  "16GB",
  "32GB",
  "64GB",
  "128GB",
  "256GB",
  "512GB",
  "1TB+"
];
const storageTypeOptions = [
  "HDD",
  "SSD",
  "NVMe SSD",
  "Hybrid (HDD + SSD)"
];
const storageCapacityOptions = [
  "512GB",
  "1TB",
  "2TB",
  "4TB",
  "8TB+"
];
const raidConfigurationOptions = [
  "RAID 0",
  "RAID 1",
  "RAID 5",
  "RAID 6",
  "RAID 10"
];
const graphicsSupportOptions = [
  "Integrated Graphics",
  "NVIDIA A-Series / RTX / Tesla",
  "AMD Radeon Pro",
  "None (Headless Server)"
];
const powerSupplyOptions = [
  "Single PSU",
  "Redundant PSU",
  "Quad Redundant PSU"
];
const operatingSystemOptions = [
  "Windows Server",
  "Linux (Ubuntu, CentOS, RHEL)",
  "VMware ESXi",
  "No OS (Preloaded BIOS only)"
];
const networkPortsOptions = [
  "2× Ethernet",
  "4× Ethernet",
  "10G SFP+ Ports",
  "Redundant NICs"
];

// Server Utility Options
const remoteManagementOptions = [
  "iDRAC (Dell)",
  "iLO (HPE)",
  "IPMI",
  "Redfish",
  "None"
];
const virtualizationSupportOptions = [
  "VMware",
  "Hyper-V",
  "KVM",
  "Proxmox",
  "Not Required"
];
const monitoringAlertsOptions = [
  "SNMP",
  "Syslog",
  "Email Alerts",
  "Dashboard Interface",
  "None"
];
const coolingConfigurationOptions = [
  "Air Cooling",
  "Liquid Cooling",
  "Intelligent Fan Control"
];
const securityToolsOptions = [
  "BIOS Password",
  "TPM (Trusted Platform Module)",
  "Secure Boot"
];

// KVM Switch options for dropdowns
const switchOptions = {
  numberOfPorts: [
    "2-Port KVM Switch",
    "4-Port KVM Switch",
    "8-Port / 16-Port / 32-Port",
    "Multi-User KVM Switch"
  ],
  connectivityType: [
    "CATx (Ethernet-based KVM)",
    "Fiber Optic KVM",
    "IP-Based KVM (KVM-over-IP)",
    "USB-Based KVM"
  ],
  videoSupport: [
    "HDMI KVM Switch",
    "DisplayPort KVM Switch",
    "VGA/DVI KVM Switch",
    "Multi-Monitor KVM"
  ],
  switchingMethods: [
    "Hotkey Switching",
    "Push Button Switching",
    "On-Screen Display (OSD) Menu",
    "Auto-Scanning",
    "Remote Control (IP/Web-based UI)"
  ],
  peripheralSupport: [
    "USB 2.0 / 3.0 Ports",
    "Audio Passthrough (Mic/Speakers)",
    "RS232 / Serial Control"
  ],
  powerOptions: [
    "Powered via USB",
    "External Power Adapter",
    "PoE (Power over Ethernet) Support"
  ],
  securityFeatures: [
    "Encryption (AES-128, AES-256)",
    "User Authentication & Access Control",
    "Smart Card / Biometric Authentication"
  ],
  useCases: [
    "Data Centers",
    "Office & Workstations",
    "Broadcast & Media Production",
    "Industrial & Automation",
    "Gaming & Streaming"
  ]
};