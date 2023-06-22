const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  var max = 0;
  for (var i=0; i<sentences.length; i++){
    var newSubArray = sentences[i].split(' ');
    var lemgthOfArray =newSubArray.length;

    if (lemgthOfArray > max){
      max =lemgthOfArray
    }
  }
  return max;
}

console.log(result(sentences));