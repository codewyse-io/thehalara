<template>
<section class="sec_privacy no_padd">
    <div class="container-fluid">
        <div class="main_ambassador_sec">
            <div class="third_fold">
                <img class="DesktopView" :src="require('../assets/images/ambassadar1.jpg')" alt="">
                <img class="d-none mobileView" :src="require('../assets/images/ambassador_mobile_banner.jpg')" alt="">

            </div>
            <div class="ambassador_form">
                <h2>Application Form</h2>
                <p>We will review and contact you in 1-2 working days.</p>
                <form action="">
                    <div class="input_fileds_ambas">
                        <label for="name">Full Name*</label>
                        <input type="text" name="name" id="name">
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="college">College or University</label>
                        <input type="text" name="college" id="college">
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="email">Email*</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="insta_handle">Instagram Handle*</label>
                        <input type="text" name="insta_handle" id="insta_handle">
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="phone">Phone*</label>
                        <input type="number" name="phone" id="phone">
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="phone">Other Social Accounts(Optional)</label>
                        <select name="" id="">
                            <option value="select platform" selected>select platform</option>
                            <option value="Tiktok">Tiktok</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Blog">Blog</option>
                        </select>
                    </div>
                    <div class="input_fileds_ambas">
                        <label for="phone">Current Location(Country / Region)</label>
                        <select id="CurrentLocationCountry" >
                            <option value="" selected>Select Country / Region...</option>
                            <option value="Aland Islands" >
                                Aland Islands
                            </option>
                            <option value="American Samoa" >
                                American Samoa
                            </option>
                            <option value="Andorra" >
                                Andorra
                            </option>
                            <option value="Anguilla" >
                                Anguilla
                            </option>
                            <option value="Antarctica" >
                                Antarctica
                            </option>
                            <option value="Antigua and Barbuda" >
                                Antigua and Barbuda
                            </option>
                            <option value="Aruba" >
                                Aruba
                            </option>
                            <option value="Australia" >
                                Australia
                            </option>
                            <option value="Austria" >
                                Austria
                            </option>
                            <option value="Azerbaijan" >
                                Azerbaijan
                            </option>
                            <option value="Bahamas" >
                                Bahamas
                            </option>
                            <option value="Bahrain" >
                                Bahrain
                            </option>
                            <option value="Bangladesh" >
                                Bangladesh
                            </option>
                            <option value="Barbados" >
                                Barbados
                            </option>
                            <option value="Belgium" >
                                Belgium
                            </option>
                            <option value="Belize" >
                                Belize
                            </option>
                            <option value="Bermuda" >
                                Bermuda
                            </option>
                            <option value="Bhutan" >
                                Bhutan
                            </option>
                            <option value="Bonaire, Saint Eustatius and Saba " >
                                Bonaire, Saint Eustatius and Saba
                            </option>
                            <option value="Bosnia and Herzegovina" >
                                Bosnia and Herzegovina
                            </option>
                            <option value="Bouvet Island" >
                                Bouvet Island
                            </option>
                            <option value="Brazil" >
                                Brazil
                            </option>
                            <option value="British Indian Ocean Territory" >
                                British Indian Ocean Territory
                            </option>
                            <option value="British Virgin Islands" >
                                British Virgin Islands
                            </option>
                            <option value="Brunei" >
                                Brunei
                            </option>
                            <option value="Bulgaria" >
                                Bulgaria
                            </option>
                            <option value="Cabo Verde" >
                                Cabo Verde
                            </option>
                            <option value="Cambodia" >
                                Cambodia
                            </option>
                            <option value="Canada" >
                                Canada
                            </option>
                            <option value="Cayman Islands" >
                                Cayman Islands
                            </option>
                            <option value="Central African Republic" >
                                Central African Republic
                            </option>
                            <option value="Chile" >
                                Chile
                            </option>
                            <option value="China" >
                                China
                            </option>
                            <option value="Christmas Island" >
                                Christmas Island
                            </option>
                            <option value="Cocos Islands" >
                                Cocos Islands
                            </option>
                            <option value="Colombia" >
                                Colombia
                            </option>
                            <option value="Comoros" >
                                Comoros
                            </option>
                            <option value="Cook Islands" >
                                Cook Islands
                            </option>
                            <option value="Croatia" >
                                Croatia
                            </option>
                            <option value="Curacao" >
                                Curacao
                            </option>
                            <option value="Cyprus" >
                                Cyprus
                            </option>
                            <option value="Czechia" >
                                Czechia
                            </option>
                            <option value="Denmark" >
                                Denmark
                            </option>
                            <option value="Djibouti" >
                                Djibouti
                            </option>
                            <option value="Dominica" >
                                Dominica
                            </option>
                            <option value="Dominican Republic" >
                                Dominican Republic
                            </option>
                            <option value="El Salvador" >
                                El Salvador
                            </option>
                            <option value="Equatorial Guinea" >
                                Equatorial Guinea
                            </option>
                            <option value="Eritrea" >
                                Eritrea
                            </option>
                            <option value="Estonia" >
                                Estonia
                            </option>
                            <option value="Eswatini" >
                                Eswatini
                            </option>
                            <option value="Falkland Islands" >
                                Falkland Islands
                            </option>
                            <option value="Faroe Islands" >
                                Faroe Islands
                            </option>
                            <option value="Finland" >
                                Finland
                            </option>
                            <option value="France" >
                                France
                            </option>
                            <option value="French Guiana" >
                                French Guiana
                            </option>
                            <option value="French Polynesia" >
                                French Polynesia
                            </option>
                            <option value="French Southern Territories" >
                                French Southern Territories
                            </option>
                            <option value="Gambia" >
                                Gambia
                            </option>
                            <option value="Germany" >
                                Germany
                            </option>
                            <option value="Gibraltar" >
                                Gibraltar
                            </option>
                            <option value="Greece" >
                                Greece
                            </option>
                            <option value="Greenland" >
                                Greenland
                            </option>
                            <option value="Guadeloupe" >
                                Guadeloupe
                            </option>
                            <option value="Guam" >
                                Guam
                            </option>
                            <option value="Guernsey" >
                                Guernsey
                            </option>
                            <option value="Guinea-Bissau" >
                                Guinea-Bissau
                            </option>
                            <option value="Guyana" >
                                Guyana
                            </option>
                            <option value="Heard Island and McDonald Islands" >
                                Heard Island and McDonald Islands
                            </option>
                            <option value="Hong Kong" >
                                Hong Kong
                            </option>
                            <option value="Hungary" >
                                Hungary
                            </option>
                            <option value="Iceland" >
                                Iceland
                            </option>
                            <option value="Ireland" >
                                Ireland
                            </option>
                            <option value="Isle of Man" >
                                Isle of Man
                            </option>
                            <option value="Israel" >
                                Israel
                            </option>
                            <option value="Italy" >
                                Italy
                            </option>
                            <option value="Ivory Coast" >
                                Ivory Coast
                            </option>
                            <option value="Japan" >
                                Japan
                            </option>
                            <option value="Jersey" >
                                Jersey
                            </option>
                            <option value="Kazakhstan" >
                                Kazakhstan
                            </option>
                            <option value="Kenya" >
                                Kenya
                            </option>
                            <option value="Kiribati" >
                                Kiribati
                            </option>
                            <option value="Kosovo" >
                                Kosovo
                            </option>
                            <option value="Kuwait" >
                                Kuwait
                            </option>
                            <option value="Kyrgyzstan" >
                                Kyrgyzstan
                            </option>
                            <option value="Latvia" >
                                Latvia
                            </option>
                            <option value="Lebanon" >
                                Lebanon
                            </option>
                            <option value="Lesotho" >
                                Lesotho
                            </option>
                            <option value="Libya" >
                                Libya
                            </option>
                            <option value="Lithuania" >
                                Lithuania
                            </option>
                            <option value="Luxembourg" >
                                Luxembourg
                            </option>
                            <option value="Macao" >
                                Macao
                            </option>
                            <option value="Malaysia" >
                                Malaysia
                            </option>
                            <option value="Maldives" >
                                Maldives
                            </option>
                            <option value="Malta" >
                                Malta
                            </option>
                            <option value="Marshall Islands" >
                                Marshall Islands
                            </option>
                            <option value="Martinique" >
                                Martinique
                            </option>
                            <option value="Mauritania" >
                                Mauritania
                            </option>
                            <option value="Mayotte" >
                                Mayotte
                            </option>
                            <option value="Mexico" >
                                Mexico
                            </option>
                            <option value="Micronesia" >
                                Micronesia
                            </option>
                            <option value="Moldova" >
                                Moldova
                            </option>
                            <option value="Montenegro" >
                                Montenegro
                            </option>
                            <option value="Montserrat" >
                                Montserrat
                            </option>
                            <option value="Morocco" >
                                Morocco
                            </option>
                            <option value="Nauru" >
                                Nauru
                            </option>
                            <option value="Netherlands" >
                                Netherlands
                            </option>
                            <option value="Netherlands Antilles" >
                                Netherlands Antilles
                            </option>
                            <option value="New Caledonia" >
                                New Caledonia
                            </option>
                            <option value="New Zealand" >
                                New Zealand
                            </option>
                            <option value="Niue" >
                                Niue
                            </option>
                            <option value="Norfolk Island" >
                                Norfolk Island
                            </option>
                            <option value="North Macedonia" >
                                North Macedonia
                            </option>
                            <option value="Norway" >
                                Norway
                            </option>
                            <option value="Oman" >
                                Oman
                            </option>
                            <option value="Palau" >
                                Palau
                            </option>
                            <option value="Philippines" >
                                Philippines
                            </option>
                            <option value="Pitcairn" >
                                Pitcairn
                            </option>
                            <option value="Poland" >
                                Poland
                            </option>
                            <option value="Portugal" >
                                Portugal
                            </option>
                            <option value="Puerto Rico" >
                                Puerto Rico
                            </option>
                            <option value="Qatar" >
                                Qatar
                            </option>
                            <option value="Republic of the Congo" >
                                Republic of the Congo
                            </option>
                            <option value="Reunion" >
                                Reunion
                            </option>
                            <option value="Romania" >
                                Romania
                            </option>
                            <option value="Rwanda" >
                                Rwanda
                            </option>
                            <option value="Saint Barthelemy" >
                                Saint Barthelemy
                            </option>
                            <option value="Saint Helena" >
                                Saint Helena
                            </option>
                            <option value="Saint Kitts and Nevis" >
                                Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia" >
                                Saint Lucia
                            </option>
                            <option value="Saint Martin" >
                                Saint Martin
                            </option>
                            <option value="Saint Pierre and Miquelon" >
                                Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and the Grenadines" >
                                Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa" >
                                Samoa
                            </option>
                            <option value="Sao Tome and Principe" >
                                Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia" >
                                Saudi Arabia
                            </option>
                            <option value="Serbia" >
                                Serbia
                            </option>
                            <option value="Serbia and Montenegro" >
                                Serbia and Montenegro
                            </option>
                            <option value="Sierra Leone" >
                                Sierra Leone
                            </option>
                            <option value="Singapore" >
                                Singapore
                            </option>
                            <option value="Sint Maarten" >
                                Sint Maarten
                            </option>
                            <option value="Slovakia" >
                                Slovakia
                            </option>
                            <option value="Slovenia" >
                                Slovenia
                            </option>
                            <option value="Solomon Islands" >
                                Solomon Islands
                            </option>
                            <option value="South Africa" >
                                South Africa
                            </option>
                            <option value="South Georgia and the South Sandwich Islands" >
                                South Georgia and the South Sandwich Islands
                            </option>
                            <option value="South Korea" >
                                South Korea
                            </option>
                            <option value="Spain" >
                                Spain
                            </option>
                            <option value="Suriname" >
                                Suriname
                            </option>
                            <option value="Svalbard and Jan Mayen" >
                                Svalbard and Jan Mayen
                            </option>
                            <option value="Sweden" >
                                Sweden
                            </option>
                            <option value="Switzerland" >
                                Switzerland
                            </option>
                            <option value="Taiwan" >
                                Taiwan
                            </option>
                            <option value="Thailand" >
                                Thailand
                            </option>
                            <option value="Timor Leste" >
                                Timor Leste
                            </option>
                            <option value="Tokelau" >
                                Tokelau
                            </option>
                            <option value="Tonga" >
                                Tonga
                            </option>
                            <option value="Trinidad and Tobago" >
                                Trinidad and Tobago
                            </option>
                            <option value="Turkey" >
                                Turkey
                            </option>
                            <option value="Turkmenistan" >
                                Turkmenistan
                            </option>
                            <option value="Turks and Caicos Islands" >
                                Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu" >
                                Tuvalu
                            </option>
                            <option value="U.S. Virgin Islands" >
                                U.S. Virgin Islands
                            </option>
                            <option value="United Arab Emirates" >
                                United Arab Emirates
                            </option>
                            <option value="United Kingdom" >
                                United Kingdom
                            </option>
                            <option value="United States" >
                                United States
                            </option>
                            <option value="United States Minor Outlying Islands" >
                                United States Minor Outlying Islands
                            </option>
                            <option value="Uzbekistan" >
                                Uzbekistan
                            </option>
                            <option value="Vanuatu" >
                                Vanuatu
                            </option>
                            <option value="Vatican" >
                                Vatican
                            </option>
                            <option value="Vietnam" >
                                Vietnam
                            </option>
                            <option value="Wallis and Futuna" >
                                Wallis and Futuna
                            </option>
                            <option value="Western Sahara" >
                                Western Sahara
                            </option>
                        </select>
                    </div>
                    <div class="input_fileds_ambas">
                    <input type="submit" value="sign up">
                    <p>By applying to the Halara Ambassador program, you agree with our Terms And Conditions, Privacy Policy & Cookie Policy.</p>

                    </div>
                </form>
            </div>
            <div class="third_fold">
                <img class="DesktopView" :src="require('../assets/images/ambassadar2.jpg')" alt="">
                <img class="d-none mobileView" :src="require('../assets/images/ambassador_mobile_2.jpg')" alt="">

            </div>
            <div class="third_fold">
                <img class="DesktopView" :src="require('../assets/images/ambassadar3.jpg')" alt="">
                <img class="d-none mobileView" :src="require('../assets/images/ambassador_mobile_3.jpg')" alt="">

            </div>
            <div class="third_fold">
                <img class="DesktopView" :src="require('../assets/images/ambassadar4.jpg')" alt="">
                <img class="d-none mobileView" :src="require('../assets/images/ambassador_mobile_4.jpg')" alt="">

            </div>
            <div class="third_fold">
                <img class="DesktopView" :src="require('../assets/images/ambassadar5.jpg')" alt="">
                <img class="d-none mobileView" :src="require('../assets/images/ambassador_mobile_5.jpg')" alt="">

            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

<script>
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {

        FooterSection,
    }
};
</script>
