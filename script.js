

let photo = document.getElementById('imgphoto');
let file = document.getElementById('flimage');

photo.addEventListener('click', () =>{
    file.click();
})

file.addEventListener('change', (Event) =>{
    console.log(Event);
});

file.addEventListener('change', (Event) => {
    
if(file.files.length <=0){
    return;
}

    console.log(file.files)
    
    let reader = new FileReader();

    reader.onload = () =>{
        photo.src = reader.result;
    }
    reader.readAsDataURL(file.files[0])
}
)