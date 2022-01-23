let app = document.querySelector("#app")

async function getWeather (city) {
    let response = await fetch(`
    https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
    {
        headers: {
            "api-key" : "90c2393a6fa64f95a41bc2e99cae1b1b"
        }
    })
    let data = await response.json()
    let today = data.result.hava.dayList[0]
    let nowTemp = data.result.hava.summary.temp
    let state = data.result.hava.state
    switch (today.condition) {
        case "آرام":
            today.color = "t1"
            break;
        case "نسیم":
            today.color = "t2"
            break;
        case "باد ملایم":
            today.color = "t3"
            break;
        case "باد شدید":
            today.color = "t4"
            break;
        case "طوفانی":
            today.color = "t5"
            break;
        default:
            today.color = "t1"
            break;
    }
    app.innerHTML = `
    <div class="card">
    <div class="weather-wrapper ${today.color}">
        <i style="font-size: 5rem;" class="wi ${today.symbol}"></i>
    </div>
    <div class="card-body text-center">
        <h2 id="cityTitle">شهر : ${city}</h2>
        <h4 id="state">استان : ${state}</h4>
        <small class="my-3 d-block">${today.condition}</small>
        <div class="temperature">
            <div>
                <button class="btn btn-danger">${today.max}</button><p>بیشترین دما</p>
            </div>
            <div>
                <button class="btn btn-secondary">${nowTemp}</button><p>دمای الان</p>
            </div>
            <div>
                <button class="btn btn-primary">${today.min}</button><p>کمترین دما</p>   
            </div>
        </div>
    </div>`
}
let defaultCity = "تهران"
let city = document.querySelector("#city")
let cityTitle = document.querySelector("#cityTitle")

city.addEventListener("submit", e => {
    e.preventDefault()
    getWeather(e.target.city.value)
})
getWeather(defaultCity)