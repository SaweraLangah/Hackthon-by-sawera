document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    function validateForm() {
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("Please fill are required fields correctly.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experiance = document.getElementById("experiance").value;
        var skills = document.getElementById("skills").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        //populate resume//
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperiance").innerText = experiance;
        document.getElementById("displaySkills").innerText = skills;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                document.getElementById("displayPicture").src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
    }
    ;
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    // generate resume //
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("picture")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("education")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("experiance")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("skills")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    var workEducation = document.getElementById("workEducation");
    var workExperiance = document.getElementById("workExperiance");
    var workSkills = document.getElementById("workSkills");
    workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
        var updateEducation = event.target.innerText;
        console.log(updateEducation);
    });
    workExperiance === null || workExperiance === void 0 ? void 0 : workExperiance.addEventListener("input", function (event) {
        var updateExperiance = event.target.innerText;
        console.log(updateExperiance);
    });
    workSkills === null || workSkills === void 0 ? void 0 : workSkills.addEventListener("input", function (event) {
        var updateSkills = event.target.innerText;
        console.log(updateSkills);
    });
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadpdf = document.getElementById("downloadpdf");
downloadpdf === null || downloadpdf === void 0 ? void 0 : downloadpdf.addEventListener("click", function () {
    window.print();
});
