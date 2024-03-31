// let imagesDiv= document.getElementsByClassName("images")[0];
// let cactusDiv1= document.getElementsByClassName("cactusDiv")[0];
// let floorDiv= document.getElementsByClassName("floor")[0];

// const arr=['images/dino-run-0.png','images/dino-run-1.png']
// let i=0;
// let floorX=-90;
// let counter=0,counter1=0;
// setInterval(()=>{
//     i=0;
//     cactusDiv1.innerHTML=''
//     while (i < 2) {
//         console.log(arr[i]);
//       setTimeout(
//           (index) => {
//               imagesDiv.innerHTML = `<img src="${arr[index]}" alt="dinos" />`;
//               // myfunc(i);
//         },
//         250 * i,
//         i
//         ); //passing params to setTimeout func
//         //or
//       // function myfunc(index){imagesDiv.innerHTML = `<img src="${arr[index]}" alt="dinos" />`}
//       i++;
//       floorX-=100;
//       floorDiv.style.cssText = `position:relative;left:${floorX}px;display:flex;`;
//     }
//     let numCactus = Math.floor(Math.random() * 2 + 1);
//     console.log(numCactus);
//     if(floorX<-2490){ floorX=-90;  }
    
//     while(numCactus>0){
//         cactusDiv1.innerHTML += `<img src="images/cactus.png" alt="" class="cactus${numCactus}">`;
//         let cactusDiv =
//         document.getElementsByClassName(`cactus${numCactus}`)[0];
//         console.log(cactusDiv);
//         let nCactus= Math.floor(Math.random()*20 +1)
//         numCactus===2?(counter1 = nCactus,cactusDiv.style.cssText = `position:absolute;right:${
//             counter1 * 25 + 3090
//           }px;top:-50px`):(counter=nCactus ,cactusDiv.style.cssText = `position:absolute;right:${
//             counter1 * 25 + 3090
//           }px;top:-50px`);
        
//         numCactus--;
//   }
// },500)
