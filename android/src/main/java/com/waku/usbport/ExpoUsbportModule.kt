package com.waku.usbport

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoUsbportModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoUsbport")

    Function("getTheme") {
      return@Function "system"
    }
    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }
  }
}




