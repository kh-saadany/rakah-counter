package com.rakah.counter

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.util.Log

class AndroidBridge(private val context: Context, private val webView: WebView) : SensorEventListener {

    private val sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    private val lightSensor = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT)
    private var isListening = false

    @JavascriptInterface
    fun startSensing(): String {
        if (lightSensor == null) {
            Log.e("AndroidBridge", "Ambient Light Sensor not available on this device.")
            return "error_no_sensor"
        }
        if (!isListening) {
            // Register listener on the main thread or handler
            webView.post {
                val registered = sensorManager.registerListener(this, lightSensor, SensorManager.SENSOR_DELAY_UI)
                isListening = registered
                Log.d("AndroidBridge", "Light sensor listener registered: $isListening")
            }
        }
        return "success"
    }

    @JavascriptInterface
    fun stopSensing() {
        if (isListening) {
            sensorManager.unregisterListener(this)
            isListening = false
            Log.d("AndroidBridge", "Light sensor listener unregistered.")
        }
    }

    override fun onSensorChanged(event: SensorEvent?) {
        if (event == null || event.sensor.type != Sensor.TYPE_LIGHT) return
        val lux = event.values[0]
        
        // Pass the sensor reading directly to the WebView JS layer
        webView.post {
            webView.evaluateJavascript("if (typeof window.onSensorData === 'function') { window.onSensorData($lux); }", null)
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
        // Not used
    }
}
