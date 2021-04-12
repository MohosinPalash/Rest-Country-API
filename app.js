fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = data =>{

    const countryDiv = document.getElementById('country_div');

    //*******Initial Approach*********


    // for (let i = 0; i < data.length; i++) {
    //     const element = data[i];

    //     //Create element for eac h div
    //     const div = document.createElement('div');
    //     const h3 = document.createElement('h3');
    //     const p = document.createElement('p');

    //     //Set text in each element
    //     h3.innerText = element.name;
    //     p.innerText = element.capital;

    //     //Append the items in a div
    //     div.appendChild(h3);
    //     div.appendChild(p);

    //     //Append each div in main div
    //     countryDiv.appendChild(div);

    //     console.log(element);
    // }

    //*******Better Approach*********


    // Used foreach loop instead of for loop
    // Used caret string type to create each country div
    data.forEach(country => {
        //Create element for eac h div
        const div = document.createElement('div');
        div.className = 'small_div'
        // Caret string type
        const countryInfo = `
            <img class= "country_flag" src="${country.flag}">
            <p class="country_name">${country.name}
            <br><span class="country_capital">${country.capital}<span></p>
            <button onclick="countryDetail('${country.name}')">Details</button>
        `
        //Append the caret string in each div
        div.innerHTML= countryInfo;

        // const background_flag = `
        // url('${country.flag}');
        // `
        // small_div.style.backgroundImage = background_flag;
       
        //Append each div in main div
        countryDiv.appendChild(div);
        //console.log(country);
    });  
}
const countryDetail = name =>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data =>showCountryDetail(data[0]));
}

const showCountryDetail = country =>{
    const countryDiv = document.getElementById('country_div');
    countryDiv.style.display = "none";
    const countryDetail = document.getElementById('country_details');
    countryDetail.style.display = "block";

    const detail = `
        <h1>${country.name}</h1>
        <img src="${country.flag}">
        <p><b>Capital:</b> ${country.capital}
        <br><b>Region:</b> ${country.region}
        <br><b>Population:</b> ${country.area}</p>
        <button onClick="turn_back()">BACK</button>
    `
    countryDetail.innerHTML = detail;
}
function turn_back(){
    
    const countryDetail = document.getElementById('country_details');
    countryDetail.style.display = "none";
    const countryDiv = document.getElementById('country_div');
    countryDiv.style.display = "grid";
}
