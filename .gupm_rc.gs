// look up dependencies in local go_modules and gupm_modules directories
env("GOPATH", run("go", ["env", "GOROOT"]) + ":" + pwd() + "/go_modules" + ":" + pwd() + "/gupm_modules")

// dev mode
env("MONGODB", readJsonFile("dev.json").MONGODB)
env("HTTP_PORT", 8080)
env("HTTPS_PORT", 8443)