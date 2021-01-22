window.onload = ()=>{
    let btn = document.getElementById('showBtn')
    let inp = document.getElementById('inp')
    let list = document.getElementById('list')

    btn.onclick = ()=>{
        let val = inp.value;
        let htmlString = ''
        for(let i = 1 ; i <= parseInt(val) ; i++){
            var str=i;
          if(i%3==0)
          str+="Fizz"
          if(i%5==0)
          str+="Buzz"
          htmlString += `<li>${str}</li>`
        }
        list.innerHTML = htmlString
    }
}