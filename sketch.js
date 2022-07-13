let capture, graphics, p;
const codeReader = new ZXing.BrowserMultiFormatReader();
function setup() {
  createCanvas(320,240);
  background(51);
  ///graphics = createGraphics(320, 240);
  capture = createCapture(VIDEO);
  capture.elt.id="video"
  capture.size(320,240);
  capture.hide();
  p = createP("Scanning...")
  codeReader
  .listVideoInputDevices()
  .then(videoInputDevices => {
    const firstDeviceId = videoInputDevices[0].deviceId;
    codeReader.decodeFromVideoDevice(firstDeviceId, 'video', (result, err) => {
    if (result) {
      // properly decoded qr code
      console.log('Found QR code!', result)
	  const permitNumb =  result.text
      p.html("here is the permit " + permitNumb)
	  return permitNumb
	  
    }
  })
  })
  .catch(err => console.error(err))
}

function draw() {
  //noLoop()
  //return
  //background(32);

  //strokeWeight(2);

  image(capture,0,0);



  //stroke(255,0,0)
  //line(20,height/2,width - 20,height/2)
  
}


//
