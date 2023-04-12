
const submitBtn = document.querySelector('.btn')

submitBtn.addEventListener('click', function(){
    //cual es la diferencia entre querySelector y getElementById?
    string = document.getElementById('randomString').value;
    if (string){
        string = string.replace(/\s+/g, '') ;

        console.log('hay ', string.length, 'caracteres en su texto, sin incluir los espacios')
    } else {
        console.log('hay 0 caracteres en su texto')
    }


})