function pairDecode(iQuestion) {
  var ret = new Object();
  
  ret["s_binder"] = Math.floor(iQuestion / 600)+1;
    
  ret["binder"] = Math.floor(iQuestion / 25)+1;
  ret["binder_tip"] = Math.ceil(ret["binder"]/5);
  ret["binder_ring"] = ret["binder"] - (Math.ceil(ret["binder"]/5)*5-5);
    
  ret["pair"] = iQuestion - ((ret["binder"]-1) * 25);
  ret["pair_tip"] = Math.ceil(ret["pair"]/5);
  ret["pair_ring"] = ret["pair"] - (Math.ceil(ret["pair"]/5)*5-5);
  return ret;
}