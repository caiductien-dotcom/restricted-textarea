const messageInput=document.getElementById('messageInput');
const charCounter = document.getElementById('charCounter');
const currentCount = document.getElementById('current');
const MAX_LIMIT = 250;

messageInput.addEventListener('input', () =>{
    const textLength = messageInput.value.length;

    //cap nhat con so hien thi
    currentCount.innerText=textLength;

    //xu ly logic thay doi mau sac
    if(textLength>=MAX_LIMIT){
        messageInput.classList.add('error');
        charCounter.classList.add('error');
    }else{
        messageInput.classList.remove('error');
        charCounter.classList.remove('error');
    }
});