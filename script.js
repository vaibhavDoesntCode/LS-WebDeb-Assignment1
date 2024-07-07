// function changebg(idH){
//     bg = document.getElementsByClassName('page3')[0]
//     arr = document.getElementsByClassName('hover-card')
//     Array.prototype.forEach.call(arr, function(element) {
//         element.style.opacity = 0.1;
//     });
//     arr = ['mercedes','mclaren', 'williams']
//     main = document.getElementById(idH)
//     main.style.opacity  =1
//     const bgImage = `./assets/f1drivers/${idH}.png`;
//     bg.setAttribute('style',`background-image: url(${bgImage})`)
//     console.log(bgImage);
//     text = document.getElementById('textTeam')  

// }

function defaultfun(){
    document.getElementById('company').innerHTML = 'Company Name'
    document.getElementById('drivers-text').innerHTML = 'Hover Over the companies to know about them'
    document.getElementById('livery-img').setAttribute('src', './assets/rand.jpg')
    document.getElementById('drivers-image').setAttribute('src','./assets/all.png')
}

function changebg(idh){
    company = document.getElementById('company')
    drivers = document.getElementById('drivers-text')
    livery =  document.getElementById('livery-img')
    driversImg = document.getElementById('drivers-image');
    let driverUrl = `./assets/f1drivers/${idh}.png`
    let liveryURL = `./assets/livery/${idh}.png`
    driversImg.setAttribute('src', driverUrl )
    livery.setAttribute('src',liveryURL)
    let drivers_text
    let company_text
    if(idh == 'redbull'){
        drivers_text = 'Sergio Pérez and Max Verstappen'
        company_text = 'Red Bull Racing'
    }
    else if(idh == 'ferarri'){
        drivers_text = 'Carlos Sainz Jr. and Charles Leclerc'
        company_text = 'Ferrari'
    }
    else if(idh == 'mercedes'){
        drivers_text = 'George Russell and Lewis Hamilton'
        company_text = 'Mercedes'
    }
    else if(idh == 'mclaren' ){
        drivers_text = 'Lando Norris and Oscar Piastri'
        company_text = 'McLaren'
    }
    else if(idh == 'astonMartin'){
        drivers_text = 'Fernando Alonso and Lance Stroll'
        company_text = 'Aston Martin'
    }
    else if(idh == 'alpine'){
        drivers_text = 'Pierre Gasly and Esteban Ocon'
        company_text = 'Alpine'
    }
    else if(idh == 'williams'){
        drivers_text = 'Logan Sargeant and Alexander Albon'
        company_text = 'Williams'
    }
    else if(idh == 'haas'){
        drivers_text = 'Kevin Magnussen and Nico Hülkenberg'
        company_text = 'Haas'
    }
    else if(idh == 'visaRB'){
        drivers_text = 'Daniel Ricciardo and Yuki Tsunoda'
        company_text = 'RB'
    }
    else if(idh = 'kickSauber'){
        drivers_text = 'Valtteri Bottas and Zhou Guanyu'
        company_text = 'Stake'
    }
    drivers.innerHTML = "Drivers:<i> " + drivers_text + "</i>(left to right)"
    company.innerHTML = company_text

    
}



