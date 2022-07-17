import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-operations';
  users: [{}];
  currentUser: {};
  roles = [];
  pressed: boolean = false;
  selectedUsers = [];

  constructor() {
    this.users = [
      {
        createDate: null,
        id: 294,
        surveyID: 31989,
        roleID: null,
        roleDescEn: 'CEO',
        roleDescAr: 'المدير',
        roleColor: '#111111',
        children: [
          {
            createDate: null,
            id: 781,
            surveyID: 31989,
            roleID: 294,
            roleDescEn: 'Web Devs',
            roleDescAr: 'مبرمج',
            roleColor: '#ab1717',
            children: [
              {
                createDate: null,
                id: 782,
                surveyID: 31989,
                roleID: 781,
                roleDescEn: 'Trainee',
                roleDescAr: '12312',
                roleColor: null,
                children: [],
              },
            ],
          },
          {
            createDate: null,
            id: 317,
            surveyID: 31989,
            roleID: 294,
            roleDescEn: 'Supervisor',
            roleDescAr: 'مراقب',
            roleColor: '#09dcce',
            children: [],
          },
          {
            createDate: null,
            id: 305,
            surveyID: 31989,
            roleID: 294,
            roleDescEn: 'QA',
            roleDescAr: 'كيو ايه',
            roleColor: '#c28b14',
            children: [
              {
                createDate: null,
                id: 316,
                surveyID: 31989,
                roleID: 305,
                roleDescEn: 'Tester',
                roleDescAr: 'موظف',
                roleColor: '#c21414',
                children: [],
              },
              {
                createDate: null,
                id: 381,
                surveyID: 31989,
                roleID: 305,
                roleDescEn: 'Control',
                roleDescAr: 'كونترول',
                roleColor: '#1f9eff',
                children: [],
              },
            ],
          },
        ],
      },
    ];
    this.currentUser = this.users[0];
  }

  addLevel(user) {
    if (this.selectedUsers.find((pushedUsers) => pushedUsers.id === user.id)) {
      this.roles = [];
      this.selectedUsers = [];
      this.pressed = false;
      console.log('found');
    } else {
      this.roles.push(user['children']);
      this.selectedUsers.push(user);
      this.pressed = true;
    }
  }
}
// CEO
