class Brush{
    constructor(col,Size,Shape){
      this.clx=mouseX
      this.cly=mouseY

      this.plx=pwinMouseX
      this.ply=pwinMouseY
      this.col=col;
      this.Size=Size;
      this.Shape=Shape;
    }
    display(){
      stroke(this.col);
      strokeWeight(this.Size);
      if(this.Shape==="line"){                                                                                                        
        line(this.plx,this.ply,this.clx,this.cly)
      }
      
     else if(this.Shape==="rectangle"){
      rect(this.clx,this.cly,this.Size*2,this.Size);
      }
      else if(this.Shape==="square"){
        rect(this.clx,this.cly,this.Size,this.Size);
      }
      else if(this.Shape==="circle"){
        ellipse(this.clx,this.cly,this.Size,this.Size);
      }
    }
    
}