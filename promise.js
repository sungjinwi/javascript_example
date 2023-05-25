const a = (a)=> new Promise(()=>a)

const b = (item)=> console.log(item)


a(3).then((result)=>b(result,"then"))