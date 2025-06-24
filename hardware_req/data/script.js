// document.addEventListener("DOMContentLoaded", () => {
//   // DOM elements
//   const form = document.getElementById("hardwareForm");
//   const resultDiv = document.getElementById("result");
//   const resultList = document.getElementById("resultList");
//   const processorModel = document.getElementById("processorModel");
//   const cores = document.getElementById("cores");
//   const threads = document.getElementById("threads");
//   const cache = document.getElementById("cache");
//   const ram = document.getElementById("ram");
//   const raid = document.getElementById("raid");
//   const graphicsCard = document.getElementById("graphicsCard");
//   const graphicsOutput = document.getElementById("graphicsOutput");
//   const os = document.getElementById("os");
//   const hardDisk = document.getElementById("hardDisk");
//   const ethernet = document.getElementById("ethernet");
//   const power = document.getElementById("power");
//   const dvd = document.getElementById("dvd");
//   const monitor = document.getElementById("monitor");
//   const keyboard = document.getElementById("keyboard");
//   const mouse = document.getElementById("mouse");
//   const io = document.getElementById("io");
//   const numberOfPorts = document.getElementById("numberOfPorts");
//   const connectivityType = document.getElementById("connectivityType");
//   const videoSupport = document.getElementById("videoSupport");
//   const switchingMethods = document.getElementById("switchingMethods");
//   const peripheralSupport = document.getElementById("peripheralSupport");
//   const powerOptions = document.getElementById("powerOptions");
//   const securityFeatures = document.getElementById("securityFeatures");
//   const useCases = document.getElementById("useCases");

//   // Helper function to populate a dropdown
//   function populateDropdown(selectElement, options, defaultOption = false) {
//     selectElement.innerHTML = "";
//     if (defaultOption) {
//       const option = document.createElement("option");
//       option.value = "";
//       option.textContent = "-- Select an Option --";
//       selectElement.appendChild(option);
//     }
//     options.forEach((opt) => {
//       const option = document.createElement("option");
//       option.value = opt;
//       option.textContent = opt;
//       selectElement.appendChild(option);
//     });
//   }

//   // Extract unique options for PC configuration dropdowns
//   const uniqueOptions = {
//     processorModel: [...new Set(pcs.map(pc => pc.name))],
//     cores: [...new Set(pcs.map(pc => pc.cores))],
//     threads: [...new Set(pcs.map(pc => pc.threads))],
//     cache: [...new Set(pcs.map(pc => pc.cache))],
//     ram: [...new Set(pcs.map(pc => pc.ram))],
//     raid: [...new Set(pcs.map(pc => pc.raid))],
//     graphicsCard: [...new Set(pcs.map(pc => pc.graphics))],
//     graphicsOutput: [...new Set(pcs.map(pc => pc.graphicsOutput))],
//     os: [...new Set(pcs.map(pc => pc.os))],
//     hardDisk: [...new Set(pcs.map(pc => pc.hardDisk))],
//     ethernet: [...new Set(pcs.map(pc => pc.ethernet))],
//     power: [...new Set(pcs.map(pc => pc.power))],
//     dvd: [...new Set(pcs.map(pc => pc.dvd))],
//     monitor: [...new Set(pcs.map(pc => pc.monitor))],
//     keyboard: [...new Set(pcs.map(pc => pc.keyboard))],
//     mouse: [...new Set(pcs.map(pc => pc.mouse))],
//     io: [...new Set(pcs.map(pc => pc.io))]
//   };

//   // Populate PC configuration dropdowns
//   populateDropdown(processorModel, uniqueOptions.processorModel, true);
//   populateDropdown(cores, uniqueOptions.cores);
//   populateDropdown(threads, uniqueOptions.threads);
//   populateDropdown(cache, uniqueOptions.cache);
//   populateDropdown(ram, uniqueOptions.ram);
//   populateDropdown(raid, uniqueOptions.raid);
//   populateDropdown(graphicsCard, uniqueOptions.graphicsCard);
//   populateDropdown(graphicsOutput, uniqueOptions.graphicsOutput);
//   populateDropdown(os, uniqueOptions.os);
//   populateDropdown(hardDisk, uniqueOptions.hardDisk);
//   populateDropdown(ethernet, uniqueOptions.ethernet);
//   populateDropdown(power, uniqueOptions.power);
//   populateDropdown(dvd, uniqueOptions.dvd);
//   populateDropdown(monitor, uniqueOptions.monitor);
//   populateDropdown(keyboard, uniqueOptions.keyboard);
//   populateDropdown(mouse, uniqueOptions.mouse);
//   populateDropdown(io, uniqueOptions.io);

//   // Populate switch configuration dropdowns
//   populateDropdown(numberOfPorts, switchOptions.numberOfPorts);
//   populateDropdown(connectivityType, switchOptions.connectivityType);
//   populateDropdown(videoSupport, switchOptions.videoSupport);
//   populateDropdown(switchingMethods, switchOptions.switchingMethods);
//   populateDropdown(peripheralSupport, switchOptions.peripheralSupport);
//   populateDropdown(powerOptions, switchOptions.powerOptions);
//   populateDropdown(securityFeatures, switchOptions.securityFeatures);
//   populateDropdown(useCases, switchOptions.useCases);

//   // Auto-fill PC configuration dropdowns based on processor selection
//   processorModel.addEventListener("change", () => {
//     const selectedPc = pcs.find(pc => pc.name === processorModel.value);
//     if (!selectedPc) {
//       // Reset all PC configuration dropdowns if no processor is selected
//       cores.value = "";
//       threads.value = "";
//       cache.value = "";
//       ram.value = "";
//       raid.value = "";
//       graphicsCard.value = "";
//       graphicsOutput.value = "";
//       os.value = "";
//       hardDisk.value = "";
//       ethernet.value = "";
//       power.value = "";
//       dvd.value = "";
//       monitor.value = "";
//       keyboard.value = "";
//       mouse.value = "";
//       io.value = "";
//       return;
//     }

//     // Auto-fill with exact values for the selected processor
//     cores.value = selectedPc.cores;
//     threads.value = selectedPc.threads;
//     cache.value = selectedPc.cache;
//     ram.value = selectedPc.ram;
//     raid.value = selectedPc.raid;
//     graphicsCard.value = selectedPc.graphics;
//     graphicsOutput.value = selectedPc.graphicsOutput;
//     os.value = selectedPc.os;
//     hardDisk.value = selectedPc.hardDisk;
//     ethernet.value = selectedPc.ethernet;
//     power.value = selectedPc.power;
//     dvd.value = selectedPc.dvd;
//     monitor.value = selectedPc.monitor;
//     keyboard.value = selectedPc.keyboard;
//     mouse.value = selectedPc.mouse;
//     io.value = selectedPc.io;
//   });

//   // Handle form submission
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Validate processor selection
//     if (!processorModel.value) {
//       alert("Please select a processor.");
//       return;
//     }

//     // Collect all selected values
//     const selectedData = {
//       projectName: document.getElementById("projectName").value,
//       projectId: document.getElementById("projectId").value,
//       dsc: document.getElementById("dsc").value,
//       processorModel: processorModel.value,
//       cores: cores.value,
//       threads: threads.value,
//       cache: cache.value,
//       ram: ram.value,
//       raid: raid.value,
//       graphicsCard: graphicsCard.value,
//       graphicsOutput: graphicsOutput.value,
//       os: os.value,
//       hardDisk: hardDisk.value,
//       ethernet: ethernet.value,
//       power: power.value,
//       dvd: dvd.value,
//       monitor: monitor.value,
//       keyboard: keyboard.value,
//       mouse: mouse.value,
//       io: io.value,
//       numberOfPorts: numberOfPorts.value,
//       connectivityType: connectivityType.value,
//       videoSupport: videoSupport.value,
//       switchingMethods: switchingMethods.value,
//       peripheralSupport: peripheralSupport.value,
//       powerOptions: powerOptions.value,
//       securityFeatures: securityFeatures.value,
//       useCases: useCases.value
//     };

//     // Display all selected configuration details
//     resultList.innerHTML = `
//       <li><strong>Project Name:</strong> ${selectedData.projectName}</li>
//       <li><strong>Project ID:</strong> ${selectedData.projectId}</li>
//       <li><strong>DSC / PLC:</strong> ${selectedData.dsc}</li>
//       <li><strong>Processor Model:</strong> ${selectedData.processorModel}</li>
//       <li><strong>Cores:</strong> ${selectedData.cores}</li>
//       <li><strong>Threads:</strong> ${selectedData.threads}</li>
//       <li><strong>Cache:</strong> ${selectedData.cache}</li>
//       <li><strong>RAM:</strong> ${selectedData.ram}</li>
//       <li><strong>RAID:</strong> ${selectedData.raid}</li>
//       <li><strong>Graphics Card:</strong> ${selectedData.graphicsCard}</li>
//       <li><strong>Graphics Output:</strong> ${selectedData.graphicsOutput}</li>
//       <li><strong>Operating System:</strong> ${selectedData.os}</li>
//       <li><strong>Hard Disk:</strong> ${selectedData.hardDisk}</li>
//       <li><strong>Ethernet Ports:</strong> ${selectedData.ethernet}</li>
//       <li><strong>Power Supply:</strong> ${selectedData.power}</li>
//       <li><strong>DVD Writer:</strong> ${selectedData.dvd}</li>
//       <li><strong>Monitor:</strong> ${selectedData.monitor}</li>
//       <li><strong>Keyboard:</strong> ${selectedData.keyboard}</li>
//       <li><strong>Mouse:</strong> ${selectedData.mouse}</li>
//       <li><strong>I/O Ports:</strong> ${selectedData.io}</li>
//       <li><strong>Number of Ports:</strong> ${selectedData.numberOfPorts}</li>
//       <li><strong>Connectivity Type:</strong> ${selectedData.connectivityType}</li>
//       <li><strong>Video Support:</strong> ${selectedData.videoSupport}</li>
//       <li><strong>Switching Methods:</strong> ${selectedData.switchingMethods}</li>
//       <li><strong>Peripheral Support:</strong> ${selectedData.peripheralSupport}</li>
//       <li><strong>Power Options:</strong> ${selectedData.powerOptions}</li>
//       <li><strong>Security Features:</strong> ${selectedData.securityFeatures}</li>
//       <li><strong>Use Cases:</strong> ${selectedData.useCases}</li>
//     `;
//     resultDiv.style.display = "block";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements for PC Configuration form
  const form = document.getElementById("hardwareForm");
  const resultDiv = document.getElementById("result");
  const resultTableBody = document.getElementById("resultTableBody");
  const projectName = document.getElementById("projectName");
  const projectId = document.getElementById("projectId");
  const description = document.getElementById("description");
  const processorModel = document.getElementById("processorModel");
  const cores = document.getElementById("cores");
  const threads = document.getElementById("threads");
  const cache = document.getElementById("cache");
  const ram = document.getElementById("ram");
  const raid = document.getElementById("raid");
  const graphicsCard = document.getElementById("graphicsCard");
  const graphicsOutput = document.getElementById("graphicsOutput");
  const os = document.getElementById("os");
  const hardDisk = document.getElementById("hardDisk");
  const ethernet = document.getElementById("ethernet");
  const power = document.getElementById("power");
  const dvd = document.getElementById("dvd");
  const monitorSize = document.getElementById("monitorSize");
  const numberOfMonitorPorts = document.getElementById("numberOfMonitorPorts");
  const typeOfPort = document.getElementById("typeOfPort");
  const resolution = document.getElementById("resolution");
  const ipRating = document.getElementById("ipRating");
  const responseTime = document.getElementById("responseTime");
  const keyboard = document.getElementById("keyboard");
  const mouse = document.getElementById("mouse");
  const specialCables = document.getElementById("specialCables");

  // Debug: Log DOM elements
  console.log("DOM elements:", {
    form: !!form,
    processorModel: !!processorModel,
    cores: !!cores,
    threads: !!threads,
    ram: !!ram,
    raid: !!raid,
    graphicsCard: !!graphicsCard,
    graphicsOutput: !!graphicsOutput,
    os: !!os,
    hardDisk: !!hardDisk,
    ethernet: !!ethernet,
    power: !!power,
    dvd: !!dvd,
    monitorSize: !!monitorSize,
    numberOfMonitorPorts: !!numberOfMonitorPorts,
    typeOfPort: !!typeOfPort,
    resolution: !!resolution,
    ipRating: !!ipRating,
    responseTime: !!responseTime,
    keyboard: !!keyboard,
    mouse: !!mouse,
    specialCables: !!specialCables
  });

  // Helper function to populate a dropdown
  function populateDropdown(selectElement, options, defaultOption = false) {
    if (!selectElement) {
      console.error("Select element is null:", selectElement);
      return;
    }
    if (!options) {
      console.error("Options are undefined for select element:", selectElement.id);
      return;
    }
    selectElement.innerHTML = "";
    if (defaultOption) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "-- Select an Option --";
      selectElement.appendChild(option);
    }
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      selectElement.appendChild(option);
    });
  }

  // Populate all dropdowns on page load
  try {
    populateDropdown(processorModel, pcs.map(pc => pc.name), true);
    populateDropdown(cores, allCores, true);
    populateDropdown(threads, allThreads, true);
    populateDropdown(cache, allCache, true);
    populateDropdown(ram, allRAM, true);
    populateDropdown(raid, allRAID, true);
    populateDropdown(graphicsCard, allGraphics, true);
    populateDropdown(graphicsOutput, allGraphicsOutput, true);
    populateDropdown(os, allOS, true);
    populateDropdown(hardDisk, allHardDisk, true);
    populateDropdown(ethernet, allEthernet, true);
    populateDropdown(power, allPower, true);
    populateDropdown(dvd, allDVD, true);
    populateDropdown(monitorSize, allMonitorSizes, true);
    populateDropdown(typeOfPort, allPortTypes, true);
    populateDropdown(resolution, allResolutions, true);
    populateDropdown(ipRating, allIPRatings, true);
    populateDropdown(responseTime, allResponseTimes, true);
    populateDropdown(keyboard, allKeyboard, true);
    populateDropdown(mouse, allMouse, true);
    populateDropdown(specialCables, allIO, true);
  } catch (error) {
    console.error("Error populating dropdowns:", error);
  }

  // Enable/disable monitor-related dropdowns based on Number of Ports
  numberOfMonitorPorts.addEventListener("input", () => {
    const portCount = parseInt(numberOfMonitorPorts.value) || 0;
    const isValid = portCount > 0;
    typeOfPort.disabled = !isValid;
    resolution.disabled = !isValid;
    ipRating.disabled = !isValid;
    responseTime.disabled = !isValid;
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate required fields
    if (!projectName.value || !projectId.value || !description.value || !processorModel.value || !numberOfMonitorPorts.value) {
      alert("Please fill in Project Name, Project ID, Description, Processor Model, and Number of Monitor Ports.");
      return;
    }

    // Collect all selected values
    const selectedData = {
      projectName: projectName.value,
      projectId: projectId.value,
      description: description.value,
      processorModel: processorModel.value,
      cores: cores.value,
      threads: threads.value,
      cache: cache.value,
      ram: ram.value,
      raid: raid.value,
      graphicsCard: graphicsCard.value,
      graphicsOutput: graphicsOutput.value,
      os: os.value,
      hardDisk: hardDisk.value,
      ethernet: ethernet.value,
      power: power.value,
      dvd: dvd.value,
      monitorSize: monitorSize.value,
      numberOfMonitorPorts: numberOfMonitorPorts.value,
      typeOfPort: typeOfPort.value,
      resolution: resolution.value,
      ipRating: ipRating.value,
      responseTime: responseTime.value,
      keyboard: keyboard.value,
      mouse: mouse.value,
      specialCables: specialCables.value
    };

    // Define the fields to display in the table with their labels
    const fields = [
      { label: "Project Name", value: selectedData.projectName },
      { label: "Project ID", value: selectedData.projectId },
      { label: "Description", value: selectedData.description },
      { label: "Processor Model", value: selectedData.processorModel },
      { label: "Cores", value: selectedData.cores },
      { label: "Threads", value: selectedData.threads },
      { label: "Cache", value: selectedData.cache },
      { label: "RAM", value: selectedData.ram },
      { label: "RAID", value: selectedData.raid },
      { label: "Graphics Card", value: selectedData.graphicsCard },
      { label: "Graphics Output", value: selectedData.graphicsOutput },
      { label: "Operating System", value: selectedData.os },
      { label: "Hard Disk", value: selectedData.hardDisk },
      { label: "Ethernet Ports", value: selectedData.ethernet },
      { label: "Power Supply", value: selectedData.power },
      { label: "DVD Writer", value: selectedData.dvd },
      { label: "Monitor Size", value: selectedData.monitorSize },
      { label: "Number of Monitor Ports", value: selectedData.numberOfMonitorPorts },
      { label: "Type of Port", value: selectedData.typeOfPort },
      { label: "Resolution", value: selectedData.resolution },
      { label: "IP Rating", value: selectedData.ipRating },
      { label: "Response Time", value: selectedData.responseTime },
      { label: "Keyboard", value: selectedData.keyboard },
      { label: "Mouse", value: selectedData.mouse },
      { label: "Special Cables", value: selectedData.specialCables }
    ];

    // Generate table rows
    resultTableBody.innerHTML = fields.map(field => `
      <tr>
        <td>${field.label}</td>
        <td>${field.value}</td>
      </tr>
    `).join('');

    // Show the result div
    resultDiv.style.display = "block";
  });
});