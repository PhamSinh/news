import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    constructor() { }

    infoContact = {
        content: "The languages only differ in their grammar,their pronunciation and their most common words.",
        phoneNumber: '07071999',
        taxNumber: '15121999',
        email: 'phamsinh1512@gmail.com'
    }
    blogCategories = [
        { name: 'News', count: '1' },
        { name: 'Animal', count: '5' },
        { name: 'Shopping', count: '1' },
        { name: 'Environment', count: '2' }
    ]
    widgetPosts = [
        { image: 'assets/images/rp-1.jpg', content: 'Shopping Essentials', createdAt: '07 July' },
        { image: 'assets/images/rp-2.jpg', content: 'Identity Card ', createdAt: '15 December' },
    ]

    postDetail = [
        { image: 'assets/images/post-1.jpg', title: 'Trip in year', author: 'Oggy', createdAt: '1 November', countComment: '1', content: 'Demo post 1' },
        { image: 'assets/images/post-2.jpg', title: 'Trip 2 in year', author: 'Louis', createdAt: '07 July', countComment: '2', content: 'Demo post 2' },
        { image: 'assets/images/post-3.jpg', title: 'Trip 3 in year', author: 'Oggy', createdAt: '07 July', countComment: '3', content: 'Demo post 3' }
    ]

    listService = [
        { name: 'Services 1', content: 'Give users a great experience when using our products' },
        { name: 'Services 2', content: 'Give users a great experience when using our products' },
        { name: 'Services 3', content: 'Give users a great experience when using our products' },
        { name: 'Services 4', content: 'Give users a great experience when using our products' },
        { name: 'Services 5', content: 'Give users a great experience when using our products' },
        { name: 'Services 6', content: 'Give users a great experience when using our products' },
        { name: 'Services 7', content: 'Give users a great experience when using our products' },
        { name: 'Services 8', content: 'Give users a great experience when using our products' },
    ]

    listFeature1 = [
        { name: 'Feature 1', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 2', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 3', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 4', content: 'Every feature we come up with will be of great help to you' },
    ]
    listFeature2 = [
        { name: 'Feature 5', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 6', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 7', content: 'Every feature we come up with will be of great help to you' },
        { name: 'Feature 8', content: 'Every feature we come up with will be of great help to you' },
    ]

    listAuthor = [
    ]


    ngOnInit() {
    }

}
