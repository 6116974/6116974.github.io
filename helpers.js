function pairDecode(iQuestion) {
  var iSBinder = Math.ceil(iQuestion / 600);
  var iBinder = Math.ceil((iQuestion - ((iSBinder-1)*600)) / 25);
  var iPair = Math.ceil(iQuestion - (iSBinder-1)*600 - (iBinder-1)*25);

  var ret = new Object();
  ret["question"] = iQuestion;
  ret["sbinder"] = iSBinder;
  ret["binder"] = iBinder;
  ret["pair"] = iPair;
  return ret;
}

function getTipRing(iQuestion) {
  var ret = new Object();
  ret["question"] = iQuestion;
  ret["tip"] = Math.ceil(iQuestion/5);
  ret["ring"] = iQuestion - (ret["tip"]-1)*5;
  return ret;
}

function clrStripe(tip, ring, isBinder=false) {
  if (isBinder) {
    return 'repeating-linear-gradient(-45deg, '+clrRing(ring)+' 0px, '+clrRing(ring)+' 20px, '+clrTip(tip)+' 20px, '+clrTip(tip)+' 30px)';
  } else {
    return 'repeating-linear-gradient(-45deg, '+clrTip(tip)+' 0px, '+clrTip(tip)+' 20px, '+clrRing(ring)+' 20px, '+clrRing(ring)+' 30px)';
  }
}
function clrPair(iPair) {
  var data = getTipRing(iPair);
  return clrStripe(data['tip'], data['ring'], false);
}
function clrRing(ring) {
  const colRing = ["#00F","#FA1","#0F0","#B73","#AAA"];
  return colRing[ring-1];
}
function clrTip(tip) {
  const colTip = ["#FFF","#F00","#000","#FF0","#F0F"];
  return colTip[tip-1];
}