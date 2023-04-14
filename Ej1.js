
const submitBtn = document.querySelector('.btn')

submitBtn.addEventListener('click', function(){
    //cual es la diferencia entre querySelector y getElementById?
    string = document.getElementById('randomString').value;
    if (string){
        //string = string.replace(/\s+/g, '') ;

        //console.log('hay ', string.length, 'caracteres en su texto, sin incluir los espacios')
        if (string.length>100){
            console.log('hay más de 100 caracteres, por favor reduzca la cantidad')
        }
    } else {
        console.log('hay 0 caracteres en su texto')
    }


})