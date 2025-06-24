document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kvmForm");
  const resultDiv = document.getElementById("result");
  const resultTableBody = document.getElementById("resultTableBody");
  const projectName = document.getElementById("projectName");
  const projectId = document.getElementById("projectId");
  const description = document.getElementById("description");
  const numberOfPorts = document.getElementById("numberOfPorts");
  const connectivityType = document.getElementById("connectivityType");
  const videoSupport = document.getElementById("videoSupport");
  const switchingMethods = document.getElementById("switchingMethods");
  const peripheralSupport = document.getElementById("peripheralSupport");
  const powerOptions = document.getElementById("powerOptions");
  const securityFeatures = document.getElementById("securityFeatures");
  const useCases = document.getElementById("useCases");
  const remoteAccess = document.getElementById("remoteAccess");
  const rackIntegration = document.getElementById("rackIntegration");
  const switchingMethodUtility = document.getElementById("switchingMethodUtility");
  const cascadeSupport = document.getElementById("cascadeSupport");
  const powerRedundancy = document.getElementById("powerRedundancy");

  // Debug: Log DOM elements
  console.log("DOM elements:", {
    form: !!form,
    numberOfPorts: !!numberOfPorts,
    connectivityType: !!connectivityType,
    videoSupport: !!videoSupport,
    switchingMethods: !!switchingMethods,
    peripheralSupport: !!peripheralSupport,
    powerOptions: !!powerOptions,
    securityFeatures: !!securityFeatures,
    useCases: !!useCases,
    remoteAccess: !!remoteAccess,
    rackIntegration: !!rackIntegration,
    switchingMethodUtility: !!switchingMethodUtility,
    cascadeSupport: !!cascadeSupport,
    powerRedundancy: !!powerRedundancy
  });

  // Define new options for utility fields
  const remoteAccessOptions = [
    "Over-IP (LAN/Internet access to KVM)",
    "Local Only",
    "Not Required"
  ];
  const rackIntegrationOptions = [
    "Rack Console with LCD",
    "Standalone",
    "Not Applicable"
  ];
  const cascadeSupportOptions = [
    "Supported",
    "Not Supported"
  ];
  const powerRedundancyOptions = [
    "Dual Power Input",
    "Single Power",
    "PoE (Rare)"
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
    populateDropdown(numberOfPorts, switchOptions.numberOfPorts, true);
    populateDropdown(connectivityType, switchOptions.connectivityType, true);
    populateDropdown(videoSupport, switchOptions.videoSupport, true);
    populateDropdown(switchingMethods, switchOptions.switchingMethods, true);
    populateDropdown(peripheralSupport, switchOptions.peripheralSupport, true);
    populateDropdown(powerOptions, switchOptions.powerOptions, true);
    populateDropdown(securityFeatures, switchOptions.securityFeatures, true);
    populateDropdown(useCases, switchOptions.useCases, true);
    populateDropdown(remoteAccess, remoteAccessOptions, true);
    populateDropdown(rackIntegration, rackIntegrationOptions, true);
    populateDropdown(switchingMethodUtility, switchOptions.switchingMethods, true);
    populateDropdown(cascadeSupport, cascadeSupportOptions, true);
    populateDropdown(powerRedundancy, powerRedundancyOptions, true);
  } catch (error) {
    console.error("Error populating dropdowns:", error);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!projectName.value || !projectId.value || !description.value) {
      alert("Please fill in Project Name, Project ID, and Description.");
      return;
    }

    const selectedData = {
      projectName: projectName.value,
      projectId: projectId.value,
      description: description.value,
      numberOfPorts: numberOfPorts.value,
      connectivityType: connectivityType.value,
      videoSupport: videoSupport.value,
      switchingMethods: switchingMethods.value,
      peripheralSupport: peripheralSupport.value,
      powerOptions: powerOptions.value,
      securityFeatures: securityFeatures.value,
      useCases: useCases.value,
      remoteAccess: remoteAccess.value,
      rackIntegration: rackIntegration.value,
      switchingMethodUtility: switchingMethodUtility.value,
      cascadeSupport: cascadeSupport.value,
      powerRedundancy: powerRedundancy.value
    };

    const fields = [
      { label: "Project Name", value: selectedData.projectName },
      { label: "Project ID", value: selectedData.projectId },
      { label: "Description", value: selectedData.description },
      { label: "Number of Ports", value: selectedData.numberOfPorts },
      { label: "Connectivity Type", value: selectedData.connectivityType },
      { label: "Video Support", value: selectedData.videoSupport },
      { label: "Switching Methods", value: selectedData.switchingMethods },
      { label: "Peripheral Support", value: selectedData.peripheralSupport },
      { label: "Power Options", value: selectedData.powerOptions },
      { label: "Security Features", value: selectedData.securityFeatures },
      { label: "Use Cases", value: selectedData.useCases },
      { label: "Remote Access", value: selectedData.remoteAccess },
      { label: "Rack Integration", value: selectedData.rackIntegration },
      { label: "Switching Method (Utility)", value: selectedData.switchingMethodUtility },
      { label: "Cascade Support (Expandability)", value: selectedData.cascadeSupport },
      { label: "Power Redundancy", value: selectedData.powerRedundancy }
    ];

    resultTableBody.innerHTML = fields.map(field => `
      <tr>
        <td>${field.label}</td>
        <td>${field.value}</td>
      </tr>
    `).join('');

    resultDiv.style.display = "block";
  });
});