// Your code here
class Polygon {
   constructor (Array) {
       this.Array = Array;
   }

   get countSides(){
       return this.Array.length;
   }
   get perimeter(){
       let count = 0;
       for (let i=0; i<this.Array.length; i++){
           count += this.Array[i]
           
       }
       return count
   }
}
class Triangle extends Polygon {
    get isValid(){
        console.log(this.Array[1]);
        console.log(this.Array[2]);
        console.log(this.Array[0]);
        if (this.Array[0]+this.Array[1]==(this.Array[2]*this.Array[2]) || this.Array[0]+this.Array[2]==(this.Array[1]*this.Array[1])|| this.Array[1]+this.Array[2]==(this.Array[0]*this.Array[0])||this.Array[0]==this.Array[1] ){
            return true
        } 
       
       else return false
       
    }
}
class Square extends Polygon {
    get isValid(){

                    let side = this.Array[0] 
            for (let i=1; i<this.Array.length; i++){
                if (this.Array[i] !== side){
                return false}
                else {return true}
            }
        
    }
    get area(){
        return (this.Array[0]* this.Array[1])
    }
}
