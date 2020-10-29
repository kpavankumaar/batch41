import { Component } from '@angular/core';

@Component({
    selector:'app-navbar',
    // template:`<h2> Welcome to Angular session </h2>`,
    templateUrl: 'Navbar.component.html',
    styles: [`div {background-color: black; color : lightgrey;}`]

})
export class Navbar{
    sample = "https://www.google.com";
    url = "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    obj ={
        val: "budha"
    }
    textemail = "email";
    color="green";
    content = "div element property binding"
}