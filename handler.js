"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Thanks for using our face detector!",
        input: event,
      },
      null,
      2
    ),
  };
};
