// Prerequisite environment variable:
//   myGitRepo: "https://raw.githubusercontent.com/javajason/f5-xc/main"

myGitRepo = pm.environment.get("myGitRepo");
console.log("Request to " + myGitRepo + "/create-load-balancer.json");

pm.sendRequest(myGitRepo + "/create-load-balancer.json", (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
    // myResp = response.text();

    pm.variables.set("POST-Payload", response.text());
    console.log("POST payload is: " + pm.variables.get("POST-Payload"));
  }
});
