let app = document.querySelector("#app")

async function getWeather (city) {
    let response = await fetch(`
    https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
    {
        headers: {
            "api-key" : "4e8c2e6c635244c68362405447405454"
        }
    })
    let data = await response.json()
    let today = data.result.hava.dayList[0]
    let nowTemp = data.result.hava.summary.temp
    let province = data.result.hava.state
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
            today.color = "t3"
            break;
    }
    app.innerHTML = `
    <div class="card">
    <div class="weather-wrapper ${today.color}">
        <i style="font-size: 5rem;" class="wi ${today.symbol}"></i>
    </div>
    <div class="card-body text-center">
        <h2 id="cityTitle">شهر : ${city}</h2>
        <h4 id="provinceTitle">استان : ${province}</h4>
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
    const provincesOfIran = ["یزد", "یاسوج", "همدان", "مشهد", "گرگان", "کرمانشاه", "کرمان", "کرج", "قم", "قزوین", "شیراز", "شهرکرد", "سنندج", "سمنان", "ساری", "زنجان", "زاهدان", "رشت", "خرم‌آباد", "تهران", "تبریز", "بیرجند", "بوشهر", "بندرعباس", "بجنورد", "ایلام", "اهواز", "اصفهان", "ارومیه", "اردبیل", "اراک"]
    for(i = 0; i < provincesOfIran.length; i++) {
        let Province = provincesOfIran[i];
        let selectedProvince = document.querySelector("#province")
        selectedProvince.innerHTML += `<option>${Province}</option>`;
    }
    for(i = 0; i < data.result.cityList.length; i++) {
        let city = data.result.cityList[i].name;
        let selectedCity = document.querySelector("#city")
        selectedCity.innerHTML += `<option>${city}</option>`;
    }
}
let defaultCity = "تهران"
province.addEventListener("change", e => {
    getWeather(e.target.value)
    let selectedProvince = document.querySelector("#province")
    let selectedCity = document.querySelector("#city")
    selectedProvince.innerHTML = `<option label="Select your province ...">Select your province ...</option>`;
    selectedCity.innerHTML = ""
})
city.addEventListener("change", e => {
    getWeather(e.target.value)
    let selectedProvince = document.querySelector("#province")
    let selectedCity = document.querySelector("#city")
    selectedProvince.innerHTML = `<option label="Select your province ...">Select your province ...</option>`;
    selectedCity.innerHTML = ""
})
getWeather(defaultCity)