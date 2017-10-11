package PeacockApp

import PeacockApp.buildTypes.*
import jetbrains.buildServer.configs.kotlin.v10.*
import jetbrains.buildServer.configs.kotlin.v10.Project
import jetbrains.buildServer.configs.kotlin.v10.projectFeatures.VersionedSettings
import jetbrains.buildServer.configs.kotlin.v10.projectFeatures.VersionedSettings.*
import jetbrains.buildServer.configs.kotlin.v10.projectFeatures.versionedSettings

object Project : Project({
    uuid = "3b3f59bc-3b03-4763-9e85-0f31a6f5ba4c"
    extId = "PeacockApp"
    parentId = "Peacock"
    name = "App"

    buildType(PeacockAppTest)
    buildType(PeacockAppBuild)

    features {
        versionedSettings {
            id = "PROJECT_EXT_SETTINGS_MODE"
            mode = VersionedSettings.Mode.ENABLED
            buildSettingsMode = VersionedSettings.BuildSettingsMode.PREFER_SETTINGS_FROM_VCS
            rootExtId = "Peacock_Peacock"
            showChanges = false
            settingsFormat = VersionedSettings.Format.KOTLIN
            param("credentialsStorageType", "credentialsJSON")
        }
    }
})