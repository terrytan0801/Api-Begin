import ax from "axios"
import { response } from "express"


ax.get('https://api.wheretheiss.at/v1/satellites/25544')
.then( function(res){
    const Longtitude = res.data.longitude
    const Latitude = res.data.latitude
    console.log(`Longtitude : ${Longtitude}`)
    console.log(`Latitude: ${Latitude}`)
})
.catch(function(err) {
    console.error("error：", err)
  })