let a = 3
let b = 2
let c = 1

if (a>b && a>c && b>c) {
    console.log(`o maior numero é o ${a} o do meio ${b} e o menor ${c}`)
} else if(b>a && b>c && a>c){
    console.log(`o maior numero é o ${b} o do meio ${a} e o menor ${c}`)
}else if(c>a && c>b && a>b){
    console.log(`o maior numero é o ${c} o do meio ${a} e o menor ${b}`)
} else if (c>a && c>b && b>a) {
    console.log(`o maior numero é o ${c} o do meio ${b} e o menor ${a}`)
} else if (b>a && b>c && c>a) {
    console.log(`o maior numero é o ${b} o do meio ${c} e o menor ${a}`)
} else {
    console.log(`Erro`)
}


