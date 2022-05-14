import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { UpdateProfileService } from '../_services/update-profile.service';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {


  constructor(private updateProfile: UpdateProfileService, private tokenStorage: TokenStorageService, private userservice: UserServiceService, private modalService: NgbModal) { }
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  ImageProfile: any;
  message = '';
  fileInfos?: Observable<any>;
  DocContent = "";

  form: any = {
    discription: ''
  };

  role: any;
  username = "";
  logged: any;
  test: any;
  ischanged = false;
  newText = "";
  selectedfileid: number = 0;
  roleChange() {
    if (this.tokenStorage.getUser()) {
      this.role = this.tokenStorage.getRole()
      console.log("roleChange role:", window.sessionStorage.getItem('auth-token'))
      this.username = this.tokenStorage.getUser()
      let cred = [this.username, this.role]
      console.log(cred)

      return cred;
    }

    else {

      return null
    };
  }
  openVerticallyCentered(discription: any, fid: number) {



    this.modalService.open(discription, { centered: true });
    this.selectedfileid = fid;
  }
  open(content: any, id: number) {
    console.log
    this.modalService.open(content);
    this.getFileContent(id)
  }
  ngOnInit(): void {
    this.showImgProfile();
    this.test = this.roleChange()
    console.log(this.roleChange());
    this.fileInfos = this.userservice.getFiles();
  }
  showImgProfile(): void {
    this.updateProfile.showProfileImg().subscribe(
      data => {
        this.ImageProfile = data;
        console.log(data);
      },
      err => {
        this.ImageProfile = err.error.text
      }

    )
  }
  // On file Select
  onChange(event: any) {
    this.selectedFiles = event.target.files;
  }

  onUpload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.userservice.uploadFile(this.currentFile).subscribe(
          (event: any) => {


            this.fileInfos = this.userservice.getFiles();
            this.ngOnInit();


          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }


  }
  deletUser(id: number): void {
    this.userservice.deleteFile(id)
      .subscribe(
        (result) => {


          this.ngOnInit();


        },
        error => {
          console.log(error)
        }
      );

  }
  addDiscription(id: number): void {
    this.userservice.addDisc(id, this.form).subscribe(
      (result) => {


        this.ngOnInit();


      },
      error => {
        console.log(error)
      }

    );
  }
  getFileContent(id: number) {
    this.userservice.getFilecontent(id).subscribe(
      data => {
        this.DocContent = data;
      }, err => {
        console.log(err)
        this.DocContent = err.error.text
      }
    )
  }
  updateContent(id: number, newcontent: string) {
    this.userservice.setFileContent(id, newcontent).subscribe(data => {

    },
      err => {
        console.log(err)
      }
    )
  }

}
