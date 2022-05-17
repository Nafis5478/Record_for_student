function result(){
    var students={
        SHIVANKAR: {
            math: "95",
            physics: "80",
            literature: "75",
            attendence: "Present",
            attentive:"Attentive",

        },
        SAYAN: {
            math: "95",
            physics: "80",
            literature: "75",
            attendence: "Present",
            attentive:"Attentive",
        },
        DORA: {
            math: "95",
            physics: "80",
            literature: "75",
            attendence: "Absent",
            attentive:"Not Present",
        }
    }
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition= students[input];
    var output= document.getElementById("output");

    if(definition==undefined){
        output.innerHTML=`<hr> There is no information about this student. <hr>`;
    }
    else{
        output.innerHTML= `<hr> Maths Score is ${definition.math}. <hr> Physics Score is ${definition.physics}. <hr> Literature Score is ${definition.literature}.<hr> He is ${definition.attendence}.<hr> ${definition.attentive} in the class. <hr>`
    }
}