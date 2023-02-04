import { ToolService } from './../../../services/tool.service';
import { Outil } from './../../../modals/Outil';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtols',
  templateUrl: './formtols.component.html',
  styleUrls: ['./formtols.component.scss'],
})
export class FormtolsComponent implements OnInit {
  hide = true;
  [x: string]: any;
  titleForm = '';
  currentId: any;
  form: any | undefined;
  globalTool: Outil | undefined;
  constructor(
    private service: ToolService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    this.form = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      source: new FormControl(null, [Validators.required]),
    });
    if (!!this.currentId) {
      this.service.getOutilById(this.currentId).then((currentTool) => {
        this.globalTool = currentTool;
        this.initFormEdit(currentTool);
      });
    } else this.initForm();
  }
  initForm(): void {
    this.titleForm = 'Create New Tool';
    this.form = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      source: new FormControl(null, [Validators.required]),
    });
  }
  initFormEdit(tool: Outil): void {
    this.titleForm = 'Edit Tool';
    this.form = new FormGroup({
      date: new FormControl(tool?.date, [Validators.required]),
      source: new FormControl(tool?.source, [Validators.required]),
    });
  }
  onSub(): void {
    if (this.titleForm == 'Edit Tool') {
      const objToSubmit = { ...this.globalTool, ...this.form.value };
      this.service.updateOutil(objToSubmit).then(() => {
        this.router.navigate(['/tools']);
      });
    } else {
      const objToSubmit = { ...this.globalTool, ...this.form.value };
      this.service.createOutil(objToSubmit).then(() => {
        this.router.navigate(['/tools']);
      });
    }
  }
}
