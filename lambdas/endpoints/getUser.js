const Responses = require("../common/API_Responses");

exports.handler = async (event) => {
  console.log("event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "Missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    //return the data
    return Responses._200(data[ID]);
  }

  //failed ID not in the data
  return Responses._400({ message: "No ID in data" });
};

const data = {
  1234: { name: "Anna", age: 25, job: "Journalist" },
  1456: { name: "Chris", age: 41, job: "Teacher" },
  7890: { name: "Yom", age: 22, job: "Student" },
};
