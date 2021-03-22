import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-heroku01';

  changeTitle()
  {
    this.title="I am your new title. Hello!";
  }
  calculate()
  {
    let myAge;
    let momsAge;
    var sum = 0;
    var average =0;
    var isOk = false;
    var divResult = document.getElementById("ageResult");
    myAge = parseInt((<HTMLInputElement>document.getElementById("myAge")).value);
    momsAge = parseInt((<HTMLInputElement>document.getElementById("momsAge")).value);

    if(typeof(myAge)=='number' && typeof(momsAge)=='number')
    {
      sum = (myAge + momsAge);
      average = sum /2;
      isOk = true;
    }

    if(isOk && divResult !== null)
    {
      divResult.style.visibility = "visible";
      ((<HTMLTextAreaElement>document.getElementById("av")).innerText="This is the average of your ages: " + average.toString());
      ((<HTMLTextAreaElement>document.getElementById("sum")).innerText="This is the sum of your ages: " + sum.toString());

    }

  }
}
