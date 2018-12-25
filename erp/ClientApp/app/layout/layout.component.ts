import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GlobalsService } from '../core/globals.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
    public varGlobals: GlobalsService;

    constructor(private httpClient: HttpClient, private toastrService: ToastrService) {
		this.varGlobals = new GlobalsService();
		this.varGlobals.globalRef.httpClient = this.httpClient;
		this.varGlobals.globalRef.toastrService = this.toastrService;
    }

    ngOnInit() {
    }

}
