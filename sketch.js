class Button {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(168, 237, 154);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button2 {
  constructor(x_, y_, r_) { 
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(252, 186, 3);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
   
  }
}

class Button3 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(13, 252, 224);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button4 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(68, 55, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button5 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(182, 55, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button6 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 17, 215);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button7 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(247, 5, 25);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button8 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(252, 241, 20);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button9 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(8, 252, 187);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button10 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(130, 192, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button11 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 137, 7);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button12 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(128, 62, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button13 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 125, 248);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button14 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 250, 170);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button15 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 131, 95);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button16 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(116, 252, 48);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button17 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(10, 216, 247);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button18 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(27, 131, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button19 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(202, 27, 250);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button20 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 27, 161);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button21 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250, 151, 2);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button22 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(247, 67, 35);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button23 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(247, 218, 131);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button24 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(146, 129, 227);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button25 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(36, 158, 71);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button26 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(109, 198, 214);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button27 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(252, 126, 234);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Button28 {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(252, 142, 73);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}


let sentence, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence10, sentence11, sentence12, sentence13, sentence14, sentence15, sentence16, sentence17, sentence18, sentence19, sentence20, sentence21, sentence22, sentence23, sentence24, sentence25, sentence26, sentence27, sentence28;

let button, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button28;

function setup() {

  createCanvas(windowWidth, windowHeight);
  sentence = loadSound('1.wav');
  sentence2 = loadSound('2.wav');
  sentence3 = loadSound('3.wav');
  sentence4 = loadSound('4.wav');
  sentence5 = loadSound('5.wav');
  sentence6 = loadSound('6.wav');
  sentence7 = loadSound('7.wav');
  sentence8 = loadSound('8.wav');
  sentence9 = loadSound('9.wav');
  sentence10 = loadSound('10.wav');
  sentence11 = loadSound('11.wav');
  sentence12 = loadSound('12.wav');
  sentence13 = loadSound('13.wav');
  sentence14 = loadSound('14.wav');
  sentence15 = loadSound('15.wav');
  sentence16 = loadSound('16.wav');
  sentence17 = loadSound('17.wav');
  sentence18 = loadSound('18.wav');
  sentence19 = loadSound('19.wav');
  sentence20 = loadSound('20.wav');
  sentence21 = loadSound('21.wav');
  sentence22 = loadSound('22.wav');
  sentence23 = loadSound('23.wav');
  sentence24 = loadSound('24.wav');
  sentence25 = loadSound('25.wav');
  sentence26 = loadSound('26.wav');
  sentence27 = loadSound('27.wav');
  sentence28 = loadSound('28.wav');
  
 
  button = new Button(40, 40, 40);
  button2 = new Button2(120, 40, 40);
  button3 = new Button3(200, 40, 40);
  button4 = new Button4(280, 40, 40);
  button5 = new Button5(40, 120, 40);
  button6 = new Button6(120, 120, 40);
  button7 = new Button7(200, 120, 40);
  button8 = new Button8(280, 120, 40);
  button9 = new Button9(40, 200, 40);
  button10 = new Button10(120, 200, 40);
  button11 = new Button11(200, 200, 40);
  button12 = new Button12(280, 200, 40);
  button13 = new Button13(40, 280, 40);
  button14 = new Button14(120, 280, 40);
  button15 = new Button15(200, 280, 40);
  button16 = new Button16(280, 280, 40);
  button17 = new Button17(40, 360, 40);
  button18 = new Button18(120, 360, 40);
  button19 = new Button19(200, 360, 40);
  button20 = new Button20(280, 360, 40);
  button21 = new Button20(40, 440, 40);
  button22 = new Button20(120, 440, 40);
  button23 = new Button20(200, 440, 40);
  button24 = new Button20(280, 440, 40);
  button25 = new Button20(40, 520, 40);
  button26 = new Button20(120, 520, 40);
  button27 = new Button20(200, 520, 40);
  button28 = new Button20(280, 520, 40);
}
 
function draw() { 
  background(0);
  button.display(mouseX, mouseY);
  button2.display(mouseX, mouseY);
  button3.display(mouseX, mouseY);
  button4.display(mouseX, mouseY);
  button5.display(mouseX, mouseY);
  button6.display(mouseX, mouseY);
  button7.display(mouseX, mouseY);
  button8.display(mouseX, mouseY);
  button9.display(mouseX, mouseY);
  button10.display(mouseX, mouseY);
  button11.display(mouseX, mouseY);
  button12.display(mouseX, mouseY);
  button13.display(mouseX, mouseY);
  button14.display(mouseX, mouseY);
  button15.display(mouseX, mouseY);
  button16.display(mouseX, mouseY);
  button17.display(mouseX, mouseY);
  button18.display(mouseX, mouseY);
  button19.display(mouseX, mouseY);
  button20.display(mouseX, mouseY);
  button21.display(mouseX, mouseY);
  button22.display(mouseX, mouseY);
  button23.display(mouseX, mouseY);
  button24.display(mouseX, mouseY);
  button25.display(mouseX, mouseY);
  button26.display(mouseX, mouseY);
  button27.display(mouseX, mouseY);
  button28.display(mouseX, mouseY);
}

function mousePressed() {

  if (button.contains(mouseX, mouseY)) {
    sentence.play();
  }

  if (button2.contains(mouseX, mouseY)) {
    sentence2.play();
  }
  
  if (button3.contains(mouseX, mouseY)) {
    sentence3.play();
  }
  
  if (button4.contains(mouseX, mouseY)) {
    sentence4.play();
  }
  
  if (button5.contains(mouseX, mouseY)) {
    sentence5.play();
  }
  
  if (button6.contains(mouseX, mouseY)) {
    sentence6.play();
  }
  
  if (button7.contains(mouseX, mouseY)) {
    sentence7.play();
  }
  
  if (button8.contains(mouseX, mouseY)) {
    sentence8.play();
  }
  
  if (button9.contains(mouseX, mouseY)) {
    sentence9.play();
  }
  
  if (button10.contains(mouseX, mouseY)) {
    sentence10.play();
  }
  
  if (button11.contains(mouseX, mouseY)) {
    sentence11.play();
  }
  
  if (button12.contains(mouseX, mouseY)) {
    sentence12.play();
  }
  
  if (button13.contains(mouseX, mouseY)) {
    sentence13.play();
  }
  
  if (button14.contains(mouseX, mouseY)) {
    sentence14.play();
  }
  
  if (button15.contains(mouseX, mouseY)) {
    sentence15.play();
  }
  
  if (button16.contains(mouseX, mouseY)) {
    sentence16.play();
  }
  
  if (button17.contains(mouseX, mouseY)) {
    sentence17.play();
  }
  
  if (button18.contains(mouseX, mouseY)) {
    sentence18.play();
  }
  
  if (button19.contains(mouseX, mouseY)) {
    sentence19.play();
  }
  
  if (button20.contains(mouseX, mouseY)) {
    sentence20.play();
  }
  
  if (button21.contains(mouseX, mouseY)) {
    sentence21.play();
  }
  
  if (button22.contains(mouseX, mouseY)) {
    sentence22.play();
  }
  
  if (button23.contains(mouseX, mouseY)) {
    sentence23.play();
  }
  
  if (button24.contains(mouseX, mouseY)) {
    sentence24.play();
  }
  
  if (button25.contains(mouseX, mouseY)) {
    sentence25.play();
  }
  
  if (button26.contains(mouseX, mouseY)) {
    sentence26.play();
  }
  
  if (button27.contains(mouseX, mouseY)) {
    sentence27.play();
  }
  
  if (button28.contains(mouseX, mouseY)) {
    sentence28.play();
  }
} 
