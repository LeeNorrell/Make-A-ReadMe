// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(licenseType) {
  let yourLicense = ''
  if(licenseType == 'MIT' ) {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType == 'ODbl' ) {
    yourLicense = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
  } else if (licenseType == 'IPL' ) {
    yourLicense = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

module.exports = getLicenseBadge;
