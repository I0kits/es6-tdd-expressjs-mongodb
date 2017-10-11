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
        param("env.PATH", "%env.PATH%:%teamcity.build.workingDir%/build/nodejs/bin")
    }

    steps {
        script {
            name = "Perpare Nodejs"
            scriptContent = """echo "prepare nodejs""""
        }

        script {
            name = "Build & Upload"
            scriptContent = """echo "build & upload""""
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