import database from "../../../../infra/database.js";

function status(request, response) {
  console.log(database);
  response.status(200).json({ status: "testando server local" });
}

export default status;
