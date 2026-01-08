 console.log('this script is for async practice')


function callme(){
    console.log('bruger has arrived')
}

function orderburger(callback){
    console.log("ordering burger")
    setTimeout(()=>{
        callback()
    },3000)
}


orderburger(callme)



function checkSum(a,b){
    console.log(a+b)
}

checkSum(5,6)




function checkEO(x){
    if (x % 2 == 0 ){
        return x + "the number is even"
    }else {
        return x + " the given numer is odd"
    }
}

checkEO(45)



// counting how many times a number appears 

let t = [1,2,3,4,2,3,4,4]
let target = 2
let count_t = 0

for (i = 0; i < t.length; i++){
    if (t[i] === target ){
        count_t ++;
    }
}

console.log(count_t)


// calculating sum of array 

nums = [2,3,6,8,12]
total = 0 

for (i=0;i < nums.length;i++){
    total += nums[i] 
}

console.log(total)


// finding the largest number 

val = [10,45,23,9,12]
n_l = 0


for (i=0; i<val.length;i++){
    if (val[i] > n_l){
        n_l = val[i]
    }
}

console.log(n_l)


//  count even numbers

val_1 = [2,3,412,3,85,97,12]
count_even = 0 

for (i=0; i<val_1.length;i++){
    if ( val_1[i] % 2 == 0){
        count_even ++
    } 
}

console.log(count_even)

// remove duplicates 

arr_1 = [1,2,3,4,5,6,7,8]
uniqueArr = [] 

for (i=0; i < arr_1.length ; i++){
    if ( uniqueArr.includes(arr_1[i])){
        uniqueArr.push(arr[i])
    }
}
// another logic - try creating an set of uniques elements from the arr loop the unique arr with the arr and push the value in new ones 
console.log(uniqueArr)


// find number greater than 10 and smaller than 10 - make a list 

value_1  = [23,4,5,6,5,25,43,4,534,6,56,57,6,7,64,45,4,67,6,58]
num_list = []
num_list_2 = []
for (i=0;i<value_1.length;i++){
    if (value_1[i] > 10){
        num_list.push(value_1[i])
    } else{
        num_list_2.push(value_1[i])
    }

}
console.log('list of number greater than 10',num_list)
console.log('list of number less than 10',num_list_2)


// count vowels in a string  


str =  'my name is rohit, I love playing football'
vowels = 'aieou'
count_a = 0 

for (i=0;i < str.length;i++){
    if (vowels.includes(str[i])){
        count_a ++
    }
}

console.log(count_a)

// find the longest word in a sentence 

let sentence = " rohit loves playing football"

let words = sentence.split(' ')
let longestWord = ""

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i]
    }
}

console.log(longestWord)













