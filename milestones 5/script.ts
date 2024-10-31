document.addEventListener("DOMContentLoaded" , ()=> {
    function validateForm(){
        const form = document.getElementById("resumeform") as HTMLFormElement;
        if(!form.checkValidity){
            alert("Please fill are required fields correctly.")
            return false;
        }
        return true;
    }

    function generateResume() {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experiance = (document.getElementById("experiance") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];

        //populate resume//
        (document.getElementById("displayName") as HTMLElement).innerText =name;
        (document.getElementById("displayEmail") as HTMLElement).innerText =email;
        (document.getElementById("displayPhone") as HTMLElement).innerText =phone;
        (document.getElementById("displayEducation") as HTMLElement).innerText =education;
        (document.getElementById("displayExperiance") as HTMLElement).innerText =experiance;
        (document.getElementById("displaySkills") as HTMLElement).innerText =skills;

        if (picture){
            const reader = new FileReader();
            reader.onload = function (event) {
                (document.getElementById("displayPicture") as HTMLImageElement).src =event.target?.result as string;
            };
            reader.readAsDataURL(picture);
        }
    };

    document.getElementById("resumeform")?.addEventListener("submit",function(event){
        event.preventDefault();
        if (validateForm()){
            generateResume();
        }
    })

    // generate resume //

    document.getElementById("name")?.addEventListener("input", generateResume);
    document.getElementById("picture")?.addEventListener("input", generateResume);
    document.getElementById("email")?.addEventListener("input", generateResume);
    document.getElementById("phone")?.addEventListener("input", generateResume);
    document.getElementById("education")?.addEventListener("input", generateResume);
    document.getElementById("experiance")?.addEventListener("input", generateResume);
    document.getElementById("skills")?.addEventListener("input", generateResume);

    const workEducation = document.getElementById("workEducation");
    const workExperiance = document.getElementById("workExperiance");
    const workSkills = document.getElementById("workSkills");

    workEducation?.addEventListener("input",(event)=>{
        const updateEducation = (event.target as HTMLElement).innerText;
        console.log(updateEducation)
    })

    workExperiance?.addEventListener("input",(event)=>{
        const updateExperiance = (event.target as HTMLElement).innerText;
        console.log(updateExperiance)
    })

    workSkills?.addEventListener("input",(event)=>{
        const updateSkills = (event.target as HTMLElement).innerText;
        console.log(updateSkills)
    })
})

const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click",()=>{

})

const downloadpdf = document.getElementById("downloadpdf") as HTMLButtonElement
downloadpdf?.addEventListener("click",()=>{
    window.print()
    
})

