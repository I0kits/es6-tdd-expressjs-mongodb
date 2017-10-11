package PeacockApp.buildTypes

import jetbrains.buildServer.configs.kotlin.v10.*
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.ScriptBuildStep
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.ScriptBuildStep.*
import jetbrains.buildServer.configs.kotlin.v10.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v10.triggers.VcsTrigger
import jetbrains.buildServer.configs.kotlin.v10.triggers.VcsTrigger.*
import jetbrains.buildServer.configs.kotlin.v10.triggers.vcs

object PeacockAppTest : BuildType({
    uuid = "0f6cd767-40f9-4ec6-97fd-8592e8559521"
    extId = "PeacockAppTest"
    name = "Test"

    vcs {
        root("Peacock_Peacock")
    }

    params {
        param("env.PATH", "%env.PATH%:%teamcity.build.workingDir%/build/nodejs/bin")
    }

    steps {
        script {
            name = "Prepare Nodejs"
            scriptContent = """echo "prepare nodejs""""
        }
        script {
            name = "Unit Test"
            scriptContent = """echo "Unit Test""""
        }
    }

    triggers {
        vcs {
            perCheckinTriggering = true
            enableQueueOptimization = false
        }
    }

    requirements {
        contains("teamcity.agent.jvm.os.name", "Linux")
    }
})
