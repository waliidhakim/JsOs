function myFunction(y) {
    if (y === undefined) {
       y = 1;
    }
    var x = document.getElementById('myDIV-'+y);
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
 }