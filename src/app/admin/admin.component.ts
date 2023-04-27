import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IArtCard } from '../models/IArtCard';
import { ArtCardService } from '../art-card.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {

  artList:  Array<IArtCard>;
  selectedFile: File;
  artProduct: IArtCard = {
    artId: '',
    artName: '',
    artDesc: '',
    artPrice: 0,
    isAvailable: false,
    artDimensions: '',
    artScore: 0,
    imgFile: '',
    imgBytes: '',
    hasVoted: 0,
    isEditable: false
  };
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ArtCardService: ArtCardService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      artName: '',
      artDesc: '',
      artPrice: 0,
      isAvailable: false,
      artDimensions: '',
      artScore: 0,
      imgFile: null
    });
  }

  ngOnInit(): void {
    this.getArtList();
  }

  getArtList(): void {
    this.ArtCardService.getArtCards().subscribe((res) => {
      this.artList = res;
    });
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  createArtProduct(): void {
    const formData = new FormData();
    formData.append('imgFile', this.selectedFile);
    formData.append('ArtName', this.form.get('artName').value);
    formData.append('ArtDesc', this.form.get('artDesc').value);
    formData.set('ArtPrice', this.form.get('artPrice').value.toString());
    formData.set('ArtScore', this.form.get('artScore').value.toString());
    formData.append('isAvailable', this.form.get('isAvailable').value ? 'true' : 'false');
    formData.append('ArtDimensions', this.form.get('artDimensions').value);
    const url = `/api/ArtProduct`;
    this.http.post(url, formData).subscribe((res) => {
      this.getArtList();
      this.router.navigateByUrl('/admin');
    });
  }

  updateArtProduct(IArtCard): void {
    const formData = new FormData();
    formData.append('imgFile', this.selectedFile);
    formData.append('ArtId', IArtCard.artId)
    formData.append('ArtName', this.form.get('artName').value !== '' ? this.form.get('artName').value : IArtCard.artName);
    formData.append('ArtDesc', this.form.get('artDesc').value !== '' ? this.form.get('artDesc').value : IArtCard.artDesc);
    formData.set('ArtPrice', this.form.get('artPrice').value.toString() !== '0' ? this.form.get('artPrice').value.toString() : IArtCard.artPrice.toString());
    formData.set('ArtScore', this.form.get('artScore').value.toString() !== '0' ? this.form.get('artScore').value.toString() : IArtCard.artScore.toString());
    formData.set('isAvailable', this.form.get('isAvailable').value ? 'true' : 'false');
    formData.append('ArtDimensions', this.form.get('artDimensions').value !== '' ? this.form.get('artDimensions').value : IArtCard.artDimensions);
    
    const url = `/api/ArtProduct`;
    this.http.put(url, formData).subscribe((res) => {
      this.getArtList();
    });
  }

  deleteArtProduct(id: string): void {
    const url = `/api/ArtProduct/${id}`;
    this.http.delete(url).subscribe((res) => {
      this.getArtList();
    });
  }

  onSelect(artProduct: any): void {
    this.artProduct = Object.assign({}, artProduct);
  }
}
