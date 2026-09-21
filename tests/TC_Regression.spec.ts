import {test} from '@playwright/test'
import { general } from '../lib/General'

test.describe('Regression Suite', () => {
    test('TC001', async({page}) => {
        //test steps
       let obj = new general(page);
       obj.openApplication();
       obj.login();
       obj.wait();
       obj.logout();
    })

    test("TC_02_AddNewEmp", async({page}) => {
     //test steps
   let obj = new general(page);
   obj.openApplication();
   obj.login();
   obj.wait();
   obj.addEmployee();
   obj.wait();
   obj.logout();
   obj.wait();
    
})
})