//  API KEY :- 787e4ee6cc3243b8ac0580de86107186
console.log(" JavaScript Is Loaded ! ");

// Initialize The news paramenters...
let source = 'bbc-news';
let apiKey = '787e4ee6cc3243b8ac0580de86107186';
let url = `https://newsapi.org/v2/top-headlines?source=${source}&country=in&apiKey=${apiKey}`;

// Grab The News Container...
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax request...
let xhr = new XMLHttpRequest();

// create a Get Request...
xhr.open('get',url,true);

//  Gettign dat Onload...
xhr.onload = function(){
    if(this.status === 200)
    { 
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";

        articles.forEach(function(element,index) {
            let news = `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading_${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse_${index}" aria-expanded="false" aria-controls="collapse_${index}">
                                <b>Breking News ${index + 1} : </b> <em> ${element['title']} </em>
                            </button>
                        </h2>
                        <div id="collapse_${index}" class="accordion-collapse collapse" aria-labelledby="heading_${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank"> Read More Here. </a></div>
                        </div>
                    </div>`;
            newsHtml += news;                    
        });
        newsAccordion.innerHTML = newsHtml;
    }
}

xhr.send();

// Do It Latter :-
// Add Search Filter...

// Code For Search Filter...
search = document.getElementById('searchTxt');
search.addEventListener('input',function(e){
    let inputVal = search.value.toLowerCase();
    let header = document.getElementsByClassName("accordion-item");
    Array.from(header).forEach(function(element){
        let headerTxt = element.getElementsByTagName("em")[0].innerText.toLowerCase();
        if(headerTxt.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    })
});