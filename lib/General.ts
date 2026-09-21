//to provide all re-usable funtions/ methods of whole application

import { global } from "./Global";

export class general extends global{
    //*******re-usable functions/ methods******/
    async openApplication() {
        await this.page.goto(this.url);
        await this.page.waitForTimeout(3000);
    }

    async login() {
        await this.page.locator(this.testboxLoginName).fill(this.username);
        await this.page.locator(this.testboxPassword).fill(this.password);
        await this.page.waitForTimeout(3000);
        console.log("username and password entered");
        await this.page.locator(this.buttonLogin).click();
        await this.page.waitForTimeout(3000);
        console.log("login button clicked");
    }

    async logout () {
        await this.page.locator(this.linkLogout).click();
        await this.page.waitForTimeout(3000);
        console.log("login button clicked");
    }

    async addEmployee() {
        const frame = this.page.frameLocator(this.frame_EmpInfo);
        await frame.locator(this.addButton).click();
        await frame.locator(this.empFirstName).fill(this.firstName);
        await frame.locator(this.empLastName).fill(this.lastName);
        await frame.locator(this.saveButton).click();
        console.log("New emp added");
    }

    async wait() {
        await this.page.waitForTimeout(3000);
        console.log("wait for 3 sec");
    }
}