var firebase = require('firebase');

firebase.initializeApp({
  databaseURL: "https://parse-2f285.firebaseio.com/",
});
var db = firebase.database();
var count = 0;
while(count<10){
var ref = db.ref('/food/sikdang/'+count);
ref.push({
    "han" : {
			"menu" :{
      "dinner" : "lfkasd"
    }
	}
});
count++;
Tread.sleep(10000);
}
