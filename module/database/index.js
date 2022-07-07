let loki = require("lokijs");
const path = require("path");
const os = require("os");
const fs = require("fs");

class Database {
  constructor(filepath) {
    this.settingsPath = path.join(os.homedir(), filepath);
    try {
      fs.readdirSync(this.settingsPath);
      this.db = new loki(
        path.join(this.settingsPath, "touchapp.settings.json"),
        { autoload: true, autosave: true }
      );
    } catch (error) {
      fs.mkdirSync(this.settingsPath, { recursive: true });
      this.db = new loki(
        path.join(this.settingsPath, "touchapp.settings.json"),
        { autoload: true, autosave: true }
      );
    }
  }

  getCollection(collectionName) {
    return this.db.getCollection(collectionName);
  }

  createCollection(collectionName) {
    let createdCollection = this.db.addCollection(collectionName);
    return createdCollection;
  }

  listCollection() {
    return this.db.listCollections();
  }
}

module.exports = Database;
