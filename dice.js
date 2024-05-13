function rolldice(){
    const t1=document.getElementById("t1").value;
    const dresult=document.getElementById("d2");
    const dimages=document.getElementById("d3");
    const values=[];
    const images=[];
    for(let i=0; i<t1; i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="./dice/${value}.jpg" alt="dice ${value}">`);
    }
    dresult.textContent=`result: ${values.join(', ')}`;
    dimages.innerHTML=images.join('');
}