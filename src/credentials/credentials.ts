/**
 * Created by Basti on 03.09.2017.
 */

export var credentials = {
  host: 'http://localhost:8080'
}

export function setBaseUrlProd(){
  credentials.host = 'http://raspberrypi.local:8080'
}

function setBaseUrlDev(){
  credentials.host = 'http://localhost:8080'
}
