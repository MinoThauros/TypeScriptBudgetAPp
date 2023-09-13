let student: {
    name: string;
    id: string;
    isFunny: boolean;
}={
    //let allows to redefine the value of a property later
    // but the typing for the object is defined/locked in the first time you declare it
    name:'anache',
    id:'4',
    isFunny:true
  }

  
  
const {id,isFunny}=student

console.log(isFunny)


/*
<Spending spending={spending} Delete={Delete} Edit={Edit} optional={optional}/>

...
props.spendings
props.Delete

const {spending,Delete,Edit,optional}=props
*/