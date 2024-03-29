import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryArtcardComponent } from './gallery-artcard/gallery-artcard.component';
import { SingleArtcardComponent } from './single-artcard/single-artcard.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    GalleryComponent,
    GalleryArtcardComponent,
    SingleArtcardComponent,
    ShoppingCartItemComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
