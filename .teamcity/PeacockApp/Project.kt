package PeacockApp

import PeacockApp.buildTypes.*
import jetbrains.buildServer.configs.kotlin.v10.*
import jetbrains.buildServer.configs.kotlin.v10.Project

object Project : Project({
    uuid = "3b3f59bc-3b03-4763-9e85-0f31a6f5ba4c"
    extId = "PeacockApp"
    parentId = "Peacock"
    name = "App"

    buildType(PeacockAppTest)
    buildType(PeacockAppBuild)
})