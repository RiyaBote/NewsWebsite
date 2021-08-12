let xhr = new XMLHttpRequest()

xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=64ccf9682e0841bda11e6df10e8e592a`, true)
xhr.onload = function () {


    if (this.status === 200) {
        let obj = JSON.parse(this.responseText)
        let news = obj.articles

        html = ""
        let accordion = document.getElementById('accordion') 

        news.forEach(function (element, index) {
            html += `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h5 class="mb-0 allcard ">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
                                <img src="${element.urlToImage}" alt="" height="80" width="80">&nbsp;
                                <span class="text">${element.title}</span>
                                </button>
                            </h5> 
                        </div>
                    
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                            <div class="card-body">
                               <span>${element.content} <a href="${element.url}" target="_blank">More Detail Click Here</a> </span>
                            </div>
                        </div>
                    </div>`
            accordion.innerHTML = html

        });
    } else {
        console.log('error')
    }
}
xhr.send()

let search = document.getElementById('search')

search.addEventListener('input', function () {
    let searchValue = search.value

    let allcard = document.getElementsByClassName('allcard')
    Array.from(allcard).forEach(function (element) {

        var a = element.getElementsByClassName('text')[0].innerText

        if (a.includes(searchValue)) {
            element.style.display = ""
            
        } else {
            element.style.display = "none"
            
        }
    })
})