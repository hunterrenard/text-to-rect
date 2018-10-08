let txt;
let origTxt;
let validChars;
let size;
let input;

function setup() {
  createCanvas(800, 800);
  background(255, 255, 255);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  colorMode(HSB, 100, 100, 100)

  input = createInput();
  button = createButton('submit');
  button.mousePressed(generateColors);

  validChars = 'abcdefghijklmnopqrstuvwxyz';
  readTextFile("text.txt");
  txt = "";

  while(typeof origTxt == 'undefined')
  {

  }

  for (let i = 0; i < origTxt.length; i++) {
    if(validChars.includes(origTxt[i].toLowerCase()))
      txt += origTxt[i].toLowerCase();
  }

  let size = txt.length;
  for (let i = 0; i < txt.length; i++) {
    let c = map(txt[i].charCodeAt(0), 97, 122, 0, 100);
    stroke(c, 100, 100);
    fill(c, 100, 100);
    let s = map(size, 0, txt.length, 0, 800);
    rect(0, 0, s, s);
    size--;
  }
}

function generateColors() {

  origTxt = '';
  txt = '';
  origTxt = input.value();
  console.log(origTxt);

  background(255, 0, 255);
  for (let i = 0; i < origTxt.length; i++) {
    if(validChars.includes(origTxt[i].toLowerCase()))
      txt += origTxt[i].toLowerCase();
  }

  let size = txt.length;
  for (let i = 0; i < txt.length; i++) {
    let c = map(txt[i].charCodeAt(0), 97, 122, 0, 100);
    stroke(c, 100, 100);
    fill(c, 100, 100);
    let s = map(size, 0, txt.length, 0, 800);
    rect(0, 0, s, s);
    size--;
  }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                origTxt = allText;
            }
        }
    }
    rawFile.send(null);
}
