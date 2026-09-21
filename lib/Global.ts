//to provide test data and object/ elements of whole application
import {Page} from '@playwright/test'
export class global {
    constructor (public page : Page) {

    }
    //******Test Data*******/
    public url : string = "https://sureshitacademy.in/hrms/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";
    public firstName : string = "Saniya";
    public lastName : string = " Nehwal";

    //*****Objects/ Elements******/
    public testboxLoginName : string = "//input[@name='txtUserName']";
    public testboxPassword : string = "//input[@name='txtPassword']";
    public buttonLogin : string = "//input[@name='Submit']";
    public linkLogout : string = "//a[text()='Logout']";
    public frame_EmpInfo : string = "//iframe[@id='rightMenu']";
    public addButton : string = "//input[@value='Add']";
    public empFirstName : string = "//input[@name='txtEmpFirstName]";
    public empLastName : string = "//input[@name='txtEmpLastName]";
    public saveButton : string = "//input[@class='savebutton']";

}