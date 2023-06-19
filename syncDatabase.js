const database = require("./src/database/db");

async function syncDatabase() {
  try {
    await database.sync();
    console.log("Database successfully sync'ed");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

module.exports = syncDatabase;
