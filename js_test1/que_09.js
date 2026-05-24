function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  // write your code here
  let suite = suiteName.trim();
  let env = environment.toLowerCase();
  let build = "BUILD-" + buildNumber;
  return suite + " | " + env + " | " + build;

}

console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));