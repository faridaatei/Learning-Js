class Circle{
	constructor(radius){
		this.radius= radius;

}

calcArea(){
	return 3.14 * (this.radius * this.radius);
   }

calcDiameter(){
	return 2*this.radius  

   }
   calperimeter(){
  
  	return 3.14*this.radius


}
}
const circle= new Circle (7);
console.log( "the area",circle.calcArea());
console.log( "the diameter",circle.calcDiameter());
console.log("the perimeter",circle.calperimeter());

