import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements DoCheck {
  // Temporary variables (until database integrated):
  countries: object[] = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'Andorra' },
    { id: 5, name: 'Angola' },
    { id: 6, name: 'Antigua and Barbuda' },
    { id: 7, name: 'Argentina' },
    { id: 8, name: 'Armenia' },
    { id: 9, name: 'Australia' },
    { id: 10, name: 'Austria' },
    { id: 11, name: 'Azerbaijan' },
    { id: 12, name: 'Bahamas' },
    { id: 13, name: 'Bahrain' },
    { id: 14, name: 'Bangladesh' },
    { id: 15, name: 'Barbados' },
    { id: 16, name: 'Belarus' },
    { id: 17, name: 'Belgium' },
    { id: 18, name: 'Belize' },
    { id: 19, name: 'Benin' },
    { id: 20, name: 'Bhutan' },
    { id: 21, name: 'Bolivia' },
    { id: 22, name: 'Bosnia and Herzegovina' },
    { id: 23, name: 'Botswana' },
    { id: 24, name: 'Brazil' },
    { id: 25, name: 'Brunei' },
    { id: 26, name: 'Bulgaria' },
    { id: 27, name: 'Burkina Faso' },
    { id: 28, name: 'Burundi' },
    { id: 29, name: 'Cabo Verde' },
    { id: 30, name: 'Cambodia' },
    { id: 31, name: 'Cameroon' },
    { id: 32, name: 'Canada' },
    { id: 33, name: 'Central African Republic' },
    { id: 34, name: 'Chad' },
    { id: 35, name: 'Chile' },
    { id: 36, name: 'China' },
    { id: 37, name: 'Colombia' },
    { id: 38, name: 'Comoros' },
    { id: 39, name: 'Congo, Democratic Republic of the' },
    { id: 40, name: 'Congo, Republic of the' },
    { id: 41, name: 'Costa Rica' },
    { id: 42, name: 'Côte d’Ivoire' },
    { id: 43, name: 'Croatia' },
    { id: 44, name: 'Cuba' },
    { id: 45, name: 'Cyprus' },
    { id: 46, name: 'Czech Republic' },
    { id: 47, name: 'Denmark' },
    { id: 48, name: 'Djibouti' },
    { id: 49, name: 'Dominica' },
    { id: 50, name: 'Dominican Republic' },
    { id: 51, name: 'East Timor (Timor-Leste)' },
    { id: 52, name: 'Ecuador' },
    { id: 53, name: 'Egypt' },
    { id: 54, name: 'El Salvador' },
    { id: 55, name: 'Equatorial Guinea' },
    { id: 56, name: 'Eritrea' },
    { id: 57, name: 'Estonia' },
    { id: 58, name: 'Ethiopia' },
    { id: 59, name: 'Fiji' },
    { id: 60, name: 'Finland' },
    { id: 61, name: 'France' },
    { id: 62, name: 'Gabon' },
    { id: 63, name: 'Gambia' },
    { id: 64, name: 'Georgia' },
    { id: 65, name: 'Germany' },
    { id: 66, name: 'Ghana' },
    { id: 67, name: 'Greece' },
    { id: 68, name: 'Grenada' },
    { id: 69, name: 'Guatemala' },
    { id: 70, name: 'Guinea' },
    { id: 71, name: 'Guinea-Bissau' },
    { id: 72, name: 'Guyana' },
    { id: 73, name: 'Haiti' },
    { id: 74, name: 'Honduras' },
    { id: 75, name: 'Hungary' },
    { id: 76, name: 'Iceland' },
    { id: 77, name: 'India' },
    { id: 78, name: 'Indonesia' },
    { id: 79, name: 'Iran' },
    { id: 80, name: 'Iraq' },
    { id: 81, name: 'Ireland' },
    { id: 82, name: 'Israel' },
    { id: 83, name: 'Italy' },
    { id: 84, name: 'Jamaica' },
    { id: 85, name: 'Japan' },
    { id: 86, name: 'Jordan' },
    { id: 87, name: 'Kazakhstan' },
    { id: 88, name: 'Kenya' },
    { id: 89, name: 'Kiribati' },
    { id: 90, name: 'Korea, North' },
    { id: 91, name: 'Korea, South' },
    { id: 92, name: 'Kosovo' },
    { id: 93, name: 'Kuwait' },
    { id: 94, name: 'Kyrgyzstan' },
    { id: 95, name: 'Laos' },
    { id: 96, name: 'Latvia' },
    { id: 97, name: 'Lebanon' },
    { id: 98, name: 'Lesotho' },
    { id: 99, name: 'Liberia' },
    { id: 100, name: 'Libya' },
    { id: 101, name: 'Liechtenstein' },
    { id: 102, name: 'Lithuania' },
    { id: 103, name: 'Luxembourg' },
    { id: 104, name: 'Macedonia' },
    { id: 105, name: 'Madagascar' },
    { id: 106, name: 'Malawi' },
    { id: 107, name: 'Malaysia' },
    { id: 108, name: 'Maldives' },
    { id: 109, name: 'Mali' },
    { id: 110, name: 'Malta' },
    { id: 111, name: 'Marshall Islands' },
    { id: 112, name: 'Mauritania' },
    { id: 113, name: 'Mauritius' },
    { id: 114, name: 'Mexico' },
    { id: 115, name: 'Micronesia, Federated States of' },
    { id: 116, name: 'Moldova' },
    { id: 117, name: 'Monaco' },
    { id: 118, name: 'Mongolia' },
    { id: 119, name: 'Montenegro' },
    { id: 120, name: 'Morocco' },
    { id: 121, name: 'Mozambique' },
    { id: 122, name: 'Myanmar (Burma)' },
    { id: 123, name: 'Namibia' },
    { id: 124, name: 'Nauru' },
    { id: 125, name: 'Nepal' },
    { id: 126, name: 'Netherlands' },
    { id: 127, name: 'New Zealand' },
    { id: 128, name: 'Nicaragua' },
    { id: 129, name: 'Niger' },
    { id: 130, name: 'Nigeria' },
    { id: 131, name: 'Norway' },
    { id: 132, name: 'Oman' },
    { id: 133, name: 'Pakistan' },
    { id: 134, name: 'Palau' },
    { id: 135, name: 'Panama' },
    { id: 136, name: 'Papua New Guinea' },
    { id: 137, name: 'Paraguay' },
    { id: 138, name: 'Peru' },
    { id: 139, name: 'Philippines' },
    { id: 140, name: 'Poland' },
    { id: 141, name: 'Portugal' },
    { id: 142, name: 'Qatar' },
    { id: 143, name: 'Romania' },
    { id: 144, name: 'Russia' },
    { id: 145, name: 'Rwanda' },
    { id: 146, name: 'Saint Kitts and Nevis' },
    { id: 147, name: 'Saint Lucia' },
    { id: 148, name: 'Saint Vincent and the Grenadines' },
    { id: 149, name: 'Samoa' },
    { id: 150, name: 'San Marino' },
    { id: 151, name: 'Sao Tome and Principe' },
    { id: 152, name: 'Saudi Arabia' },
    { id: 153, name: 'Senegal' },
    { id: 154, name: 'Serbia' },
    { id: 155, name: 'Seychelles' },
    { id: 156, name: 'Sierra Leone' },
    { id: 157, name: 'Singapore' },
    { id: 158, name: 'Slovakia' },
    { id: 159, name: 'Slovenia' },
    { id: 160, name: 'Solomon Islands' },
    { id: 161, name: 'Somalia' },
    { id: 162, name: 'South Africa' },
    { id: 163, name: 'Spain' },
    { id: 164, name: 'Sri Lanka' },
    { id: 165, name: 'Sudan' },
    { id: 166, name: 'Sudan, South' },
    { id: 167, name: 'Suriname' },
    { id: 168, name: 'Swaziland' },
    { id: 169, name: 'Sweden' },
    { id: 170, name: 'Switzerland' },
    { id: 171, name: 'Syria' },
    { id: 172, name: 'Taiwan' },
    { id: 173, name: 'Tajikistan' },
    { id: 174, name: 'Tanzania' },
    { id: 175, name: 'Thailand' },
    { id: 176, name: 'Togo' },
    { id: 177, name: 'Tonga' },
    { id: 178, name: 'Trinidad and Tobago' },
    { id: 179, name: 'Tunisia' },
    { id: 180, name: 'Turkey' },
    { id: 181, name: 'Turkmenistan' },
    { id: 182, name: 'Tuvalu' },
    { id: 183, name: 'Uganda' },
    { id: 184, name: 'Ukraine' },
    { id: 185, name: 'United Arab Emirates' },
    { id: 186, name: 'United Kingdom' },
    { id: 187, name: 'United States' },
    { id: 188, name: 'Uruguay' },
    { id: 189, name: 'Uzbekistan' },
    { id: 190, name: 'Vanuatu' },
    { id: 191, name: 'Vatican City' },
    { id: 192, name: 'Venezuela' },
    { id: 193, name: 'Vietnam' },
    { id: 194, name: 'Yemen' },
    { id: 195, name: 'Zambia' },
    { id: 196, name: 'Zimbabwe' }
  ];
  states: object[] = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Alaska' },
    { id: 3, name: 'Arizona' },
    { id: 4, name: 'Arkansas' },
    { id: 5, name: 'California' },
    { id: 6, name: 'Colorado' },
    { id: 7, name: 'Connecticut' },
    { id: 8, name: 'Delaware' },
    { id: 9, name: 'Florida' },
    { id: 10, name: 'Georgia' },
    { id: 11, name: 'Hawaii' },
    { id: 12, name: 'Idaho' },
    { id: 13, name: 'Illinois' },
    { id: 14, name: 'Indiana' },
    { id: 15, name: 'Iowa' },
    { id: 16, name: 'Kansas' },
    { id: 17, name: 'Kentucky' },
    { id: 18, name: 'Louisiana' },
    { id: 19, name: 'Maine' },
    { id: 20, name: 'Maryland' },
    { id: 21, name: 'Massachusetts' },
    { id: 22, name: 'Michigan' },
    { id: 23, name: 'Minnesota' },
    { id: 24, name: 'Mississippi' },
    { id: 25, name: 'Missouri' },
    { id: 26, name: 'Montana' },
    { id: 27, name: 'Nebraska' },
    { id: 28, name: 'Nevada' },
    { id: 29, name: 'New Hampshire' },
    { id: 30, name: 'New Jersey' },
    { id: 31, name: 'New Mexico' },
    { id: 32, name: 'New York' },
    { id: 33, name: 'North Carolina' },
    { id: 34, name: 'North Dakota' },
    { id: 35, name: 'Ohio' },
    { id: 36, name: 'Oklahoma' },
    { id: 37, name: 'Oregon' },
    { id: 38, name: 'Pennsylvania' },
    { id: 39, name: 'Rhode Island' },
    { id: 40, name: 'South Carolina' },
    { id: 41, name: 'South Dakota' },
    { id: 42, name: 'Tennessee' },
    { id: 43, name: 'Texas' },
    { id: 44, name: 'Utah' },
    { id: 45, name: 'Vermont' },
    { id: 46, name: 'Virginia' },
    { id: 47, name: 'Washington' },
    { id: 48, name: 'West Virginia' },
    { id: 49, name: 'Wisconsin' },
    { id: 50, name: 'Wyoming' }
  ];
  formData: object = {
    id: 1,
    email: 'oscar@example.com',
    firstName: 'Oscar',
    lastName: 'Omega',
    dateOfBirth: '1977-11-11',
    countryId: 187,
    stateId: 11,
    city: 'Honolulu',
    phoneNumber: '808-999-9999'
  };

  showStates: boolean = false;
  firstNameError: string = '';
  lastNameError: string = '';
  phoneError: string = '';

  constructor() {}

  ngDoCheck() {
    this.toggleStates();
  }

  toggleStates() {
    const countryInput = document.getElementsByClassName(
      'profile-form-inner-input-country'
    )[0];

    // "187" is the value assigned to the United States:
    Number(countryInput['value']) === 187
      ? (this.showStates = true)
      : (this.showStates = false);
  }

  validateName(classNameStr) {
    const nameErrorMessage = 'Required';
    const name = document
      .getElementsByClassName(classNameStr)[0]
      ['value'].trim();

    // Display error if first or last name input field is empty:
    switch (classNameStr) {
      case 'profile-form-inner-input-first-name':
        if (this.checkEmptyNameField(name)) {
          this.firstNameError = nameErrorMessage;
        } else {
          this.firstNameError = '';
        }
        this.toggleSubmitButton();
        break;
      case 'profile-form-inner-input-last-name':
        if (this.checkEmptyNameField(name)) {
          this.lastNameError = nameErrorMessage;
        } else {
          this.lastNameError = '';
        }
        this.toggleSubmitButton();
        break;
      default:
        break;
    }
  }

  checkEmptyNameField(name) {
    return name.length < 1 ? true : false;
  }

  validatePhoneNumber(eventTypeStr) {
    const phoneErrorMessage = 'Enter a valid 10-digit phone number';
    const phoneNumber = document
      .getElementsByClassName('profile-form-inner-input-phone')[0]
      ['value'].trim();

    // Source: www.w3resource.com/javascript/form/phone-no-validation.php
    const validRegexNumbers: any[] = [
      /^\d{10}$/,
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    ];

    switch (eventTypeStr) {
      case 'blur':
        // Display error if (1) user enters text into phone number input, and
        // (2) the text input does not match any regular expressions above:
        if (phoneNumber === '') {
          this.phoneError = '';
        } else {
          if (!validRegexNumbers.some(regex => regex.test(phoneNumber))) {
            this.phoneError = phoneErrorMessage;
          }
        }
        this.toggleSubmitButton();
        break;
      case 'ngModelChange':
        // Immediately removes existing error message once valid input entered:
        if (
          this.phoneError &&
          validRegexNumbers.some(regex => regex.test(phoneNumber))
        ) {
          this.phoneError = '';
        }
        this.toggleSubmitButton();
        break;
      default:
        break;
    }
  }

  toggleSubmitButton() {
    // Enable submit button only if there are no validation errors:
    const submitButton = document.getElementsByClassName(
      'buttons-primary'
    )[0];
    const errorMessages = [
      this.firstNameError,
      this.lastNameError,
      this.phoneError
    ];

    if (errorMessages.some(errorMessage => errorMessage.length > 0)) {
      submitButton.setAttribute('disabled', '');
    } else {
      submitButton.removeAttribute('disabled');
    }
  }
}
