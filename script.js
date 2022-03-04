const adviceGenerate = document.querySelector('.new-advice')
const adviceId = document.querySelector('.advice-id')
const quote = document.querySelector('.quote')

window.onload = displayAdvice()

async function fetchQuote(){
    try{
        const response = await fetch('https://api.adviceslip.com/advice')
    
        if(!response.ok){
            throw new Error(`Failed to fetch advice😭: ${response.status}`)
        }
      return response.json()
    }
    catch (e){
        console.log(e)
    }
}

adviceGenerate.addEventListener('click',displayAdvice)

function displayAdvice(){
    const promiseObj = fetchQuote()
    console.log(`entered display advice`)
    promiseObj.then(response =>{
    
            adviceId.textContent = `A D V I C E # ${response.slip.id}`
           quote.textContent = `${response.slip.advice}`
        })
}