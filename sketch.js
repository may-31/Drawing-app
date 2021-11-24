var object
var pen=[]
var bgColor,lineColor,linesize,Shapes

function setup() {
  createCanvas(1000,400);
  bgColor=createColorPicker("White")
  createP("Color Picker")
  lineColor=createColorPicker()
  linesize=createSelect();
  linesize.option("2");
  linesize.option("4");
  linesize.option("6");
  linesize.option("8");
  linesize.option("10");

  Shapes=createSelect();
  Shapes.option("line");
  Shapes.option("rectangle");
  Shapes.option("square");
  Shapes.option("circle");
  Shapes.option("triangle");
  Shapes.option("star");
}

function draw() {
  background(bgColor.value());
  
 if(mouseIsPressed){
 object=new Brush(lineColor.value(),linesize.value(),Shapes.value());
 pen.push(object)
 }
 for(var i=0;i<pen.length;i=i+1){
 pen[i].display();
}

}