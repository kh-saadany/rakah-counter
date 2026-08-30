package com.rakah.counter

import android.app.Activity
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
    private val proximitySensor = sensorManager.getDefaultSensor(Sensor.TYPE_PROXIMITY)
    private var isListening = false

    @JavascriptInterface
    fun startSensing(): String {
        if (lightSensor == null && proximitySensor == null) {
            Log.e("AndroidBridge", "No physical sensors available on this device.")
            return "error_no_sensor"
        }
        if (!isListening) {
            webView.post {
                var registeredAny = false
                if (lightSensor != null) {
                    val lightRegistered = sensorManager.registerListener(this, lightSensor, SensorManager.SENSOR_DELAY_UI)
                    registeredAny = registeredAny || lightRegistered
                    Log.d("AndroidBridge", "Light sensor registered: $lightRegistered")
                }
                if (proximitySensor != null) {
                    val proximityRegistered = sensorManager.registerListener(this, proximitySensor, SensorManager.SENSOR_DELAY_UI)
                    registeredAny = registeredAny || proximityRegistered
                    Log.d("AndroidBridge", "Proximity sensor registered: $proximityRegistered")
                }
                isListening = registeredAny
            }
        }
        return "success"
    }

    @JavascriptInterface
    fun stopSensing() {
        if (isListening) {
            sensorManager.unregisterListener(this)
            isListening = false
            Log.d("AndroidBridge", "Sensors unregistered.")
        }
    }

    @JavascriptInterface
    fun exitApp() {
        webView.post {
            try {
                (context as? Activity)?.finishAffinity()
            } catch (e: Exception) {
                Log.e("AndroidBridge", "Error exiting app: ${e.message}")
            }
        }
    }

    override fun onSensorChanged(event: SensorEvent?) {
        if (event == null) return
        
        if (event.sensor.type == Sensor.TYPE_LIGHT) {
            val lux = event.values[0]
            webView.post {
                webView.evaluateJavascript("if (typeof window.onSensorData === 'function') { window.onSensorData($lux); }", null)
            }
        } else if (event.sensor.type == Sensor.TYPE_PROXIMITY) {
            val distance = event.values[0]
            val maxRange = event.sensor.maximumRange
            webView.post {
                webView.evaluateJavascript("if (typeof window.onProximityData === 'function') { window.onProximityData($distance, $maxRange); }", null)
            }
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
        // Not used
    }
}
