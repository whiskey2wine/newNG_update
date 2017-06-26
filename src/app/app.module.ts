import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';
import { KraftComponent } from './menus/kraft/kraft.component';
import { PaperboardComponent } from './menus/paperboard/paperboard.component';
import { TcpThComponent } from './menus/tcp-th/tcp-th.component';
import { TcpPbComponent } from './menus/tcp-pb/tcp-pb.component';
import { ContentsComponent } from './contents/contents.component';
import { KDomesticComponent } from './menus/kraft/k-domestic/k-domestic.component';
import { KExportComponent } from './menus/kraft/k-export/k-export.component';
import { DuplexComponent } from './menus/paperboard/duplex/duplex.component';
import { PblComponent } from './menus/paperboard/pbl/pbl.component';
import { PbDomesticComponent } from './menus/tcp-pb/pb-domestic/pb-domestic.component';
import { PbExportComponent } from './menus/tcp-pb/pb-export/pb-export.component';
import { ThExportComponent } from './menus/tcp-th/th-export/th-export.component';
import { ThDomesticComponent } from './menus/tcp-th/th-domestic/th-domestic.component';
import { DDomesticComponent } from './menus/paperboard/duplex/d-domestic/d-domestic.component';
import { DExportComponent } from './menus/paperboard/duplex/d-export/d-export.component';
import { DBothComponent } from './menus/paperboard/duplex/d-both/d-both.component';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {path: '', component: MenusComponent},
  {path: 'k-domestic', component: KDomesticComponent},
  {path: 'k-export', component: KExportComponent},
  {path: 'p-duplex', component: DuplexComponent},
  {path: 'p-duplex/domestic', component: DDomesticComponent},
  {path: 'p-duplex/export', component: DExportComponent},
  {path: 'p-duplex/both', component: DBothComponent},
  {path: 'p-pbl', component: PblComponent},
  {path: 'tcp-th/domestic', component: ThDomesticComponent},
  {path: 'tcp-th/export', component: ThExportComponent},
  {path: 'tcp-pb/domestic', component: PbDomesticComponent},
  {path: 'tcp-pb/export', component: PbExportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenusComponent,
    KraftComponent,
    PaperboardComponent,
    TcpThComponent,
    TcpPbComponent,
    ContentsComponent,
    KDomesticComponent,
    KExportComponent,
    DuplexComponent,
    PblComponent,
    PbDomesticComponent,
    PbExportComponent,
    ThExportComponent,
    ThDomesticComponent,
    DDomesticComponent,
    DExportComponent,
    DBothComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
