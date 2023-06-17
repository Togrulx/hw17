// task1
function field (radius){
   if (typeof radius === 'number') {
      let field = Math.PI * Math.pow(radius, 2)
      return field;
   }
   else{
      return 'Add valid option'
   }

}
console.log(field(5));


//task 2
   class Cars{
   #bmw;

   constructor(engine,hp,color,bmw){
      this.engine=engine
      this.hp=hp
      this.color=color
      this.#bmw=bmw
   }
   getBmw(){
      return this.#bmw
   }
   setBmw(model){
      return this.#bmw=model 
   }

   }

   let bmw = new Cars('4,4','625','olive green');
   bmw.setBmw('M5')
   bmw.getBmw();
   console.log(bmw);


   class Car{
      constructor(engine,hp,color){
         this.engine=engine
         this.hp=hp
         this.color=color
      }
   }

   class Merc extends Car{
      constructor(engine,hp,color,type){
         super(engine,hp,color)
         this.type=type;
      }

   }
//

//tast 3
   function dnum(array){
      
      if(!Array.isArray(array)){
         return 'Array deyil'
      }
      else{

         if (array.length === 0) {
            return 'Array empty'
         }
         else{

            let ek=array[0]

            for(let i=0;i<array.length;i++){

               if(array[i]<ek){

                  ek=array[i]
               }
           }
           console.log('en kicik eded : '+ ek);
         }

      }
   }
   let array1=[5,3,56,7,4,2,31,1]
   dnum(array1);
//