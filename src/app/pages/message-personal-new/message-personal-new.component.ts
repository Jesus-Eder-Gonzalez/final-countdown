import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-message-personal-new',
  templateUrl: './message-personal-new.component.html',
  styleUrls: ['./message-personal-new.component.scss']
})
export class MessagePersonalNewComponent {
  // Temporary variable(s) (until database integrated):
  relationships: object[] = [
    { id: 1, name: 'Family' },
    { id: 2, name: 'Friends' },
    { id: 3, name: 'Haters' }
  ];
  formData: object = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    // add in sender_id in auth
    groupId: '',
  };

  constructor(private auth: AuthService) {}

  save() {
    // console.log('formData: ', this.formData);
    this.auth.addRecipient(this.formData)
      .then((response) => {
        console.log('recipient save: ', response);
      });
  }
}
