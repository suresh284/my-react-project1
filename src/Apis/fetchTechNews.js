let url_old = `https://newsapi.org/v2/top-headlines?country=in&apiKey=398a122378434b528b1bb97dd9b712cb`
let url2 = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=398a122378434b528b1bb97dd9b712cb`
let url = `https://newsapi.org/v2/everything?q=tcs&apiKey=398a122378434b528b1bb97dd9b712cb`

let url3 = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=398a122378434b528b1bb97dd9b712cb`
let headlines = null
export const fetchTechNews = async()=>{

        await fetch(url3)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            headlines = data
        })
        
        return headlines
}