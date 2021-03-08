function AllClassWork(){
    let example = ["Apple", "Banana"];

    // let result1 = [];
    // for(item of example){
    //   result1.push("!" + item + "!")
    // }
    
    
    // let result2 = [];
    // for(i in example){
    //   result2.push("!" + example[i] + "!")
    // }
    
    
    let result3 = [];
    example.forEach(function (item){
      result3.push("!" + item + "!")
    })
    
    
    let result4 = example.map(function(item){
      return("!" + item + "!")
    })
    
    
    let result5 = [];
    for(let i = 0; i < example.length; i++){
      result5.push("!" + i + "!")
    }
    
    // console.log(result1, result2, result3, result4, result5)
    
    
    
    let example2 = [5, 10, 7, -1];
    
    let result6 = [];
    for (let i = 0; i < example2.length; i++) {
      result6.push(example2[i] * 2);
    }
    let result7 = [];
    for (let i in example2) {
      result7.push(example2[i] * 2);
    }
    let result8 = [];
    for (let item of example2) {
      result8.push(item * 2);
    }
    let result9 = [];
    example2.forEach(function(item) {
      result9.push(item * 2);
    });
    let result10 = example2.map(function(item){
       return item * 2;
    });
    // console.log(result6, result7, result8, result9, result10);
    
    
    
    let example3 = [
      ["Apple", "Pear"],
      ["Apple", "Pear", "Banana"],
      ["Apple"],
      []
    ]
    
    let result11 = []
    
    for(let i = 0; i < example3.length; i++){
      result11.push(example3[i].length)
    }
    
    let result12 = [];
    
    for(let item of example3){
      result12.push(item.length)
    }
    // let result13 = [];


    
    // for(i in example3){
    //   result13.push(example3[i].length)
    // }
    
    let result14 = [];
    example3.forEach(function (item){
      result14.push(item.length)
    })
    
    let result15 = example3.map(function(item){
      return (item.length)
    })
    // console.log(result11, result12, result13, result14, result15)
    
    
    
    // let people = [
    //   {name: "Elon Baike", wealth: "Mnogo"},
    //   {name: "Jeff Baike", wealth: "Mnogo"},
    //   {name: "Bill Baike", wealth: "Mnogo"},
    // ];
    // let names1 = ["Elon Baike", "Jeff Baike", "Jeff Baike"];
    // let names2 = ["Elon Baike", "Jeff Baike", "Jeff Baike"];
    // let names3 = ["Elon Baike", "Jeff Baike", "Jeff Baike"];
    // let names4 = ["Elon Baike", "Jeff Baike", "Jeff Baike"];
    // let names5 = ["Elon Baike", "Jeff Baike", "Jeff Baike"];
    
    // let result16 = []
    
    // for(let i = 0; i < people.length; i++){
    //   result16.push(people[i].names1)
    // }
    
    // console.log(result16)
}
export default AllClassWork;