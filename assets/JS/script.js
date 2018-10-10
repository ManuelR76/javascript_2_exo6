var imageId = [  //Association des ID avec le html dans un tableau
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3'),
  document.getElementById('image4'),
  document.getElementById('image5'),
];
//Création de la boucle
for (var i = 0; i < imageId.length; i++) {
imageId[i].addEventListener("mouseover",function(){
  this.src = "images/"+[this.id]+"_2.jpg"
})
imageId[i].addEventListener("mouseout",function(){
  this.src = "images/"+[this.id]+".jpg" 
})}//fin de la boucle
