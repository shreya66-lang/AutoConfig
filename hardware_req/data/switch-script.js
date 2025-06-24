document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const form = document.getElementById("switchForm");
  const resultDiv = document.getElementById("result");
  const resultTableBody = document.getElementById("resultTableBody");
  const projectName = document.getElementById("projectName");
  const projectId = document.getElementById("projectId");
  const description = document.getElementById("description");
  const switchType = document.getElementById("switchType");
  const numberOfPorts = document.getElementById("numberOfPorts");
  const speed = document.getElementById("speed");
  const portType = document.getElementById("portType");
  const poeSupport = document.getElementById("poeSupport");
  const mountingType = document.getElementById("mountingType");
  const operatingTemp = document.getElementById("operatingTemp");
  const switchingCapacity = document.getElementById("switchingCapacity");
  const networkManagement = document.getElementById("networkManagement");
  const securityFeatures = document.getElementById("securityFeatures");
  const diagnosticsMonitoring = document.getElementById("diagnosticsMonitoring");

  // Debug: Log DOM elements
  console.log("DOM elements:", {
    form: !!form,
    switchType: !!switchType,
    numberOfPorts: !!numberOfPorts,
    speed: !!speed,
    portType: !!portType,
    poeSupport: !!poeSupport,
    mountingType: !!mountingType,
    operatingTemp: !!operatingTemp,
    switchingCapacity: !!switchingCapacity,
    networkManagement: !!networkManagement,
    securityFeatures: !!securityFeatures,
    diagnosticsMonitoring: !!diagnosticsMonitoring
  });

  // Add Operating Temperature Range options (not in hardware.js, adding here)
  const operatingTempOptions = [
    "-40°C to 75°C",
    "0°C to 40°C",
    "-20°C to 60°C",
    "0°C to 50°C"
  ];

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
    populateDropdown(switchType, switchTypes, true);
    populateDropdown(numberOfPorts, numberOfPortsOptions, true);
    populateDropdown(speed, dataTransferSpeeds, true);
    populateDropdown(portType, portTypes, true);
    populateDropdown(poeSupport, poeSupportOptions, true);
    populateDropdown(mountingType, mountingTypes, true);
    populateDropdown(operatingTemp, operatingTempOptions, true);
    populateDropdown(switchingCapacity, switchingCapacities, true);
    populateDropdown(networkManagement, networkManagementOptions, true);
    populateDropdown(securityFeatures, securityFeaturesOptions, true);
    populateDropdown(diagnosticsMonitoring, diagnosticsMonitoringOptions, true);
  } catch (error) {
    console.error("Error populating dropdowns:", error);
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate required fields
    if (!projectName.value || !projectId.value || !description.value || !switchType.value) {
      alert("Please fill in Project Name, Project ID, Description, and Switch Type.");
      return;
    }

    // Collect all selected values
    const selectedData = {
      projectName: projectName.value,
      projectId: projectId.value,
      description: description.value,
      switchType: switchType.value,
      numberOfPorts: numberOfPorts.value,
      speed: speed.value,
      portType: portType.value,
      poeSupport: poeSupport.value,
      mountingType: mountingType.value,
      operatingTemp: operatingTemp.value,
      switchingCapacity: switchingCapacity.value,
      networkManagement: networkManagement.value,
      securityFeatures: securityFeatures.value,
      diagnosticsMonitoring: diagnosticsMonitoring.value
    };

    // Define the fields to display in the table with their labels
    const fields = [
      { label: "Project Name", value: selectedData.projectName },
      { label: "Project ID", value: selectedData.projectId },
      { label: "Description", value: selectedData.description },
      { label: "Switch Type", value: selectedData.switchType },
      { label: "Number of Ports", value: selectedData.numberOfPorts },
      { label: "Port Speed", value: selectedData.speed },
      { label: "Port Type", value: selectedData.portType },
      { label: "PoE Support", value: selectedData.poeSupport },
      { label: "Mounting Type", value: selectedData.mountingType },
      { label: "Operating Temperature Range", value: selectedData.operatingTemp },
      { label: "Switching Capacity", value: selectedData.switchingCapacity },
      { label: "Network Management", value: selectedData.networkManagement },
      { label: "Security Features", value: selectedData.securityFeatures },
      { label: "Diagnostics & Monitoring", value: selectedData.diagnosticsMonitoring }
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