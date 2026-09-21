import {test} from '@playwright/test'
import { general } from '../lib/General'

test('@Smoke_TC001', async({page}) => {
    //test steps
   let obj = new general(page);
   obj.openApplication();
   obj.login();
   obj.wait();
   obj.logout();
})