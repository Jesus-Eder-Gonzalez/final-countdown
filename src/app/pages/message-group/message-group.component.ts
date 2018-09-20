import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from '../../services/sessions.service';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-message-group',
  templateUrl: './message-group.component.html',
  styleUrls: ['./message-group.component.scss']
})
export class MessageGroupComponent implements OnInit {
  user: {
    loggedIn: boolean;
    email: string;
    userId: number;
  };

  formData: {
    title: string;
    message: string;
  } = {
    title: '',
    message: ''
  };

  // Group:
  groupId: number;
  groupName: object;
  groupMembers: object;
  groupPackageContents: object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionsService,
    private backend: BackendService
  ) {
    this.user = this.session.getSession();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = Number(params['id']);
    });

    this.getGroupName();
    this.getGroupMembers();
    this.getGroupPackage();
  }

  save() {
    return this.backend.editPackageEncryptedFile(
        this.user['userId'],
        this.groupPackageContents['id'],
        this.formData
      )
      .then(() => {
        this.router.navigate(['/messages']);
      })
      .catch(err => console.log(err));
  }

  // ------------------------------------------------------------------------ //

  getGroupName() {
    this.backend.fetchGroup(this.user['userId'], this.groupId)
      .then(response => {
        this.groupName = response['relationship']['name'];
      })
      .catch(err => console.log(err));
  }

  getGroupMembers() {
    this.backend.fetchGroupMembers(this.user['userId'], this.groupId)
      .then(response => {
        this.groupMembers = response['members'];
      })
      .catch(err => console.log(err));
  }

  getGroupPackage() {
    this.backend.fetchGroupPackage(this.user['userId'], this.groupId)
      .then(response => {
        console.log('groupPackage', response);
        this.groupPackageContents = response['package']['file'][0];
        this.formData = {
          title: this.groupPackageContents['name'],
          message: this.groupPackageContents['aws_url']
        };
      })
      .catch(err => console.log(err));
  }
}
