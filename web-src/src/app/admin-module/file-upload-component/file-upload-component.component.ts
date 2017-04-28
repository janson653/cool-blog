import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.css']
})
export class FileUploadComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageUploaded(e) {
    alert('upload done')
  }

}
