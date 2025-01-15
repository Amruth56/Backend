// alert("Hello World");

async function abcd() {
    
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();
    
    console.log(ans);
    console.log(ans.results);
}

abcd();