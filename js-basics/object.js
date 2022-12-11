//

let babin = {
    firstName : 'Babin',
    lastName : 'Nepali',
    gender: 'Male',
    status : 'Rich',
    age : '22',
    weight : '65',
    height : '169.6',
    BMI: function (){
        return this.weight/ (this.height ** this.height)
    }
}
console.log(babin);