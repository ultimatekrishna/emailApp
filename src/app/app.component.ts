import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values: String[] = [];
  myModel = null;
  message = '';
  onBlurMethod = function(myModel){
  	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validity =  re.test(myModel);

  	if(myModel === null){  		
  		return;
  	}

  	if(validity === false){
  		this.message = 'please enter a valid email';
  		return;
  	}

  	
  	console.log(myModel);
  	console.log(validity);
  	this.values.push(myModel)
  	this.myModel = null;
  	this.message = null;
  };
  removeHandler = function(index){
  	console.log('close button clicked')
  	console.log(index)
  	this.values.splice(index, 1);

  }


}
