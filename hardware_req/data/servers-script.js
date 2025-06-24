document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const form = document.getElementById("serverForm");
  const resultDiv = document.getElementById("serverResult");
  const resultTableBody = document.getElementById("serverResultTableBody");
  const projectName = document.getElementById("serverProjectName");
  const projectId = document.getElementById("serverProjectId");
  const description = document.getElementById("serverDescription");
  const serverType = document.getElementById("serverType");
  const processor = document.getElementById("processor");
  const ramCapacity = document.getElementById("ramCapacity");
  const storageType = document.getElementById("storageType");
  const storageCapacity = document.getElementById("storageCapacity");
  const raidConfiguration = document.getElementById("raidConfiguration");
  const graphicsSupport = document.getElementById("graphicsSupport");
  const powerSupply = document.getElementById("powerSupply");
  const operatingSystem = document.getElementById("operatingSystem");
  const networkPorts = document.getElementById("networkPorts");
  const remoteManagement = document.getElementById("remoteManagement");
  const virtualizationSupport = document.getElementById("virtualizationSupport");
  const monitoringAlerts = document.getElementById("monitoringAlerts");
  const coolingConfiguration = document.getElementById("coolingConfiguration");
  const securityTools = document.getElementById("securityTools");

  // Debug: Log DOM elements
  console.log("DOM elements:", {
    form: !!form,
    serverType: !!serverType,
    processor: !!processor,
    ramCapacity: !!ramCapacity,
    storageType: !!storageType,
    storageCapacity: !!storageCapacity,
    raidConfiguration: !!raidConfiguration,
    graphicsSupport: !!graphicsSupport,
    powerSupply: !!powerSupply,
    operatingSystem: !!operatingSystem,
    networkPorts: !!networkPorts,
    remoteManagement: !!remoteManagement,
    virtualizationSupport: !!virtualizationSupport,
    monitoringAlerts: !!monitoringAlerts,
    coolingConfiguration: !!coolingConfiguration,
    securityTools: !!securityTools
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

  // Populate dropdowns on page load
  try {
    populateDropdown(serverType, serverTypes, true);
    populateDropdown(processor, processorOptions, true);
    populateDropdown(ramCapacity, ramCapacityOptions, true);
    populateDropdown(storageType, storageTypeOptions, true);
    populateDropdown(storageCapacity, storageCapacityOptions, true);
    populateDropdown(raidConfiguration, raidConfigurationOptions, true);
    populateDropdown(graphicsSupport, graphicsSupportOptions, true);
    populateDropdown(powerSupply, powerSupplyOptions, true);
    populateDropdown(operatingSystem, operatingSystemOptions, true);
    populateDropdown(networkPorts, networkPortsOptions, true);
    populateDropdown(remoteManagement, remoteManagementOptions, true);
    populateDropdown(virtualizationSupport, virtualizationSupportOptions, true);
    populateDropdown(monitoringAlerts, monitoringAlertsOptions, true);
    populateDropdown(coolingConfiguration, coolingConfigurationOptions, true);
    populateDropdown(securityTools, securityToolsOptions, true);
  } catch (error) {
    console.error("Error populating dropdowns:", error);
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate required fields
    if (!projectName.value || !projectId.value || !description.value || !serverType.value) {
      alert("Please fill in Project Name, Project ID, Description, and Server Type.");
      return;
    }

    // Collect all selected values
    const selectedData = {
      projectName: projectName.value,
      projectId: projectId.value,
      description: description.value,
      serverType: serverType.value,
      processor: processor.value,
      ramCapacity: ramCapacity.value,
      storageType: storageType.value,
      storageCapacity: storageCapacity.value,
      raidConfiguration: raidConfiguration.value,
      graphicsSupport: graphicsSupport.value,
      powerSupply: powerSupply.value,
      operatingSystem: operatingSystem.value,
      networkPorts: networkPorts.value,
      remoteManagement: remoteManagement.value,
      virtualizationSupport: virtualizationSupport.value,
      monitoringAlerts: monitoringAlerts.value,
      coolingConfiguration: coolingConfiguration.value,
      securityTools: securityTools.value
    };

    // Define the fields to display in the table with their labels
    const fields = [
      { label: "Project Name", value: selectedData.projectName },
      { label: "Project ID", value: selectedData.projectId },
      { label: "Description", value: selectedData.description },
      { label: "Server Type", value: selectedData.serverType },
      { label: "Processor (CPU)", value: selectedData.processor },
      { label: "RAM Capacity", value: selectedData.ramCapacity },
      { label: "Storage Type", value: selectedData.storageType },
      { label: "Storage Capacity", value: selectedData.storageCapacity },
      { label: "RAID Configuration", value: selectedData.raidConfiguration },
      { label: "Graphics Support", value: selectedData.graphicsSupport },
      { label: "Power Supply", value: selectedData.powerSupply },
      { label: "Operating System", value: selectedData.operatingSystem },
      { label: "Network Ports", value: selectedData.networkPorts },
      { label: "Remote Management Utility", value: selectedData.remoteManagement },
      { label: "Virtualization Support", value: selectedData.virtualizationSupport },
      { label: "Monitoring & Alerts", value: selectedData.monitoringAlerts },
      { label: "Cooling Configuration", value: selectedData.coolingConfiguration },
      { label: "Security Tools", value: selectedData.securityTools }
    ];

    // Generate table rows
    resultTableBody.innerHTML = fields.map(field => `
      <tr>
        <td>${field.label}</td>
        <td>${field.value}</td>
      </tr>
    `).join("");

    // Show the result div
    resultDiv.style.display = "block";
  });
});