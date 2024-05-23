//variables that are a list of jobs.
//used to populate the HTML of the vacanvies page and the drop down in the work for us page
var job1 = "Front End Developer"
var job2 = "Back End Developer"
var job3 = "UI/UX Designer"
var job4 = "DevOps Engineer"
var job5 = "Quality Assurance (QA) Engineer"



//variables job1 etc are declared above
//function called in the vacancies page
window.onload = BuildVacancies;
//set up the HTML of the job
function BuildVacancies()
{
    document.getElementById("job1").innerHTML = job1.toString();
    document.getElementById("job2").innerHTML = job2.toString();
    document.getElementById("job3").innerHTML = job3.toString();
    document.getElementById("job4").innerHTML = job4.toString();
    document.getElementById("job5").innerHTML = job5.toString();

}



//function called when the work for us page loads
window.onload = BuildVacancyList;

//function that popualates the drop down in the page with the job list above
function BuildVacancyList() {

    //get the drop dowwn
    var x = document.getElementById("JobType");
    //create an option element
    var option1 = document.createElement("option");
    //set the text to the variable
    option1.text = job1;
    //add to the drop down list
    x.add(option1);

    //repeat for the remaining 4 variables.
    var option2 = document.createElement("option");
    option2.text = job2;
    x.add(option2);

    var option3 = document.createElement("option");
    option3.text = job3;
    x.add(option3);

    var option4 = document.createElement("option");
    option4.text = job4;
    x.add(option4);

    var option5 = document.createElement("option");
    option5.text = job5;
    x.add(option5);


}

//function used on the button click event of the form
//runs a validation check against all relevant fields
function ValidateVacancyForm() {
    var returnValue;
    var flag1, flag2, flag3, flag4;

    //check the first name
    //if it's empty
    if (document.forms["VacancyApplicationForm"]["fname"].value == "") {
        //set the error text
        document.getElementById("fNameError").innerHTML = "Please enter your First Name";
        flag1 = false;
    }
    else {//clear the error text
        document.getElementById("fNameError").innerHTML = "";
        flag1 = true;//this is OK
    }

    //check the last name if its empty
    if (document.forms["VacancyApplicationForm"]["sname"].value == "") {
        document.getElementById("sNameError").innerHTML = "Please enter your Last Name";
        flag2 = false;
    }
    else {//clear the error
        document.getElementById("sNameError").innerHTML = "";
        flag2 = true;
    }

    //make sure that at least one of the radio buttons are checked
    if (document.getElementById("ukResidentYes").checked == false && document.getElementById("ukResidentNo").checked == false) {
        document.getElementById("ukResidentError").innerHTML = "Please state if you are a UK Resident";
        flag3 = false;
    }
    else {
        document.getElementById("ukResidentError").innerHTML = "";
        flag3 = true;
    }

    //first check the phone number has been entered
    if (document.forms["VacancyApplicationForm"]["telNo"].value == "") {
        document.getElementById("telNoError").innerHTML = "Please enter your contact details";
        flag4 = false;
    }
    else {//something has been entered so now we check this
        var telNo = document.forms["VacancyApplicationForm"]["telNo"].value;

        if (isNaN(telNo)) {//if its not a number..
            document.getElementById("telNoError").innerHTML = "Please make sure your contact details is a number";
            flag4 = false;
        }
        else if (telNo.length < 10 || telNo.length > 12) {//check the length. Must be 11 numbers to be a mobile
            document.getElementById("telNoError").innerHTML = "This phone number is incorrect, please check and try again";
            flag4 = false;
        }
        else {//the number is good, clear the error field
            document.getElementById("telNoError").innerHTML = "";
            flag4 = true;
        }
    }


    //if all these have passed
    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        returnValue = true;
        //send the user to the thank you page
        window.location.href("iThankYou.html");
    }
    else
    {
        //this is false so keep the user at this page.
        returnValue = false;
    }

    return returnValue;
}