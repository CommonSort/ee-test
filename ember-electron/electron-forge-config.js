const childProcess = require('child_process');

module.exports = {
  "make_targets": {
    "win32": [
      "squirrel"
    ],
    "darwin": [
      "zip"
    ],
    "linux": [
      "deb"
    ]
  },
  "electronPackagerConfig": {
    afterCopy: [
      function(buildPath, electronVersion, platform, arch, callback) {
        childProcess.execSync(`chmod a+x ${buildPath}`);
        callback();
      }
    ]
  },
  "electronWinstallerConfig": {
    "name": ""
  },
  "electronInstallerDebian": {},
  "electronInstallerRedhat": {},
  "github_repository": {
    "owner": "",
    "name": ""
  },
  "windowsStoreConfig": {
    "packageName": ""
  }
};
