package PeacockApp.buildTypes

import PeacockApp.buildTypes.PeacockAppTest
import jetbrains.buildServer.configs.kotlin.v10.*
import jetbrains.buildServer.configs.kotlin.v10.triggers.FinishBuildTrigger
import jetbrains.buildServer.configs.kotlin.v10.triggers.FinishBuildTrigger.*
import jetbrains.buildServer.configs.kotlin.v10.triggers.finishBuildTrigger
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.ScriptBuildStep
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.ScriptBuildStep.*
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.script


object PeacockAppBuild : BuildType({
    uuid = "3f718e19-7d6d-4f7b-9628-e285b5508f7a"
    extId = "PeacockAppBuild"
    name = "Build"

    vcs {
        root("Peacock_Peacock")
    }

    params {
        param("epoch", "0")
        param("env.PATH", "%env.PATH%:%teamcity.build.workingDir%/build/nodejs/bin")
        param("env.pkgName", "peacock")
        param("env.pkgVersion, "%epoch%.%build.counter%")
    }

    steps {
        script {
            name = "Perpare Nodejs"
            scriptContent = """chmod +x go.sh && ./go.sh prepare_nodejs""""
        }

        script {
            name = "Package"
            scriptContent = """yarn install && yarn run package"""
        }
    }

    triggers {
        finishBuildTrigger {
            buildTypeExtId = PeacockAppTest.extId
            successfulOnly = true
        }
    }

    dependencies {
        dependency(PeacockApp.buildTypes.PeacockAppTest) {
            snapshot {
                onDependencyFailure = FailureAction.FAIL_TO_START
            }
        }
    }

    requirements {
        contains("teamcity.agent.jvm.os.name", "Linux")
    }
})