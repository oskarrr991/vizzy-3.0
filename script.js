function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://api.myjson.com/bins/ygjmg', true);
    req.onreadystatechange = 
    function() {
        if (req.readyState == 4 && req.status == "200") {
            callback(req.responseText);
        }
    };
    req.send(null);  
}
function get(data) {
    el = document.createElement(data.type);
    
    if(typeof data.id === 'string'){
        el.id = data.id;
    }
    if(typeof data.className === 'string'){
        el.className = data.className;
    }        
    if(typeof data.src === 'string'){
        el.src = data.src;
    }
    if(typeof data.href === 'string'){
        el.href = data.href;
    }
    if(typeof data.innerHTML === 'string'){
        el.innerHTML = data.innerHTML;
    }
    if(typeof data.alt === 'string'){
        el.alt = data.alt;
    }
    if (data.type === 'a') {
        el.addEventListener('click', function () {
            // $('section').css('display', 'none');
            // document.getElementsByTagName('section')[0].style.display = 'none';
            // let addressValue = $(this).attr('href');
            // $(addressValue).css('display', 'block');
            console.log(data.id);
        });
    }
    
    return el;
}
function recurseJSON(data, container) {
    for(let elObj of data.content) {
        newContainer = get(elObj);
        container.appendChild(newContainer);  
        catchEventListeners(elObj);
        if (typeof elObj.content === 'object') {
            recurseJSON(elObj, newContainer);
        }   
    }
}
function initJSON() {
    loadJSON(function(res) {
        recurseJSON(JSON.parse(res), document.getElementsByTagName('body')[0]);
        initSliderANDPages();
    });
}
function open_mobile_menu() {
    if(document.getElementById('mobile-menu-items').style.display == 'block'){
      document.getElementById('mobile-menu-items').style.display = 'none';
    } else {
      document.getElementById('mobile-menu-items').style.display = 'block';
    }
}
function catchEventListeners(el) {
    if (el.onclick === 'menu-button') {
        document.getElementsByTagName('label')[0].addEventListener("click", function() {
            open_mobile_menu();
        });
        $(window).click(function() {
            if(document.getElementById('mobile-menu-items').style.display == 'block')
                document.getElementById('mobile-menu-items').style.display = 'none';
        });
            
        $('label').click(function(event){
            event.stopPropagation();
        });
    }   
    if (el.id === 'sliderbutton1') {
        document.getElementById('sliderbutton1').addEventListener("click", function() {
            document.getElementsByClassName('mySlides')[0].style.display = 'block';
            document.getElementsByClassName('mySlides')[1].style.display = 'none';
            document.getElementsByClassName('mySlides')[2].style.display = 'none';
            document.getElementsByClassName('mySlides')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbutton2') {
        document.getElementById('sliderbutton2').addEventListener("click", function() {
            document.getElementsByClassName('mySlides')[0].style.display = 'none';
            document.getElementsByClassName('mySlides')[1].style.display = 'block';
            document.getElementsByClassName('mySlides')[2].style.display = 'none';
            document.getElementsByClassName('mySlides')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbutton3') {
        document.getElementById('sliderbutton3').addEventListener("click", function() {
            document.getElementsByClassName('mySlides')[0].style.display = 'none';
            document.getElementsByClassName('mySlides')[1].style.display = 'none';
            document.getElementsByClassName('mySlides')[2].style.display = 'block';
            document.getElementsByClassName('mySlides')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbutton4') {
        document.getElementById('sliderbutton4').addEventListener("click", function() {
            document.getElementsByClassName('mySlides')[0].style.display = 'none';
            document.getElementsByClassName('mySlides')[1].style.display = 'none';
            document.getElementsByClassName('mySlides')[2].style.display = 'none';
            document.getElementsByClassName('mySlides')[3].style.display = 'block';
        });
    }
}
function initSliderANDPages() {
    document.getElementsByClassName('mySlides')[0].style.display = 'block';
    document.getElementsByClassName('mySlides')[1].style.display = 'none';
    document.getElementsByClassName('mySlides')[2].style.display = 'none';
    document.getElementsByClassName('mySlides')[3].style.display = 'none';

    document.getElementById('Home').style.display = 'block';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('Templates').style.display = 'none';
    document.getElementById('Pricing').style.display = 'none';
}
