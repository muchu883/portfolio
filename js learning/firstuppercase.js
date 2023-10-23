function uppercase(a){
    let words = a.split(" ");
    let upper=words.map(word => word.replace(word.split("")[0],word.split("")[0].toUpperCase()));
    console.log(upper.join(" "))
}
uppercase("muhammed mushraf")