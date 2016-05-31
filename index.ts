//boolean
let a:boolean = false;

//string
let b:string = 'sdf';

//number
let c:number = 5;

//array
let d:number[]=[1,2,3];

//tuple
let e:[number,boolean]=[1,false];

//enum
enum Color {Red, Green, Blue};
let f: Color = Color.Green;

//any
let g:any={}
let h:any[]=[1,'sf',false]

//void
let i:void=null

//类型推断
let j:any="10"
let k:number=(j as string).length

//解构
let [first,second]=[1,2]
let m={one:1,two:2,three:3}
let {one,two}=m

let [l,...rest]=[1,2,3,4]
console.log(l)//1
console.log(rest)//[2,3,4]

//interface

interface animal{
    head?:string,
    size?:number
}
function logAnimal (a:animal):void{
    console.log(a)
}
logAnimal({size:10,tail:'t'} as animal)
let n:animal={size:10,head:'t'}


interface SearchFunc{
    (source:string,substring:string,a?:number):boolean
}

let searchFunc:SearchFunc=function(source,substring,a){

    return false
}

interface ClockInterface {
    currentTime: Date;
    setTime(d:Date)
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d){}
    constructor(h: number, m: number) { }
}

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

//class

class Animal{
    private name:string;
    move(distance:number):void{}
}
let dog=new Animal()
// dog.name

//getter setter
class Money{
    static myMoney:number=200
    private _value:number=10;
    get value(){return this._value}
    set value(value:number){
        this._value=value
    }
}
let money=new Money()
console.log(money.value)//10
money.value=20
console.log(money.value)//20
console.log(Money.myMoney)//200

//function

let myFunc:(arg1:string,arg2:number)=>string=function(x,y){return x+y}
let myFunc1=function(arg1:string,arg2:string,...restArg:string[]):string{
    console.log(restArg)
    return arg1+arg2}
myFunc1("a","b","c","d")

//泛型

let myFunc2=function<T>(arg:T):T{return arg}
myFunc2(2)

interface MyFunc{
    <T>(arg:T):T;
}
let myfunc3:MyFunc=function(arg){return arg}