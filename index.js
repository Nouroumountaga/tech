var select = document.querySelector('.select');
select.addEventListener('click',()=>{
    setTimeout(() => {
        var nwsel = select.value;
        window.location.href = nwsel + ".html"
    }, 3000);
})
var div = document.querySelectorAll('#div');
div.forEach(div=>{
    div.addEventListener("click",()=>{
        var nom =   div.getElementsByTagName('p')[0].innerHTML;
        var descript = div.getElementsByTagName("article")[0].textContent;
        var child = div.getElementsByTagName('img')[0].src
        var price = div.querySelector("#price").innerHTML
        let none =  div.querySelector('#none').src
        let none0 = div.querySelector('#none1').src
        ////////////////////////////////////////
        localStorage.setItem('img',child);
        localStorage.setItem('img0',none);
        localStorage.setItem('img1',none0);
        localStorage.setItem('descript',descript)
        localStorage.setItem('price',price)
        localStorage.setItem('nom',nom)
        //////////////////////////////////////////
        //toLowerCase
        var title = div.getElementsByTagName("p")[0].innerHTML;
        var list =  ["Airpods","Montre","Power","Imprimante","Souris","Sac","Clavier","Baffle","Projecteur","Ticket"];
        for(var i=0; i<list.length;i++){
            var text = list[i]
            if(title.includes(text)){
                window.location.href = text + ".html";
                //alert(text)
              
            }
            else{
            //    alert("hello")
              // 
            }
        }

    })
})
div.forEach(div=>{
    div.style.cursor = 'pointer'
    var para = div.getElementsByTagName("p")[1];
    para.style.fontSize = "25px";
    para.id = "price";

})
//var openBar = document.querySelector("#openbar");
//openBar.addEventListener('click',()=>{
//    var navBar =  document.querySelector('.nav');
//    navBar.classList.add('active')
//})
//var closeBar = document.getElementById("closeBar");
//closeBar.addEventListener('click',()=>{
//    var navBar =  document.querySelector('.nav');
//    navBar.classList.remove('active')
//})