//theme button
const themeButton = document.getElementById("theme");

//form selection
const form = document.getElementById("regform");

//form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const genderInput = document.getElementById("gender");
const dobInput = document.getElementById("dob");
const countryInput = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const bioInput = document.getElementById("bio");

//error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const genderError = document.getElementById("genderError");
const dobError = document.getElementById("dobError");
const countryError = document.getElementById("countryError");
const phoneError = document.getElementById("phoneError");
const bioError = document.getElementById("bioError");

//success message
const successMsg = document.getElementById("successMsg");

//member list
const memberList = document.getElementById("memberList");

//counter
const count = document.getElementById("count");

//empty note
const emptyNote = document.getElementById("emptyNote");

//elements in console
console.log("Form:", form);
console.log("Name:", nameInput);
console.log("Email:", emailInput);
console.log("Password:", passwordInput);
console.log("Confirm Password:", confirmPasswordInput);
console.log("Gender:", genderInput);
console.log("Date Of Birth:", dobInput);
console.log("Country:", countryInput);
console.log("Phone;", phoneInput);
console.log("Bio:", bioInput);

console.log("Name Error:", nameError);
console.log("Email Error:", emailError);
console.log("Password Error:", passwordError);
console.log("Confirm Password:", confirmError);
console.log("Gender Error:", genderError);
console.log("Date Of Birth Error:", dobError);
console.log("Country Error:", countryError);
console.log("Phone Error:", phoneError);
console.log("Bio Error:", bioError);

console.log("Success Message:", successMsg);
console.log("Member List:", memberList);
console.log("Member Counter:", count);
console.log("Empty Note:", emptyNote);
console.log("Dark Mode Button:", themeButton);

function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    genderError.textContent = "";
    dobError.textContent = "";
    countryError.textContent = "";
    phoneError.textContent = "";
    bioError.textContent = "";
}

//validation
function validateForm() {
    let isValid = true;

    clearErrors();

    //validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        isValid = false;
    } else if (nameInput.value.trim().length < 2){
        nameError.textContent = "Name must contain at least 2 characters.";
        isValid = false;
    }

    //validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    //validate password
    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    //validate confiem password
    if (confirmPasswordInput.value === "") {
        confirmError.textContent = "Please Confirm Password!";
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = "Passwords do not match.";
        isValid = false;
    }

    //validate gender
    if (genderInput.value === "") {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    }

    //validate date of birth
    if (dobInput.value === "") {
        dobError.textContent = "Date of birth is required.";
        isValid = false;
    } else if (dobInput.value > new Date().toISOString().split("T")[0])
    {
        dobError.textContent = "Date of Birth cannot be in the future.";
        isValid = false;
    }

    //validate country
    if (countryInput.value.trim() === "") {
        countryError.textContent = "Country is required.";
        isValid = false;
    }

    //validate phone
    const phonePattern = /^\+?[\d\s()-]{7,20}$/;

    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Enter a valid phone number.";
        isValid = false;
    }

    //validate bio
    if (bioInput.value.trim() === "") {
        bioError.textContent = "Bio is required.";
        isValid = false;
    } else if (bioInput.value.trim().length < 10) {
        bioError.textContent = "Bio must contain at least 10 characters.";
        isValid = false;
    }

    return isValid;
}

//clear errors whenever user edits the fields
nameInput.addEventListener("input", () => {
    nameError.textContent = "";
});

emailInput.addEventListener("input", () => {
    emailError.textContent = "";
});

passwordInput.addEventListener("input", () => {
    passwordError.textContent = "";
});

confirmPasswordInput.addEventListener("input", () => {
    confirmError.textContent = "";
});

countryInput.addEventListener("input", () => {
    countryError.textContent = "";
});

phoneInput.addEventListener("input", () => {
    phoneError.textContent = "";
});

bioInput.addEventListener("input", () => {
    bioError.textContent = "";
});

//clear errors when user changes selection
genderInput.addEventListener("change", () => {
    genderError.textContent = "";
});

dobInput.addEventListener("change", () => {
    dobError.textContent = "";
});



function registerMember() {
    //getting the form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const gender = genderInput.value;
    const dob = dobInput.value;
    const country = countryInput.value.trim();
    const phone = phoneInput.value.trim();
    const bio = bioInput.value.trim();

    //remove the empty state message
    if (emptyNote) {
        emptyNote.remove();
    }

    //new list item
    const memberItem = document.createElement("li");
    memberItem.classList.add("member-item");

    //member's name heading
    const memberName = document.createElement("h3");
    memberName.textContent = name;

    //member details
    const memberEmail = document.createElement("p");
    memberEmail.textContent = `Email: ${email}`;

    const memberGender = document.createElement("p");
    memberGender.textContent = `Gender: ${gender}`;

    const memberDob = document.createElement("p");
    memberDob.textContent = `Date of Birth: ${dob}`;

    const memberCountry = document.createElement("p");
    memberCountry.textContent = `Country: ${country}`;

    const memberPhone = document.createElement("p");
    memberPhone.textContent = `Phone: ${phone}`;

    const memberBio = document.createElement("p");
    memberBio.textContent = `Bio: ${bio}`;

    //remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "remove";
    removeButton.classList.add("remove-btn");

    //adding details to member item
    memberItem.append(
        memberName,
        memberEmail,
        memberGender,
        memberDob,
        memberCountry,
        memberPhone,
        memberBio,
        removeButton
    );

    //adding member to the list
    memberList.appendChild(memberItem);

    //updating member counter
    updateCounter();

}


function updateCounter() {
    const totalMembers = memberList.querySelectorAll(".member-item").length;

    count.textContent = totalMembers;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Hide any previous success message
    successMsg.textContent = "";
    successMsg.classList.add("hidden");

    //stop if the form is invalid
    if (!validateForm()) {
        return;
    }

    //register new member
    registerMember();

    //show success message
    successMsg.textContent = "Member registered successfully!";
    successMsg.classList.remove("hidden");

    //reset form
    form.reset();

    //clear any remaining errors
    clearErrors();
});

memberList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        const memberItem = event.target.closest(".member-item");

        if (memberItem) {
            memberItem.remove();
            updateCounter();
        }

        //restore the empty state message if no members remain
        const remainingMembers = memberList.querySelectorAll(".member-item").length;

        if (remainingMembers === 0) {
            const newEmptyNote = document.createElement("li");

            newEmptyNote.classList.add("empty");
            newEmptyNote.id = "emptyNote";
            newEmptyNote.textContent = "No members yet. Register someone to begin.";

            memberList.appendChild(newEmptyNote);

        }
    }
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle ("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});