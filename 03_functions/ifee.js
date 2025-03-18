// function maked amd called

(function chai(){
    console.log("DB Connected");
})();

((name)=>{
    console.log(`${name} db connected`)
})('Mysql')