<template>
<div><h2>Modifiers</h2></div>
    <div class="mx-auto col-md-8">
        <!--Added a modifier .prevent to form submit, this prevents the form from refreshing, keeping the values on form -->
        <!--this was used another way in the methods below (check Forms.vue for reference) -->
        <form @submit.prevent="submitForm">
            <div class="col-md-6 form-group textLeft">
                <label for="name" class="form-label">Name</label>
                <!--Added a modifier .trim to v-model, this removes any additional whitespaces-->
                <!--Added a modifier .lazy to v-model, this updates the value after outfocusing the element-->
                <input v-model.trim.lazy="formValues.name" type="text" class="form-control" id="name">
            </div>
            <div class="col-md-6 form-group textLeft">
                <label for="profile" class="form-label">Profile Summary</label>
                <textarea v-model="formValues.profileSummary" type="text" class="form-control" id="profile" />
            </div>
            <div class="col-md-6 form-group textLeft">
                <label for="country">Country</label>
                <select class="form-control" id="country" v-model="formValues.country">
                    <option value="">-- Select --</option>
                    <option value="Finland">Finland</option>
                    <option value="Swinland">Swinland</option>
                </select>
            </div>
            <div class="col-md-6 form-group textLeft">
                <label for="location">Location</label>
                <select class="form-control" id="location" multiple v-model="formValues.location">
                    <option value="Uusimaa">Uusimaa</option>
                    <option value="Pirkanmaa">Pirkanmaa</option>
                </select>
            </div>
            <div class="col-md-6 form-check textLeft">
                <input class="form-check-input" type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
                <label class="form-check-label" for="remoteWork">Remote work</label>
            </div>
            <div class="textLeft pt-1"><h5>Skills</h5></div>
            <div class="col-md-6 textLeft">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="html" value="HTML+CSS" v-model="formValues.skillSet" />
                    <label class="form-check-label" for="html">HTML+CSS</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="csharp" value="C#" v-model="formValues.skillSet" />
                    <label class="form-check-label" for="csharp">C#</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="js" value="javascript" v-model="formValues.skillSet" />
                    <label class="form-check-label" for="js">javascript</label>
                </div>
            </div>
            <div class="textLeft pt-1"><h5>Years of experience</h5></div>
            <div class="col-md-6 textLeft">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="0-2" value="0-2" v-model="formValues.exp">
                    <label class="form-check-label" for="0-2">0-2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="3-5" value="3-5" v-model="formValues.exp">
                    <label class="form-check-label" for="3-5">3-5</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="6-inf" value="5-infinity" v-model="formValues.exp">
                    <label class="form-check-label" for="6-inf">6-infinity</label>
                </div>
            </div>
            <div class="col-md-6 form-group textLeft">
                <label for="age" class="form-label">Age</label>
                <!--Added a modifier .number to v-model-->
                <!--Added a keyboard event modifier @keyup.enter to input, when user presses enter in age field, the form will be submitted-->
                <input @keyup.enter="submitForm" v-model.number="formValues.age" type="number" class="form-control" id="age" />
                <!--You can use variety of buttons check: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#modifier_keys-->
            <p style="color: orange;">Press enter in Age -input field to submit data</p>
            </div>
            <!--<div class="col-md-6 pt-4 textLeft">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>-->

        </form>


        <div>
            <p>WYSIWYG</p>
        </div>
        <div style="background-color:beige">
            <pre class="smallText">{{JSON.stringify(formValues, null, 2)}}</pre>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Modifiers',
        data() {
            return {
                formValues: {
                    name: "",
                    profileSummary: "",
                    country: "",
                    location: [],
                    remoteWork: "no",
                    skillSet: [],
                    exp: "",
                    age: null,
                }
            };
        },
        methods: {
            submitForm() {
                /*This has been modified (check Forms.vue for reference)*/
                console.log(this.formValues);
            }
        },
    };
</script>

<style scoped>
    .textLeft {
        text-align: left;
    }

    .smallText {
        font-size: 10px;
    }
</style>