import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class SettingsService {

    private user: any;
    private app: any;
    private layout: any;
    private isCollapsedHidePrev: any;
    private isCollapsedTextPrev: any;
    private isCollapsedPrev: any;

    constructor() {

        // User Settings
        // -----------------------------------
        this.user = {
            name: 'ERP User',
            job: 'ERP developer',
            picture: 'assets/img/user/02.jpg'
        };

        // App Settings
        // -----------------------------------
        this.app = {
            name: 'ERP',
            description: 'Angular Bootstrap Admin Template',
            year: '2017'
        };

        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsedHide: false,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: true,
            isCollapsedText: false,
            useFullLayout: true,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };

        this.isCollapsedPrev = this.layout['isCollapsed'];
        this.isCollapsedTextPrev = this.layout['isCollapsedText'];

    }

    getAppSetting(name) {
        return name ? this.app[name] : this.app;
    }
    getUserSetting(name) {
        return name ? this.user[name] : this.user;
    }
    getLayoutSetting(name) {
        return name ? this.layout[name] : this.layout;
    }

    setAppSetting(name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    }
    setUserSetting(name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    }
    setLayoutSetting(name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    }
    setLayoutSettingCollapsedHide(value) {
        this.setLayoutSetting('isCollapsedHide', value);
        if (this.layout['isCollapsedHide']) {
            this.isCollapsedTextPrev = this.getLayoutSetting('isCollapsedText');
            this.setLayoutSetting('isCollapsedText', false);
            this.isCollapsedPrev = this.getLayoutSetting('isCollapsed');
            this.setLayoutSetting('isCollapsed', false);
        }
        else {
            this.setLayoutSetting('isCollapsedText', this.isCollapsedTextPrev);
            this.setLayoutSetting('isCollapsed', this.isCollapsedPrev);
        }
            
        return value;    
    }
    setLayoutSettingCollapsed(value) {
        this.setLayoutSetting('isCollapsed', value);
        if (this.layout['isCollapsed']) {
            this.isCollapsedTextPrev = this.getLayoutSetting('isCollapsedText');
            this.setLayoutSetting('isCollapsedText', false);
            this.isCollapsedHidePrev = this.getLayoutSetting('isCollapsedHide');
            this.setLayoutSetting('isCollapsedHide', false);
        }
        else {
            this.setLayoutSetting('isCollapsedText', this.isCollapsedTextPrev);
            this.setLayoutSetting('isCollapsedHide', this.isCollapsedHidePrev);
        }
            
        return value;    
    }
    setLayoutSettingCollapsedText(value) {
        this.setLayoutSetting('isCollapsedText', value);
        if (this.layout['isCollapsedText']) {
            this.isCollapsedPrev = this.getLayoutSetting('isCollapsed');
            this.setLayoutSetting('isCollapsed', false);
            this.isCollapsedHidePrev = this.getLayoutSetting('isCollapsedHide');
            this.setLayoutSetting('isCollapsedHide', false);            
        }
        else {
            this.setLayoutSetting('isCollapsed', this.isCollapsedPrev);
            this.setLayoutSetting('isCollapsedHide', this.isCollapsedHidePrev);
        }
            
        return value;    
    }
    toggleLayoutSetting(name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    }
    toggleLayoutSideabar() {
        if (this.getLayoutSetting('isCollapsed') || this.getLayoutSetting('isCollapsedText') || this.getLayoutSetting('isCollapsedHide')) {
            this.isCollapsedPrev = false;
            this.isCollapsedTextPrev = false;
            this.isCollapsedHidePrev = false;
            
            if (this.getLayoutSetting('isCollapsed')) {
                this.isCollapsedPrev = this.getLayoutSetting('isCollapsed');
            }
            if (this.getLayoutSetting('isCollapsedText')) {
                this.isCollapsedTextPrev = this.getLayoutSetting('isCollapsedText');
            }
            if (this.getLayoutSetting('isCollapsedHide')) {
                this.isCollapsedHidePrev = this.getLayoutSetting('isCollapsedHide');
            }

            this.setLayoutSetting('isCollapsedText', false);
            this.setLayoutSetting('isCollapsed', false);
            this.setLayoutSetting('isCollapsedHide', false);

            return false;
        }
        else
        {
            if (this.isCollapsedPrev) {
                this.setLayoutSetting('isCollapsed', true);
            }
            if (this.isCollapsedTextPrev) {
                this.setLayoutSetting('isCollapsedText', true);
            }
            if (this.isCollapsedHidePrev || !(this.isCollapsedTextPrev || this.isCollapsedPrev)) {
                this.setLayoutSetting('isCollapsedHide', true);
            }

            return true;
        }
    }

}
