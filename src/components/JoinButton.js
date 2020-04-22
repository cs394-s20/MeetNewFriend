import {Button} from "rbx";
import React, { useState, useEffect } from 'react';
import firebase from '../shared/firebase.js'

const db = firebase.database().ref();

const getKeyByValue = (value,json) =>{
    let k = null;
    for (var key of Object.keys(json)){
        if(json[key]===value){
            k=key;
            return k;
        }
    }
    return k;
}



const checkIfExisting = (name,lst) => {

    var output = false;

    for (var key of Object.keys(lst)){
        if(lst[key]===name){
            output=true;
        }
    }

    return output;
    
}

const breakNumber = input =>{
    let current = parseInt(input.split("/")[0]);
    let total = parseInt(input.split("/")[1]);
    return [current,total];
}


const JoinButton = (props) => {

    const id = props["id"]
    const current = props["groupSize"]
    let grop = props["group"]
    const username = props["name"]

    const [group,setGroup] = useState(grop);
    const [value, setValue] = useState((checkIfExisting(username,group)) ? "Quit" : "Join");

        // else{
        //     console.log("failed, max size")
        // }

    
   const Clicking=()=>{
    if(value==="Quit"){
        let temp = group;
        // console.log(group);
        delete temp[getKeyByValue(username,temp)];
        // console.log("Quiting");
        // console.log(temp);
        // console.log(group);
        setGroup(temp);
        setValue("Join");

        db.child('events').child(id).child("people").set(group)
            .catch(error => {alert(error);
                            console.log("can't update database")});

        
        let [cur,max] = breakNumber(current);
        cur=cur-1;
        const val = cur.toString()+"/"+max.toString();
        const updatedSize = {"group-size":val};
                
        db.child('events').child(id).update(updatedSize)
            .catch(error => {alert(error);
                            console.log("can't update database")});


    }

    else{
        let temp =group;
        var count = Object.keys(group).length;
        temp[count+1]=username;
        // console.log("Joining");
        // console.log(group);
        setGroup(temp);
        setValue("Quit");
        var counting = Object.keys(group).length-1;
        
        const toPush = {};
        toPush[counting]=username;

        db.child('events').child(id).child("people").update(toPush)
            .catch(error => {alert(error);
                            console.log("can't update database")});

        let [cur,max] = breakNumber(current);
        cur=cur+1;
        const val = cur.toString()+"/"+max.toString();
        const updatedSize = {"group-size":val};
                
        db.child('events').child(id).update(updatedSize)
            .catch(error => {alert(error);
                            console.log("can't update database")});


    }   
   }

   const MaxReached =()=>{

    let [cur,max] = breakNumber(current);

    if(cur===max){
        return true;
    }
    else{
        return false;
    }
   }


    return (
        <Button onDoubleClick={() => Clicking()} disabled={username===null || (MaxReached()&&value==="Join")  }>
            {value}
        </Button>       
    );
};

export default JoinButton;


