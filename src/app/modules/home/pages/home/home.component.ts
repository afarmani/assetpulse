import {Component, OnInit} from '@angular/core';

import Auth from '@aws-amplify/auth';

import {APIService} from 'src/app/API.service';
import {Asset} from 'src/app/shared/models/asset';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title = 'Asset Pulse App';
  assets: Array<Asset>;
  loading = true;
  public createForm: FormGroup;

  constructor(
    private api: APIService,
    private fb: FormBuilder
  ) {
    Auth.currentAuthenticatedUser().then(console.log)
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      'symbol': ['', Validators.required],
      'exchange': ['', Validators.required],
    });

    this.loading = true;

    this.api.ListAssets().then(event => {
      this.loading = false;
      this.assets = event.items;
    });

    this.api.OnCreateAssetListener.subscribe((event: any) => {
      const newAsset = event.value.data.onCreateAsset;
      this.assets = [newAsset, ...this.assets];
    });

    this.api.OnDeleteAssetListener.subscribe((event: any) => {
      const deletedAsset = event.value.data.onDeleteAsset;
      if (deletedAsset) {
        this.assets = this.assets.filter((r) => r.id != deletedAsset.id);
      }
    });
  }
}
