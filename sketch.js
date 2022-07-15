let capture, graphics, p;
var w = 240;
var h = 440;
const codeReader = new ZXing.BrowserMultiFormatReader();
function setup() {
  //createCanvas(240,440);
  //background(51);
  
  //capture = createCapture(VIDEO);
  //capture.elt.id="video"
  //capture.size(240,440);
  //capture.hide();
	
   capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h,
	    facingMode: {
                   exact: "environment"
           }
        }
    });
  capture.elt.id="video";
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
  capture.size(w, h);
  canvas = createCanvas(w, h);
	
  p = createP("Scanning...")
  codeReader
  .listVideoInputDevices()
  .then(videoInputDevices => {
   //const firstDeviceId = videoInputDevices[0].deviceId;
   //p.html(firstDeviceId);
    codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
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

function touchStarted () {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};

//
